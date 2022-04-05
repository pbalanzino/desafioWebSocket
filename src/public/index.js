const form = document.addEventListener('submit', (e) => {
    e.preventDefault();
    const producto = document.getElementById('producto');
    const precio = document.getElementById('precio');
    const fotoURL = document.getElementById('url');
    console.log(producto.value, precio.value, fotoURL.value);
    document.getElementById('producto').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('url').value = '';
});

const table = document.getElementById('section-form');

// section.appendChild(table);

const socket = io();
let chatForm = document.getElementById('chatForm');
let user;
let log = document.getElementById('log');
let text = document.getElementById('chatBox');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('submit', text.value);
    text.value = '';
});

socket.on('log', (data) => {
    log.innerHTML = '';
    data.forEach(log => {
        let p = document.createElement('p');
        p.innerHTML = `${log.author}: ${log.text}`;
        log.appendChild(p);
    });
});