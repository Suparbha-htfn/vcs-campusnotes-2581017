
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    if (notes.length === 0) {
    notesList.innerHTML = "<p>No notes added yet. Start by adding your first note!</p>";
    return;
    }

    notes.forEach(function(note, index) {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";
        let title = document.createElement("h3");
        let content = document.createElement("p");
        
        title.textContent = note.title;
        content.textContent = note.content;
        

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.onclick = function() {
            deleteNote(index);
        };

        noteDiv.appendChild(title);
        noteDiv.appendChild(content);
        noteDiv.appendChild(deleteButton);

        notesList.appendChild(noteDiv);
    });
}

function addNote() {
    let title = document.getElementById("noteTitle").value.trim();
    let content = document.getElementById("noteContent").value.trim();

    if (title.trim() === "" || content.trim() === "") {
        alert("Please enter both title and content.");
        return;
    }

    notes.push({
        title: title,
        content: content
    });

    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";

    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

displayNotes();
