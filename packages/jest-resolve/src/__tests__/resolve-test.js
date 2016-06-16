/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails oncall+jsinfra
 */
'use strict';

jest.disableAutomock();

describe('normalize', () => {
  let Resolver;

  beforeEach(() => {
    Resolver = require('../');
  });

  it('resolves "main" dependency by default', () => {
    expect(Resolver.findNodeModule('jest-resolve-test', {})).toBe('foo');
  });

  it('resolves "browser" dependency when browser:true is set', () => {
    expect(Resolver.findNodeModule('jest-resolve-test', {
      browser: true
    })).toBe('foo');
  });
});
