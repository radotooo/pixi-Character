import Rocket from '../Rocket';

export default class Rocket4 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket4',
      acceleration: 99,
      handling: 99,
      speed: 99,
      name: 'rocket-4',
    });
    this.addFire(95, 160, 270, 0.5, 0.4);
  }
}
