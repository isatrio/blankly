'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            files: {
                'assets/css/main.css': [
                    'assets/less/main.less'
                ]
            },
            options: {
                compress: false,
                sourceMap: false,
            }
        },
        watch: {
            css: {
                files: 'main.less',
                tasks: ['less'],
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
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'uglify']);
    grunt.registerTask('dev', ['watch']);
}