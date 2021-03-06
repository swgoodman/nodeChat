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
        socket.emit('change_username', {username: username.val()})
    })

    // Emit message
    send_message.click(function () {
    	socket.emit('new_message', {
            message: message.val()
    	})
    })

    // Print new message
	socket.on("new_message", (data) => {
        console.log(data)
	    feedback.html('');
	    message.val('');
	    chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
    })

    // Emit typing
    message.bind('keypress', () => {
        socket.emit('typing')
    })

    // Listen on typing
    socket.on('typing', (data) => {
        feedback.html("<p><i>" + data.username + " is typing..." + "</i></p>")
    })

});