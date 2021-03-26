import Rocket from '../Rocket';

/**
 * Initializes a new instance of Rocket1
 * @class
 * @extends {Rocket}
 */
export default class Rocket1 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket1',
      acceleration: 30,
      handling: 5,
      speed: 70,
      name: 'rocket-1',
    });

    this.addFire(310, 270, 210);
  }
}
