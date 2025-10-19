let j = 0;
let m = 0;
let playlist2Play = false;
let repeatMode = false;
let repeatPlay = document.querySelector(".footer-page .container-2 .upper .end .second")

async function main2() {
  let a = await fetch("json/songs3.json");
  songs2 = await a.json();
  loadSong(n);

  songs2.forEach((element) => {
    let c = new Audio(element.src);
    c.src = element.src;
    c.preload = "metadata";
    c.load();

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
    // document.addEventListener("click", () => {
    //   const unlock = new Audio();
    //   unlock.play().catch(
    //     () => {
    //       console.log("Audio is unlocked");
    //     },
    //     { once: true }
    //   );
    // });
  });
}

main2();

function songDetails2() {
  imgCover.style.backgroundImage = `url(${songs2[m].cover})`;
  songName.textContent = songs2[m].title;
  artistName.textContent = songs2[m].artist;
}

function loadSong2(index) {
  if (b) b.pause();

  b = new Audio(songs2[index].src);
  p = 2;
  playlist2Play = true;

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

function playSvg2() {
  // footer play
  playBtnSvg1.classList.add("display-none");
  playBtnSvg2.classList.remove("display-none");

  // page 3
  playBtn3Svg1.classList.add("display-none");
  playBtn3Svg2.classList.remove("display-none");

  // page 1 upper playlist 2
  page1Play2Svg1.classList.add("display-none");
  page1Play2Svg2.classList.remove("display-none");

  // page 1 lower playlist 1
  page1PlayCont2Svg1.classList.add("display-none");
  page1PlayCont2Svg2.classList.remove("display-none");
}

function pauseSvg2() {
  // footer play
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  // page 3
  playBtn3Svg2.classList.add("display-none");
  playBtn3Svg1.classList.remove("display-none");

  // page 1 upper playlist 2
  page1Play2Svg2.classList.add("display-none");
  page1Play2Svg1.classList.remove("display-none");

  // page 1 lower playlist 1
  page1PlayCont2Svg2.classList.add("display-none");
  page1PlayCont2Svg1.classList.remove("display-none");
}

function phonePlaySvg2() {
  // footer
  playBtnSvg1.classList.add("display-none");
  playBtnSvg2.classList.remove("display-none");

  // page 3
  page3PhonePlaySvg1.classList.add("display-none");
  page3PhonePlaySvg2.classList.remove("display-none");
}

function phonePauseSvg2() {
  // footer
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  // page 3
  page3PhonePlaySvg2.classList.add("display-none");
  page3PhonePlaySvg1.classList.remove("display-none");
}

songsContainer2.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  m = id;
  loadSong2(m);
  playSvg2();
  songDetails2();
});

phoneSongsContainer2.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  console.log(id);
  m = id;
  loadSong2(m);
  phonePlaySvg2();
  songDetails2();
});

page3PhonePlay.addEventListener("click", () => {
  if (j == 0) {
    loadSong2type(m);
  }
  if (b.paused) {
    b.play();
    phonePlaySvg2();
    phonePauseSvg();
    console.log("Song is played");
    j = 1;
    i = 0;
  } else {
    b.pause();
    phonePauseSvg2();
    console.log("Song is paused");
    j = 1;
    i = 0;
  }
});

page3playBtn.addEventListener("click", () => {
  if (j == 0) {
    loadSong2type(m);
  }
  if (b.paused) {
    b.play();
    playSvg2();
    console.log("Song is played");
    j = 1;
    i = 0;
  } else {
    b.pause();
    pauseSvg2();
    console.log("Song is paused");
    j = 1;
    i = 0;
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

playlist1.addEventListener("click", () => {
  if (window.innerWidth > 1025) {
    showPage(".page-2", ".page-1");
  } else {
    showPage(".page-2-phone", ".page-1-phone");
  }
});

playlist2.addEventListener("click", () => {
  if (window.innerWidth > 1025) {
    showPage(".page-3", ".page-1");
  } else {
    showPage(".page-3-phone", ".page-1-phone");
  }
});

page1PlayCont2Btn1.addEventListener("click", (e) => {
  e.stopPropagation();
  if (j == 0) {
    loadSong2type(m);
  }
  if (b.paused) {
    b.play();
    playSvg2();
    j = 1;
  } else {
    b.pause();
    pauseSvg2();
    j = 1;
  }
});

page1PlayCont2.addEventListener("click", () => {
  showPage(".page-3", ".page-1");
});

phonePage1PlayCont2.addEventListener("click", () => {
  showPage(".page-3-phone", ".page-1-phone");
});

page1PlayCont1Btn2.addEventListener("click", (e) => {
  e.stopPropagation();
  if (j == 0) {
    loadSong2type(m);
  }
  if (b.paused) {
    b.play();
    playSvg2();
    console.log("Song is played");
    j = 1;
  } else {
    b.pause();
    pauseSvg2();
    console.log("Song is paused");
    j = 1;
  }
});

pageChange1PlayBtn2.addEventListener("click", () => showChangePage(".page-3"));

phonePageChange2.addEventListener("click", () =>
  showChangePage(".page-3-phone")
);

playBtn.addEventListener("click", () => {
  if (b.paused) {
    b.play();
    playSvg();
    phonePlaySvg();
    playSvg2();
    phonePlaySvg2();
    console.log("Song is played");
  } else {
    b.pause();
    pauseSvg();
    phonePauseSvg();
    pauseSvg2();
    phonePauseSvg2();
    console.log("Song is paused");
  }
});

randomPlay.addEventListener("click", () => {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    if (p === 1) {
      let r = Math.floor(Math.random() * 7);
      n = r;
      b.play();
      playSvg();
      loadSong(n);
    } else if (p === 2) {
      let r = Math.floor(Math.random() * 34);
      m = r;
      b.play();
      playSvg2();
      loadSong2(n);
    }
  } else {
    if (p === 1) {
      let r = Math.floor(Math.random() * 7)
      n = r;
      b.play();
      playSvg();
      loadSong(n);
    } else if (p === 2) {
      let r = Math.floor(Math.random() * 34);
      m = r;
      b.play();
      playSvg2();
      loadSong2(n);
    }
  }
});

repeatPlay.addEventListener("click", () => {
  repeatMode = true;
})

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
    if (p === 1) {
      n--;
      if (n < 0) {
        n = songs.length - 1;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
    } else if (p === 2) {
      m--;
      if (m < 0) {
        m = songs2.length - 1;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
    }
  } else {
    if (p === 1) {
      n--;
      if (n < 0) {
        n = songs.length - 1;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
    } else if (p === 2) {
      m--;
      if (m < 0) {
        m = songs2.length - 1;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
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
    if (p === 1) {
      n++;
      if (n >= songs.length) {
        n = 0;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
    } else if (p === 2) {
      m++;
      if (m >= songs2.length) {
        m = 0;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
    }
  } else {
    if (p === 1) {
      n++;
      if (n >= songs.length) {
        n = 0;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
    } else if (p === 2) {
      m++;
      if (m >= songs2.length) {
        m = 0;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
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
    if (p === 1) {
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
    } else if (p === 2) {
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
    }
  } else {
    if (p === 1) {
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
    } else if (p === 2) {
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
    }
  }
}

// recent playlists

let playlists = document.querySelectorAll(
    ".page-1 .container-class .recently-played .content-container>div"
  ),
  recentContainer = document.querySelector(
    ".page-1 .container-class .recently-played"
  );

playlists.forEach((playlist) => {
  playlist.style.display = "none";
  recentContainer.style.height = "0%";
  recentContainer.style.display = "none";
});

function addTORecent() {
  if (playlist2Play) {
    playlists[0].style.display = "flex";
    recentContainer.style.height = "50%";
    recentContainer.style.display = "flex";
  }
}

let phonePlaylists = document.querySelectorAll(
    ".page-1-phone .phone-container-class .recently-played .content-container>div"
  ),
  phoneRecentContainer = document.querySelector(
    ".page-1-phone .phone-container-class .recently-played"
  );

phonePlaylists.forEach((playlist) => {
  playlist.style.display = "none";
  phoneRecentContainer.style.height = "0%";
});

function phoneAddTORecent() {
  if (playlist2Play) {
    phonePlaylists[0].style.display = "flex";
    phoneRecentContainer.style.height = "25%";
  }
}
