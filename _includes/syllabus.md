<div class="container">
<div class="row text-left">
  {%include instructor.md%}
</div>
<div class="row text-left">
  <div class="col-md-6 ">
    {%capture md%}{%include classmeets.md%}{%endcapture%}{{md|markdownify}}
  </div>
  <div class="col-md-6 ">
    {%capture md%}{%include officehours.md%}{%endcapture%}{{md|markdownify}}
  </div>
</div>
</div>
  {%capture md%}{%include officehours.md%}{%endcapture%}{{md}}
