export default class Currency {
  /* eslint no-underscore-dangle: 0 */
  /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
  constructor(code, name) {
    typeof code === 'string' ? this._code = code : Currency._throw('code must be a string!');
    typeof name === 'string' ? this._name = name : Currency._throw('name must be a string!');
  }

  static _throw(error) {
    throw new TypeError(error);
  }

  get code() {
    return this._code;
  }

  set code(value) {
    typeof value === 'string' ? this._code = value : Currency._throw('code must be a string!');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    typeof value === 'string' ? this._name = value : Currency._throw('code must be a string!');
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
