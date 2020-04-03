(function(exports) {
function Singlenoteview(note) {
 this.note = note;
};

Singlenoteview.prototype.shownote = function () {
 return "<div>"+ this.note + "</div>"
};

exports.Singlenoteview = Singlenoteview
})(this)
