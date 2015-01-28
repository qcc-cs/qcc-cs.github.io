function updatetab(url, pane, json) {
      // From http://stackoverflow.com/a/651735
      var ext = url.split('.').pop().toLowerCase();
      var ismd = true;
      if ($.inArray(ext, ['md', 'markdown', 'mdown', 'mkdn', 'mkd', 'mdtxt', 'mdtext']) == -1) {
        ismd = false;
      }
 
      $.get(url, function(data) {
        if (ismd) {
          $('#my-pagination-content').html(marked(data));
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, "my-pagination-content"]);
        } else {
          $('#my-pagination-content').html(data);
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, "my-pagination-content"]);
        }
        
        /*
        console.log("json1:"+json);
        if (json !== "lectures/") {
          console.log("json2:"+json);
          $.ajax({
            url: json,
            dataType: "jsonp",
            jsonpCallback: "a/b:c",
            success: function(data) {
              console("data:"+data);
              makerbutton(data);
            }
          })
        }*/
      });
      if (json !== "lectures/") {
            console.log("run makerbutton");
            makerbutton(lecbuttons);
      }
      pane.tab('show');
    }
