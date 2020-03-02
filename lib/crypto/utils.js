'use strict'

function getCryptoKey () {
  if (!window.crypto && !window.msCrypto) {
    throw new Error('window.crypto not available')
  }
  var crypto

  if (window.crypto && window.crypto.getRandomValues) {
    crypto = window.crypto
  } else if (window.msCrypto && window.msCrypto.getRandomValues) {
    // internet explorer
    crypto = window.msCrypto
  } else {
    throw new Error('window.crypto.getRandomValues not available')
  }

  return crypto
}

function arrayBufferToHex (hashBuffer) {
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

module.exports = {
  getCryptoKey,
  arrayBufferToHex
}
