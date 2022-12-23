import Currency from './3-currency';

export default class Pricing {
  /* eslint no-underscore-dangle: 0 */

  constructor(amount, currency) {
    this._amount = typeof amount === 'number' ? amount : Currency._throw('amount must be a number!');
    this._currency = currency instanceof Currency ? currency : Currency._throw('currency must be an instance of Currency!');
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = typeof value === 'number' ? value : Currency._throw('amount must be a number!');
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value instanceof Currency ? value : Currency._throw('currency must be an instance of Currency!');
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
