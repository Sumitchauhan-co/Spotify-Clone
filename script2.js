let j = 0;
let m = 0;

async function main2() {
  let a = await fetch("songs3.json");
  songs2 = await a.json();
  loadSong(n);

  songs2.forEach((element) => {
    let c = new Audio(element.src);
    c.src = element.src;
    c.preload = "metadata";
    c.load();
    // console.log(element.src);

    // if (songsContainer2) console.log("songsContainer2 working");
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
      // console.log(d);
    });
    c.addEventListener("loadedmetadata", () => {
      let e = formatTime(c.duration);
      document.querySelector(`#duration-phone-${element.id}`).textContent = e;
      // console.log(d);
    });
    document.addEventListener("click", () => {
      const unlock = new Audio();
      unlock.play().catch(
        () => {
          console.log("Audio is unlocked");
        },
        { once: true }
      );
    });
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
    nextSong2();
  });
  songDetails2();
  b.play();
}

function loadSong2type(index) {
  if (b) b.pause();

  b = new Audio(songs2[index].src);

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
    nextSong2();
  });
  songDetails2();
}

function playSvg2() {
  // footer play
  playBtnSvg1.classList.add("display-none");
  playBtnSvg2.classList.remove("display-none");

  // page 3
  playBtn3Svg1.classList.add("display-none");
  playBtn3Svg2.classList.remove("display-none");

  // page 1 upper playlist 1
  page1Play2Svg1.classList.add("display-none");
  page1Play2Svg2.classList.remove("display-none");

  // page 1 lower playlists
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

  // page 1 upper playlist 1
  page1Play2Svg2.classList.add("display-none");
  page1Play2Svg1.classList.remove("display-none");

  // page 1 lower playlists
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
  // console.log("phonePlaySvg for page 3 worked");
}

function phonePauseSvg2() {
  // footer
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  // page 3
  page3PhonePlaySvg2.classList.add("display-none");
  page3PhonePlaySvg1.classList.remove("display-none");
  //   console.log("phonePauseSvg for page 3 worked");
}

songsContainer2.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  //   console.log(id);
  m = id;
  loadSong2(m);
  playSvg2();
  songDetails2();
  //   console.log(`url(${songs2[m].cover})`);
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
  //   console.log(`url(${songs2[m].cover})`);
});

page3PhonePlay.addEventListener("click", () => {
  if (j == 0) {
    loadSong2type(m);
  }
  if (b.paused) {
    b.play();
    phonePlaySvg2();
    console.log("Song is played");
    j = 1;
  } else {
    b.pause();
    phonePauseSvg2();
    console.log("Song is paused");
    j = 1;
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
  } else {
    b.pause();
    pauseSvg2();
    console.log("Song is paused");
    j = 1;
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
      //   console.log("page alr visible");
    } else if (page) {
      // Show the selected page
      page.classList.remove("display-none");
      defaultPage.classList.add("display-none");
      //   console.log("page visible");
    }
  } else {
    if (isVisible) {
      // If already visible, show default page
      page.classList.add("display-none");
      if (defaultPage) defaultPage.classList.remove("display-none");
      //   console.log("phone page alr visible");
    } else if (page) {
      // Show the selected page
      page.classList.remove("display-none");
      defaultPage.classList.add("display-none");
      //   console.log("phone page visible");
    }
  }
}

playlist1.addEventListener("click", () => {
  if (window.innerWidth > 1025) {
    showPage(".page-2", ".page-1");
    // console.log("page-2");
  } else {
    showPage(".page-2-phone", ".page-1-phone");
    // console.log("page-2-phone");
  }
});

playlist2.addEventListener("click", () => {
  if (window.innerWidth > 1025) {
    showPage(".page-3", ".page-1");
    // console.log("page-3");
  } else {
    showPage(".page-3-phone", ".page-1-phone");
    // console.log("page-3-phone");
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
    // console.log("Song is played");
    j = 1;
  } else {
    b.pause();
    pauseSvg2();
    // console.log("Song is paused");
    j = 1;
  }
});

page1PlayCont2.addEventListener("click", () => {
  showPage(".page-3", ".page-1");
  // console.log("page-3");
});

phonePage1PlayCont2.addEventListener("click", () => {
  showPage(".page-3-phone", ".page-1-phone");
  // console.log("page-3-phone");
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

phonePageChange2.addEventListener("click", () => showChangePage(".page-3-phone"));
