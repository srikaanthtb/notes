function testCreateNote() {
  var noteList = new Notelist();
  assert.isTrue(noteList.noteadd('Hello').notegive() === 'Hello');
};
testCreateNote();
