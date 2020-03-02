'use strict'

var { getCryptoKey } = require('./utils')

function Random () {
}

/* secure random bytes that sometimes throws an error due to lack of entropy */
Random.getRandomBuffer = function (size) {
  if (process.browser) { return Random.getRandomBufferBrowser(size) } else { return Random.getRandomBufferNode(size) }
}

Random.getRandomBufferNode = function (size) {
  var crypto = require('crypto')
  return crypto.randomBytes(size)
}

Random.getRandomBufferBrowser = function (size) {
  var crypto = getCryptoKey()

  var bbuf = new Uint8Array(size)
  crypto.getRandomValues(bbuf)
  var buf = Buffer.from(bbuf)

  return buf
}

module.exports = Random
