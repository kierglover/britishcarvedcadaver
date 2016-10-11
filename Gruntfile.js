
module.exports = function(grunt) {
    
    grunt.initConfig({
        
    php: {
        dist: {
            options: {
                port: 5000,
                base:".",
                open:true,
                keepalive:true,
            }
        }
    },
        
        // COMPRESSES SASS TO CSS //
        
        sass: {
            dist: {
            files:{'css/main.css': 'sass/main.scss'}
            }
        },
        
        concat: {
            js: {
            src: ['js/jquery.easing.min.js', 'js/nav.js', 'js/scrolling-nav.js'],
            dest: 'dist/js/scripts.js',
            },
        // CONCATS MAIN CSS AND BOOTSTRAP MIN CSS //
            css: {
            src: ['css/main.css', 'css/bootstrap.min.css'],
            dest: 'dist/css/main.css',
            },
        },
        
        // REMOVES UNUSED CSS CREATES TIDYCSS//
        
        uncss: {
            dist: {
                files: {
                    'dist/css/tidy.css': ['index.html', 'about.html', 'anatomy.html', 'sculpting.html', 'theology.html', 'locations.html', 'contact.php']
                    
                }
            }
        },
        
        // PIPES MAIN CSS TO DIST AND MINIFIES //
        
        cssmin: {
            dist: {
                files: [
                    {src: 'dist/css/tidy.css',
                    dest: 'dist/css/tidy.min.css'}
                ]
            }
            
        },
        
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js'],
            },
        },
   
});
    
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
    
};