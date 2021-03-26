import Rocket from '../Rocket';

/**
 * Initializes a new instance of Rocket2
 * @class
 * @extends {Rocket}
 */
export default class Rocket2 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket2',
      acceleration: 40,
      handling: 10,
      speed: 75,
      name: 'rocket-2',
    });

    this.addFire(290, 245, 200);
  }
}
