const { ƒ } = require('fire-backend');

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

    this.setState({
      articles: {
        ['tech']: [
          {
            publishDate: 'Feb 24 2019 23:32 PDT',
            title: 'A Mobile Todo-List App In React Native, Using Redux-Saga',
            body: [],
            url: 'https://github.com/exactchange/redux-saga-todo'
          },
          {
            publishDate: 'Feb 25 2019 17:25 PDT',
            title: 'A Todo-List App Built With React & MobX, With Decorator Support!',
            body: [
              'Finally got around to trying MobX. The `@` decorator syntax is kinda new to me, seems unintuitive for JS, but MobX has wrapper functions you can use instead.',
              'Getting decorator syntax to actually work is a few extra steps if starting with CRA.'
            ],
            url: 'https://github.com/exactchange/react-mobx-todo'
          },
          {
            publishDate: 'May 19 2019 08:24 PDT',
            title: 'I Re-Wrote the Commonly Used Three.js WebGL Detector in ES6',
            body: [],
            url: 'https://github.com/exactchange/webgl-detector-es6'
          },
          {
            publishDate: 'May 20 2019 15:21 PDT',
            title: 'From React Native to the App Store',
            body: [
              'Daily Tarot for iPhone',
              'Daily Tarot: One Card Draw is a simple app I designed and built over the weekend in React Native as a personal exploration in releasing and distributing iOS apps with Expo. In short, Expo provides a great developer experience that makes launching apps really easy.',
              'This project can serve as a reference for developers who are working with Expo & React Native for the first time, or even as a foundation for someone who might be creating their own card game for iPhone. You are free to use and build upon this code however you want 👍',
              `
                <h4>
                  <strong>
                    Built with React Native
                  </strong>
                </h4>
                <img src="https://raw.githubusercontent.com/exactchange/daily-tarot/master/screenshot1.png" alt="Daily Tarot by Benny Schmidt" />
              `
            ],
            url: 'https://github.com/exactchange/daily-tarot'
          },
          {
            publishDate: 'July 4 2019 04:20 PDT',
            title: 'Working on This Battle Royale Game...',
            body: [
              'Blacklisted is a Battle Royale game I started building last year. I recently picked the project back up, and am planning an open beta for Q3 2019!',
              'Don\'t want to wait for launch? You can join <a href="https://playblacklisted.com" target="_blank">early access</a> and test alpha gameplay right now!',
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/8_kq3_0YwIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            ],
            url: 'https://www.youtube.com/watch?v=8_kq3_0YwIg'
          },
          {
            publishDate: 'Aug 24 2019 21:02 PDT',
            title: 'Like React for Front-End? Try Fire For Backend',
            body: [],
            url: 'https://github.com/exactchange/fire'
          },
          {
            publishDate: 'Aug 25 2019 21:02 PDT',
            title: 'smoke.it().then(chill => {})',
            body: [],
            url: 'https://github.com/exactchange/smoke'
          }
        ],
        ['random']: [
          {
            title: 'Hello world',
            body: [
              'Lorem ipsum dolor sit amet.'
            ],
            url: 'www.bennyschmidt.com'
          }
        ]
      },
      requestCount: 0
    });
  }

  didGet(params) {
    this.setState({
      requestCount: this.state.requestCount + 1
    });
  }
}

exports.Articles = Articles;
