const config = require('config');
const OoyalaApi = require('ooyala-api');

const api = new OoyalaApi(config.api.key, config.api.secret, {subdomain: 'live', secure: true});

api.get('/v3/schedules', {limit: 500}, {recursive: true})
.then(events => {
  console.log(`${events.length} schedules are available`);
  for (const event of events) {
    for (const [key, value] of Object.entries(event)) {
      console.log(`\t${key}: ${value}`);
    }
    console.log('---');
  }
})
.catch(err => {
  console.log(err.stack);
});
