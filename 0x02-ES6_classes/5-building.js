import Currency from './3-currency';

export default class Building {
  /* eslint no-underscore-dangle: 0 */

  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = typeof sqft === 'number' ? sqft : Currency._throw('sqft must be a number');
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = typeof value === 'number' ? value : Currency._throw('sqft must be a number');
  }
}
