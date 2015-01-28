var Trybutton = React.createClass({
  render: function(){
    return (
        <a  role="button" classMame="btn btn-default bg-purple"   href={this.props.tryurl}  target="_blank"> TRY FIRST.</a>
    );
  }
});
var Answerbutton = React.createClass({
  render: function(){
    return (
        <a  role="button" clasNname="btn btn-default bg-blue"   href={this.props.ansurl} target="_blank"> SAMPLE ANSWER.</a>
    );
  }
});
var Rbutton =React.createClass({
  render: function(){
    return (
      <div className="btn-group btn-group-justified" role="group" aria-label="...">
        <Trybutton tryurl={this.props.tryurl}/>
        <Answerbutton ansurl={this.props.ansurl}/>
      </div>
    );
  }
});
function makerbutton(urls){ //http://stackoverflow.com/a/2223341
  for(var i=0; i<urls.length;i++){
    var tryurl="http://runnable.com/"+urls[i].try;
    console.log("try:"+tryurl);
    var ansurl="http://runnable.com/"+urls[i].ans;
    console.log("ans:"+ansurl);
    var mybutton=<Rbutton tryurl={tryurl} ansurl={ansurl} />;
    React.render(mybutton,document.getElementById(urls[i].id));
  }
}

