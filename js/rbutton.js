var Trybutton = React.createClass({
  render: function(){
    return (
      <div  className="btn-try" class="btn-group" role="group">
        <a  classMame="try-link" class="btn btn-default bg-purple"  href="{this.props.tryurl}" target="_blank"> TRY FIRST.</a>
      </div>
    );
  }
});
var Answerbutton = React.createClass({
  render: function(){
    return (
      <div className="btn-ans" class="btn-group" role="group">
        <a  clasNname="ans-link" class="btn btn-default bg-blue"  href="{this.props.ansurl}" target="_blank"> SAMPLE ANSWER.</a>
      </div>
    );
  }
});
var Rbutton =React.createClass({
  render: function(){
    return (
      <div className="btn-r" class="btn-group btn-group-justified" role="group" aria-label="...">
        <Trybutton tryurl={this.props.tryurl}/>
        <Answerbutton ansurl={this.props.ansurl}/>
      </div>
    );
  }
});

var makerbutton=function(urls){
  for(var i=0; i<urls.length;i++){
    var tryurl="http://runnable.com/"+urls[i].try;
    console.log("try:"+tryurl);
    var ansurl="http://runnable.com/"+urls[i].ans;
    console.log("ans:"+ansurl);
    var mybutton=<Rbutton tryurl={tryurl } ansurl={ansurl} />;
    React.render(mybutton,document.getElementById(urls[i].id));
  }
}

