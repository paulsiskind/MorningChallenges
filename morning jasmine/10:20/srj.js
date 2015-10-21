

it('Needs to be charged every 100miles', function(){
  var miles = 120;
  expect(your.code.miles([-120])).toEqual(err)
})
it('Can travel 100miles in a charge', function(){
  var charge = 100;
  var miles = 0;
  expect(your.code.fullCharge([100])).toEqual(100)
})

it('Decreases miles as driven', function(){
  var miles = 20;
  expect(your.code.decrease([-20])).toEqaul(80)
})

it('Expect an error every 400miles', function(){
  var miles = 401;
  expect(your.code.glitch([-401])).toEqual(err)
})

it('When miles are gone needs a charge', function(){
  var miles = 101;
  expect(your.code.charge([-101])).toEqual('Charge Needed')
})

