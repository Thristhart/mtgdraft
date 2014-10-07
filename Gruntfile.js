module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      "./public/client.js": ['scripts/*.js'],
      browserifyOptions: {}
    },
    watch: {
      files: ["scripts/*.js"],
      tasks: ["browserify"]
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify']);
};
