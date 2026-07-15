const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
console.log(promise);
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  //promise chaining is done here, we can chain multiple then() methods to a promise.
  //instead of using a variable to store the promise we can directly use createOrder(cart)
  // and chain the next then() method to it.
  .then(function (orderID) {
    return proceedToPayment(orderID);
    //we can return a promise or a value from the then() method,
    //  if we return a promise then the next then() method will wait for that promise to resolve or reject before executing.
    //whatever is returned from the above function will be passed to the next then() method.
  })
  .then(function ({ message, amt }) {
    console.log(message, "of amount:", amt);
    return showOrderSummary(message, amt);
  })
  .then(function ({ message, amt }) {
    console.log("Your wallet has beed debited by:", amt);
  })
  .catch(function (err) {
    //catch() is responsible for handling all the errors for the code above it only
    console.log(err.message);
    //alert(err.message); //so that user sees an acknowledgement of the error.
  })
  .then(function () {
    //.then() is responsible for executing the code no matter what happens in the above code.
    console.log("No matter what happens, I will get executed");
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order
    // Validate Cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid!");
      reject(err);
    }
    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
      setTimeout(() => {
        console.log(promise);
      }, 5005);
    }
  });

  return pr;
}

function proceedToPayment(orderID) {
  // Logic for handling payment.
  // This function returns a promise
  return new Promise(function (resolve, reject) {
    // logic
    resolve({
      message: `Payment Successful for order id: ${orderID}`,
      amt: 2500,
    });
  });
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function (resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: "You have ordered items that cost ${amt} RS", amt });
    } else {
      reject(new Error("Please buy more for discount"));
    }
  });
}

function validateCart(cart) {
  // code to validate cart.
  return true;
  // return false;
  //if it returns false there will be red line error in console
  // we should handle that error using catch() method of promise.
}
