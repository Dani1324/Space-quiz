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
