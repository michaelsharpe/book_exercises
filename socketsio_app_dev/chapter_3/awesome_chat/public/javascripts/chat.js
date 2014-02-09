var iosocket = io.connect('/');

iosocket.on('message', function(data){
  data = JSON.parse(data);
  $('#messages').append('<div class = "'+data.type+'">' + data.message + '</div>');
});

$(function(){
  $("#message").keypress(function(event){
    if(event.keyCode == 13) {
      var data = {
        message: $('#message').val(),
        type: 'userMessage'
        };
      iosocket.send(JSON.stringify(data));
      $('#message').val('');
    }
  })

  $('#send').click(function(){
    var e = $.Event("keypress");
    e.keyCode = 13;
    $("#message").trigger(e)
  });
});