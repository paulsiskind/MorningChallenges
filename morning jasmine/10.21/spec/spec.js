var Cart = ('./cart');

describe('cart', function(){
  it('starts at empty', function(){
    var cart = new Cart();
    expect(cart.status).toEqual(0)
  });

  it('allows items to be added and removed', function(){
    var cart = new Cart();
    expect(cart.item).toEqual(0)

  var carrot = 2;
  var cabbage = 3;

     cart.carrot(2);
     expect(cart.item).toEqual(4);

     cart.cabbage(3);
     expect(cart.item).toEqual(13);

     cart.carrot(-1);
     expect(cart.item).toEqual(12);

     cart.cabbage(-2);
     expect(cart.item).toEqual(6);

  });

  it('allows for a total price', function(){
    var vart = new Cart();
    expect(cart.price).toEqual(6);

    cart.cabbage(5);
    expect(cart.price).toEqual(21);
  })

  it('allows for a percentage discount', function(){
    var cart = new Cart();
    expect(cart.price).toEqual(21);

    cart.discount(5)
    expect(cart.price).toEqual(19.95);

    cart.discount(25)
    expect(cart.price).toEqual(14.97)
  })

  
  it()
})