Package.describe({
  summary: "hipaa-audit-log provides logging and auditing features for clinically significant events related to user account usage."
});

Package.on_use(function (api) {
api.export('HipaaLogger');

  api.use('standard-app-packages', ['client','server']);
  api.use('iron-router', 'client');
  api.use('bootstrap-3', 'client');
  api.use('moment', 'client');
  api.use('less', 'client')
  api.use('font-awesome', 'client')

  //api.use('clinical-ui-syntax', 'client')

  api.add_files('hipaa.audit.html', "client");

  api.add_files('hipaa.logging.js', ["client","server"]);
  api.add_files('hipaa.shared.js', ["client","server"]);
  api.add_files('hipaa.server.js', "server");
  api.add_files('hipaa.client.js', "client");
  api.add_files('hipaa.less', "client");
});
