/*
 * grunt-inject-dependencies
 * https://github.com/ukupat/grunt-inject-dependencies
 *
 * Copyright (c) 2015 Uku Pattak
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('injectDependencies', 'Create grunt-include-source tags to HTML', function() {
    for (var app in this.data) {
      if (this.data.hasOwnProperty(app)) {
        grunt.file.write(
          this.data[app].dist,
          grunt.file.read(this.data[app].src) + '\n<!-- include: "type": "js", "files": ["' + this.data[app].dependencies.join('", "') + '"] -->\n<!-- /include -->'
        );
      }
    }
  });
};