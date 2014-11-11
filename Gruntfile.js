module.exports = function (grunt) {
  grunt.registerTask("hello", function () {
    console.log("Hello, World!")
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // build
  grunt.config("cssmin", {
    combine: {
      files: {
        'public/stylesheets/app.min.css': [
            "public/stylesheets/**/*.css",
            "vendor/components/bootstrap/**/bootstrap.min.css"
        ]
      }
    }
  });

  // clean
  grunt.registerTask("clean", "remove build files", function () {
    grunt.file.delete("public/stylesheets/app.min.css");
  });

  grunt.registerTask("default", ["clean", "cssmin"])

};