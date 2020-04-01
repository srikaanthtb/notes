function testNewNoteCanBeMade(){
    var newNote = new Note("Hello!");
    assert.isTrue(newNote.text == "Hello!")
  };
  testNewNoteCanBeMade();
