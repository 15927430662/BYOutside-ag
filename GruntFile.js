/**
 * Created by ximing on 2015/12/11.
 */
module.exports=function(grunt){
    grunt.initConfig({
        pkg :grunt.file.readJSON('package.json')
    })
    concat:{
        options:{
            separator:','
        }
        dist:{
            src:['src/**/*.js']
            dest:'dist/<%= pkg.name %>.js'
        }
    }
}