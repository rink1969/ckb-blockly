'use strict';

goog.provide('Blockly.JavaScript.ckb_types');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['outpoint'] = function(block) {
  var value_tx_hash = Blockly.JavaScript.valueToCode(block, 'tx_hash', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{' + 'tx_hash:' + value_tx_hash + ',' + 'index:' + value_index + '}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};