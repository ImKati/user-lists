window.onload = function () {
    let users_table_div = document.getElementById('users-table-div');
    users_table_div.innerHTML += "<table id = 'users-table'>";
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let users_table = document.getElementById('users-table');
            data.forEach(user => {
                let tr = "<tr>" +
                    "<td>" + user['id'] + "</td>" +
                    "<td>" + user['name'] + "</td>" +
                    "<td>" + user['username'] + "</td>" +
                    "<td>" + user['email'] + "</td>" +
                    "<td>" + user['address']['street'] + "</td>" +
                    "<td>" + user['address']['city'] + "</td>" +
                    "<td>" + user['phone'] + "</td>" +
                    "<td>" + user['website'] + "</td>" +
                    "</tr>"
                users_table.innerHTML += tr
            });
        })
        .then(users_table_div.innerHTML += "</table>");
};