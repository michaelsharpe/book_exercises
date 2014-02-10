var chatInfra = io.connect("/chat_infra"),
    chatCom = io.connect("/chat_com");

chatInfra.on('name_set', function(data){
  chatInfra.on("user_entered", function(user){
    $('#messages').append('<div class="systemMessage"> ' + user.name + ' has joined the room.</div>')
  });

  chatInfra.on("message", function(message){
    var message = JSON.parse(message);
    $('#messages').append('<div class = "'+message.type+'">' + message.message + '</div>');
  });

$('#nameform').hide();
$('#messages').append('<div class="systemMessage">Hello ' + data.name + '</div>');

});

chatCom.on("message", function(message){
  var message = JSON.parse(message);
  $('#messages').append('<div class="'+message.type+'"><span class="name">' + message.username + ":</span> " + message.message + '</div>');
})

$(function(){
  $("#message").keypress(function(event){
    if(event.keyCode == 13) {
      var data = {
        message: $('#message').val(),
        type: 'userMessage'
        };
      chatCom.send(JSON.stringify(data));
      $('#message').val('');
    }
  })

  $('#send').click(function(){
    var e = $.Event("keypress");
    e.keyCode = 13;
    $("#message").trigger(e)
  });
});


$(function(){
  $('#setname').click(function(){
    chatInfra.emit('set_name', {name: $('#nickname').val()});
  });
});