
module.exports = function(grunt) {
    
    grunt.initConfig({
        sass: {
            dist: {
            files:{'css/main.css': 'sass/main.scss'}
            }
        },
        concat: {
            js: {
            src: ['js/bootstrap.min.js', 'js/jquery.easing.js', 'js/nav.js', 'js/scrolling-nav.js'],
            dest: 'dist/js/scripts.js',
            },
            css: {
            src: ['css/main.css', 'css/bootstrap.min.css'],
            dest: 'dist/css/styles.css',
            },
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js'],
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css'],
            },
        },
});
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'watch', 'sass']);
    
};