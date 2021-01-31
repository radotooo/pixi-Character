import Rocket from '../Rocket';

export default class Rocket1 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket4',
      acceleration: 50,
      handling: 25,
      speed: 90,
      name: 'rocket-4',
    });
    this.addFire(95, 160, 270, 0.5, 0.4);
  }
}
