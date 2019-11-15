let myLibrary = [];
let myLibraryCopy = [];
let table = document.getElementById("table");
let save = document.getElementById('save');
let bookAdded = document.getElementById('bookadded');


function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
}

save.addEventListener('click', function () {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let genre = document.getElementById('genre').value;
    let yes = document.getElementById('yes').checked;
    let no = document.getElementById('no').checked;
    

    if (title === "" || author === "" || genre === "" || !yes && !no) {
        return false;
    } else {

        fade();
        
        let book = new Book(title, author, genre);
        myLibrary.push(book);
        myLibraryCopy.push(book);
        updateLibrary();
    }
});

window.onload = function () {
    document.getElementById('button').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'flex';
    });

    document.getElementById('close').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
        title.value = '';
        author.value = '';
        genre.value = '';
        document.getElementById('yes').checked = false;
        document.getElementById('no').checked = false;
        bookAdded.innerHTML = '';
        });
    };

function updateLibrary() {
    let row = document.getElementById("table");
    let table = "<tr>";
    
    for (let i = 0; i < myLibraryCopy.length; i++) {
        for (item in myLibraryCopy[i]) {
            table += '<td>' + myLibraryCopy[i][item] + '</td>';
    }

        if (document.getElementById('yes').checked) {
            table += "<td><button id='read' onclick='change(this)' class='readButton'>Read</button></td>";
        } else {
            table += "<td><button id='unread' onclick='change(this)' class='readButton'>Unread</button></td>";
        }

        table += "<td><button id='delete' onclick='deleteRow(this)'><i class='fa fa-times'></i></td>";
        
        row.innerHTML += table;
        myLibraryCopy.splice(0);
    }
}

function change(obj) {
    if (obj.innerHTML == "Read") {
        obj.innerHTML = "Unread";
        obj.style.backgroundColor = 'rgb(98, 98, 119)';
        obj.style.border = 'solid rgb(98, 98, 119)';
    } else {
        obj.innerHTML = "Read";
        obj.style.backgroundColor = '#4b6cb7';
        obj.style.border = 'solid #4b6cb7';
    }
}

function deleteRow(node) {
    let row = node.parentNode.parentNode; 
    row.parentNode.removeChild(row);
}

function fade() {
    bookAdded.innerHTML = "<p id='book-added' class='animated'>Added book!</p>";

    let bookAdd = document.getElementById('book-added');

    bookAdd.classList.add('fadeIn');
    bookAdd.addEventListener('animationend', function () {
    bookAdd.classList.remove('fadeIn');
    bookAdd.classList.add('fadeOut');
});
}
