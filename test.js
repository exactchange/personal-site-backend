const smoke = require('fire-backend-test');
const { it } = smoke;

const skipTests = false;

const runTests = async () => {
  try {
    await it('pings the API',
      {
        url: 'http://localhost:1337/'
      },
      {
        message: '👍',
        status: 200
      }
    );

    await it('retrieves articles',
      {
        url: 'http://localhost:1337/articles/tech'
      },
      {
        status: 200,

        _omit: [
          'articles',
          'requestCount'
        ]
      }
    );
  } catch(error) {
    console.log(error.message);
    console.log('<< ERROR >>', error);
  }
};

(async() => {
  if (!skipTests) {

    await runTests();

    console.log('Tests completed.');
  }
})();
