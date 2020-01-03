const { ƒ } = require('fire-backend');

/*
 * Projects
 */

class Projects extends ƒ.Action {
  constructor(path) {
    super(path);

    this.setShape({
      route: ƒ.Type.String
    });

    this.setState({
      route: '/projects'
    });

    this.setReadWriteDelete(true, false, false);
  }
}

exports.Projects = Projects;
