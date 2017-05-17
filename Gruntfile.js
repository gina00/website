module.exports = function(grunt) {

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var lessStyle = 'expanded';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            output : {
                options: {
                style: lessStyle
                },
                files: {
                './style.css': './less/style.less'
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/dom/addLoadEvent.js','src/dom/dom.js'],
                dest: 'build/global.js',
            },
        },
        jshint: {
           
            // all: [
            // 'website/src/**/*.js'
            //  ],
        options: {
            browser: true,            // browser environment
            devel: true                // 
            }
    
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            },
            compressjs: {
                files: {
                'build/global.min.js': ['build/global.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js','lib/*.js'],
                tasks: ['concat','jshint','uglify']
            },
            less: {
                files: ['src/theme/css/*.css','src/**/*.css'],
                tasks: ['concat','jshint','uglify']
            },
            html:{
                files: ['src/**/*.html'],
                tasks: ['concat','jshint','uglify']
            },
            theme:{
                files: ['src/images/*'],
                tasks: ['jshint']
            }            
        },

    });


    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less','concat','jshint','uglify','watch']);
    grunt.registerTask('outputcss', ['less']);
    //   grunt.registerTask('default', 'Log some stuff.', function() {
    //     grunt.log.write('Logging some stuff...').ok();
    //   });


};