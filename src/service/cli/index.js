'use strict';

const help = require(`./help`);
const generate = require(`./generate`);
const version = require(`./version.js`);

const Cli = {
  [generate.name]: generate,
  [help.name]: help,
  [version.name]: version,
};

module.exports = {
  Cli,
};
