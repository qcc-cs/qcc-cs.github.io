var Trybutton = React.createClass({displayName: "Trybutton",
  render: function(){
    return (
        React.createElement("a", {role: "button", classMame: "btn btn-default bg-purple", href: this.props.tryurl, target: "_blank"}, " TRY FIRST.")
    );
  }
});
var Answerbutton = React.createClass({displayName: "Answerbutton",
  render: function(){
    return (
        React.createElement("a", {role: "button", clasNname: "btn btn-default bg-blue", href: this.props.ansurl, target: "_blank"}, " SAMPLE ANSWER.")
    );
  }
});
var Rbutton =React.createClass({displayName: "Rbutton",
  render: function(){
    return (
      React.createElement("div", {className: "btn-group btn-group-justified", role: "group", "aria-label": "..."}, 
        React.createElement(Trybutton, {tryurl: this.props.tryurl}), 
        React.createElement(Answerbutton, {ansurl: this.props.ansurl})
      )
    );
  }
});
function makerbutton(urls){ //http://stackoverflow.com/a/2223341
  for(var i=0; i<urls.length;i++){
    var tryurl="http://runnable.com/"+urls[i].try;
    console.log("try:"+tryurl);
    var ansurl="http://runnable.com/"+urls[i].ans;
    console.log("ans:"+ansurl);
    var mybutton=React.createElement(Rbutton, {tryurl: tryurl, ansurl: ansurl});
    React.render(mybutton,document.getElementById(urls[i].id));
  }
}
