'use strict';
module.exports = function(grunt) {

    // Load all tasks
    require('load-grunt-tasks')(grunt);
    // Show elapsed time
    require('time-grunt')(grunt);

    grunt.initConfig({
        // JS Code Checker
        jshint: {
          options: {
            jshintrc: '.jshintrc'
          },
          all: [
            'Gruntfile.js',
            'assets/js/*.js',
            '!assets/**/*.min.*'
          ]
        },

        // Compile sass file
        sass: {
            dev: {
                options: {
                    sourceMap: true,
                    outputStyle: 'compact'
                },
                dist: {
                    files: {
                        'assets/css/main.css' : 'assets/scss/main.scss'
                    }
                }
            },
            prod: {
                options: {
                    sourceMap: true,
                    outputStyle: 'compressed'
                },
                dist: {
                    files: {
                        'assets/css/main.css' : 'assets/scss/main.scss'
                    }
                }
            }
        },

        // Listen file changes
        watch: {
            css: {
                files: 'assets/scss/*',
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: 'assets/js/main.js',
                tasks: ['jshint', 'uglify'],
                options: {
                    livereload: true
                }
            }
        },

        // Compress the js file
        uglify: {
            prod: {
                src: 'assets/js/main.js',
                dest: 'assets/js/main.min.js'
            }
        }
    });
    
    // Register task command
    grunt.registerTask('default', ['sass:dev', 'jshint', 'uglify']);
    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('production', ['sass:prod', 'jshint', 'uglify']);
};
