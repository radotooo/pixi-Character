import Rocket from '../Rocket';
import Fire from '../Fire';

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
