// Quiz
function calcolo() {
  var corrette = 0;
  var errate = 0;


  if(document.getElementById('Q01A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }
  if(document.getElementById('Q02A1').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }
  if(document.getElementById('Q03A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }
  if(document.getElementById('Q04A2').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }
  if(document.getElementById('Q05A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }
  if(document.getElementById('Q06A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }
  if(document.getElementById('Q07A2').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }
  if(document.getElementById('Q08A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }
  if(document.getElementById('Q09A1').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }
  if(document.getElementById('Q10A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1
  }

  if(corrette>5) {
    document.getElementById('show-1').style.display="none";
    document.getElementById('show-2').style.display="block";
    document.getElementById('show-3').style.display="none";
   }
  else{
    document.getElementById('show-1').style.display="none";
    document.getElementById('show-2').style.display="none";
    document.getElementById('show-3').style.display="block";
  }

  document.getElementById("a-true").innerHTML = corrette;
  document.getElementById("a-false").innerHTML = errate;
  document.getElementById("a-percentage").innerHTML = corrette/10*100+"%";
}

// AOS animation library
AOS.init({
  offset: 300,
  duration: 1100,
});

// Fluid scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
