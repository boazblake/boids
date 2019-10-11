export class Trait {
  constructor(width, height, mass, hue) {
    this.width = width * mass;
    this.height = height * mass;
    this.mass = mass;
    this.hue = hue;
  }

  static of(width, height, mass, hue) {
    return new Trait(width, height, mass, hue);
  }

  with({ width, height, mass }) {
    return Trait.of(
      width || this.width,
      height || this.height,
      mass || this.mass,
      this.hue
    );
  }
}
