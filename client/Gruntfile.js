module.exports = function(grunt) {
    
        grunt.initConfig({
           
            pkg: grunt.file.readJSON('package.json'),
            connect: {
              client: {
                port: 9000,
                base: 'app',
                hostname: 'localhost'
              }
			      }
        });
    
        grunt.loadNpmTasks('grunt-connect');
        grunt.registerTask('default', 'connect:client');    
    };