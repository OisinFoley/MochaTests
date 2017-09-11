//const assert  = require('assert');
const assert = require('chai').assert;
const app = require('../app');

describe('App',function(){
  it('will be of type string',function(){
    assert.typeOf(app.abc(),'string');
  });
  it('should return butter',function(){
    //let result = app.sap();
    //assert.equal(result,'butter');
    assert.equal(app.sap(),'butter');
  });
  it('addNumbers will return a value > 5', function(){
    let result = app.addNumbers(5,5);
    assert.isAbove(result,5);
  });
  it('app addNumbers returns a number datatype',function(){
    assert.typeOf(app.addNumbers(),'number');
  })
});
