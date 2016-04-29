module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');		
	
	grunt.initConfig({
		coffee: {
			compile: {
				expand: true,
				flatten: true,
				src: ['resources/coffee/app.coffee', 'resources/coffee/app.routes.coffee'],
				dest: 'public/app/',
				ext: '.js'
			}	
		},
		sass: {
			dist: {
				files: {					
					'public/css/main.css': 'resources/sass/main.scss'
				}
			}
		},
		wiredep: {
			"all": {
				src: ['public/index.html']
			}
		},
		watch: {
			"css": {
				files: ['resources/sass/main.scss'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}
		}
	});	
	
}