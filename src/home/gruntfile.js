module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            all: ["wwwroot/*", "!wwwroot/web.config"]
        },

        copy: {
            components: {
                cwd: "node_modules",
                src: "**",
                dest: "wwwroot/components",
                expand: true,
                filter: "isFile"
            }
        },
        
        typescript: {
            all: {
                src: ['Views/**/*.ts'],
                dest: 'wwwroot',
                options: {
                    module: 'amd',
                    target: 'es5',
                    removeComments: true,
                    rootDir: 'Views'
                }
            },
            watch: {
                src: ['Views/**/*.ts'],
                dest: 'wwwroot',
                options: {
                    module: 'amd',
                    target: 'es5',
                    removeComments: true,
                    rootDir: 'Views',
                    watch: {
                        before: ["clean:js"],
                        atBegin: true
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ["clean", "typescript:all", "copy:components"]);
    grunt.registerTask('watch', ["typescript:watch"]);
};  