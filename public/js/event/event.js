// CHANGING EVENTS A/C DATES
const downArrow = document.getElementById("btn1");
const upArrow = document.getElementById("btn2");
const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");

downArrow.addEventListener('click', function() {
    day1.style.display= "none";
    day2.style.display= "block";
});

upArrow.addEventListener('click', function() {
    day1.style.display = 'block';
    day2.style.display= "none";
});


// CHANGING EVENTS A/C ONLINE/OFFLINE MODES
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');

// THIS ENABLES ONLINE => eventMedium = 1
slideLeft.addEventListener('click', () => {
    document.querySelector('.innerLiner').classList.add('moveLeft');
    document.querySelector('.toggle-cover').style.left= '50%';
    eventMediumDecision(1);
      if (x.matches) {
        mobileBtnList.forEach((el) => {
          el.style.transform = 'scale(1)';
          console.log(el);
        });
      }
});

// THIS ENABLES OFFLINE => eventMedium = 0
slideRight.addEventListener('click', () => {
    document.querySelector('.innerLiner').classList.remove('moveLeft');
    document.querySelector('.toggle-cover').style.left= '-2px';
    eventMediumDecision(0);
      if (x.matches) {
        mobileBtnList.forEach((el) => {
          el.style.transform = 'scale(1)';
          console.log(el);
        });
      }
});

// DETAILS OF EVENTS

const detailsOffline = document.querySelectorAll('.event--offline');
const detailsOnline = document.querySelectorAll('.event--online');
let currentOff=0, currentOn=0;

// HIDING ALL
for(let i=0;i< detailsOffline.length; i++) {
    document.querySelector(`#detailsoff--${i}`).classList.add('hidden');
}
for(let i=0;i< detailsOnline.length; i++) {
    document.querySelector(`#detailson--${i}`).classList.add('hidden');
}

// CLICK EVENT

// SELECTING AND DISPLAYING THE FIRST OF BOTH
function eventMediumDecision (eventMedium) {
    if (eventMedium === 0) {
        document.querySelector(`#detailsoff--${currentOff}`).classList.remove('hidden');
        document.querySelector(`#detailson--${currentOn}`).classList.add('hidden');
        detailsOffline[currentOff].style.transform = 'scale(1.2)';
    } else if (eventMedium === 1) {
        document.querySelector(`#detailson--${currentOn}`).classList.remove('hidden');
        document.querySelector(`#detailsoff--${currentOff}`).classList.add('hidden');
        detailsOnline[currentOn].style.transform = 'scale(1.2)';    
    }
}
eventMediumDecision(0);

// OFFLINE
// CLICK
for(let clk =0; clk < detailsOffline.length; clk++) {
    detailsOffline[clk].addEventListener('click', function () {
      currentOff = clk;

      for (let j = 0; j < detailsOffline.length; j++) {
        document.querySelector(`#detailsoff--${j}`).classList.add('hidden');
        detailsOffline[j].style.transform = 'scale(1)';
      }

      document.querySelector(`#detailsoff--${clk}`).classList.remove('hidden');
      detailsOffline[clk].style.transform = 'scale(1.2)';
    });
};

// MOUSEOVER / HOVER EVENT
for(let i=0; i< detailsOffline.length; i++) {
    detailsOffline[i].addEventListener('mouseover', function() {

        if(i===currentOff) ;
        else {
            document.querySelector(`#detailsoff--${currentOff}`).classList.add('hidden');
            document.querySelector(`#detailsoff--${i}`).classList.remove('hidden');
            detailsOffline[i].style.transform = 'scale(1.1)';
        }
});
}

// MOUSEOUT EVENT
for (let i = 0; i < detailsOffline.length; i++) {
  detailsOffline[i].addEventListener('mouseout', function () {
    if (i === currentOff) ;
    else {
      document.querySelector(`#detailsoff--${currentOff}`).classList.remove('hidden');
      document.querySelector(`#detailsoff--${i}`).classList.add('hidden');
      detailsOffline[i].style.transform = 'scale(1)';
    }
  });
}

// *************************** ONLINE *******************************************************
// CLICK
for(let clk =0; clk < detailsOnline.length; clk++) {
    detailsOnline[clk].addEventListener('click', function () {
      currentOn = clk;

      for (let j = 0; j < detailsOnline.length; j++) {
        document.querySelector(`#detailson--${j}`).classList.add('hidden');
        detailsOnline[j].style.transform = 'scale(1)';
      }

      document.querySelector(`#detailson--${clk}`).classList.remove('hidden');
      detailsOnline[clk].style.transform = 'scale(1.2)';
    });
};


// MOUSEOVER / HOVER EVENT
for(let i=0; i< detailsOnline.length; i++) {
    detailsOnline[i].addEventListener('mouseover', function() {

        if(i===currentOn) ;
        else {
            document.querySelector(`#detailson--${currentOn}`).classList.add('hidden');
            document.querySelector(`#detailson--${i}`).classList.remove('hidden');
            detailsOnline[i].style.transform = 'scale(1.1)';
        }
});
}

// MOUSEOUT EVENT
for (let i = 0; i < detailsOnline.length; i++) {
  detailsOnline[i].addEventListener('mouseout', function () {
    if (i === currentOn) ;
    else {
      document.querySelector(`#detailson--${currentOn}`).classList.remove('hidden');
      document.querySelector(`#detailson--${i}`).classList.add('hidden');
      detailsOnline[i].style.transform = 'scale(1)';
    }
  });
}

// mobile view

const x = window.matchMedia('(max-width: 700px)');

  const closeMobile = document.querySelector('.mobile-description');
  const mobilePopup = document.querySelector('.mobile-popup');
  const overlay = document.querySelector('.mobile-overlay');
  const mobileBtnList = document.querySelectorAll('.mobile-btn')

  if(x.matches) {
    mobileBtnList.forEach(el => {
      el.style.transform = 'scale(1)';
    });
  }

   function hidePopup () {
     mobilePopup.classList.add('hidden');
   };

  closeMobile.addEventListener('click', function () {
    mobilePopup.classList.add('hidden');
    console.log('close');
  });
  overlay.addEventListener('click', function() {
    mobilePopup.classList.add('hidden');
    console.log('overlay');
  });

  for( let i=0;i< mobileBtnList.length; i++) {
    mobileBtnList[i].addEventListener('click', () => {
      document.getElementById('mobile--image').src = document.getElementById(`m-img-${i}`).src;
      document.getElementById('mobile--text').innerHTML = document.getElementById(`m-text-${i}`).innerHTML;
      document.getElementById('mobile--date').textContent = document.getElementById(`m-date-${i}`).textContent;
      mobilePopup.classList.remove('hidden');
    });
  }

  hidePopup();

// event menu
    const closeMenuBtn = document.querySelector('.menu-close-btn');
    const menuList = document.querySelector('.menu-list');
    let menuFlag = 0;

    function showMenu() {
      menuFlag = 1;
      menuList.style.transform = 'translate(-50%, -105%) scale(1)';
      menuList.style.opacity = '1';
      menuList.style.display = 'flex';
      menuList.style.zIndex = '1000';
    }
    function hideMenu() {
      menuFlag = 0;
      menuList.style.opacity = '0';
      menuList.style.transform = 'translate(-50%, -40%) scale(0)';
      menuList.style.zIndex = '-10';
    }
    closeMenuBtn.addEventListener('click', () => {
      menuFlag ? hideMenu() : showMenu();
    });

    closeMenuBtn.addEventListener('mouseover', () => {
      closeMenuBtn.style.transform = 'scale(1.1)';
      closeMenuBtn.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, .4)';
    });
    closeMenuBtn.addEventListener('mouseout', () => {
      closeMenuBtn.style.transform = 'scale(1)';
      closeMenuBtn.style.boxShadow = 'none';
    });

    hideMenu();