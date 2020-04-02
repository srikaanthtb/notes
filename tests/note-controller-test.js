let notelistdouble = new Double({
  noteadd: function() {},
  givelist: function() {
    return [{text: "yo"}, {text: "son"}]
  }
});
var noteController = new NoteController(notelistdouble);

function CheckInstanceOfNoteController() {
  assert.isTrue(noteController instanceof NoteController);
};
CheckInstanceOfNoteController();


function CheckHTMLisReturning() {

};
CheckHTMLisReturning();
