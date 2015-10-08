Package.describe({
  summary: "HIPAA audit log for ClinicalFramework.",
  version: "1.3.2",
  git: "http://github.com/awatson1978/clinical-hipaa-audit-log.git",
  name: "clinical:hipaa-audit-log"
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform@1.2.2');
  api.use('iron:router@1.0.4', 'client');
  api.use('mrt:moment@2.8.1', 'client');
  api.use('less@1.0.14', 'client');
  api.use('mrt:font-awesome-4-less@4.4.0', 'client');

  api.use('clinical:auto-resizing@0.1.2', 'client');

  api.addFiles('lib/HipaaLogger.js', ["client", "server"]);
  api.addFiles('lib/HipaaAuditLog.js', ["client", "server"]);

  api.addFiles('hipaa.shared.js', ["client", "server"]);

  api.addFiles('hipaa.server.js', "server");

  api.addFiles('components/hipaaRibbon/hipaaRibbon.html', "client");
  api.addFiles('components/hipaaRibbon/hipaaRibbon.js', "client");
  api.addFiles('components/hipaaRibbon/hipaaRibbon.less', "client");

  api.addFiles('components/hipaaAuditLog/hipaaAuditLog.html', "client");
  api.addFiles('components/hipaaAuditLog/hipaaAuditLog.js', "client");
  api.addFiles('components/hipaaAuditLog/hipaaAuditLog.less', "client");

  api.addFiles('components/hipaaLogPage/hipaaLogPage.html', "client");
  api.addFiles('components/hipaaLogPage/hipaaLogPage.js', "client");
  api.addFiles('components/hipaaLogPage/hipaaLogPage.less', "client");

  api.export('hipaaLog');
  api.export('hipaaRibbon');

  api.export('Hipaa');
  api.export('HipaaLogger');
  api.export('HipaaAuditLog');
});



Package.onTest(function (api) {
  api.use('tinytest');

  api.use('standard-app-packages@1.0.2', ['client', 'server']);
  api.use('iron:router@1.0.4', 'client');
  api.use('mrt:moment@2.8.1', 'client');
  api.use('less@1.0.9', 'client');
  api.use('mrt:font-awesome-4-less@4.4.0', 'client');
  api.use('clinical:hipaa-audit-log');
  api.use('clinical:verification');

  api.addFiles('tests/tinytest/audit-log-tests.js');
});
