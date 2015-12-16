var customers = [
  {id: 1, name: 'Gertrude'},
  {id: 2, name: 'Taurean'},
  {id: 3, name: 'Vincent'},
  {id: 4, name: 'Blaze'},
  {id: 5, name: 'Carli'},
  {id: 6, name: 'Rebekah'},
]

var orders = [
  {id: 1, customerId: 1, date: '5/5/2012'},
  {id: 2, customerId: 1, date: '6/2/2014'},
  {id: 3, customerId: 2, date: '5/16/2015'},
  {id: 4, customerId: 3, date: '1/1/2012'},
  {id: 5, customerId: 4, date: '1/24/2014'},
  {id: 6, customerId: 2, date: '7/26/2014'},
]



// function index(orders,customers){
//     var result = orders.map(function(elem){
//         return elem
//     }).map(function(elem){
//         return orders[elem.customerId]
//     })
//     console.log(result)
// }

function indexing(orders){
return orders.customerId.reduce(function(result, customer){
   result[customer.id.toString()] = customer
   return result
},{})
}

index(orders)

function group(array) {
  return array.reduce(function (result, order) {
    result[order.customerId] = orders.filter(function (request) {
      return request.customerId == order.customerId;
    });
    return result;
  }, {});
}



// function index(customers){
//      var result=customers.map(function(elem){
//         return elem
//     })
//      console.log(result)
// }
// index(customers)
//   function indexing(customers, orders) {
//     var indexed = orders.reduce(function (result, orders) {
//       result[orders.customerId.toString()] = orders
//       return result
//     }, {})
//     customers.forEach(function (customers) {
//       customers.orders = customers.id.map(function (id) {
//         return indexed[id.toString()]
//       })
//     })
//     return customers
//   }

//   indexing(customers, orders)





  })
}