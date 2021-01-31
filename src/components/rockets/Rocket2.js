import Rocket from '../Rocket';

export default class Rocket1 extends Rocket {
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
