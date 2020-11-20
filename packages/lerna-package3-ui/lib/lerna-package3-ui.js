'use strict';

const { tools } = require("lerna-package3-tools");

function ui () {
    console.log("我是ui");
    tools();
}

module.exports = { ui };