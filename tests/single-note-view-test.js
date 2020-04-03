function CanTakeaNoteModel(note) {
  var note = new Note("potato");
  var noteview = new Singlenoteview(note);
  console.log(noteview.shownote());
  assert.isTrue(noteview.shownote.text === "<div>potato</div>");
};
CanTakeaNoteModel();
