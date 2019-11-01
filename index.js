/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Example of including Blockly using RequireJS (AMD)
 * @author samelh@google.com (Sam El-Husseini)
 */

require.config({
    paths: {
        'Blockly': './node_modules/blockly/'
    },
    // Map Blockly/core to Blockly/core-browser so we don't include
    // the Node version and instead use the browser version of core
    map: {
        'Blockly': {
            'Blockly/core': 'Blockly/core-browser'
        }
    }
});

require(['Blockly/browser'], function (Blockly) {
  var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');
  var workspace = Blockly.inject(blocklyDiv,
      {toolbox: document.getElementById('toolbox')});
  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspace);

  Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
                               workspace);

  function showCode() {
    // Generate JavaScript code and display it.
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    alert(code);
  }
  window.showCode = showCode;

  function runCode() {
    // Generate JavaScript code and run it.
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
      eval(code);
    } catch (e) {
      alert(e);
    }
  }
  window.runCode = runCode;

  // define ckb types
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

  // ckb types js code
  Blockly.JavaScript['ckb_types_outpoint'] = function(block) {
    var value_tx_hash = Blockly.JavaScript.valueToCode(block, 'tx_hash', Blockly.JavaScript.ORDER_ATOMIC);
    var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '{' + 'tx_hash:' + value_tx_hash + ',' + 'index:0x' + parseInt(value_index, 10).toString(16) + '}';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['ckb_types_cell_dep'] = function(block) {
    var value_out_point = Blockly.JavaScript.valueToCode(block, 'out_point', Blockly.JavaScript.ORDER_ATOMIC);
    var value_dep_type = Blockly.JavaScript.valueToCode(block, 'dep_type', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '{' + 'out_point:' + value_out_point + ',' + 'dep_type:' + value_dep_type + '}';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['ckb_types_input'] = function(block) {
    var value_previous_output = Blockly.JavaScript.valueToCode(block, 'previous_output', Blockly.JavaScript.ORDER_ATOMIC);
    var value_since = Blockly.JavaScript.valueToCode(block, 'since', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '{' + 'previous_output:' + value_previous_output + ',' + 'since:0x' + parseInt(value_since, 10).toString(16) + '}';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['ckb_types_script'] = function(block) {
    var value_code_hash = Blockly.JavaScript.valueToCode(block, 'code_hash', Blockly.JavaScript.ORDER_ATOMIC);
    var value_args = Blockly.JavaScript.valueToCode(block, 'args', Blockly.JavaScript.ORDER_ATOMIC);
    var value_hash_type = Blockly.JavaScript.valueToCode(block, 'hash_type', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '{' + 'code_hash:' + value_code_hash + ',' + 'args:' + value_args + ',' + 'hash_type:' + value_hash_type + '}';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['ckb_types_output'] = function(block) {
    var value_capacity = Blockly.JavaScript.valueToCode(block, 'capacity', Blockly.JavaScript.ORDER_ATOMIC);
    var value_lock = Blockly.JavaScript.valueToCode(block, 'lock', Blockly.JavaScript.ORDER_ATOMIC);
    var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var code = '{' + 'capacity:0x' + parseInt(value_capacity, 10).toString(16) + ',' + 'lock:' + value_lock + ',' + 'type:' + value_type + '}';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['ckb_types_transaction'] = function(block) {
    var value_cell_deps = Blockly.JavaScript.valueToCode(block, 'cell_deps', Blockly.JavaScript.ORDER_ATOMIC);
    var value_inputs = Blockly.JavaScript.valueToCode(block, 'inputs', Blockly.JavaScript.ORDER_ATOMIC);
    var value_outputs = Blockly.JavaScript.valueToCode(block, 'outputs', Blockly.JavaScript.ORDER_ATOMIC);
    var value_outputs_data = Blockly.JavaScript.valueToCode(block, 'outputs_data', Blockly.JavaScript.ORDER_ATOMIC);
    var value_witnesses = Blockly.JavaScript.valueToCode(block, 'witnesses', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '{version: 0x0, header_deps: [],'
             + 'cell_deps:' + value_cell_deps + ','
             + 'inputs:' + value_inputs + ','
             + 'outputs:' + value_outputs + ','
             + 'outputs_data:' + value_outputs_data + ','
             + 'witnesses:' + value_witnesses + '}';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // ckb operators
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "ckb_operators_block_number",
      "message0": "",
      "output": "Number",
      "colour": 195,
      "tooltip": "blockNumber",
      "helpUrl": ""
    }
  ]);

  // ckb operators js code
  Blockly.JavaScript['ckb_operators_block_number'] = function(block) {
    var functionName = Blockly.JavaScript.provideFunction_(
          'blockNumber',
          ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
              '() {',
           'var url = "http://localhost:8114";',
           'var data = {"jsonrpc": "2.0", "method":"get_tip_block_number", "params":[], "id": 1};',
           'fetch(url, {',
           '  method: "POST",',
           '  body: JSON.stringify(data),',
           '  headers: new Headers({',
           '    "Content-Type": "application/json"',
           '  })',
           '}).then(res => res.json())',
           '.catch(error => console.error("Error:", error))',
           '.then(response => console.log(response));',
           '}']);
    var code = functionName + '()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };
});