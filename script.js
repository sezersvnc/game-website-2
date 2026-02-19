const hesaplaBtn = document.querySelector("#hesaplaBtn");

if (hesaplaBtn) {

    const kategoriler = document.querySelectorAll("input[name='kategori']");
    const icerikInput = document.querySelector("#icerik");
    const sonucDiv = document.querySelector("#sonuc");

    hesaplaBtn.addEventListener("click", function () {

        if (sonucDiv.classList.contains("gizli")) {
            sonucDiv.classList.remove("gizli");
        }

        let secilenKategori = null;
        let toplamTutar = 0;

        kategoriler.forEach(function (radio) {
            if (radio.checked) secilenKategori = radio.value;
        });

        if (secilenKategori === "3d") toplamTutar = 50000;
        else if (secilenKategori === "fps") toplamTutar = 70000;
        else if (secilenKategori === "web") toplamTutar = 30000;
        else {
            sonucDiv.innerHTML = "⚠️ Lütfen bir kategori seçin.";
            return;
        }

        if (icerikInput.value.trim() !== "") toplamTutar += 5000;

        sonucDiv.innerHTML = `
            <h4>Tahmini Tutar: ${toplamTutar.toLocaleString()} TL</h4>
        `;
    });
}


// ---------------- mobile menu----------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ---------------- Dark mod ----------------
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

/* SAYFA AÇILIRKEN KAYITLI TEMAYI YÜKLE  */
const savedTheme = localStorage.getItem("theme");/*theme bizim anahtar kelimemiz ona değer olarak light veya dark olucak*/ 

if (savedTheme === "light") {
  body.classList.add("light");
  body.classList.remove("dark");
  toggleBtn.textContent = "🌙";
} else {
  body.classList.add("dark");
  body.classList.remove("light");
  toggleBtn.textContent = "☀️";
}

/* BUTONA BASILINCA TEMAYI DEĞİŞTİR  */
toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});
