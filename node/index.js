const { ƒ } = require('fire-backend');
const { Ping } = require('../actions/Ping');
const { Article } = require('../actions/Article');
const { Project } = require('../actions/Project');

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
      new Article('/article/:key'),
      new Project('/project/:key')
    ]);
  }
}

exports.Node = Node;
