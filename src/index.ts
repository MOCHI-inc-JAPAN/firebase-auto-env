#!/usr/bin/env node

import { execSync } from "child_process";
import fs from 'fs';


function parseArgs(): string {
  const _evalArgs = process.argv.splice(2)
  if(_evalArgs.length <= 0) _evalArgs.push('.env')
  if(_evalArgs.length < 2) {
    const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, 'utf8'));
    packageJson.name && _evalArgs.push(packageJson.name)
  }
  return _evalArgs.join(' ')
}

try {
  console.log(execSync(`${__dirname}/exec.sh ${parseArgs()}`).toString())
  console.log('done')
} catch(error) {
  console.error(error)
  process.exit(1)
}
