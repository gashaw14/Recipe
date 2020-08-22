
const promise = new Promise((resolve,reject)=>{
//resolve('here is a message')
reject('error found')
})
promise.then((data)=>{
console.log(data)
}).catch((error)=>{
console.log('error:', error);
})