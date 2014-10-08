Package.describe({
  summary: "HIPAA audit log for ClinicalFramework.",
  version: "1.0.1",
  git: "http://github.com/awatson1978/clinical-hipaa-audit-log.git",
  name: "clinical:hipaa-audit-log"
});

Package.on_use(function (api) {
  api.export('HipaaLogger');
  api.export('Hipaa');

  api.use('standard-app-packages@1.0.2', ['client','server']);
  api.use('iron:router@0.9.4', 'client');
  api.use('mrt:bootstrap-3@0.3.8', 'client');
  api.use('mrt:moment@2.8.1', 'client');
  api.use('less@1.0.9', 'client')
  api.use('mrt:font-awesome-4-less@4.4.0', 'client')

  //api.use('clinical-ui-syntax', 'client')

  api.addFiles('hipaa.audit.html', "client");

  api.addFiles('hipaa.logging.js', ["client","server"]);
  api.addFiles('hipaa.shared.js', ["client","server"]);
  api.addFiles('hipaa.server.js', "server");
  api.addFiles('hipaa.client.js', "client");
  api.addFiles('hipaa.less', "client");
});
