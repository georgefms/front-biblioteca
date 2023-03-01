//Resolvendo erro de CORS entre a BACK e o FRONT no desenvolvimento

const PROXY = [{
  context: ['/api'],
  target: 'http://localhost:8080',
  secure: false,
  logLevel: 'debug'
  }
];

module.exports = PROXY;
