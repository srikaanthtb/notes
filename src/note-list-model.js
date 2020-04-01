(function(exports) {
function Notelist() {
 this.list = [];
};


Notelist.prototype.noteadd = function (text) {
  let note = new Note(text);
  this.list.push(note);
  return note
};

Notelist.prototype.givelist = function () {
  return this.list;
};

exports.Notelist = Notelist
})(this);
