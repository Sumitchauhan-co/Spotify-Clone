let m = 0;
let playlist2Play = false;
let repeatMode = false;
let repeatPlay = document.querySelector(
  ".footer-page .container-2 .upper .end .second"
);
let home = document.querySelector(".header .home-button");
let sec2Page2Songs = 0;

async function main2() {
  let a = await fetch("json/songs3.json");
  songs2 = await a.json();
  loadSong(n);

  songs2.forEach((element) => {
    let c = new Audio(element.src);

    songsContainer2.insertAdjacentHTML(
      "beforeend",
      `<div class="song-${element.id}" data-id="${element.id}">
            <div class="num">${element.id}</div>
            <div class="cover" style="background-image: url(${element.cover});"></div>
            <div class="song-details">
                <div class="song-name">${element.title}</div>
                <div class="song-artist">${element.artist}</div>
            </div>
            <div class="name">${element.title}</div>
            <div class="date">25 Sep, 2025</div>
            <div class="duration" id="duration-${element.id}">--:--</div>
       </div>`
    );
    phoneSongsContainer2.insertAdjacentHTML(
      "beforeend",
      `<div class="song-${element.id}" data-id="${element.id}">
            <div class="num">${element.id}</div>
            <div class="cover" style="background-image: url(${element.cover});"></div>
            <div class="song-details">
                <div class="song-name">${element.title}</div>
                <div class="song-artist">${element.artist}</div>
            </div>
            <div class="name">${element.title}</div>
            <div class="date">25 Sep, 2025</div>
            <div class="duration" id="duration-phone-${element.id}">--:--</div>
        </div>`
    );

    c.addEventListener("loadedmetadata", () => {
      let d = formatTime(c.duration);
      document.querySelector(`#duration-${element.id}`).textContent = d;
    });
    c.addEventListener("loadedmetadata", () => {
      let e = formatTime(c.duration);
      document.querySelector(`#duration-phone-${element.id}`).textContent = e;
    });

    sec2PageSongs = document.querySelectorAll(
      ".section-2 .songs-container > div "
    );
    sec2ScrollContainer = document.querySelectorAll(
      ".section-2 .songs-container div > div:nth-child(3)"
    );
    sec2ScrollName = document.querySelectorAll(
      ".section-2 .songs-container div > div:nth-child(3) > div:nth-child(1)"
    );
  });
}

main2();

function songDetails2() {
  imgCover.style.backgroundImage = `url(${songs2[m].cover})`;
  imgBanner.style.backgroundImage = `url(${songs2[m].cover})`;
  songName.textContent = songs2[m].title;
  artistName.textContent = songs2[m].artist;
  sec3SongName.forEach((element) => {
    element.textContent = songs2[m].title;
  });
  sec3Artist.textContent = songs2[m].artist;
}

function loadSong2(index) {
  if (b) b.pause();

  b = new Audio(songs2[index].src);
  playlist2Play = true;
  playlistPlay = false;

  b.addEventListener("loadedmetadata", () => {
    document.querySelector(".lower .duration").textContent = formatTime(
      b.duration
    );
  });

  b.addEventListener("timeupdate", () => {
    document.querySelector(".lower .current").textContent = formatTime(
      b.currentTime
    );
    let percent = (b.currentTime / b.duration) * 100;
    bar.style.width = percent + "%";
  });

  b.addEventListener("ended", () => {
    if (repeatMode) {
      currentSong();
    } else {
      nextSong();
    }
  });

  addTORecent();
  phoneAddTORecent();
  songDetails2();
  b.play();
}

function loadSong2type(index) {
  if (b) b.pause();

  b = new Audio(songs2[index].src);
  playlist2Play = true;
  playlistPlay = false;

  b.addEventListener("loadedmetadata", () => {
    document.querySelector(".lower .duration").textContent = formatTime(
      b.duration
    );
  });

  b.addEventListener("timeupdate", () => {
    document.querySelector(".lower .current").textContent = formatTime(
      b.currentTime
    );
    let percent = (b.currentTime / b.duration) * 100;
    bar.style.width = percent + "%";
  });

  b.addEventListener("ended", () => {
    if (repeatMode) {
      currentSong();
    } else {
      nextSong();
    }
  });

  addTORecent();
  phoneAddTORecent();
  songDetails2();
}

function scroll() {
  if (sec3ScrollName.scrollWidth > sec3ScrollContainer.clientWidth) {
    sec3ScrollName.classList.add("scrolling");
  } else {
    sec3ScrollName.classList.remove("scrolling");
  }
  for (let i = 0; i < sec2ScrollName.length; i++) {
    for (let j = 0; j < sec2ScrollContainer.length; j++) {
      if (i === j) {
        if (
          sec2ScrollName[i].scrollWidth > sec2ScrollContainer[j].clientWidth
        ) {
          sec2ScrollName[i].classList.add("scrolling");
          break;
        } else {
          sec2ScrollName[i].classList.remove("scrolling");
          break;
        }
      }
    }
  }
}

function playSvg2() {
  // footer play
  playBtnSvg1.classList.add("display-none");
  playBtnSvg2.classList.remove("display-none");

  // page 3
  playBtn3Svg1.classList.add("display-none");
  playBtn3Svg2.classList.remove("display-none");

  // page 1 upper playlist 2
  pagePlay2Svg1.classList.add("display-none");
  pagePlay2Svg2.classList.remove("display-none");

  // page 1 lower playlist 1
  pagePlayCont2Svg1.classList.add("display-none");
  pagePlayCont2Svg2.classList.remove("display-none");
}

function pauseSvg2() {
  // footer play
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  // page 3
  playBtn3Svg2.classList.add("display-none");
  playBtn3Svg1.classList.remove("display-none");

  // page 1 upper playlist 2
  pagePlay2Svg2.classList.add("display-none");
  pagePlay2Svg1.classList.remove("display-none");

  // page 1 lower playlist 1
  pagePlayCont2Svg2.classList.add("display-none");
  pagePlayCont2Svg1.classList.remove("display-none");
}

function phonePlaySvg2() {
  // footer
  playBtnSvg1.classList.add("display-none");
  playBtnSvg2.classList.remove("display-none");

  // page 3
  page2PhonePlaySvg1.classList.add("display-none");
  page2PhonePlaySvg2.classList.remove("display-none");
}

function phonePauseSvg2() {
  // footer
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  // page 3
  page2PhonePlaySvg2.classList.add("display-none");
  page2PhonePlaySvg1.classList.remove("display-none");
}

songsContainer2.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  m = id;
  loadSong2(m);
  playSvg2();
  songDetails2();
  scroll();
});

phoneSongsContainer2.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  m = id;
  loadSong2(m);
  phonePlaySvg2();
  songDetails2();
  scroll();
});

page2PhonePlay.addEventListener("click", () => {
  if (!playlist2Play) {
    loadSong2type(m);
    scroll();
  }
  if (b.paused) {
    b.play();
    phonePauseSvg();
    phonePlaySvg2();
  } else {
    b.pause();
    phonePauseSvg2();
  }
});

page2playBtn.addEventListener("click", () => {
  if (!playlist2Play) {
    loadSong2type(m);
    scroll();
  }
  if (b.paused) {
    b.play();
    pauseSvg();
    playSvg2();
  } else {
    b.pause();
    pauseSvg2();
  }
});

function showPage(pageSelector, defaultSelector) {
  let page = document.querySelector(pageSelector);
  let defaultPage = document.querySelector(defaultSelector);
  let isVisible = page && !page.classList.contains("display-none");

  // Hide all pages
  document.querySelectorAll(".section-2 > div").forEach((page) => {
    page.classList.add("display-none");
  });
  if (window.innerWidth > 1025) {
    if (isVisible) {
      // If already visible, show default page
      page.classList.add("display-none");
      if (defaultPage) defaultPage.classList.remove("display-none");
    } else if (page) {
      // Show the selected page
      page.classList.remove("display-none");
      defaultPage.classList.add("display-none");
    }
  } else {
    if (isVisible) {
      // If already visible, show default page
      page.classList.add("display-none");
      if (defaultPage) defaultPage.classList.remove("display-none");
    } else if (page) {
      // Show the selected page
      page.classList.remove("display-none");
      defaultPage.classList.add("display-none");
    }
  }
}

playlist2.addEventListener("click", () => {
  if (window.innerWidth > 1025) {
    showPage(".page-2", ".homePage");
  } else {
    showPage(".page-2-phone", ".homePage-phone");
  }
});

pagePlayCont2Btn1.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!playlist2Play) {
    loadSong2type(m);
    scroll();
  }
  if (b.paused) {
    b.play();
    playSvg2();
    pauseSvg();
  } else {
    b.pause();
    pauseSvg2();
  }
});

pagePlayCont2.addEventListener("click", () => {
  showPage(".page-2", ".homePage");
});

phonePagePlayCont2.addEventListener("click", () => {
  showPage(".page-2-phone", ".homePage-phone");
});

pagePlayCont1Btn2.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!playlist2Play) {
    loadSong2type(m);
    scroll();
  }
  if (b.paused) {
    b.play();
    playSvg2();
    pauseSvg();
  } else {
    b.pause();
    pauseSvg2();
  }
});

pageChange1PlayBtn2.addEventListener("click", () => showChangePage(".page-2"));

phonePageChange2.addEventListener("click", () =>
  showChangePage(".page-2-phone")
);

playBtn.addEventListener("click", () => {
  if (b.paused) {
    b.play();
    playSvg();
    phonePlaySvg();
    playSvg2();
    phonePlaySvg2();
  } else {
    b.pause();
    pauseSvg();
    phonePauseSvg();
    pauseSvg2();
    phonePauseSvg2();
  }
});

randomPlay.addEventListener("click", () => {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    if (playlistPlay) {
      let r = Math.floor(Math.random() * 7);
      n = r;
      b.play();
      playSvg();
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      let r = Math.floor(Math.random() * 34);
      m = r;
      b.play();
      playSvg2();
      loadSong2(n);
      scroll();
    }
  } else {
    if (playlistPlay) {
      let r = Math.floor(Math.random() * 7);
      n = r;
      b.play();
      playSvg();
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      let r = Math.floor(Math.random() * 34);
      m = r;
      b.play();
      playSvg2();
      loadSong2(n);
      scroll();
    }
  }
});

home.addEventListener("click", () => {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    showChangePage(".homePage-phone");
  } else {
    showChangePage(".homePage");
  }
});

repeatPlay.addEventListener("click", () => {
  repeatMode = true;
});

prevBtn.addEventListener("click", () => {
  prevSong();
});

function prevSong() {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    if (playlistPlay) {
      n--;
      if (n < 0) {
        n = songs.length - 1;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      m--;
      if (m < 0) {
        m = songs2.length - 1;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  } else {
    if (playlistPlay) {
      n--;
      if (n < 0) {
        n = songs.length - 1;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      m--;
      if (m < 0) {
        m = songs2.length - 1;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  }
}

nextBtn.addEventListener("click", () => {
  nextSong();
});

function nextSong() {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    if (playlistPlay) {
      n++;
      if (n >= songs.length) {
        n = 0;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      m++;
      if (m >= songs2.length) {
        m = 0;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  } else {
    if (playlistPlay) {
      n++;
      if (n >= songs.length) {
        n = 0;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      m++;
      if (m >= songs2.length) {
        m = 0;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  }
}

function currentSong() {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    if (playlistPlay) {
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  } else {
    if (playlistPlay) {
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  }
}

// recent playlists

let playlists = document.querySelectorAll(
    ".homePage .container-class .recently-played .content-container>div"
  ),
  recentContainer = document.querySelector(
    ".homePage .container-class .recently-played"
  );

playlists.forEach((playlist) => {
  playlist.style.display = "none";
  recentContainer.style.display = "none";
});

function addTORecent() {
  if (playlist2Play) {
    playlists[0].style.display = "flex";
    recentContainer.style.display = "flex";
  }
}

let phonePlaylists = document.querySelectorAll(
    ".homePage-phone .phone-container-class .recently-played .content-container>div"
  ),
  phoneRecentContainer = document.querySelector(
    ".homePage-phone .phone-container-class .recently-played"
  );

phonePlaylists.forEach((playlist) => {
  playlist.style.display = "none";
  phoneRecentContainer.style.display = "none";
});

function phoneAddTORecent() {
  if (playlist2Play) {
    phonePlaylists[0].style.display = "flex";
    phoneRecentContainer.style.display = "flex";
  }
}
