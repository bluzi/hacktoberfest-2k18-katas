#! /usr/bin/env node

const { exec, spawnSync } = require('child_process');
const { chain, filter } = require('lodash');

function seeChangedFiles(cb) {
  exec('git diff --name-status master', (err, out) => {
    const files = chain(out)
      .split('\n')
      .filter()
      .map(s => s.split('\t'))
      .map(([status, filename]) => ({
        filename,
        isAdded: status === 'A',
        isModified: status === 'M',
        isTest: filename.indexOf('.test.js') !== -1,
      }))
      .filter(({ filename }) => filename.startsWith('src/'))
      .value();

    cb(files);
  });
}

function runCommand(command, argv) {
  const { status } = spawnSync(command, argv, { stdio: 'inherit' });
  return status;
}

seeChangedFiles(files => {
  const modifiedImplems = filter(files, { isModified: true, isTest: false });
  const addedImplems = filter(files, { isAdded: true, isTest: false });
  const addedTests = filter(files, { isAdded: true, isTest: true });

  let shoudExitWithFailure = false;

  // Not enough changes in this PR...
  if (
    modifiedImplems.length !== 1 ||
    addedImplems.length !== 1 ||
    addedTests.length !== 1
  ) {
    console.error(`\
# Error

For a Pull Request to be considered, it needs at least 3 things:
- A modified file, containing your implementation of the Kata.
- A new file containing the tests for your new Kata idea.
- An empty file, where someone will implement your new Kata idea.

Yours only has:
- ${modifiedImplems.length} modified implementations (needs 1)
- ${addedImplems.length} new implementations (needs 1)
- ${addedTests.length} new test file (needs 1)
`);

    process.exit(1);
    return;
  }

  // More changes than necessary
  if (files.length !== 3) {
    // Even though the tests might not fail, we want to indicate to the
    // user that something's wrong
    shoudExitWithFailure = true;

    console.error(`\
# Warning

It looks like you have changed more than 3 files in this PR. Could you
check that you only committed relevant files. For example, any file
outputted by your IDE, or by a build tool you use is not relevant. On
the other hand, if you fixed a test case, then it's ok.

Here are the files that you changed:
${files
      .map(f => `- ${f.filename} ${f.isAdded ? '(NEW)' : '(MODIFIED)'}`)
      .join('\n')}
`);
  }

  // Find the file to test
  const testFileToRun = modifiedImplems[0].filename.replace('.', '.test.');

  // Launch the tests
  console.log(`\
# RUNNING TEST FILE

Running command: "jest ${testFileToRun}"
`);
  const status = runCommand('node_modules/.bin/jest', [testFileToRun]);

  // Exit with the same status as the tests
  const actualStatus = shoudExitWithFailure ? 1 : status;
  console.log('Exiting with status: ' + actualStatus);
  process.exit(actualStatus);
});
