'use strict';

goog.provide('Blockly.CKB.types');

Blockly.defineBlocksWithJsonArray([
  {
    "type": "ckb_types_outpoint",
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
    "tooltip": "OutPoint",
    "helpUrl": ""
  },
  {
    "type": "ckb_types_cell_dep",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "out_point",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "dep_type",
        "check": "String"
      }
    ],
    "output": "String",
    "colour": 230,
    "tooltip": "CellDep",
    "helpUrl": ""
  },
  {
    "type": "ckb_types_input",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "previous_output",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "since",
        "check": "Number"
      }
    ],
    "output": "String",
    "colour": 230,
    "tooltip": "Input",
    "helpUrl": ""
  },
  {
    "type": "ckb_types_script",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "code_hash",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "args",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "hash_type",
        "check": "String"
      }
    ],
    "output": "String",
    "colour": 195,
    "tooltip": "Script",
    "helpUrl": ""
  },
  {
    "type": "ckb_types_output",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "capacity",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "lock",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "type",
        "check": "String"
      }
    ],
    "output": "String",
    "colour": 195,
    "tooltip": "Output",
    "helpUrl": ""
  },
  {
    "type": "ckb_types_transaction",
    "message0": "%1 %2 %3 %4 %5",
    "args0": [
      {
        "type": "input_value",
        "name": "cell_deps",
        "check": "Array"
      },
      {
        "type": "input_value",
        "name": "inputs",
        "check": "Array"
      },
      {
        "type": "input_value",
        "name": "outputs",
        "check": "Array"
      },
      {
        "type": "input_value",
        "name": "outputs_data",
        "check": "Array"
      },
      {
        "type": "input_value",
        "name": "witnesses",
        "check": "Array"
      }
    ],
    "output": "String",
    "colour": 195,
    "tooltip": "Transaction",
    "helpUrl": ""
  }
]);
