/**
 *  index.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

require.ensure([], function() {
    require('splash-screen/splash.min.css');
    require('splash-screen').enable();
});

require.ensure([], function() {

    require('less/main.less');
// var App = require('./main');
// (new App()).run();
});
