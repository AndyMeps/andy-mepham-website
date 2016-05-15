module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-wiredep'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-scss-lint'
  grunt.loadNpmTasks 'grunt-coffeelint'
  
  grunt.initConfig
  
    coffee:
      all:
        files:
          'public/app/app.js': [
            'resources/coffee/app.coffee'
            'resources/coffee/app.routes.coffee'
            'resources/coffee/app.run.coffee'
          ]
    
    coffeelint:
      all: [
        'resources/coffee/*.coffee'
        'server.coffee'
      ]
      grunt: ['gruntfile.coffee']

    sass:
      all:
        files:
          'public/css/main.css': 'resources/sass/main.scss'
          
    scsslint:
      all: [
        'resources/sass/*.scss'
      ]
      options:
        colorizeOutput: true
			
    wiredep:
      all:
        src: [
          'public/index.html'
        ]

    watch:
      grunt:
        files: ['gruntfile.coffee']
        tasks: ['coffeelint:grunt']
        options:
          spawn: false
          
      css:
        files: [
          'resources/sass/main.scss'
        ]
        tasks: [
          'scsslint'
          'sass'
        ]
        options:
          spawn: false

      coffee:
        files: [
          'resources/coffee/**/*'
        ]
        tasks: [
          'coffeelint'
          'coffee'
        ]
        options:
          spawn: false
