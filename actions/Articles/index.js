const { ƒ } = require('fire-backend');
const fs = require('fs');

/*
 * Articles
 */

class Articles extends ƒ.Action {
  constructor(path) {
    super(path);

    this.setShape({
      articles: ƒ.Type.Array,
      requestCount: ƒ.Type.Integer
    });

    this.didLoad();
  }

  didGet(params) {
    this.setState({
      requestCount: this.state.requestCount + 1
    });
  }

  async didLoad() {
    const random = await this.readJsonFile('random');
    const tech = await this.readJsonFile('tech');

    this.setState({
      articles: {
        random: JSON.parse(random).articles,
        tech: JSON.parse(tech).articles
      },
      requestCount: 0
    });
  }

  readJsonFile(fileName) {
    return new Promise((resolve, reject) => fs.readFile(
      `${__dirname}/${fileName}.json`,
      'utf8', 
      (error, text) => error ? reject(error) : resolve(text)
    )).catch(error => console.log(error));
  }
}

exports.Articles = Articles;
