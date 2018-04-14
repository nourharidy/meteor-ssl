Package.describe({
  name: 'nourharidy:ssl',
  version: '0.2.2',
  summary: 'Sexy SSL support for Meteor',
  documentation: 'README.md',
  git: 'https://github.com/nourharidy/meteor-ssl.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('ssl.js', 'server');
  api.addFiles('helpers.js', 'client');
  api.export('SSL', 'server');
  api.export('isHTTPS', 'client');
  api.export('switchHTTPS', 'client');
});

Npm.depends({"http-proxy":"1.9.0"});
