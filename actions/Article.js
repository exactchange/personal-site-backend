const { ƒ } = require('fire-backend');

/*
 * Article
 */

class Article extends ƒ.Action {
  constructor(path) {
    super(path);

    this.setShape({
      publishDate: ƒ.Type.String,
      headline: ƒ.Type.String,
      body: ƒ.Type.Array,
      url: ƒ.Type.String
    });

    this.setState({
      publishDate: {
        '1581958382756': 'May 20 2019 15:21',
        '1581958405821': 'Aug 24 2019 21:02',
        '1581958421341': 'Feb 10 2020 17:00'
      },
      headline: {
        '1581958382756': 'From React Native to the App Store',
        '1581958405821': 'Like React for Front-End? Try Fire For Backend',
        '1581958421341': 'An easy-to-theme React input with built-in analytics'
      },
      body: {
        '1581958382756': [
          'Daily Tarot for iPhone',
          'Daily Tarot: One Card Draw is a simple app I designed and built over the weekend in React Native as a personal exploration in releasing and distributing iOS apps with Expo. In short, Expo provides a great developer experience that makes launching apps really easy.',
          'This project can serve as a reference for developers who are working with Expo & React Native for the first time, or even as a foundation for someone who might be creating their own card game for iPhone. You are free to use and build upon this code however you want 👍',
          '<img src="https://raw.githubusercontent.com/exactchange/daily-tarot/master/screenshot1.png" alt="Daily Tarot by Benny Schmidt" />'
        ],
        '1581958405821': [
          'Fire is a library for backend JavaScript that makes it painless to create application backends. Design simple Actions for each route in your application, and Fire will efficiently merge your updates with the global application state and save just the right data to the database, retaining a single-source of truth at the application level. Declarative APIs make your requests and responses more predictable, simpler to understand, and easier to debug.'
        ],
        '1581958421341': [
          'SmartInput is the best text input element for React because it\'s so easy to use and style, and for advanced users it provides rich analytics about end usage.',
          'Theming with JSX attributes is super simple: <code>&lt;SmartInput theme="Material" /&gt;</code>, for example, restyles the input to the "Material" theme (defined in themes.css). You can also override styles or CSS classes like you would with any React component.',
          'SmartInput captures and reveals rich insights and analytics in real-time, and maintains a detailed history of what\'s been entered and submitted in the past. Other details like time spent filling out a form, typing speed, keystrokes, backspaces, and more are also exposed. You can also configure a SmartInput to report keyword entries or emails entered to a specified API endpoint - like your favorite analytics software, or your application backend. Use <code>&lt;SmartInput profile="Standard" /&gt;</code> to track according to the <code>StandardProfile</code> (defined in <code>/profiles</code>).'
        ]
      },
      url: {
        '1581958382756': 'https://github.com/exactchange/daily-tarot',
        '1581958405821': 'https://github.com/exactchange/fire',
        '1581958421341': 'https://github.com/exactchange/smart-input'
      }
    });

    this.setReadWriteDelete(true, false, false);
  }
}

exports.Article = Article;
