<div class="text-left"> 
 {% capture my_include %}{%include instructor.md%}{% endcapture%} {{my_include| markdownify|.text-left}}
</div>

{% capture my_include %}{%include classmeets.md%}{% endcapture%} {{my_include| markdownify}}

{% capture my_include %}{%include officehours.md%}{% endcapture%} {{my_include| markdownify}}

