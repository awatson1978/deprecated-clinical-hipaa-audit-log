Package.describe({
  summary: "HIPAA audit log for ClinicalFramework.",
  version: "2.3.6",
  git: "http://github.com/clinical-meteor/clinical-hipaa-audit-log.git",
  name: "clinical:hipaa-audit-log"
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('mrt:moment@2.8.1', 'client');
  api.use('grove:less@0.1.1', 'client');
  api.use('fortawesome:fontawesome@4.4.0', 'client');

  api.use('clinical:auto-resizing@0.1.2', 'client');
  api.use('clinical:router@2.0.13');

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

  api.use('meteor-platform@1.2.2');
  api.use('clinical:router@2.0.13', 'client');
  api.use('mrt:moment@2.8.1', 'client');
  api.use('grove:less@0.1.1', 'client');
  api.use('fortawesome:fontawesome@4.4.0', 'client');
  api.use('clinical:hipaa-audit-log');
  api.use('clinical:verification');

  api.addFiles('tests/tinytest/audit-log-tests.js');
});
