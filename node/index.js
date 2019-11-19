const { ƒ } = require('fire-backend');
const { Ping } = require('../actions/Ping');
const { Home } = require('../actions/Home');
const { Blog } = require('../actions/Blog');

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
      new Home('/home'),
      new Blog('/blog')
    ]);
  }
}

exports.Node = Node;
