import Scene from './Scene';
import Footer from '../components/Footer';

import Rocket1 from '../components/rockets/Rocket1';
import Rocket2 from '../components/rockets/Rocket2.js';
import Rocket3 from '../components/rockets/Rocket3';
import Rocket4 from '../components/rockets/Rocket4';

import Arrow from '../components/Arrow';
import Stats from '../components/Stats';

export default class Play extends Scene {
  async onCreated() {
    const footer = new Footer();
    footer.x = -window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);

    this._createRockets();
    this._createArrows();
    this._createStats();
    this._setCurrentSlide(0);
  }

  /**
   * @private
   */
  _createRockets() {
    this._rockets = [
      new Rocket1(),
      new Rocket2(),
      new Rocket3(),
      new Rocket4(),
    ];
  }

  /**
   * @private
   */
  _createArrows() {
    const arrowLeft = new Arrow();
    arrowLeft.name = 'arrow-left';
    arrowLeft.x = -500;
    arrowLeft.on('click', () => this._prev());
    this.addChild(arrowLeft);

    const arrowRight = new Arrow();
    arrowRight.name = 'arrow-right';
    arrowRight.x = 500;
    arrowRight.angle = 180;
    arrowRight.on('click', () => this._next());
    this.addChild(arrowRight);
  }

  /**
   * @private
   */
  _createStats() {
    this._stats = new Stats({
      data: {
        speed: {
          label: 'Speed',
          value: 10,
        },
        handling: {
          label: 'Handling',
          value: 50,
        },
        acceleration: {
          label: 'Acceleration',
          value: 20,
        },
      },
    });
    this._stats.y = 130;
    this.addChild(this._stats);
  }

  /**
   * @private
   */
  _setCurrentSlide(index) {
    this._rockets.forEach((r) => this.removeChild(r));

    const rocket = this._rockets[index];
    rocket.show();
    rocket.y = -150;
    this.addChild(rocket);

    this._stats.setProgressBarData({
      acceleration: rocket.acceleration,
      speed: rocket.speed,
      handling: rocket.handling,
    });

    this._active = index;
  }

  /**
   * @private
   */
  _next() {
    const index =
      this._active < this._rockets.length - 1 ? this._active + 1 : 0;
    this._setCurrentSlide(index);
  }

  /**
   * @private
   */
  _prev() {
    const index =
      this._active > 0 ? this._active - 1 : this._rockets.length - 1;
    this._setCurrentSlide(index);
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    // eslint-disable-line no-unused-vars
  }
}
