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
var expectstring = "<ul><li><div>yo</div></li><li><div>son</div></li></ul>";
console.log(expectstring);
  assert.isTrue(expectstring === noteController.insertHTML())
};
CheckHTMLisReturning();
