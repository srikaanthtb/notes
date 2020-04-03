(function(exports) {
function Note(text, id= "noid") {
 this.text = text || 'i like javascript';
 this.id = id
};

Note.prototype.notegive = function () {
  return this.text;
};

exports.Note = Note;
}) (this);
