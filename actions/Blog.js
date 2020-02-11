const { ƒ } = require('fire-backend');

/*
 * Blog
 */

class Blog extends ƒ.Action {
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
      route: '/blog',
      article: {
        publishDate: 'Feb 10 2020 17:00',
        title: 'An easy-to-theme React input with built-in analytics',
        body: [
          'SmartInput is the best text input element for React because it\'s so easy to use and style, and for advanced users it provides rich analytics about end usage.',
          'Theming with JSX attributes is super simple: <code><SmartInput theme="Material" /></code>, for example, restyles the input to the "Material" theme (defined in themes.css). You can also override styles or CSS classes like you would with any React component.',
          'SmartInput captures and reveals rich insights and analytics in real-time, and maintains a detailed history of what\'s been entered and submitted in the past. Other details like time spent filling out a form, typing speed, keystrokes, backspaces, and more are also exposed. You can also configure a SmartInput to report keyword entries or emails entered to a specified API endpoint - like your favorite analytics software, or your application backend. Use <code><SmartInput profile="Standard" /></code> to track according to the <code>StandardProfile</code> (defined in <code>/profiles</code>).'
        ],
        url: 'https://github.com/exactchange/smart-input'
      },
      articles: [
        {
          publishDate: 'May 20 2019 15:21',
          title: 'From React Native to the App Store',
          body: [
            'Daily Tarot for iPhone',
            'Daily Tarot: One Card Draw is a simple app I designed and built over the weekend in React Native as a personal exploration in releasing and distributing iOS apps with Expo. In short, Expo provides a great developer experience that makes launching apps really easy.',
            'This project can serve as a reference for developers who are working with Expo & React Native for the first time, or even as a foundation for someone who might be creating their own card game for iPhone. You are free to use and build upon this code however you want 👍',
            '<img src="https://raw.githubusercontent.com/exactchange/daily-tarot/master/screenshot1.png" alt="Daily Tarot by Benny Schmidt" />'
          ],
          url: 'https://github.com/exactchange/daily-tarot'
        },
        {
          publishDate: 'Aug 24 2019 21:02',
          title: 'Like React for Front-End? Try Fire For Backend',
          body: [
            'Fire is a library for backend JavaScript that makes it painless to create application backends. Design simple Actions for each route in your application, and Fire will efficiently merge your updates with the global application state and save just the right data to the database, retaining a single-source of truth at the application level. Declarative APIs make your requests and responses more predictable, simpler to understand, and easier to debug.'
          ],
          url: 'https://github.com/exactchange/fire'
        },
        {
          publishDate: 'Feb 10 2020 17:00',
          title: 'An easy-to-theme React input with built-in analytics',
          body: [
            'SmartInput is the best text input element for React because it\'s so easy to use and style, and for advanced users it provides rich analytics about end usage.',
            'Theming with JSX attributes is super simple: <code><SmartInput theme="Material" /></code>, for example, restyles the input to the "Material" theme (defined in themes.css). You can also override styles or CSS classes like you would with any React component.',
            'SmartInput captures and reveals rich insights and analytics in real-time, and maintains a detailed history of what\'s been entered and submitted in the past. Other details like time spent filling out a form, typing speed, keystrokes, backspaces, and more are also exposed. You can also configure a SmartInput to report keyword entries or emails entered to a specified API endpoint - like your favorite analytics software, or your application backend. Use <code><SmartInput profile="Standard" /></code> to track according to the <code>StandardProfile</code> (defined in <code>/profiles</code>).'
          ],
          url: 'https://github.com/exactchange/smart-input'
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

    console.log(`Blog views: ${this.state.requestCount}`);
  }
}

exports.Blog = Blog;
