/* Author: 

*/

$(function(){
  initGetHelpForm();
});

// JS for /almanac/get-help

function initGetHelpForm(){
  path = window.location.pathname;
  if(path.match('\/almanac\/get-help\/?')){
    validateHelpForm();
  };
}

function validateHelpForm(){
  $('#helpticket').submit(function(){
    if (helpFormIsValid()){
      return true;
    }else{
      alert('Please ensure all fields are filled in');
      return false;
    };
  });
}

function helpFormIsValid(){
  var name = $('#name').val();
  var seat = $('#seat').val();
  var desc = $('#desc').val();
  if (name == "" || seat == "" || desc == ""){
    return false;
  }else{
    return true
  };
}

// End of JS for /almanac/get-help