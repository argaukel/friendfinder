var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "friendfinder"
});

var newFriend = function(request, response){
    connection.connect(function(error) {
        connection.query("INSERT INTO friends SET ?",
            {
              email: request.body.email,
              photo: request.body.photo,
              answer1: request.body.answer1,
              answer2: request.body.answer2,
              answer3: request.body.answer3,
            },
        function(error, rows){
            let friend = {...request.body};
            // this returns what was entered, plus additional data entered into the db (auto id)
            friend.friend_id = rows.insertId;
            response.json(friend);
        });
    });
};