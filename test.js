'use strict'
import global from '../always-global/global.js'
import { Process } from '../iso-process/process.js'
import { finishTest } from '../iso-test/index.js'
import { validateString } from './validators.js'
global.process = Process.getProcess()

if (validateString('string') === undefined) finishTest('pass validateString')
else finishTest('fail validateString')
try {
  validateString(1)
  finishTest('fail validateString number')
} catch (e) {
  finishTest('pass validateString number')
}

// all passed! send kill to finishtest
finishTest('kill')
