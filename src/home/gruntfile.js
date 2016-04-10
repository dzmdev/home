module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            all: ["wwwroot/*", "!wwwroot/web.config"]
        },

        copy: {
            components: {
                cwd: "node_modules",
                src: ["bootstrap/**", "font-awesome/**", "glyphicons-halflings/**", "animate.css/**", "jquery/**", "jquery.easing/**"],
                dest: "wwwroot/node_modules",
                expand: true
            },
            img: {
                cwd: "views",
                src: ["home/img/**"],
                dest: "wwwroot",
                expand: true
            },
            js: {
                cwd: "views",
                src: ["home/**/*.js"],
                dest: "wwwroot",
                expand: true
            }
        },
        
        less: {
            development: {
                options: {
                    paths:["views/home/less"]
                },
                files: {
                    "wwwroot/home/home.css": "views/home/home.less"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ["clean:all", "less:development", "copy"]);
};  