function changeclass(
  event,
  inputId,
  inputIdOff,
  inputIdOff2,
  inputIdOff3,
  inputIdOff4,
  inputIdOff5

) {
  event.preventDefault();
  const change = document.getElementById(inputId);
  change.classList.add("active");
  const others = document.getElementById(inputIdOff);
  others.classList.remove("active");
  const others2 = document.getElementById(inputIdOff2);
  others2.classList.remove("active");
  const others3 = document.getElementById(inputIdOff3);
  others3.classList.remove("active");
  const others4 = document.getElementById(inputIdOff4);
  others4.classList.remove("active");
  const others5 = document.getElementById(inputIdOff5);
  others5.classList.remove("active");
}

function show_hide(
  event,
  inputId,
  inputIdNone,
  inputIdNone2,
  inputIdNone3,
  inputIdNone4,
  inputIdNone5
  
) {
  event.preventDefault();
  {
    document.getElementById(inputId).style.display = "block";
    document.getElementById(inputIdNone).style.display = "none";
    document.getElementById(inputIdNone2).style.display = "none";
    document.getElementById(inputIdNone3).style.display = "none";
    document.getElementById(inputIdNone4).style.display = "none";
    document.getElementById(inputIdNone5).style.display = "none";
    return;
  }
}