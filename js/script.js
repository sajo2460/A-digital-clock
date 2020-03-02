$(document).ready(function() {

function getTime() {
  let date = new Date();
  

  let hours = date.getHours() == 0 ? 12 : date.getHours() > 12 ? date.getHours() - 12: date.getHours();

  let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  let ampm = date.getHours() < 12 ? 'AM' : 'PM';

  $('.hour').html(hours);
  $('.minute').html(':' + minutes);
  $('.second').html(':' + seconds);
  $('.ampm').html(ampm);
}

window.setInterval(getTime, 1000);


});