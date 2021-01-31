import Rocket from '../Rocket';

export default class Rocket1 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket3',
      acceleration: 45,
      handling: 15,
      speed: 80,
      name: 'rocket-3',
    });
    this.addFire(115, 100, 240, 0.5, 0.4);
  }
}
