module.exports = function(grunt) {

    // config
    grunt.initConfig({

        less:{
             build: {
                src : ['src/style1.less','src/style2.less'],
                dest: 'build/styles.css'
             }
        },
        csslint:{
            check: {
                //src: 'build/styles.css'
               src: '<%= less.build.dest %>'
            }
        },

    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    // tasks
    grunt.registerTask('default', ['less', 'csslint']);
};
