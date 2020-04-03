let notelistdouble = new Double({
  noteadd: function() {},
  givelist: function() {
    return [{text: "yoasdasdasdasdasdasdasdasdasd"}, {text: "son"}]
  }
});
var noteController = new NoteController(notelistdouble);

function CheckInstanceOfNoteController() {
  assert.isTrue(noteController instanceof NoteController);
};
CheckInstanceOfNoteController();


function CheckHTMLisReturning() {
var expectstring = "<ul><li><div>yoasdasdasdasdasdasd</div></li><li><div>son</div></li></ul>";
console.log(expectstring);
console.log(noteController.insertHTML());
  assert.isTrue(expectstring === noteController.insertHTML())
};
CheckHTMLisReturning();
