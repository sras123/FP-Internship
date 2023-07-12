/*
Promise
Promise is used to handle the result(fulfillment) or failure(rejection)of an asynchronous operation.
Promise object supports two properties: State and result.
State:
If pending = result is undefined
If fulfilled = result is a value
If rejected = result is error object
Result is either Success or Error.   */

/*
let myPromise = new Promise((resolve, reject)=> {
    let a= 1 + 2
    if(a==4){
        resolve('Success');
    }
    else{
        reject('Error')
    }
})

myPromise.then((message) => {
    console.log('This is in the then ' +  message)
}).catch((message) => {
    console.log('This is in the catch '  +  message)
}) 

let myPromise = new Promise(function(Resolve, Reject) {
    setTimeout(function() { Resolve("Hi, I am Taylor Swift!!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value)
  });
 */


/*
let myPromise = new Promise((Resolve, Reject) => {
    setTimeout(() => {
        Resolve("Hi, I am Taylor Swift!!");
    }, 11000);
});
let myPromise2 = new Promise((Resolve, Reject) => {
    setTimeout(() => {
        Resolve("Hello");
    }, 2000);
});
let myPromise3 = new Promise((Resolve, Reject) => {
    setTimeout(() => {
        Resolve("Hi, I am Harry Styles!!");
    }, 3000);
});

//Static methods
//Promise.all  : shows all the value after every promise is loaded
//let promise_all= Promise.all([myPromise,myPromise2,myPromise3])

//Promise.allSettled : shows status of rejected and resolved both 
//let promise_all= Promise.allSettled([myPromise,myPromise2,myPromise3])

//Promuse.race  : show the first value to resolve
//let promise_all= Promise.race([myPromise,myPromise2,myPromise3])

//Promise.any :Doesnt give error just shows the first value to resolve
let promise_all= Promise.any([myPromise,myPromise2,myPromise3])
promise_all.then((value) => {
    console.log(value)
});

//Promise.resolve()
//Promise.reject()

 */
