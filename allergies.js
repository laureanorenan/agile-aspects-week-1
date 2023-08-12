//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore;
    this.allergens = {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128,
    };
  }

  isAllergicTo(item) {
    const allergenValue = this.allergens[item];
    return (this.allergyScore & allergenValue) !== 0;
  }

  list() {
    return Object.keys(this.allergens).filter((item) => this.allergicTo(item));
  }
}

