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
      route: '/home',
      article: {
        publishDate: 'Jan 11 2020 19:47 PDT',
        title: 'Street - A Skateboarding MMORPG',
        body: [
          'I built this prototype - "Street" - over the last few days to explore this skateboard MMO idea further.',
          'The concept is to have a more realistic and challenging skate game, where the player has to master each trick, all while playing online with others around the world.',
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/nU02omhKUt8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        ],
        url: 'https://www.youtube.com/watch?v=nU02omhKUt8'
      },
      articles: [
        {
          publishDate: 'May 20 2019 15:21 PDT',
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
          publishDate: 'July 4 2019 04:20 PDT',
          title: 'Working on This Battle Royale Game...',
          body: [
            'Blacklisted is a Battle Royale game I started building last year. I recently picked the project back up, and will hopefully have some exciting developments to share by 2020!',
            'Don\'t want to wait for launch? You can join <a href="https://playblacklisted.com" target="_blank" style="text-decoration:underline">early access</a> and test alpha gameplay right now!',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/8_kq3_0YwIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          ],
          url: 'https://www.youtube.com/watch?v=8_kq3_0YwIg'
        },
        {
          publishDate: 'Aug 24 2019 21:02 PDT',
          title: 'Like React for Front-End? Try Fire For Backend',
          body: [
            'Fire is a library for backend JavaScript that makes it painless to create application backends. Design simple Actions for each route in your application, and Fire will efficiently merge your updates with the global application state and save just the right data to the database, retaining a single-source of truth at the application level. Declarative APIs make your requests and responses more predictable, simpler to understand, and easier to debug.'
          ],
          url: 'https://github.com/exactchange/fire'
        },
        {
          publishDate: 'Jan 9 2020 08:55 PDT',
          title: 'A new MMO?',
          body: [
            'A lot of skateboard games coming out this year, but few if any are fully online. Imagine a Tony Hawk\'s Pro Skater in a persistent online world &ndash; that\'s the vision!',
            'Some of the functionality from my last project is being migrated over and perfected in this game (authentication, physics engine, real-time persistence, player queues, chat, etc.). Excited to share gameplay content soon!',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Rls5Hy90J1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          ],
          url: 'https://www.youtube.com/watch?v=Rls5Hy90J1Y'
        },
        {
          publishDate: 'Jan 11 2020 19:47 PDT',
          title: 'Street - A Skateboarding MMORPG',
          body: [
            'I built this prototype - "Street" - over the last few days to explore the idea further.',
            'The concept is to have a more realistic and challenging skate game, where the player has to master each trick, all while playing online with others around the world.',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/nU02omhKUt8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          ],
          url: 'https://www.youtube.com/watch?v=nU02omhKUt8'
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
