import { defaults } from 'lodash';

interface wpCliOptions {
  wpCommand?: String,
}

export default class WpCli {

  options: wpCliOptions = {
    wpCommand: 'wp',
  };

  construct(options: wpCliOptions = {}) {
    this.options = defaults(options, this.options);
  }
}
