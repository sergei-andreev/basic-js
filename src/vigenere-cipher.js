const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isForwardMode = true) {
    this.isForwardMode = isForwardMode;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
  }

  getString(inMessage, inKey, type) {
    const message = inMessage.toLowerCase();
    const key = inKey.toLowerCase();

    if (!message || !key) throw new CustomError('Неполные данные');

    const maxlength = message.length;
    let result = '';
    let c;
  
    for (let indexStr = 0, indexKey = 0; indexStr < maxlength; indexStr += 1) {
      if (this.alphabet.indexOf(message[indexStr]) !== -1) {
        const mi = this.alphabet.indexOf(message[(indexStr >= message.length) ? indexStr % message.length : indexStr]);
        const ki_s = key[(indexKey >= key.length) ? (indexKey % key.length) : indexKey];
        const ki = this.alphabet.indexOf(ki_s);
        c = this.alphabet[(this.alphabet.length + (type === 'encrypt' ? mi + ki : mi - ki)) % this.alphabet.length];
        indexKey += 1;
      } else {
        c = message[indexStr];
      }
  
      result += c.toUpperCase();
    }
  
    if (!this.isForwardMode) {
      return result.split('').reverse().join('');
    }
    return result;
  }
  
  encrypt(inMessage, inKey) {
    return this.getString(inMessage, inKey, 'encrypt');
  } 

  decrypt(inMessage, inKey) {
    return this.getString(inMessage, inKey, 'decrypt');
  }
}

module.exports = VigenereCipheringMachine;
