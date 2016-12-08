const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');

// Copy dependencies
gulp.task('copy:imglib', function() {

  gulp.src(['node_modules/ng2-alfresco-core/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-core'));

  gulp.src(['node_modules/ng2-alfresco-search/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-search'));

  gulp.src(['node_modules/ng2-alfresco-upload/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-upload'));

  gulp.src(['node_modules/ng2-alfresco-login/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-login'));

  gulp.src(['node_modules/ng2-alfresco-documentlist/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-documentlist'));

  gulp.src(['node_modules/ng2-alfresco-datatable/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-datatable'));

  gulp.src(['node_modules/ng2-alfresco-viewer/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-viewer'));

  gulp.src(['node_modules/ng2-alfresco-webscript/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-webscript'));

  gulp.src(['node_modules/ng2-alfresco-tag/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-tag'));

  gulp.src(['node_modules/ng2-alfresco-userinfo/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-userinfo'));

  gulp.src(['node_modules/ng2-activiti-form/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-activiti-form'));

  gulp.src(['node_modules/ng2-activiti-processlist/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-activiti-processlist'));

  gulp.src(['node_modules/ng2-activiti-tasklist/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-activiti-tasklist'));

  gulp.src(['node_modules/ng2-activiti-analytics/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-activiti-analytics'));

  gulp.src(['node_modules/ng2-activiti-diagrams/dist/src/**/*.{png,gif,jpg,svg}'])
    .pipe(gulp.dest('./src/public/ng2-activiti-diagrams'));
});

gulp.task('copy:i18n', function() {

  gulp.src(['node_modules/ng2-alfresco-login/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-login/i18n/'));

  gulp.src(['node_modules/ng2-alfresco-search/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-search/i18n/'));

  gulp.src(['node_modules/ng2-alfresco-upload/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-upload/i18n/'));

  gulp.src(['node_modules/ng2-alfresco-login/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-login/i18n/'));

  gulp.src(['node_modules/ng2-alfresco-documentlist/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-documentlist/i18n/'));

  gulp.src(['node_modules/ng2-alfresco-datatable/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-datatable/i18n/'));

  gulp.src(['node_modules/ng2-alfresco-viewer/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-viewer/i18n/'));

  gulp.src(['node_modules/ng2-alfresco-webscript/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-webscript/i18n/'));

  gulp.src(['node_modules/ng2-alfresco-tag/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-tag/i18n/'));

  gulp.src(['node_modules/ng2-alfresco-userinfo/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-alfresco-userinfo/i18n/'));

  gulp.src(['node_modules/ng2-activiti-form/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-activiti-form/i18n/'));

  gulp.src(['node_modules/ng2-activiti-processlist/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-activiti-processlist/i18n/'));

  gulp.src(['node_modules/ng2-activiti-tasklist/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-activiti-tasklist/i18n/'));

  gulp.src(['node_modules/ng2-activiti-analytics/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-activiti-analytics/i18n/'));

  gulp.src(['node_modules/ng2-activiti-diagrams/dist/src/i18n/*.json'])
    .pipe(gulp.dest('./src/public/ng2-activiti-diagrams/i18n/'));

});

gulp.task('clean:public', function () {
  return del('./src/public/**/*');
})

gulp.task('copyimg', function(callback) {
  runSequence('clean:public', 'copy:imglib', 'copy:i18n', callback);
});
