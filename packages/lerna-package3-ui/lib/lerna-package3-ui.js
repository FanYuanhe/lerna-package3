'use strict';

const { tools, updateTools } = require("lerna-package3-tools");

function ui () {
    console.log("我是ui");
    tools();
    updateTools();
}

module.exports = { ui };