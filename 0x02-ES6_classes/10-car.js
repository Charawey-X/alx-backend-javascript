import Currency from './3-currency';

export default class Car {
  /* eslint no-underscore-dangle: 0 */

  constructor(brand, motor, color) {
    this._brand = typeof brand === 'string' ? brand : Currency._throw('brand must be a string!');
    this._motor = typeof motor === 'string' ? motor : Currency._throw('motor must be a string!');
    this._color = typeof color === 'string' ? color : Currency._throw('color must be a string!');
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
