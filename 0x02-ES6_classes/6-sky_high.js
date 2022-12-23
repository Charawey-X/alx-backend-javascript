import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /* eslint no-underscore-dangle: 0 */

  constructor(sqft, floors) {
    super(sqft);
    this._floors = typeof floors === 'number' ? floors : Building._currency._throw('floors must be a number');
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = typeof value === 'number' ? value : Building._currency._throw('sqft must be a number');
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this._floors} floors`);
  }
}
