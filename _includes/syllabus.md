<div class="container">
<div class="row text-left">
  {% capture my_include %}{%include instructor.md%}{% endcapture%} {{my_include| markdownify}}
</div>
<div class="row text-left">
  <div class="col-md-6 ">
    {% capture my_include %}{%include classmeets.md%}{% endcapture%} {{my_include| markdownify}}
  </div>
  <div class="col-md-6 ">
    {% capture my_include %}{%include officehours.md%}{% endcapture%} {{my_include| markdownify}}
  </div>
</div>
</div>
  
