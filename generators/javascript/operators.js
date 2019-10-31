'use strict';

goog.provide('Blockly.JavaScript.ckb_operators');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['ckb_operators_block_number'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert("get block number")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
