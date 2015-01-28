var Trybutton = React.createClass({
  render: function(){
    return (
        <a  className="btn btn-info pull-left"   href={this.props.tryurl}  target="_blank">TRY.</a>
    );
  }
});
var Answerbutton = React.createClass({
  render: function(){
    return (
        <a   className="btn btn-success pull-right"   href={this.props.ansurl} target="_blank">ANSWER</a>
    );
  }
});
var Rbutton =React.createClass({
  render: function(){
    return (
      <div className="text-center row">
        <Trybutton tryurl={this.props.tryurl}/>
        <Answerbutton ansurl={this.props.ansurl}/>
      </div>
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
  var id,try,ans,tryurl,ansurl;
  $('#my-pagination-content [id^="rbutton-"]').each(
    function(index1, value1) {
      id = $(this).attr("id");
      try= $(this).attr("data-try");
      ans= $(this).attr("data-ans");
        tryurl = "http://runnable.com/" + try;
        console.log("try:" + tryurl);
        ansurl = "http://runnable.com/" + ans;
        console.log("ans:" + ansurl);
        var mybutton = < Rbutton tryurl = {tryurl} ansurl = {ansurl}/>;
        React.render(mybutton, document.getElementById(id))
    }
  );
}
