var drafts = {};

var Draft = require('./draft');

drafts["TestDraft"] = new Draft("TestDraft", "Test Draft Please Ignore");
module.exports = function(router) {
  var express = require('express');
  var router = express.Router();
  router.get('/', function(request, resource) {
    resource.render('index', {drafts: [{path:"TestDraft", name:"Test Draft Please Ignore"}]});
  });
  router.get('/new', function(request, resource) {
    resource.render('new', {});
  });
  router.get('/draft/:id', function(request, resource) {
    resource.render('draft', {id: "TestDraft"});
  });

  return router;
}();
