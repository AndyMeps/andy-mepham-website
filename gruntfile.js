module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');		
	
	grunt.initConfig({
		coffee: {
			"all": {
				files: {
					'public/app/app.js': [
						'resources/coffee/app.coffee', 
						'resources/coffee/app.routes.coffee', 
						'resources/coffee/app.run.coffee'
					]
				}	
			}
		},
		sass: {
			"all": {
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
			},
			"coffee": {
				files: ['resources/coffee/**/*'],
				tasks: ['coffee'],
				options: {
					spawn: false
				}
			}
		}
	});	
	
}