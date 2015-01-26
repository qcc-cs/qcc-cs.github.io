<div class="row text-left">
  {%capture md%}{%include instructor.md%}{%endcapture%}
  {{md|markdownify .textleft}}
</div>
<div class="row text-left">
  <div class="col-md-6 ">
    {%include classmeets.md%}
  </div>
  <div class="col-md-6 ">
    {%include officehours.md%}
  </div>
</div>
