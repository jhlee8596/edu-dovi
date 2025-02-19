let hasTriggered = false;

function RollingNum(selector, number) {
  const el = document.querySelector(selector);
  el.textContent = '';
  number.toString().split('').forEach((digit, i) => {
    const digitEl = document.createElement('span');
    digitEl.className = 'num';
    digitEl.innerHTML = `<span class="num-list">${'0123456789'.split('').join('<br>')}</span>`;
    el.appendChild(digitEl);
    setTimeout(() => digitEl.querySelector('.num-list').style.marginTop = `-${digit * 40}px`, i * 500);
  });
}

const consultationSchedule = [
  { startHour: 0, count: 30 },
  { startHour: 6, count: 29 },
  { startHour: 9, count: 24 },
  { startHour: 12, count: 16 },
  { startHour: 15, count: 10 },
  { startHour: 18, count: 5 },
  { startHour: 21, count: 3 },
  { startHour: 23, count: 1 }
];

function getConsultationCountByTime() {
  const currentHour = new Date().getHours();
  let currentCount = 1;
  for (let schedule of consultationSchedule) {
    if (currentHour >= schedule.startHour) {
      currentCount = schedule.count;
    } else {
      break;
    }
  }
  return currentCount;
}

function getDailySatisfactionScore() {
  if (!localStorage.getItem('satisfactionDate') || localStorage.getItem('satisfactionDate') !== new Date().toDateString()) {
    const score = (Math.random() * 0.2 + 4.6).toFixed(1);
    localStorage.setItem('satisfactionScore', score);
    localStorage.setItem('satisfactionDate', new Date().toDateString());
  }
  return localStorage.getItem('satisfactionScore');
}

function getStudentCount() {
  const currentMonth = new Date().getMonth();
  if (!localStorage.getItem('lastUpdateMonth') || parseInt(localStorage.getItem('lastUpdateMonth')) !== currentMonth) {
    let count = parseInt(localStorage.getItem('studentCount') || 2082) + 2;
    localStorage.setItem('studentCount', count);
    localStorage.setItem('lastUpdateMonth', currentMonth);
  }
  return localStorage.getItem('studentCount');
}

$(window).on('scroll', function () {
  if (!hasTriggered) {
    let scrollPos = $(window).scrollTop();
    let windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      // 모바일
      if (scrollPos >= 215) {
        hasTriggered = true;
        $('.reason-title, .hero-stats').addClass('fade-in');
        RollingNum('#student-count', getStudentCount());
        $('#consultation-count').text(getConsultationCountByTime() + "/30명");
        $('#satisfaction-score').text(getDailySatisfactionScore());
      }
    } else {
      // PC
      if (scrollPos >= 400) {
        hasTriggered = true;
        $('.reason-title, .hero-stats').addClass('fade-in');
        RollingNum('#student-count', getStudentCount());
        $('#consultation-count').text(getConsultationCountByTime() + "/30명");
        $('#satisfaction-score').text(getDailySatisfactionScore());
      }
    }
  }
});