module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/global.css' : 'src/_styles/global.scss'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          onCreateServer: function(server, connect, options) {
            var io = require('socket.io').listen(server);
            io.sockets.on('connection', function(socket) {
              // do something with socket
            });
          }
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      scripts: {
          files: '**/*.js',
          tasks: ['uglify']
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'style',
          src: ['global.css', '!global.min.css'],
          dest: 'build',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
            dist: {
                files:{
                    'js/content.min.js': 'src/_scripts/content.js',
                    'js/handlebars-v4.0.5.min.js': 'src/_scripts/handlebars-v4.0.5.js',
                }
            }
        },
    responsive_images: {
      resize: {
          options: {
              sizes: [{
                  width: 700,
                  quality: 100
              }]
          },
          files: [{
              expand: true,
              cwd: 'img/src/',
              src: ['**/*.{jpg,gif,png}'],
              custom_dest: 'img/build/{%= height %}/'
          }]
        }
      },
    'ftp-deploy' : {
      build: {
        auth: {
          host: 'mr-mr.co.uk',
          port: 21,
          authKey: 'key1'
        },
        src: '../home-too',
        dest: '/hometoo',
        exclusions: ['.DS_Store', 'tmp', '.ftppass', 'node_modules', '.git']
      }
    }
  });

  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-responsive-images');


  grunt.registerTask('default',['sass', 'responsive_images', 'connect', 'watch', 'cssmin', 'uglify']);
}
