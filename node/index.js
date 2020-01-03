const { ƒ } = require('fire-backend');
const { Ping } = require('../actions/Ping');
const { Blog } = require('../actions/Blog');
const { Projects } = require('../actions/Projects');

/*
 * Node
 */

class Node extends ƒ.Node {
  constructor() {
    super();

    this.setShape({
      startedAt: ƒ.Type.Number
    });

    this.setState({
      startedAt: Date.now()
    });

    this.setActions([
      new Ping('/'),
      new Blog('/home'),
      new Projects('/projects')
    ]);
  }
}

exports.Node = Node;
