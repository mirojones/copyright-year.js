function copyrightYear(element, startYear) {
  const el = document.getElementById(element);
  
  let date = new Date(),
      year = date.getFullYear();
  
  if (year == startYear) {
    el.innerHTML = year;
    el.datetime = year;
  } else {
    el.innerHTML = startYear + "–" + year;
    el.datetime = startYear + "–" + year;
  }
}
