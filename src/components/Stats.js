import { Container } from 'pixi.js';
import ProgressBar from './ProgressBar';

/**
 * Initializes a new instance of Stats
 * @class
 * @extends {PIXI.Container}
 */
export default class Stats extends Container {
  /**
   * @param {Object} data The stats data
   */
  constructor({ data = [] } = {}) {
    super();

    this.name = 'stats';

    this._data = data;
    this._items = {};

    this._createProgressBar();
  }

  /**
   * @param {Object} data The values for progressBar
   * @public
   */
  setProgressBarData(data = {}) {
    Object.keys(data).forEach((key) => {
      this._items[key].setValue({ value: data[key] });
    });
  }

  /**
   * @private
   */
  _createProgressBar() {
    Object.keys(this._data).forEach((key) => {
      const { label, width, value } = this._data[key];
      const progressBar = new ProgressBar({
        label,
        width,
        value,
      });
      progressBar.y = this.children.length * progressBar.height;
      this.addChild(progressBar);

      this._items[key] = progressBar;
    });
  }
}
