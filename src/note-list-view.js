(function(exports) {
function Notelistview(notelist) {
 this.notelist = notelist;
};


Notelistview.prototype.showlist = function () {
string = "<ul>"
 for (let i = 0; i < this.notelist.givelist().length; i++) {
   var n = this.notelist.givelist()[i].text
   console.log(n);
   var singlenoteview = new Singlenoteview(n);
   string += "<li>" + singlenoteview.shownote() + "</li>"
 }
 string = string + "</ul>"
 return string
};

exports.Notelistview = Notelistview
})(this)
