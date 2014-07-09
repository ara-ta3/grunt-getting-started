module.exports = function(grunt) {

    /*
      task: {
        target1: {
            src: ....,
            dest: ....
            }
        }
      task: {
        target1: {
            files: {
                dest:src
            }
        }

     */

    // config
    grunt.initConfig({

        less:{
             build1: {
            /*
                src : 'src/style1.less',
                dest: 'build/styles1.css'
                */
                files:{
//                          'build/styles1.css':'src/style1.less'
//                          'build/styles1.css':'src/*.less'
                          'build/styles1.css':'src/**/*.less'
                      },
                options:{
                    compress:true
                }
             },
             build2: {
                files:{
                          'build/styles1.css':'src/**/*.less'
                  }
             }

        }

    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');

    // tasks
    grunt.registerTask('default', 'less');
    grunt.registerTask('task1', 'less:build1');
    grunt.registerTask('task2', 'less:build2');
};
