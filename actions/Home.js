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
      articles: ƒ.Type.Array,
      requestCount: ƒ.Type.Integer
    });

    this.setState({
      route: '/home',
      article: {
        publishDate: 'Aug 25 2019 21:02 PDT',
        title: 'smoke.it().then(chill => {})',
        body: [
          'Smoke Tests',
          'Easily write and automate tests for API responses.',
          'This project was originally part of Fire, but is now a standalone package.'
        ],
        url: 'https://github.com/exactchange/smoke'
      },
      articles: [
        {
          publishDate: 'Nov 17 2019 20:00 PDT',
          title: 'Excited to Announce Eidol',
          body: [
            'Eidol is a free-to-play online digital collectible card game with real-time PvP elements.',
            'The game is currently in development, and the open beta release is planned for Q1 2020.'
          ],
          url: './img/eidol.jpg'
        }
      ],
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
