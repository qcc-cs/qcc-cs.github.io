var Trybutton = React.createClass({displayName: "Trybutton",
  render: function(){
    return (
        React.createElement("a", {className: "btn btn-info pull-left", href: this.props.tryurl, target: "_blank"}, "TRY.")
    );
  }
});
var Answerbutton = React.createClass({displayName: "Answerbutton",
  render: function(){
    return (
        React.createElement("a", {className: "btn btn-success pull-right", href: this.props.ansurl, target: "_blank"}, "ANSWER.")
    );
  }
});
var Rbutton =React.createClass({displayName: "Rbutton",
  render: function(){
    return (
      React.createElement("div", {className: "text-center row"}, 
        React.createElement(Trybutton, {tryurl: this.props.tryurl}), 
        React.createElement(Answerbutton, {ansurl: this.props.ansurl})
      )
    );
  }
});
function makerbutton(){ //http://stackoverflow.com/a/2223341
  var urls=lecbuttons;
  for(var i=0; i<urls.length;i++){
    var tryurl="http://runnable.com/"+urls[i].try;
    console.log("try:"+tryurl);
    var ansurl="http://runnable.com/"+urls[i].ans;
    console.log("ans:"+ansurl);
    var mybutton=React.createElement(Rbutton, {tryurl: tryurl, ansurl: ansurl});
    React.render(mybutton,document.getElementById(urls[i].id));
  }
}
