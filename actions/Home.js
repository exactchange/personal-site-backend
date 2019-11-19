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
        title: 'Like React for Front-End? Try Fire For Backend',
        body: [
          'Fire is a library for backend JavaScript that makes it painless to create application backends. Design simple Actions for each route in your application, and Fire will efficiently merge your updates with the global application state and save just the right data to the database, retaining a single-source of truth at the application level. Declarative APIs make your requests and responses more predictable, simpler to understand, and easier to debug.',
          'Build encapsulated Actions that manage their own state, then compose them to make complex APIs. Because the application state can be derived from the state of all Actions, there is no need to create a database schema, or set up an initial database – Fire generates the database, and maintains the state of it as Actions are fired.',
          'Fire doesn\'t make assumptions about your application\'s front-end, so you can develop new features in Fire with your existing front-end code. Fire can also be used along-side many other Fire Nodes in a service network, sharing state information while retaining a single source of truth.'
        ],
        url: 'https://github.com/exactchange/fire'
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
