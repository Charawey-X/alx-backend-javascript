import Car from './10-car';

export default class EVCar extends Car {
  /* eslint no-underscore-dangle: 0 */

  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  // eslint-disable-next-line
  cloneCar() {
    return new Car();
  }
}
