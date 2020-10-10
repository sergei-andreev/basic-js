const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return chainMaker;
  },

  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain = [];
      throw new Error('Possition не является числом');
    }
    this.chain = this.chain.filter(el => el !== this.chain[position - 1]);
    return chainMaker;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return chainMaker;
  },

  finishChain() {
    const currentChain = [...this.chain];
    this.chain = [];
    return currentChain.join('~~');
  }
};

module.exports = chainMaker;
