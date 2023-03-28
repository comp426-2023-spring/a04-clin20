#!/usr/bin/env node

import {rps, rpls} from "./lib/rpls.js"
import minimist from 'minimist'
import express from 'express'

var argv = minimist(process.argv.slice(2));
const port = argv.port || 50000;
