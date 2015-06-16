Package.describe({
  summary: "HIPAA audit log for ClinicalFramework.",
  version: "1.2.1",
  git: "http://github.com/awatson1978/clinical-hipaa-audit-log.git",
  name: "clinical:hipaa-audit-log"
});

Package.on_use(function (api) {
  api.export('HipaaLogger');
  api.export('Hipaa');

  api.use('standard-app-packages@1.0.2', ['client','server']);
  api.use('iron:router@1.0.4', 'client');
  api.use('mrt:moment@2.8.1', 'client');
  api.use('less@1.0.9', 'client')
  api.use('mrt:font-awesome-4-less@4.4.0', 'client')

  api.addFiles('hipaa.logging.js', ["client","server"]);
  api.addFiles('hipaa.shared.js', ["client","server"]);

  api.addFiles('hipaa.server.js', "server");

  api.addFiles('components/hipaaHeader/hipaaHeader.html', "client");
  api.addFiles('components/hipaaHeader/hipaaHeader.js', "client");
  api.addFiles('components/hipaaHeader/hipaaHeader.less', "client");

  api.addFiles('components/hipaaFooter/hipaaFooter.html', "client");
  api.addFiles('components/hipaaFooter/hipaaFooter.js', "client");
  api.addFiles('components/hipaaFooter/hipaaFooter.less', "client");

  api.addFiles('components/hipaaLogPage/hipaaLogPage.html', "client");
  api.addFiles('components/hipaaLogPage/hipaaLogPage.js', "client");
  api.addFiles('components/hipaaLogPage/hipaaLogPage.less', "client");

});



Package.onTest(function(api) {
  api.use('tinytest');

  api.use('standard-app-packages@1.0.2', ['client','server']);
  api.use('iron:router@1.0.4', 'client');
  api.use('mrt:moment@2.8.1', 'client');
  api.use('less@1.0.9', 'client')
  api.use('mrt:font-awesome-4-less@4.4.0', 'client')
  api.use('clinical:hipaa-audit-log');

  api.addFiles('tests/tinytest/foo-tests.js');
});
