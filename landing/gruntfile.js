module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                src: "resources/**/*.css"
            }
        },
        concat: {
            css: {
                files: [{
                    src: ['resources/**/*.css', '!resources/css/style.css'],
                    dest: 'resources/css/style.css'
                }]
            }
        },
        watch: {
            prefixStyles: {
                files: ['resources/**/*.css'],
                tasks: ['autoprefixer'],
                options: {
                    debounceDelay: 5000
                }
            },
            concatStyles: {
                options: {
                    debounceDelay: 5000
                },
                files: ['resources/**/*.css', '!resources/css/style.css'],
                tasks: ['concat']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.registerTask('default', ['watch']);
};