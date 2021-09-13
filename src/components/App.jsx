import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Title",
      content: "Content"
    }
  ]);

  function addItem(newNote) {
    setNotes((prevItem) => {
      return [...prevItem, newNote];
    });
  }

  function deleteItem(id) {
    setNotes((prevItem) => {
      return prevItem.filter((notes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
