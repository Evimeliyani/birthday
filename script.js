// =====================
// UBAH BAGIAN INI AJA ✅
// =====================
const nama = "Biyan"; // ganti nama orangnya
const pesan = `Selamat ulang tahun, ${nama}! 🎉
Semoga hari ini penuh senyum, doa baik, dan hal-hal yang bikin kamu bahagia.
Sehat terus, makin sukses, dan semua yang kamu mau pelan-pelan tercapai ya 🤍.
Semoga di umur yang baru ini kamu makin bahagia, makin kuat, 
dan makin deket sama semua hal yang kamu impikan. Aku bangga banget sama kamu sayang, dan aku seneng bisa ada di samping kamu biyan.`;

const pesanTerakhir = `Terima kasih ya udah jadi versi terbaik dari dirimu.
Semoga tahun ini kamu lebih bahagia dari sebelumnya✨. Dan Semoga aku tetap jadi bagian dari cerita kamu ke depannya. Aamiin✨
Simpel ya Web nya, tapi codingannya ngga simpel huhuuuu`;

// Nomor WA tujuan (pakai 62, tanpa +)
const noWA = "6281223966517"; // ganti nomor WA
const templateBalasan = "Makasih yaa cantiknya Biyan! Aku seneng banget 🥰";
// =====================

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const btnOpen = document.getElementById("btnOpen");
const btnNext = document.getElementById("btnNext");
const btnReplay = document.getElementById("btnReplay");
const btnMusic = document.getElementById("btnMusic");
const btnWA = document.getElementById("btnWA");

const typingEl = document.getElementById("typing");
const finalMsgEl = document.getElementById("finalMsg");
const audio = document.getElementById("audio");

btnWA.href = `https://wa.me/${noWA}?text=${encodeURIComponent(templateBalasan)}`;
finalMsgEl.textContent = pesanTerakhir;

btnOpen.addEventListener("click", () => {
  show(step2);
  typeText(pesan, typingEl, 18);
  confetti(90);
});

btnNext.addEventListener("click", () => {
  show(step3);
  confetti(70);
});

btnReplay.addEventListener("click", () => {
  typingEl.textContent = "";
  audio.pause();
  audio.currentTime = 0;
  btnMusic.textContent = "Putar Musik";
  show(step1);
});

btnMusic.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play(); // aman karena dipicu klik user
      btnMusic.textContent = "Pause Musik";
    } catch (e) {
      alert("Musiknya belum bisa diputar. Coba klik lagi ya.");
    }
  } else {
    audio.pause();
    btnMusic.textContent = "Putar Musik";
  }
});

function show(target){
  [step1, step2, step3].forEach(el => el.classList.add("hidden"));
  target.classList.remove("hidden");
}

function typeText(text, el, speed=20){
  el.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text[i] ?? "";
    i++;
    if (i >= text.length) clearInterval(t);
  }, speed);
}

function confetti(count=60){
  for(let i=0;i<count;i++){
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random()*100 + "vw";
    c.style.background = `hsl(${Math.random()*360}, 90%, 60%)`;
    c.style.animationDuration = (2 + Math.random()*2) + "s";
    c.style.setProperty("--x", (Math.random()*240-120) + "px");
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4500);
  }
}