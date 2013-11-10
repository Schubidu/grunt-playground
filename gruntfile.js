module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            compass: {
                files: ['sass/**/*_*.{scss,sass}', 'sass/_partials/**/*.{scss,sass}'],
                tasks: ['compass:dev', 'cssmin:minify', 'copy:css']
//			},
//			livereload: {
//				files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
//				options: {
//					livereload: true
//				}
            }
        },
        compass: {                  // Task
            dev: {                    // Another target
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        copy: {
            css: {
                files: [
                    {
                        expand: true,
                        cwd: 'css',
                        src: ['*.css'],
                        dest: 'static',
                        rename: function (dest, src) {
                            var path = require('path'),
                                folder = path.extname(src).substring(1),
                                extname = path.extname(src),
                                origin_filename = path.basename(src, extname).split('_');

                            return path.join(dest, origin_filename[1], folder, origin_filename[0] + extname);
                        }
//                    rename: function (dest, src) {
//                        return dest + src.substring(0, src.indexOf('/')) + '.css';
//                    }
                    }
                ]
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css'],
                dest: 'css',
                ext: '.css'
            }
        }
    });
};