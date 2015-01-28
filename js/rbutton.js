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
        React.createElement("a", {className: "btn btn-success pull-right", href: this.props.ansurl, target: "_blank"}, "ANSWER")
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
  //rbutton-1-3-1
  //http://stackoverflow.com/a/5616842
  //http://stackoverflow.com/a/3239600
  //http://stackoverflow.com/a/5181740
  //http://www.sitepoint.com/jquery-each-examples/
  //http://stackoverflow.com/a/7364307
  var id,tryurl,ansurl;
  $('#my-pagination-content [id^="rbutton-"]').each(
    function(index1, value1) {
      id = $(this).attr("id");
      tryurl= $(this).attr("data-try");
      ansurl= $(this).attr("data-ans");
        tryurl = "http://runnable.com/" + tryurl;
        console.log("try:" + tryurl);
        ansurl = "http://runnable.com/" + ansurl;
        console.log("ans:" + ansurl);
        var mybutton = React.createElement(Rbutton, {tryurl: tryurl, ansurl: ansurl});
        React.render(mybutton, document.getElementById(id))
    }
  );
}
