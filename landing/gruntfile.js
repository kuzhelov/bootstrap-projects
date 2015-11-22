module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                src: "resources/**/*.css"
            }
        },
        watch: {
            styles: {
                files: ['resources/**/*.css'],
                tasks: ['autoprefixer'],
                options: {
                    debounceDelay: 5000
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};