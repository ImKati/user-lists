window.onload = function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => data.forEach((album) => {
            document.body.insertAdjacentHTML('beforeEnd', `
<p>${album.userId}</p>
<p>${album.id}</p>
<p>${album.title}</p>
`)
        }))
};