const { ƒ } = require('fire-backend');

/*
 * Home
 */

class Home extends ƒ.Action {
  constructor(path) {
    super(path);

    this.setShape({
      route: ƒ.Type.String,
      article: {
        publishDate: ƒ.Type.String,
        title: ƒ.Type.String,
        body: ƒ.Type.Array,
        url: ƒ.Type.String
      },
      feature: {
        publishDate: ƒ.Type.String,
        title: ƒ.Type.String,
        body: ƒ.Type.Array,
        url: ƒ.Type.String
      },
      requestCount: ƒ.Type.Integer
    });

    this.setState({
      route: '/home',
      article: {
        publishDate: 'Aug 24 2019 21:02 PDT',
        title: 'New site, new blog',
        body: [
          'Software engineer in Portland with a passion for full-stack JavaScript, game development, & product design.',
          'Bookmark this site as a resource for keeping up with trends in design and programming, and the tech industry in general.'
        ],
        url: 'https://www.bennyschmidt.com'
      },
      feature: {
        publishDate: 'Nov 17 2019 20:00 PDT',
        title: 'Excited to Announce Eidol',
        body: [
          'Eidol is a free-to-play online digital collectible card game with real-time PvP elements.',
          'The game is currently in development, and the open beta release is planned for Q1 2020.'
        ],
        url: './img/eidol.jpg'
      },
      requestCount: 0
    });

    this.setReadWriteDelete(true, false, false);
  }

  didGet(params) {
    this.setState({
      requestCount: this.state.requestCount + 1
    });

    console.log(`Home page views: ${this.state.requestCount}`);
  }
}

exports.Home = Home;
