function viewNote() {
  var notelist = new Notelist
  notelist.noteadd("Hello")
  notelist.noteadd("Hi")
  var viewnote = new Notelistview(notelist)
  console.log(viewnote.text)
  assert.isTrue(viewnote.showlist() === "<ul><li><div>Hello</div></li><li><div>Hi</div></li></ul>");
};
viewNote();
