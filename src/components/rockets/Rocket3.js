import Rocket from '../Rocket';

export default class Rocket3 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket3',
      acceleration: 5,
      handling: 15,
      speed: 8,
      name: 'rocket-3',
    });
    this.addFire(115, 100, 240, 0.5, 0.4);
  }
}
