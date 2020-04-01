function Note(text) {
 this.text = text || 'i like javascript';
};

Note.prototype.notegive = function () {
  return this.text;
};
