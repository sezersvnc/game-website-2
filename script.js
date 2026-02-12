const hesaplaBtn = document.querySelector("#hesaplaBtn");
        const kategoriler = document.querySelectorAll("input[name='kategori']");
        const icerikInput = document.querySelector("#icerik");
        const sonucDiv = document.querySelector("#sonuc");

        hesaplaBtn.addEventListener("click", function () {
            if(sonucDiv.classList.contains("gizli")){
                sonucDiv.classList.remove('gizli');

            }
            let secilenKategori = null;
            let toplamTutar = 0;

            // Seçilen kategoriyi bul
            kategoriler.forEach(function (radio) {
                if (radio.checked) {
                    secilenKategori = radio.value;
                }
            });

            // Kategoriye göre fiyat belirle
            if (secilenKategori === "3d") {
                toplamTutar = 50000;
            } else if (secilenKategori === "fps") {
                toplamTutar = 70000;
            } else if (secilenKategori === "web") {
                toplamTutar = 30000;
            } else {
                sonucDiv.innerHTML = "⚠️ Lütfen bir kategori seçin.";
                return;
            }

            // Özel içerik yazılmışsa ek ücret
            if (icerikInput.value.trim() !== "") {
                toplamTutar += 5000;
            }

            // DOM Manipülasyonu (sayfa yenilenmeden göster)
            sonucDiv.innerHTML = `
            <h4">
                Tahmini Tutar: ${toplamTutar.toLocaleString()} TL
            </h4>
        `;
        });