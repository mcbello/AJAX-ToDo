$(document).on('turbolinks:load', function() {
  console.log('document is ready!', new Date()); // this logging is optional
  $('#task_name').focus();
});
