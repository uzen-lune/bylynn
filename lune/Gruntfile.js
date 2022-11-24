module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*******************************************************************************************************************************
        *
        *    1. jshint 로 유효성검사
        *
        *******************************************************************************************************************************/
        jshint:{
            //all: ['Gruntfile.js', 'js/test_01.js', 'js/test_02.js'] // 기본적으로 자기자신을 포함하고, 직접 지정해서 사용
            //all: ['js/*'] // 혹은 js 폴더의 모든 파일을 검사
            //all: ['js/etc/*.js'] //측정폴더의 모든 js 검사
            all: ['assets/js/src/*.js'],
            options:{
                force: true, // true로 설정시 error 가 있다하더라도 fail 시키지않고 계속 진단
                reporter: require('jshint-stylish')
            }
        },

        /*******************************************************************************************************************************
        *
        *    2. concat 으로 파일 통합
        *
        *******************************************************************************************************************************/
        concat:{
            options: {
                stripBanners:  true,
                //separator: ';',
                separator: '',
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - '+'<%= grunt.template.today("yyyy-mm-dd") %> */',  //동작 시점의 날짜가 출력
                footer : "",
            },

            basic:{
                src:['assets/js/src/*.js'],
                dest:'assets/js/built.js'
            },

            extras:{
                src:['assets/css/src/*.css'],
                dest:'assets/css/styles.css'
            },

            // Invalid or Missing Files Warning 잘못 또는 누락된 파일 경고 : 해당파일이 없거나 유효하지 않으면 경고
            missing:{
                src:['log/grunt_compiled'],
                dest: 'log/grunt_compiled/compiled_js.log',
                nonull: true
            }
        },

        /*******************************************************************************************************************************
        *
        *    3. ugilfy 로 js 압축
        *
        *******************************************************************************************************************************/
        uglify:{
            options: {
                mangle: false, //변수와 함수 이름을 변경되는 것을 방지할경우 false 사용
                compress: {
                    drop_console: true //콘솔경고해제
                },
                //beautify: true // 디버깅이나 문제해결을 위해 사용
            },
            build: {
                src: 'assets/js/built.js',
                dest: 'assets/js/built.min.js'
            }
        },

        /*******************************************************************************************************************************
        *
        *    4. cssmin 으로 css 압축
        *
        *******************************************************************************************************************************/
        cssmin:{
            minify:{
                expand: true,
                cwd: "assets/css/", // css 폴더 위치
                src:['*.css', '!*.min.css'], // 파일지정, 이때 .min.css 는 제외한다.
                dest:'assets/css', // 출력폴더 지정
                ext:".min.css" // 확장자 지정
            },
            options:{
                keppSpecialComments: 0 //  default : '!' 가 붙은 주석 보존, 1 : '!' 가 붙은 주석 중 첫번째 주석만 보존, 0 : 모든 주석 제거
            }
        }


    });

    //Gruntfile 내에서 자바스크립트의 코드로 아래의 명령을 사용
    //grunt.loadNpmTasks('grunt-contrib-jshint'); js 에러 확인용
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-sass'); sass
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //grunt 명령어로 실행할 작업
    grunt.registerTask('default', [/* 'jshint', */ 'concat', 'uglify', 'cssmin']);

};
