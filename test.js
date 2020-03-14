const bsv = require(".")

async function test() {
  privKey = await new bsv.PrivateKey(
    "KxfxrUXSMjJQcb3JgnaaA6MqsrKQ1nBSxvhuigdKRyFiEm6BZDgG"
  ).initialized
  console.log(privKey instanceof bsv.PrivateKey)
  console.log(await privKey.toString())

  // privKey = await bsv.PrivateKey.fromRandom()
}

test()

// class Test {
//   instancePromise
//   instance = null

//   constructor() {
//     this.instancePromise = (async instance => {
//       instance.test = "test"
//       return instance
//     })(this)

//     Object.defineProperty(this, "initialized", {
//       get: function() {
//         return this.instancePromise.then(({ instance }) => {
//           this.instance = instance // store the result
//           return this // this is what makes the one-liner possible!
//         })
//       }
//     })
//   }
// }

// ;(async () => {
//   test = await new Test().initialized
//   console.log(test.test)
// })()
