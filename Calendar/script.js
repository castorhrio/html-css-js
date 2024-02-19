const date = new Date();

const renderCalendar = () => {
  date.setDate(1);
  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  let index_temp = date.getDay() - 1;
  const firstDayIndex = index_temp > 0 ? index_temp : 6;
  console.log(date.getDay());
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex;

  console.log(firstDayIndex, lastDayIndex, prevLastDay, lastDay, nextDays);

  const month = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  document.querySelector(".date h1").innerHTML = month[date.getMonth()];
  document.querySelector(".date p").innerHTML = show_date();

  let days = "";
  for (var i = firstDayIndex; i > 0; i--) {
    days += `<div class="prev-date">${prevLastDay - i + 1}</div>`;
  }

  for (var i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (var i = 1; i <= nextDays; i++) {
    days += `<div class="next-date">${i}</div>`;
    monthDays.innerHTML = days;
  }

  function show_date() {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = new Date().getDate();
    return year + " 年 " + month + " 月 " + day + " 日 ";
  }
};

renderCalendar();

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
