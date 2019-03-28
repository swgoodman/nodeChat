$(function(){
    // Make connection
    var socket = io.connect('http://localhost:3000')

    // Buttons and input
    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")
    var feedback = $("#feedback")

    // Change username function
    send_username.click(function(){
        console.log(username.val());
        socket.emit('chang_username', {username: username.val()})
    })

    // Emit message
    send_message.click(function () {
    	socket.emit('new_message', {
    	    message: message.val()
    	})
    })

    // Listen for new message
	socket.on("new_message", (data) => {
	    feedback.html('');
	    message.val('');
	    chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
    })
    

});