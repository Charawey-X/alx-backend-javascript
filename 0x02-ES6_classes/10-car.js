export default class Car {
  /* eslint no-underscore-dangle: 0 */

  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
