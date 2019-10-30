'use strict';

goog.provide('Blockly.CKB.types');

Blockly.defineBlocksWithJsonArray([
  {
    "type": "outpoint",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "tx_hash",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "index",
        "check": "Number"
      }
    ],
    "output": "String",
    "colour": 230,
    "tooltip": "outpoint",
    "helpUrl": ""
  }
]);
