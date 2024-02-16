function handleInput() {
  let d = document.getElementById("input_day").value;
  let m = document.getElementById("input_month").value;
  let y = document.getElementById("input_year").value;
  if (d > 31) {
    /* do something */
    document.getElementById("error_day").style.display = "block";
  } else {
    document.getElementById("error_day").style.display = "none";
  }
  if (m > 12) {
    document.getElementById("error_month").style.display = "block";
  } else {
    document.getElementById("error_month").style.display = "none";
  }
  if (y > 2024) {
    document.getElementById("error_year").style.display = "block";
  } else {
    document.getElementById("error_year").style.display = "none";
  }
  if (d <= 31 && m <= 12 && y <= 2024) {
    const dob = new Date(`${m}/${d}/${y}`);
    const now = new Date();
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;

    if (yearDiff < 0) console.log("invalid date");
    else if (monthDiff > 0) {
      console.log(yearDiff);
    } else if (monthDiff === 0 && dateDiff >= 0) {
      console.log(yearDiff);
    } else {
      yearDiff = yearDiff - 1;
      if (monthDiff <= 0)
        if (dateDiff > 0) monthDiff = 12 + monthDiff;
        else monthDiff = 11 - monthDiff;
    }
    if (dateDiff < 0) {
      dateDiff = 30 + dateDiff;
      monthDiff -= 1;
    }
    if (yearDiff < 0)
      document.getElementById("currentAge").innerHTML = "Invalid Date";
    else{
        document.getElementById("year_diff").innerHTML = yearDiff
        document.getElementById("month_diff").innerHTML = monthDiff
        document.getElementById("date_diff").innerHTML = dateDiff
    }
  }
}
