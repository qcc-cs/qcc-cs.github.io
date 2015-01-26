<div class="container">
<div class="row text-left">
  {% capture my_include %}{%include instructor.md%}{% endcapture%} {{my_include| markdownify}}
</div>
<div class="row text-left">
  <div class="col-md-6 ">
    {%include classmeets.md%}
  </div>
  <div class="col-md-6 ">
    {%include officehours.md%}
  </div>
</div>
</div>
  
