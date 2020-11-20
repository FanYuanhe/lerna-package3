'use strict';

const { ui } = require("lerna-package3-ui");
const { tools } = require("lerna-package3-tools");

function app() {
    ui();
    tools();
}

app();
