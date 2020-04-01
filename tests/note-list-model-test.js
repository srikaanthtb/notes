function testCreateNote() {
  var noteList = new Notelist();
  assert.isTrue(noteList.noteadd('Hello').notegive() === 'Hello');
};
testCreateNote();

function testGetNote() {
  var noteList = new Notelist();
  noteList.noteadd('Hello');
  noteList.noteadd('Hi');
  assert.isTrue(noteList.givelist().length === 2);
  assert.isTrue(noteList.givelist()[0].notegive() === 'Hello');
}

testGetNote();
