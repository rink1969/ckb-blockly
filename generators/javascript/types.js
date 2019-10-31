'use strict';

goog.provide('Blockly.JavaScript.ckb_types');

goog.require('Blockly.JavaScript');

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
