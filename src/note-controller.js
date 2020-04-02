var element = document.getElementById("app");
console.log(element);
element.innerHTML = "Howdy!";


(function(exports) {
  function NoteController(notelist) {
   this.notelistview = new Notelistview(notelist);
  }



  NoteController.prototype.insertHTML = function (notelistview) {
    let html = this.notelistview.showlist();
    let element = document.getElementById("app");
    console.log(element);
    element.innerHTML = html;
    return html
  };
  exports.NoteController = NoteController
})(this);
