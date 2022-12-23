import Currency from './3-currency';

export default class Airport {
  /* eslint no-underscore-dangle: 0 */

  constructor(name, code) {
    this._name = typeof name === 'string' ? name : Currency._throw('name must be a string!');
    this._code = typeof name === 'string' ? code : Currency._throw('code must be a string!');
  }

  toString() {
    return (`[object ${this._code}]`);
  }
}
