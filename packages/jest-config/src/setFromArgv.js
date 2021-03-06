/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

function setFromArgv(config, argv) {
  if (argv.coverage) {
    config.collectCoverage = true;
  }

  if (argv.testEnvData) {
    config.testEnvData = argv.testEnvData;
  }

  config.noHighlight =
    argv.noHighlight || (!argv.colors && !process.stdout.isTTY);

  if (argv.verbose) {
    config.verbose = argv.verbose;
  }

  if (argv.bail) {
    config.bail = argv.bail;
  }

  if (argv.cache !== null) {
    config.cache = argv.cache;
  }

  if (argv.watchman !== null) {
    config.watchman = argv.watchman;
  }

  if (argv.useStderr) {
    config.useStderr = argv.useStderr;
  }

  if (argv.json) {
    config.useStderr = true;
  }

  if (argv.logHeapUsage) {
    config.logHeapUsage = argv.logHeapUsage;
  }

  if (argv.silent) {
    config.silent = true;
  }

  if (argv.setupTestFrameworkScriptFile) {
    config.setupTestFrameworkScriptFile = argv.setupTestFrameworkScriptFile;
  }

  if (argv.updateSnapshot) {
    config.updateSnapshot = argv.updateSnapshot;
  }
  config.noStackTrace = argv.noStackTrace;

  config.testcheckOptions = {
    times: argv.testcheckTimes,
    maxSize: argv.testcheckMaxSize,
    seed: argv.testcheckSeed,
  };

  return config;
}

module.exports = setFromArgv;
