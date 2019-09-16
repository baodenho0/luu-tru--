========================================================================
upload img
----
function readURL(input) {
  if (input.files && input.files[0]) {
    $('img').show();
      var reader = new FileReader();
      reader.onload = function(e) {
          $($(input).attr("data-target")).attr('src', e.target.result);
          $($(input).attr("data-target")).hide();
          $($(input).attr("data-target")).fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }    
}

$("input[type=file]").change(function() {
        readURL(this);
});
========================================================================
----------
