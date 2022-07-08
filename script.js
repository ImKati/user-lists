window.onload = function () {
    let users_table_div = document.getElementById('users-table-div');
    users_table_div.innerHTML += "<table id = 'users-table''>";
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let users_table = document.getElementById('users-table');
            data.forEach(val => {
                let tr = "<tr>" +
                    "<td>" + val['id'] + "</td>" +
                    "<td>" + val['name'] + "</td>" +
                    "<td>" + val['username'] + "</td>" +
                    "<td>" + val['email'] + "</td>" +
                    "<td>" + val['address']['street'] + "</td>" +
                    "<td>" + val['address']['city'] + "</td>" +
                    "<td>" + val['phone'] + "</td>" +
                    "<td>" + val['website'] + "</td>" +
                    "</tr>"
                users_table.innerHTML += tr
            });
        })
        .then(users_table_div.innerHTML += "</table>");
};