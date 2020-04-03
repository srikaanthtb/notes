(function(exports) {
function Notelistview(notelist) {
 this.notelist = notelist;
};


Notelistview.prototype.showlist = function () {
string = "<ul>"
 for (let i = 0; i < this.notelist.givelist().length; i++) {
   var n = this.notelist.givelist()[i].text
   console.log(n.slice(0,20));
  // var singlenoteview = new Singlenoteview(n);
  var showsinglenote = n.slice(0,20);
   string += "<li><div>" + showsinglenote + "</div></li>"
 }
 string = string + "</ul>"
 return string
};

exports.Notelistview = Notelistview
})(this)
