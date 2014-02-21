module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['src/feed.js', 'test/spec.feed.js']
    },

    uglify: {
      options: {
        preserveComments: 'all'
      },

      build: {
        files: {
          'src/feed.min.js': ['src/feed.js']
        }
      }
    },

    jasmine: {
      src: 'src/feed.min.js',
      options: {
        specs: 'test/spec.feed.js'
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  [
    'grunt-contrib-jshint',
    'grunt-contrib-uglify',
    'grunt-contrib-watch',
    'grunt-contrib-jasmine'
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('min', ['uglify']);
  grunt.registerTask('default', ['jshint', 'uglify']);

};
