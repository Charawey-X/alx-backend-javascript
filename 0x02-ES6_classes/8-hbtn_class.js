import Currency from './3-currency';

export default class HolbertonClass {
  /* eslint no-underscore-dangle: 0 */

  constructor(size, location) {
    this._size = typeof size === 'number' ? size : Currency._throw('size must be a number!');
    this._location = typeof location === 'string' ? location : Currency._throw('location must be a string!');
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
