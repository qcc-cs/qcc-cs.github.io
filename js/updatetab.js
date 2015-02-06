var Latexdown={
  delay: 50,        // delay after keystroke before updating

  previewid: null,
  bufferbid: null,
  eventtabid: null,
  preview: null,     // filled in by Init below
  buffer: null,  

  timeout: null,     // store setTimout id
  mjRunning: false,  // true when MathJax is processing
  oldText: null,     // used to check if an update is needed
  
  Init: function (pid,bid,eid) {
    this.previewid=pid;
    this.bufferid=bid;
    this.eventtabid=eid;
    this.preview=document.getElementById(this.previewid);
    this.buffer=document.getElementById(this.bufferid);
  },
  SwapBuffers: function () {
    var buffer = this.preview, preview = this.buffer;
    this.buffer = buffer; this.preview = preview;
    buffer.style.display = "none";
    buffer.style.position = "absolute";
    preview.style.position = ""; 
    preview.style.display = "";
  },
  Update: function () {
    if (this.timeout) {clearTimeout(this.timeout)}
    this.timeout = setTimeout(this.callback,this.delay);
  },
  PreviewHtml: function () {
    this.mjRunning = false;
    this.SwapBuffers();
  },
  PreviewMark: function () {
    this.mjRunning = false;
    text = this.buffer.innerHTML;
    //text = text.replace(/^&gt;/mg, '>');
    this.buffer.innerHTML = marked (text);
    this.SwapBuffers();
    
  },
  IsMarkdown: function(url){
    if( url== null) return false;
    ext = url.split('.').pop().toLowerCase();  
    if ($.inArray(ext, ['md', 'markdown', 'mdown', 'mkdn', 'mkd', 'mdtxt', 'mdtext']) == -1) {
        return false;
    }
    else{
        return true;
    }
  },
  UpdateTab: function(url , pane){
    var _this=this;
    $.get(url, function(data) {
        this.timeout = null;
        if (_this.mjRunning) return;
        var text = data;
        if (text === _this.oldtext) return;
        //text = _this.Escape(text);
        _this.buffer.innerHTML = _this.oldtext = text;
        _this.mjRunning = true;
        if(_this.IsMarkdown(url)  ){
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,_this.buffer],["PreviewMark",_this]);
        }
        else{
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,_this.buffer],["PreviewHTML",_this]);
        }
        makerbutton();
        pane.tab('show');
    });
  },
  Escape: function (html, encode) {
    return html
      .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
     .replace(/'/g, '&#39;');
  }
};
Latexdown.callback=MathJax.Callback(["UpdateTab",Latexdown]);
Latexdown.callback.autoReset = true;

