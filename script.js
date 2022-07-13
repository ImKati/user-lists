window.onload = function () {
    let users_table_div = document.getElementById('users-table-div');
    users_table_div.innerHTML += "<table id = 'users-table'>";
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let users_table = document.getElementById('users-table');
            let heading1 = document.createElement('th');
            heading1.innerHTML = "Id";
            let heading2 = document.createElement('th');
            heading2.innerHTML = "Name";
            let heading3 = document.createElement('th');
            heading3.innerHTML = "Username";
            let heading4 = document.createElement('th');
            heading4.innerHTML = "Email";
            let heading5 = document.createElement('th');
            heading5.innerHTML = "Street";
            let heading6 = document.createElement('th');
            heading6.innerHTML = "City";
            let heading7 = document.createElement('th');
            heading7.innerHTML = "Phone";
            let heading8 = document.createElement('th');
            heading8.innerHTML = "Website";
            users_table.appendChild(heading1);
            users_table.appendChild(heading2);
            users_table.appendChild(heading3);
            users_table.appendChild(heading4);
            users_table.appendChild(heading5);
            users_table.appendChild(heading6);
            users_table.appendChild(heading7);
            users_table.appendChild(heading8);
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