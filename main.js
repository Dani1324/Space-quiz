// Quiz
function calcolo() {
  var corrette = 0;
  var errate = 0;
  var nonrisposte = 0;

  // Domanda 1
  document.getElementById('Q01A3-text').style.color='green';
  if(document.getElementById('Q01A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q01A2').checked) {
      document.getElementById('Q01A2-text').style.color='red';
    }
    else {
      if(document.getElementById('Q01A1').checked) {
        document.getElementById('Q01A1-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Domanda 2
  document.getElementById('Q02A1-text').style.color='green';
  if(document.getElementById('Q02A1').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q02A2').checked) {
      document.getElementById('Q02A2-text').style.color='red';
    }
    else {
      if(document.getElementById('Q02A3').checked) {
        document.getElementById('Q02A3-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Domanda 3
  document.getElementById('Q03A3-text').style.color='green';
  if(document.getElementById('Q03A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q03A2').checked) {
      document.getElementById('Q03A2-text').style.color='red';
    }
    else {
      if(document.getElementById('Q03A1').checked) {
        document.getElementById('Q03A1-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Domanda 4
  document.getElementById('Q04A2-text').style.color='green';
  if(document.getElementById('Q04A2').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q04A3').checked) {
      document.getElementById('Q04A3-text').style.color='red';
    }
    else {
      if(document.getElementById('Q03A1').checked) {
        document.getElementById('Q04A1-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Domanda 5
  document.getElementById('Q05A3-text').style.color='green';
  if(document.getElementById('Q05A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q05A2').checked) {
      document.getElementById('Q05A2-text').style.color='red';
    }
    else {
      if(document.getElementById('Q05A1').checked) {
        document.getElementById('Q05A1-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Domanda 6
  document.getElementById('Q06A3-text').style.color='green';
  if(document.getElementById('Q06A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q06A2').checked) {
      document.getElementById('Q06A2-text').style.color='red';
    }
    else {
      if(document.getElementById('Q06A1').checked) {
        document.getElementById('Q06A1-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Domanda 7
  document.getElementById('Q07A2-text').style.color='green';
  if(document.getElementById('Q07A2').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q07A3').checked) {
      document.getElementById('Q07A3-text').style.color='red';
    }
    else {
      if(document.getElementById('Q07A1').checked) {
        document.getElementById('Q07A1-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Domanda 8
  document.getElementById('Q08A3-text').style.color='green';
  if(document.getElementById('Q08A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q08A2').checked) {
      document.getElementById('Q08A2-text').style.color='red';
    }
    else {
      if(document.getElementById('Q08A1').checked) {
        document.getElementById('Q08A1-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Domanda 9
  document.getElementById('Q09A1-text').style.color='green';
  if(document.getElementById('Q09A1').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q09A2').checked) {
      document.getElementById('Q09A2-text').style.color='red';
    }
    else {
      if(document.getElementById('Q09A3').checked) {
        document.getElementById('Q09A3-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Domanda 10
  document.getElementById('Q10A3-text').style.color='green';
  if(document.getElementById('Q10A3').checked) {
    corrette = corrette+1;
   }
  else{
    errate = errate+1;
    if (document.getElementById('Q10A2').checked) {
      document.getElementById('Q10A2-text').style.color='red';
    }
    else {
      if(document.getElementById('Q10A1').checked) {
        document.getElementById('Q10A1-text').style.color='red';
      }
      else{
       nonrisposte = nonrisposte+1;
      }
    }
  }

  // Calcolo risposte corrette, errate e corrette in percentuale
  if(corrette>5) {
    document.getElementById('show-1').style.display="none";
    document.getElementById('show-2').style.display="block";
    document.getElementById('show-3').style.display="none";
    document.getElementById('a-percentage').style.color='green';
  }
  else{
    document.getElementById('show-1').style.display="none";
    document.getElementById('show-2').style.display="none";
    document.getElementById('show-3').style.display="block";
    document.getElementById('a-percentage').style.color='red';
  }

  document.getElementById("a-true").innerHTML = corrette;
  document.getElementById("a-false").innerHTML = errate;
  document.getElementById("a-none").innerHTML = nonrisposte;
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
