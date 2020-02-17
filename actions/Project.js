const { ƒ } = require('fire-backend');

/*
 * Project
 */

class Project extends ƒ.Action {
  constructor(path) {
    super(path);

    this.setShape({
      headline: ƒ.Type.String,
      downloads: ƒ.Type.String,
      description: ƒ.Type.String,
      link: ƒ.Type.String
    });

    this.setState({
      headline: {
        '1581958382756': 'Fire',
        '1581958405821': 'Flare',
        '1581958421341': 'SmartInput'
      },
      downloads: {
        '1581958382756': '750+ downloads',
        '1581958405821': '200+ downloads',
        '1581958421341': 'New!'
      },
      description: {
        '1581958382756': 'A declarative, efficient, and flexible library for backend JavaScript',
        '1581958405821': 'A front-end state manager for server–rendered apps and websites',
        '1581958421341': 'An easy-to-theme React input with built-in analytics'
      },
      link: {
        '1581958382756': 'https://github.com/exactchange/fire',
        '1581958405821': 'https://github.com/exactchange/flare',
        '1581958421341': 'https://github.com/exactchange/smart-input'
      }
    });

    this.setReadWriteDelete(true, false, false);
  }
}

exports.Project = Project;
