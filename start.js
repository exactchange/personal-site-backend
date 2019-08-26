/*
 * Instantiate
 */

const { ƒ } = require('fire-backend');
const { Node } = require('./node');

const node = new Node();

ƒ.root.args.forEach(async a => {
  if (a.match('--') == null) {
    await node.setState({ [a.split('=')[0]]: a.split('=')[1] });
  }
});
