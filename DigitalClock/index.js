setInterval(function time() {
    let current = new Date();
    let cTime =
      current.getHours() +
      ':' +
      current.getMinutes() +
      ':' +
      current.getSeconds();
    document.getElementById('clock').innerHTML = cTime;
  });
  
  function date(){
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let day =`${[current.getDay()]}`;
    document.getElementById('date').innerHTML= `${weekday[day]} (${date})`;
  
  }
  date()
  