    module.exports = function(grunt) {
        grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
            files: {
                'dist/main.css': 'src/main.less',
                'dist/piano.css': 'piano.less'
            }
            },
            production: {
            options: {
                compress: true // compilar less
            },
            files: {
                'dist/styles/style.min.css': 'src/styles/style.less',
                'dist/styles/piano.min.css':'src/styles/piano.less'
                // npm run grunt-p exec
            }
            }
        },
        uglify: {
            target: {
            files: {
                'dist/scripts/link.min.js': 'src/scripts/link.js'
            }
            }
        }
        });
    
        grunt.registerTask('default', ['less', 'uglify']); // exec tarefa - npm run grunt
    
        grunt.loadNpmTasks('grunt-contrib-less'); // carregamento
        grunt.loadNpmTasks('grunt-contrib-uglify');
    };
    