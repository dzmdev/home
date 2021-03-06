﻿module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            wwwroot: ["wwwroot/*", "!wwwroot/web.config"]
        },

        copy: {
            components: {
                cwd: "node_modules",
                src: ["bootstrap/**", "font-awesome/**", "animate.css/**"],
                dest: "wwwroot/node_modules",
                expand: true
            },
            img: {
                cwd: "views",
                src: ["home/img/**"],
                dest: "wwwroot",
                expand: true
            }
        },
        
        less: {
            prod: {
                files: {
                    "wwwroot/home/theme.css": "views/home/style/theme.less",
                    "wwwroot/home/timeline.css": "views/home/style/timeline.less"
                }
            }
        },
        
        browserify: {
            prod: {
                files: {
                    "wwwroot/home/home.js": ["views/home/js/home.module.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask("default", ["clean:wwwroot", "less:prod", "browserify:prod", "copy"]);
};  