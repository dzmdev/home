module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            js: ["wwwroot/js/*"],
            css: ["wwwroot/css/*"]
        },
        
        typescript: {
            all: {
                src: ['Views/**/*.ts'],
                dest: 'wwwroot/js',
                options: {
                    module: 'amd',
                    target: 'es5',
                    removeComments: true,
                    rootDir: 'Views'
                }
            },
            watch: {
                src: ['Views/**/*.ts'],
                dest: 'wwwroot/js',
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
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ["clean", "typescript:all"]);
    grunt.registerTask('watch', ["typescript:watch"]);
};  