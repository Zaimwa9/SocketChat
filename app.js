var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3014

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
    console.log('new user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
        console.log('msg')
    })

    socket.on('disconnect', () => {
        console.log('the user disconnected')
    })
})

http.listen(port, () => console.log('listening on ' + port)); 