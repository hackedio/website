/* Author: 

*/
function initGetHelpForm(){path=window.location.pathname,path.match("/almanac/get-help/?")&&validateHelpForm()}function validateHelpForm(){$("#helpticket").submit(function(){return helpFormIsValid()?!0:(alert("Please ensure all fields are filled in"),!1)})}function helpFormIsValid(){var e=$("#name").val(),t=$("#seat").val(),n=$("#desc").val();return e==""||t==""||n==""?!1:!0}$(function(){initGetHelpForm()});