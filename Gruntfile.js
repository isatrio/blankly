'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'assets/css/main.css' : 'assets/scss/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'assets/scss/*',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: 'assets/js/main.js',
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        },
        uglify: {
            build: {
                src: 'assets/js/main.js',
                dest: 'assets/js/main.min.js'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['sass', 'uglify']);
    grunt.registerTask('dev', ['watch']);
}
