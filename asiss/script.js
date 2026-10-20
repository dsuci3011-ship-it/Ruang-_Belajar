
document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // 1. DATA SEMUA MATERI RUANGBELAJAR
  // ==========================================

  const materiData = {

    waktu: {
      kategori: "Kebiasaan Belajar",
      judul: "Mengelola Waktu Belajar",
      deskripsi:
        "Mengatur waktu dengan baik membantu kegiatan belajar menjadi lebih teratur dan seimbang.",

      bagian: [
        {
          subjudul: "1. Buat Jadwal Belajar",
          isi:
            "Susun jadwal belajar sesuai kegiatan harianmu. Tentukan waktu khusus untuk membaca materi, mengerjakan tugas, dan mengulang pelajaran."
        },
        {
          subjudul: "2. Tentukan Prioritas",
          isi:
            "Dahulukan tugas yang penting atau mendekati batas pengumpulan. Dengan menentukan prioritas, kamu dapat menggunakan waktu secara lebih efektif."
        },
        {
          subjudul: "3. Hindari Menunda Pekerjaan",
          isi:
            "Mulailah mengerjakan tugas sedikit demi sedikit. Jangan menunggu sampai mendekati batas waktu agar pekerjaan tidak menumpuk."
        },
        {
          subjudul: "4. Sisihkan Waktu untuk Istirahat",
          isi:
            "Berikan waktu untuk beristirahat di antara kegiatan belajar. Istirahat membantu menjaga konsentrasi dan membuat kegiatan belajar lebih nyaman."
        }
      ],

      kesimpulan:
        "Pengelolaan waktu yang baik membantu kamu belajar lebih teratur, menyelesaikan tugas tepat waktu, dan menjaga keseimbangan aktivitas sehari-hari."
    },

    catatan: {
      kategori: "Teknik Belajar",
      judul: "Membuat Catatan yang Rapi",
      deskripsi:
        "Catatan yang rapi memudahkan kita memahami kembali materi yang sudah dipelajari.",

      bagian: [
        {
          subjudul: "1. Catat Poin Penting",
          isi:
            "Tuliskan inti pembahasan, definisi, rumus, atau informasi penting. Tidak perlu menyalin seluruh penjelasan jika cukup dengan poin utama."
        },
        {
          subjudul: "2. Gunakan Judul dan Subjudul",
          isi:
            "Pisahkan catatan berdasarkan topik. Judul dan subjudul membantu menemukan informasi yang dibutuhkan dengan lebih cepat."
        },
        {
          subjudul: "3. Gunakan Warna Secukupnya",
          isi:
            "Gunakan warna untuk menandai kata kunci atau informasi penting. Hindari terlalu banyak warna agar catatan tetap mudah dibaca."
        },
        {
          subjudul: "4. Baca Kembali Catatan",
          isi:
            "Luangkan waktu untuk membaca dan melengkapi catatan setelah belajar. Cara ini membantu kamu memeriksa pemahaman terhadap materi."
        }
      ],

      kesimpulan:
        "Catatan yang teratur membantu proses mengulang pelajaran menjadi lebih mudah, jelas, dan efisien."
    },

    fokus: {
      kategori: "Strategi Belajar",
      judul: "Tips Belajar Efektif",
      deskripsi:
        "Belajar efektif bukan sekadar belajar lama, tetapi menggunakan cara yang membantu kita memahami materi.",

      bagian: [
        {
          subjudul: "1. Tentukan Tujuan Belajar",
          isi:
            "Tentukan hal yang ingin kamu pahami sebelum mulai belajar. Misalnya, memahami satu bab atau menyelesaikan beberapa soal latihan."
        },
        {
          subjudul: "2. Kurangi Gangguan",
          isi:
            "Pilih tempat belajar yang nyaman. Jauhkan hal-hal yang sering mengalihkan perhatian dan nonaktifkan notifikasi yang tidak diperlukan."
        },
        {
          subjudul: "3. Gunakan Metode Belajar Aktif",
          isi:
            "Coba jelaskan kembali materi dengan kata-katamu sendiri, buat pertanyaan, atau kerjakan latihan untuk memeriksa pemahaman."
        },
        {
          subjudul: "4. Ulangi Materi",
          isi:
            "Pelajari kembali materi secara berkala. Pengulangan membantu mengingat informasi dan mengetahui bagian yang belum dipahami."
        }
      ],

      kesimpulan:
        "Belajar dengan tujuan yang jelas, mengurangi gangguan, dan mengulang materi secara berkala dapat membantu meningkatkan pemahaman."
    },

    konsisten: {
      kategori: "Kebiasaan Belajar",
      judul: "Membangun Kebiasaan Belajar Konsisten",
      deskripsi:
        "Kebiasaan belajar yang konsisten dibangun melalui kegiatan kecil yang dilakukan secara teratur.",

      bagian: [
        {
          subjudul: "1. Mulai dari Target Kecil",
          isi:
            "Pilih target belajar yang realistis dan mudah dilakukan. Setelah terbiasa, kamu dapat menyesuaikan target secara bertahap."
        },
        {
          subjudul: "2. Tentukan Waktu Tetap",
          isi:
            "Pilih waktu belajar yang sesuai dengan rutinitasmu agar kegiatan belajar lebih mudah menjadi kebiasaan."
        },
        {
          subjudul: "3. Catat Perkembangan",
          isi:
            "Tuliskan materi yang sudah dipelajari dan tugas yang telah diselesaikan. Catatan ini membantu melihat perkembangan belajarmu."
        }
      ],

      kesimpulan:
        "Konsistensi dapat dibangun melalui target yang realistis, jadwal yang teratur, dan evaluasi perkembangan."
    },

    istirahat: {
      kategori: "Keseimbangan Belajar",
      judul: "Pentingnya Istirahat Saat Belajar",
      deskripsi:
        "Istirahat merupakan bagian penting dari kegiatan belajar agar tubuh dan pikiran mendapatkan waktu untuk memulihkan energi.",

      bagian: [
        {
          subjudul: "1. Beri Jeda Saat Belajar",
          isi:
            "Setelah belajar selama beberapa waktu, ambil jeda singkat untuk meregangkan tubuh atau melakukan kegiatan ringan."
        },
        {
          subjudul: "2. Lakukan Aktivitas yang Menenangkan",
          isi:
            "Gunakan waktu istirahat untuk minum air, berjalan sebentar, atau mengistirahatkan mata dari layar."
        },
        {
          subjudul: "3. Jaga Waktu Tidur",
          isi:
            "Tidur yang cukup membantu menjaga konsentrasi dan kesiapan untuk mengikuti kegiatan belajar pada hari berikutnya."
        }
      ],

      kesimpulan:
        "Istirahat yang cukup membantu menjaga kenyamanan, konsentrasi, dan keseimbangan antara belajar dan kegiatan sehari-hari."
    },

    evaluasi: {
      kategori: "Evaluasi Belajar",
      judul: "Mengevaluasi Hasil Belajar",
      deskripsi:
        "Evaluasi membantu mengetahui materi yang sudah dipahami dan bagian yang masih perlu dipelajari kembali.",

      bagian: [
        {
          subjudul: "1. Periksa Pemahaman",
          isi:
            "Coba jawab pertanyaan tentang materi tanpa melihat catatan terlebih dahulu untuk mengetahui apa yang sudah kamu pahami."
        },
        {
          subjudul: "2. Kenali Kesulitan",
          isi:
            "Tandai bagian yang belum dipahami dan cari penjelasan tambahan dari buku, guru, atau sumber belajar yang tepercaya."
        },
        {
          subjudul: "3. Perbaiki Cara Belajar",
          isi:
            "Gunakan hasil evaluasi untuk menentukan materi yang perlu diulang dan cara belajar yang lebih sesuai."
        }
      ],

      kesimpulan:
        "Evaluasi membantu kegiatan belajar menjadi lebih terarah karena kamu dapat mengetahui kemajuan dan kebutuhan belajar berikutnya."
    }

  };


  // ==========================================
  // 2. TAMPILKAN MATERI BERDASARKAN URL
  // ==========================================

  const params = new URLSearchParams(window.location.search);
  const pilihanMateri = params.get("materi") || "waktu";
  const materiDipilih = materiData[pilihanMateri];

  const judulElement = document.getElementById("judulMateri");
  const kategoriElement = document.getElementById("kategoriMateri");
  const deskripsiElement = document.getElementById("deskripsiMateri");
  const bagianElement = document.getElementById("isiMateri");
  const kesimpulanElement = document.getElementById("kesimpulanMateri");


  // Periksa apakah elemen halaman detail tersedia.
  // Jika tidak, hentikan bagian penampilan detail.
  if (
    !judulElement ||
    !kategoriElement ||
    !deskripsiElement ||
    !bagianElement ||
    !kesimpulanElement
  ) {
    return;
  }


  // Jika parameter materi tidak ditemukan.
  if (!materiDipilih) {
    kategoriElement.textContent = "Materi";
    judulElement.textContent = "Materi Tidak Ditemukan";
    deskripsiElement.textContent =
      "Maaf, materi yang kamu pilih tidak tersedia.";
    bagianElement.replaceChildren();
    kesimpulanElement.textContent =
      "Silakan kembali ke halaman Materi dan pilih topik yang tersedia.";
    return;
  }


  // ==========================================
  // 3. TAMPILKAN JUDUL DAN DESKRIPSI
  // ==========================================

  document.title = "RuangBelajar | " + materiDipilih.judul;

  kategoriElement.textContent = materiDipilih.kategori;
  judulElement.textContent = materiDipilih.judul;
  deskripsiElement.textContent = materiDipilih.deskripsi;


  // ==========================================
  // 4. TAMPILKAN ISI SETIAP BAGIAN MATERI
  // ==========================================

  bagianElement.replaceChildren();

  materiDipilih.bagian.forEach(function (bagian) {

    const container = document.createElement("section");
    container.className = "materi-bagian mb-4";

    const subjudul = document.createElement("h2");
    subjudul.className = "h5";
    subjudul.textContent = bagian.subjudul;

    const isi = document.createElement("p");
    isi.textContent = bagian.isi;

    container.appendChild(subjudul);
    container.appendChild(isi);

    bagianElement.appendChild(container);

  });


  // ==========================================
  // 5. TAMPILKAN KESIMPULAN
  // ==========================================

  kesimpulanElement.textContent = materiDipilih.kesimpulan;


  // ==========================================
  // 6. TOMBOL KEMBALI KE DAFTAR MATERI
  // ==========================================

  const tombolKembali = document.getElementById("tombolKembali");

  if (tombolKembali) {
    tombolKembali.addEventListener("click", function () {
      window.location.href = "materi.html";
    });
  }

});
