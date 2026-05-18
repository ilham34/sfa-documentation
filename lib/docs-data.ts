export const docsData = {
  title: "Aplikasi SFA",
  subtitle: "Tracking & Reporting — Dokumentasi Alur Sistem",
  badges: ["Website Admin", "Android App", "Real-time Dashboard"],
  footer: {
    title: "Dokumentasi Alur Aplikasi SFA — Tracking & Reporting System",
    tech: "Website FE (NextJS) • Backend (Golang) • Android (React Native) • Infra (Google Kubernetes Engine) • Database (PostgreSQL 13) • Powered by Blesscom"
  },
  sections: [
    {
      id: "home",
      title: "Beranda",
      icon: "Home",
      sectionTitle: "Beranda"
    },
    {
      id: "alur-website",
      title: "Alur Website",
      icon: "Globe",
      description: "Website digunakan oleh <strong>Admin / Manajemen</strong> untuk mengelola master data, memantau aktivitas sales lapangan, dan melihat laporan.",
      sectionTitle: "Alur Website Admin",
      items: [
        {
          step: 1,
          title: "Login Admin",
          description: {
            intro: "Admin masuk ke sistem menggunakan kredensial yang telah terdaftar.",
            bullets: [
              "Menggunakan username dan password",
              "Sistem melakukan validasi otomatis",
              "Level akses yang tersedia: Super Admin, Regional Sales Manager, Area Sales Manager, Team Leader, dll"
            ]
          }
        },
        {
          step: 2,
          title: "Dashboard Motoris",
          description: {
            intro: "Menampilkan ringkasan data aktivitas sales dalam bentuk visual yang interaktif.",
            bullets: [
              "Peta aktivitas sales secara real-time",
              "Grafik penjualan (Qty & Nominal)",
              "Ranking penjualan per produk",
              "Data distribusi produk",
              "Filter per Regional/Area/Team Leader/Sales"
            ]
          }
        },
        {
          step: 3,
          title: "Kelola Master Data",
          description: {
            intro: "Admin mengelola seluruh data master yang menjadi fondasi sistem.",
            bullets: [
              "Master Barang (produk, kategori, satuan)",
              "Master Toko (outlet, group, type, DC)",
              "Master Pegawai/Karyawan",
              "Master Regional, Area, Team Leader",
              "Master Jabatan",
              "Kategori Barang dan Type Toko",
              "Group Toko dan DC Toko",
              "Wilayah (Provinsi/Kabupaten/Kecamatan/Kelurahan)"
            ]
          }
        },
        {
          step: 4,
          title: "Kelola Transaksi",
          description: {
            intro: "Memonitor dan mengelola seluruh transaksi yang terjadi di lapangan.",
            bullets: [
              "Penjualan Produk",
              "Pembelian Produk",
              "Pengembalian Produk (Retur)",
              "Input PO (Purchase Order)",
              "Setor Uang/Kas",
              "Pindah Stok"
            ]
          }
        },
        {
          step: 5,
          title: "Monitoring Aktivitas Lapangan",
          description: {
            intro: "Melihat dan memantau seluruh aktivitas sales di lapangan secara real-time.",
            bullets: [
              "Data Check In/Check Out sales (foto, koordinat GPS, waktu, durasi)",
              "Peta lokasi real-time (Map Activity & Map Sales)",
              "Foto Activity Motoris",
              "Foto Activity SMD"
            ]
          }
        },
        {
          step: 6,
          title: "Laporan",
          description: {
            intro: "Menyediakan berbagai jenis laporan untuk analisis dan pengambilan keputusan.",
            bullets: [
              "Laporan Penjualan",
              "Laporan Kunjungan (CICO)",
              "Laporan Stok",
              "Laporan Distribusi",
              "Laporan Foto Activity",
              "Laporan Ijin",
              "Laporan Rekap",
              "Ranking Penjualan",
              "Export CSV/Excel"
            ]
          }
        },
        {
          step: 7,
          title: "Setting & User Management",
          description: {
            intro: "Mengelola pengaturan sistem dan hak akses pengguna.",
            bullets: [
              "Kelola User & Level Akses",
              "Setting Menu per role",
              "Otoritas Aplikasi (Add/Edit/Delete/Print)",
              "Identitas Perusahaan",
              "Setting Reward Toko",
              "Pengumuman",
              "Firebase Notifikasi"
            ]
          }
        }
      ]
    },
    {
      id: "alur-android",
      title: "Alur Android",
      icon: "Smartphone",
      description: "Aplikasi Android (Flutter) digunakan oleh <strong>Sales/Motoris</strong> di lapangan untuk check in ke toko, melakukan transaksi, dan dokumentasi aktivitas.",
      sectionTitle: "Alur Aplikasi Android (Sales Lapangan)",
      items: [
        {
          step: 1,
          title: "Splash Screen",
          description: {
            intro: "Menampilkan logo Kalbe Motoris saat aplikasi pertama kali dibuka.",
            bullets: [
              "Durasi tampil sekitar 1 detik selama inisialisasi aplikasi",
              "Tampilan dark mode dengan aksen warna oranye"
            ]
          }
        },
        {
          step: 2,
          title: "Login",
          description: {
            intro: "Sales memasukkan kredensial untuk mengakses aplikasi.",
            bullets: [
              "Input Username & Password",
              "Auto-login jika sesi masih aktif (tersimpan di SharedPreferences)",
              "Jika password baru, diarahkan ke halaman Ganti Password"
            ]
          }
        },
        {
          step: 3,
          title: "Home Panel (Bottom Navigation)",
          description: {
            intro: "Halaman utama dengan 5 tab navigasi di bagian bawah layar.",
            bullets: [
              "<strong>Home</strong> — Check In & Menu Transaksi",
              "<strong>Log Produk</strong> — Riwayat transaksi produk",
              "<strong>Log Uang</strong> — Riwayat transaksi keuangan",
              "<strong>Log Activity</strong> — Riwayat aktivitas lapangan",
              "<strong>Profile</strong> — Data diri & logout"
            ]
          }
        },
        {
          step: 4,
          title: "Check In ke Toko",
          description: {
            intro: "Sales melakukan check in ke toko sebelum memulai transaksi.",
            bullets: [
              "Memilih toko terdekat berdasarkan GPS atau membuat toko baru (NOO)",
              "Wajib mengambil foto Check In",
              "Lokasi GPS & alamat tercatat secara otomatis",
              "Peta Google Maps menampilkan posisi saat ini"
            ]
          }
        },
        {
          step: 5,
          title: "Menu Transaksi (Setelah Check In)",
          description: {
            intro: "Menu transaksi muncul secara dinamis sesuai hak akses yang diberikan admin.",
            bullets: [
              "Penjualan",
              "Pembelian",
              "Distribusi Produk",
              "Distribusi Kategori",
              "Foto Activity Motoris",
              "Foto Activity SMD",
              "Pengembalian",
              "Input PO",
              "Setor Uang",
              "Input Stok",
              "Input Ijin"
            ]
          }
        },
        {
          step: 6,
          title: "Transaksi di Toko",
          description: {
            intro: "Melakukan berbagai jenis transaksi sesuai kebutuhan.",
            bullets: [
              "<strong>Penjualan:</strong> Pilih produk → input qty & harga → simpan detail → posting",
              "<strong>Pembelian:</strong> Catat pembelian dari distributor",
              "<strong>Distribusi:</strong> Checklist ketersediaan produk di toko vs kompetitor",
              "<strong>Foto Activity:</strong> Upload foto aktivitas promosi di toko"
            ]
          }
        },
        {
          step: 7,
          title: "Check Out",
          description: {
            intro: "Setelah selesai melakukan aktivitas, sales wajib melakukan Check Out.",
            bullets: [
              "Wajib mengambil foto Check Out",
              "Lokasi GPS tercatat otomatis",
              "Durasi kunjungan terhitung secara otomatis"
            ]
          }
        },
        {
          step: 8,
          title: "Kunjungan Berikutnya",
          description: {
            intro: "Sales berpindah ke toko lain dan mengulangi proses kunjungan.",
            bullets: [
              "Ulangi proses: Check In → Transaksi → Check Out",
              "Jumlah kunjungan hari ini tercatat dan ditampilkan di Home"
            ]
          }
        }
      ]
    },
    {
      id: "canvasser",
      title: "Canvasser (Motoris)",
      icon: "Users",
      description: "Dokumentasi alur kerja lapangan aplikasi SFA untuk canvasser/motoris: mulai dari login, check-in outlet, transaksi, dokumentasi aktivitas, setoran, hingga laporan aktivitas harian.",
      sectionTitle: "Canvasser (Motoris)",
      journeySummary: {
        title: "Ringkasan Journey Harian Motoris",
        steps: [
          { number: "1", title: "Login", description: "Motoris masuk memakai username & password, sesi tersimpan untuk auto-login." },
          { number: "2", title: "Home", description: "Melihat jumlah kunjungan hari ini, status check-in, dan menu sesuai hak akses admin." },
          { number: "3", title: "Check In Outlet", description: "Pilih toko terdekat berbasis GPS atau buat NOO jika diaktifkan admin, lalu upload foto check-in." },
          { number: "4", title: "Aktivitas / Transaksi", description: "Input penjualan, pembelian, distribusi, foto activity, stok, PO, pengembalian, atau setor uang sesuai tipe outlet." },
          { number: "5", title: "Check Out", description: "Upload foto check-out, koordinat tercatat, durasi kunjungan tersimpan." },
          { number: "6", title: "Monitoring", description: "Riwayat masuk ke Log Produk, Log Uang, Log Activity, dan laporan website admin." }
        ]
      },
      menuTabs: ["Kunjungan", "Transaksi", "Aktivitas", "Monitoring", "Admin & Akses"],
      detailSections: [
        {
          title: "Login & Session",
          description: "Motoris login melalui aplikasi Android. Sistem menyimpan token dan id user untuk akses API. Jika sesi masih valid, pengguna dapat masuk otomatis. Jika password awal/perubahan diperlukan, diarahkan ke ganti password.",
          steps: [
            "Input username dan password.",
            "Server memvalidasi kredensial, level, token, dan menu aktif.",
            "Aplikasi membuka Home Panel."
          ]
        },
        {
          title: "Home Panel",
          description: "Halaman utama menampilkan jumlah kunjungan hari ini, kartu Check In, dan menu transaksi yang muncul dinamis sesuai setting admin.",
          steps: [
            "Ambil info log harian dari server.",
            "Tampilkan status sudah/belum check-in.",
            "Tampilkan menu sesuai flag: penjualan, distribusi, foto, PO, stok, dan lainnya."
          ]
        },
        {
          title: "Check In Toko",
          description: "Motoris wajib check-in sebelum transaksi. Aplikasi mengambil GPS, menampilkan Google Maps, melakukan reverse geocoding alamat, dan mewajibkan foto check-in.",
          steps: [
            "Aktifkan GPS dan izinkan lokasi.",
            "Pilih toko dari daftar terdekat berdasarkan koordinat.",
            "Upload foto check-in.",
            "Sistem simpan lat, lng, alamat, foto, waktu, user, dan toko."
          ]
        },
        {
          title: "NOO / Toko Baru",
          description: "Jika admin mengaktifkan NOO, motoris dapat mendaftarkan outlet baru langsung dari lapangan.",
          steps: [
            "Pilih tab NOO pada Check In.",
            "Isi nama toko, group toko, type toko, DC toko, kelurahan, alamat, dan type lokasi.",
            "Upload foto outlet/check-in.",
            "Simpan & langsung check-in ke outlet baru."
          ]
        },
        {
          title: "Check Out",
          icon: "DoorOpen",
          description: "Setelah aktivitas selesai, motoris melakukan check-out sebagai bukti kunjungan selesai.",
          steps: [
            "Buka kartu Check In yang berubah menjadi Check Out.",
            "Ambil foto check-out.",
            "Sistem simpan koordinat, alamat, foto, jam selesai, dan durasi kunjungan."
          ]
        }
      ]
    },
    {
      id: "taking-order",
      title: "Taking Order",
      icon: "ShoppingCart",
      description: "Fitur inti pemesanan produk dari outlet. Sales wajib <strong>Check In</strong> terlebih dahulu sebelum dapat melakukan transaksi pemesanan.",
      sectionTitle: "Taking Order Process",
      prerequisite: {
        title: "Check In Harus Berhasil Sebelum Taking Order",
        description: "Sales harus melakukan check in ke toko terlebih dahulu. Sistem akan memvalidasi lokasi GPS dan foto check-in sebelum menu transaksi tersedia.",
        flow: [
          "Buka aplikasi → Pilih toko terdekat (GPS)",
          "Foto Check In (wajib)",
          "Check In berhasil",
          "Menu Transaksi terbuka"
        ]
      },
      orderSteps: [
        {
          step: "A",
          title: "Masuk Menu Pemesanan",
          description: "Setelah check-in berhasil di toko:",
          details: [
            "Klik menu <strong>\"Pemesanan\"</strong> dari daftar menu transaksi",
            "Klik <strong>\"Tambah Produk\"</strong> untuk mulai memilih produk"
          ]
        },
        {
          step: "B",
          title: "Pilih Brand & Produk",
          details: [
            "Pilih <strong>kategori brand</strong> dari daftar brand yang tersedia",
            "Pilih <strong>produk spesifik</strong> yang ingin dibeli oleh outlet"
          ]
        },
        {
          step: "C",
          title: "Input Quantity",
          details: [
            "Sales memasukkan <strong>jumlah pembelian</strong> (quantity) produk yang diinginkan outlet"
          ]
        },
        {
          step: "D",
          title: "Tambah ke Daftar Pembelian",
          details: [
            "Produk dimasukkan ke <strong>cart/list pembelian</strong>",
            "Ulangi langkah A–D untuk menambah produk lain"
          ]
        },
        {
          step: "E",
          title: "Simpan & Kirim Order",
          details: [
            "<strong>Simpan</strong> transaksi pemesanan",
            "Klik <strong>\"Kirimkan\"</strong> untuk mengirim order ke server",
            "<strong>Konfirmasi pembelian</strong> — order berhasil dikirim & tercatat"
          ]
        }
      ],
      deleteFeature: {
        title: "Hapus Produk dari Order",
        description: "Fitur untuk menghapus item produk sebelum order dikirim, memungkinkan sales mengoreksi kesalahan atau menyesuaikan pesanan.",
        functions: [
          "Mengoreksi kesalahan input produk atau quantity",
          "Menghapus produk yang tidak jadi dibeli oleh outlet",
          "Mengosongkan seluruh daftar pembelian sekaligus"
        ],
        flow: [
          { step: "1", title: "Klik \"Kosongkan\"", description: "Pada daftar pembelian, klik tombol Kosongkan untuk produk yang ingin dihapus" },
          { step: "2", title: "Konfirmasi Hapus", description: "Sistem menampilkan dialog konfirmasi \"Apakah Anda yakin menghapus produk ini?\"" },
          { step: "3", title: "Produk Dihapus", description: "Produk berhasil dihapus dari daftar pembelian, total diperbarui otomatis" }
        ]
      },
      noOrderFeature: {
        title: "Catatan / No Order Notes",
        description: "Fitur pencatatan alasan outlet tidak melakukan pembelian. Data ini digunakan untuk monitoring dan analisa strategi penjualan.",
        functions: [
          { title: "Monitoring alasan no order", description: "Rekap data mengapa outlet tidak membeli" },
          { title: "Analisa penjualan", description: "Identifikasi pola dan hambatan penjualan per area" },
          { title: "Strategi follow-up", description: "Data untuk kunjungan berikutnya" },
          { title: "Reporting ke manajemen", description: "Laporan lengkap alasan no order" }
        ],
        reasons: [
          { icon: "Package", title: "Stok masih ada", description: "Outlet masih memiliki stok produk yang cukup" },
          { icon: "DoorClosed", title: "Toko tutup", description: "Outlet sedang tutup saat sales berkunjung" },
          { icon: "Ban", title: "Tidak membutuhkan barang", description: "Outlet tidak memerlukan produk saat ini" },
          { icon: "Wallet", title: "Belum ada budget", description: "Outlet belum memiliki anggaran untuk pembelian" },
          { icon: "RefreshCw", title: "Ganti brand / kompetitor", description: "Outlet beralih ke produk kompetitor" }
        ],
        flow: ["Check In ke toko", "Tidak Ada order", "Pilih Alasan no order", "Tambah catatan", "Simpan & check out"]
      }
    },
    {
      id: "menu-fitur",
      title: "Menu & Fitur",
      icon: "LayoutGrid",
      sectionTitle: "Menu & Fitur Lengkap",
      websiteMenus: [
        { icon: "BarChart3", title: "Dashboard Motoris", description: "Dashboard interaktif dengan grafik penjualan (Qty & Nominal), ranking produk, peta aktivitas, filter multi-level (Nasional → Regional → Area → Team Leader → Sales).", category: "Dashboard" },
        { icon: "Package", title: "Master Barang", description: "Kelola data produk: kode, nama, kategori, type, merk, satuan, kelompok, harga. Termasuk detail barang dan rasio satuan.", category: "Master" },
        { icon: "Store", title: "Master Toko", description: "Data toko/outlet: nama, alamat, group toko, type toko, DC toko, kelurahan, koordinat GPS, type lokasi.", category: "Master" },
        { icon: "Users", title: "Master Pegawai", description: "Data karyawan, jabatan, team level (Regional, Sub-Regional, Team Leader, Cabang), area kerja, dan wilayah.", category: "Master" },
        { icon: "Map", title: "Wilayah", description: "Kelola hierarki wilayah: Provinsi, Kabupaten, Kecamatan, Kelurahan. Regional, Area, dan Spot Area.", category: "Master" },
        { icon: "ShoppingCart", title: "Penjualan", description: "Monitoring transaksi penjualan dari sales lapangan. Detail produk, qty, harga, total per transaksi.", category: "Transaksi" },
        { icon: "Download", title: "Pembelian", description: "Catat pembelian produk dari distributor. Master & detail pembelian.", category: "Transaksi" },
        { icon: "RefreshCw", title: "Pengembalian", description: "Proses retur/pengembalian produk dari toko ke distributor.", category: "Transaksi" },
        { icon: "ClipboardList", title: "Input PO", description: "Purchase Order dari toko. Master & detail PO dengan approval flow.", category: "Transaksi" },
        { icon: "Wallet", title: "Setor Uang/Kas", description: "Pencatatan setor uang dari sales, setor kas, setor bank, penyerahan uang.", category: "Transaksi" },
        { icon: "FileBarChart", title: "Laporan Penjualan", description: "Rekap penjualan per periode, per sales, per produk, per toko. Download Excel/CSV.", category: "Laporan" },
        { icon: "ClipboardCheck", title: "Laporan Kunjungan (CICO)", description: "Check In/Check Out: waktu, durasi, foto, lokasi GPS, alamat lengkap per sales per hari.", category: "Laporan" },
        { icon: "Camera", title: "Laporan Foto Activity", description: "Foto aktivitas motoris & SMD di toko. Foto promosi, display, branding.", category: "Laporan" },
        { icon: "TrendingUp", title: "Laporan Distribusi", description: "Checklist distribusi produk per toko. Distribusi by produk & by kategori.", category: "Laporan" },
        { icon: "Boxes", title: "Laporan Stok", description: "Monitoring stok per outlet, stok harian, stock report, status stok.", category: "Laporan" },
        { icon: "MapPin", title: "Map Activity", description: "Peta real-time lokasi sales dan aktivitas kunjungan per tanggal.", category: "Laporan" },
        { icon: "UserCog", title: "User & Akses", description: "Manajemen user, level akses, otoritas per menu (Add/Edit/Delete/Print).", category: "Setting" },
        { icon: "Settings", title: "Setting", description: "Identitas perusahaan, reward toko, jadwal reward, pengumuman, firebase notifikasi.", category: "Setting" }
      ],
      androidMenus: [
        { icon: "MapPin", title: "Check In / Check Out", description: "GPS-based check in ke toko terdaftar atau buat toko baru (NOO). Foto wajib, koordinat & alamat otomatis, Google Maps, tracking durasi kunjungan.", category: "Lapangan" },
        { icon: "ShoppingCart", title: "Penjualan", description: "Input penjualan produk di toko setelah check in. Pilih produk, qty, harga. Multi-item per transaksi. Auto-sync ke server.", category: "Transaksi" },
        { icon: "Download", title: "Pembelian", description: "Catat pembelian produk dari distributor. Khusus tipe toko Distributor.", category: "Transaksi" },
        { icon: "BarChart3", title: "Distribusi Produk", description: "Checklist ketersediaan produk Kalbe vs kompetitor di rak toko. Data distribusi per produk.", category: "Lapangan" },
        { icon: "FolderOpen", title: "Distribusi Kategori", description: "Checklist distribusi berdasarkan kategori produk. Analisa penetrasi per kategori.", category: "Lapangan" },
        { icon: "Camera", title: "Foto Activity Motoris", description: "Upload foto aktivitas motoris di toko: display produk, promo, branding. Pilih jenis foto sesuai kategori.", category: "Lapangan" },
        { icon: "Image", title: "Foto Activity SMD", description: "Upload foto aktivitas SMD dengan sub-detail. Dokumentasi aktivitas sales & marketing.", category: "Lapangan" },
        { icon: "RefreshCw", title: "Pengembalian", description: "Proses retur produk dari toko. Khusus tipe toko Distributor.", category: "Transaksi" },
        { icon: "ClipboardList", title: "Input PO", description: "Input Purchase Order dari toko. Master & detail item PO.", category: "Transaksi" },
        { icon: "Wallet", title: "Setor Uang", description: "Pencatatan setor uang hasil penjualan. Dengan opsi setor manual.", category: "Transaksi" },
        { icon: "Package", title: "Input Stok", description: "Input stok produk di toko. Monitoring ketersediaan barang.", category: "Lapangan" },
        { icon: "FileText", title: "Input Ijin", description: "Pengajuan ijin/cuti dari sales. Dengan flow approval dan posting.", category: "Administrasi" },
        { icon: "History", title: "Log Produk", description: "Riwayat transaksi produk: penjualan, pembelian, stok masuk/keluar.", category: "Log" },
        { icon: "Banknote", title: "Log Uang", description: "Riwayat transaksi keuangan: setor uang, kas masuk/keluar.", category: "Log" },
        { icon: "Activity", title: "Log Activity", description: "Riwayat aktivitas lapangan: kunjungan, check in/out, transaksi.", category: "Log" },
        { icon: "User", title: "Profile & Ganti Password", description: "Lihat data profil sales, jabatan, team, area, regional. Ganti password.", category: "Akun" }
      ]
    },
    {
      id: "keunggulan",
      title: "Keunggulan",
      icon: "Trophy",
      sectionTitle: "Keunggulan vs Kompetitor",
      features: [
        {
          title: "GPS-Based Check In/Out",
          items: [
            "Validasi lokasi real-time dengan Google Maps",
            "Deteksi lokasi palsu (mock location detection)",
            "Foto wajib saat Check In & Check Out sebagai bukti",
            "Pencatatan durasi kunjungan otomatis",
            "Alamat otomatis dari geocoding (reverse geocoding)"
          ]
        },
        {
          title: "Multi-Level Akses Hierarkis",
          items: [
            "Hierarki: SA → Regional → Sub-Regional → Team Leader → Cabang → Sales",
            "Dashboard filter otomatis sesuai level user",
            "Menu dinamis sesuai hak akses (konfigurasi per user)",
            "Otoritas CRUD per menu (Add/Edit/Delete/Print)"
          ]
        },
        {
          title: "Dashboard Analitik Real-time",
          icon: "BarChart3",
          items: [
            "Grafik penjualan by Qty & Nominal (ApexCharts)",
            "Ranking penjualan per produk",
            "Penjualan per sales per produk",
            "Analisa distribusi produk vs kompetitor",
            "Filter multi-level: Nasional hingga per Sales"
          ]
        },
        {
          title: "Aplikasi Mobile Flutter (Cross-Platform)",
          icon: "Smartphone",
          items: [
            "Built dengan Flutter — performa native di Android & iOS",
            "Dark Mode modern dengan UI yang intuitif",
            "Offline-capable (SharedPreferences untuk session)",
            "Auto-login untuk produktivitas sales"
          ]
        },
        {
          title: "Manajemen Toko Lengkap (NOO Support)",
          items: [
            "NOO (New Open Outlet) — sales bisa daftarkan toko baru langsung dari lapangan",
            "Toko terdekat otomatis berdasarkan radius GPS",
            "Klasifikasi: Group Toko, Type Toko, DC Toko, Type Lokasi",
            "Integrasi wilayah lengkap (Provinsi → Kelurahan)"
          ]
        },
        {
          title: "Dokumentasi Foto Aktivitas",
          icon: "Camera",
          items: [
            "Foto Activity Motoris & SMD dengan kategorisasi",
            "Upload langsung dari kamera smartphone",
            "Terintegrasi dengan data check in toko",
            "Laporan foto activity lengkap di website admin"
          ]
        },
        {
          title: "Distribusi & Kompetitor Analysis",
          icon: "TrendingUp",
          items: [
            "Checklist distribusi produk di setiap toko",
            "Perbandingan produk sendiri vs kompetitor",
            "Distribusi by produk & by kategori",
            "Data real-time untuk strategi penetrasi pasar"
          ]
        },
        {
          title: "Notifikasi & Komunikasi",
          icon: "Bell",
          items: [
            "Firebase Cloud Messaging untuk push notification",
            "Pengumuman dari admin ke semua sales",
            "Kirim pesan internal ke pegawai",
            "Alert system untuk approval & posting"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Fitur", "Kalbe Motoris", "Kompetitor Umum"],
        rows: [
          ["GPS Check In/Out dengan Foto", "Lengkap + Anti Fake GPS", "Sebagian tanpa foto"],
          ["Dashboard Multi-Level Hierarki", "6 Level (SA→Sales)", "Umumnya 2-3 level"],
          ["NOO (New Open Outlet) dari Lapangan", "Sales bisa daftar toko baru", "Harus via admin"],
          ["Distribusi Produk vs Kompetitor", "Checklist per produk & kategori", "Jarang tersedia"],
          ["Foto Activity Terkategorisasi", "Motoris & SMD terpisah", "Foto tanpa kategori"],
          ["Grafik Penjualan Interaktif", "ApexCharts multi-dimensi", "Grafik sederhana"],
          ["Map Real-time Lokasi Sales", "Google Maps terintegrasi", "Sebagian ada"],
          ["Menu Dinamis per Hak Akses", "Konfigurasi per user", "Menu statis"],
          ["Multi-Transaksi (Jual/Beli/PO/Retur)", "Lengkap semua tipe", "Umumnya hanya penjualan"],
          ["Export Laporan (Excel/CSV)", "Multi-format export", "Terbatas"],
          ["Cross-Platform (Android & iOS)", "Flutter Framework", "Kebanyakan Android only"],
          ["Setor Uang & Kas Management", "Lengkap + manual option", "Jarang tersedia"]
        ]
      }
    },
    {
      id: "api-integration",
      title: "API Integration",
      icon: "Link",
      sectionTitle: "API Integration DMS Subdist",
      description: "REST API berbasis JSON dengan autentikasi JWT untuk integrasi data antara sistem subdistributor dengan aplikasi DMS. Base URL: <code>http://34.101.178.201</code>",
      apis: [
        {
          number: "1",
          title: "Authentication API",
          description: "Sistem menggunakan JWT Token Authentication. Token wajib dikirim pada setiap request API.",
          method: "POST",
          endpoint: "/authenticate",
          note: "Token berlaku 5 jam",
          requestBody: `{
  "username": "subdist_test",
  "password": "test"
}`,
          responseBody: `{
  "token": "JWT_TOKEN"
}`,
          headerNote: "Authorization: Bearer <JWT_TOKEN>"
        },
        {
          number: "2",
          title: "Stock API",
          icon: "Package",
          description: "API untuk menambahkan data stok barang secara bulk dan sinkronisasi data stok distributor.",
          method: "POST",
          endpoint: "/api/subdist/v1/stocks/bulk",
          requestBody: `[{
  "DIST_CODE": "3441221",
  "PRODUCT_CODE": "LKPNA",
  "STOCK_DATE": "2021-04-26",
  "STOCK_UNIT": 10,
  "STOCK_TYPE": "Baik"
}]`,
          parameters: [
            { field: "DIST_CODE", type: "String", description: "Kode distributor" },
            { field: "PRODUCT_CODE", type: "String", description: "Kode produk" },
            { field: "STOCK_DATE", type: "Date", description: "Tanggal stok" },
            { field: "STOCK_UNIT", type: "Integer", description: "Jumlah stok" },
            { field: "STOCK_TYPE", type: "String", description: "Baik / Rusak / BDP" }
          ],
          stockTypes: ["Baik", "Rusak", "BDP"]
        },
        {
          number: "3",
          title: "Order API (Taking Order)",
          icon: "ShoppingCart",
          description: "API untuk pengiriman data order/taking order dari salesman ke server DMS.",
          method: "POST",
          endpoint: "/api/subdist/v1/orders/bulk",
          requestBody: `[{
  "DIST_CODE": "2631895",
  "ORDER_DATE": "2021-05-23",
  "ORDER_CODE": "1234",
  "SALESMAN_CODE": "E.00012",
  "SALESMAN_NAME": "Wawan",
  "PRODUCT_CODE": "PBPDA",
  "ORDER_UNIT": 70,
  "OUTLET_CODE": "001BGR",
  "OUTLET_NAME": "Warung ABC",
  "OUTLET_ADDRESS": "Bogor"
}]`,
          parameters: [
            { field: "DIST_CODE", type: "String", description: "Kode sub distributor" },
            { field: "ORDER_DATE", type: "Date", description: "Tanggal order" },
            { field: "ORDER_CODE", type: "String", description: "Kode order unik" },
            { field: "SALESMAN_CODE", type: "String", description: "Kode salesman" },
            { field: "SALESMAN_NAME", type: "String", description: "Nama salesman" },
            { field: "PRODUCT_CODE", type: "String", description: "Kode produk" },
            { field: "ORDER_UNIT", type: "Integer", description: "Quantity order" },
            { field: "OUTLET_CODE", type: "String", description: "Kode outlet" },
            { field: "OUTLET_NAME", type: "String", description: "Nama outlet" },
            { field: "OUTLET_ADDRESS", type: "String", description: "Alamat outlet" }
          ]
        },
        {
          number: "4",
          title: "Product Sales API",
          icon: "Wallet",
          description: "API untuk pengiriman data penjualan produk berdasarkan invoice.",
          method: "POST",
          endpoint: "/api/subdist/v1/productsales/bulk",
          requestBody: `[{
  "DIST_CODE": "2631895",
  "INVOICE_DATE": "2021-05-24",
  "INVOICE_CODE": "24.05.2021.006501",
  "ORDER_CODE": "1234",
  "SALESMAN_CODE": "E.00012",
  "SALESMAN_NAME": "Wawan",
  "PRODUCT_CODE": "PBPDA",
  "SALES_UNIT": 70,
  "SALES_VALUE": 1000000,
  "OUTLET_CODE": "001BGR",
  "OUTLET_NAME": "Warung ABC",
  "OUTLET_ADDRESS": "Bogor"
}]`,
          parameters: [
            { field: "DIST_CODE", type: "String", description: "Kode distributor" },
            { field: "INVOICE_DATE", type: "Date", description: "Tanggal invoice" },
            { field: "INVOICE_CODE", type: "String", description: "Nomor invoice" },
            { field: "ORDER_CODE", type: "String", description: "Kode order" },
            { field: "SALESMAN_CODE", type: "String", description: "Kode salesman" },
            { field: "SALESMAN_NAME", type: "String", description: "Nama salesman" },
            { field: "PRODUCT_CODE", type: "String", description: "Kode produk" },
            { field: "SALES_UNIT", type: "Integer", description: "Quantity penjualan" },
            { field: "SALES_VALUE", type: "Double", description: "Nilai penjualan (Rp)" },
            { field: "OUTLET_CODE", type: "String", description: "Kode outlet" },
            { field: "OUTLET_NAME", type: "String", description: "Nama outlet" },
            { field: "OUTLET_ADDRESS", type: "String", description: "Alamat outlet" }
          ]
        }
      ],
      standardResponse: {
        success: `{
  "status": "OK",
  "timestamp": "2021-06-18 09:07:49",
  "message": "Stored 2 entities"
}`,
        error: `{
  "status": "BAD_REQUEST",
  "timestamp": "2021-06-18 08:36:13",
  "message": "Invalid data",
  "subErrors": [{
    "object": "Order",
    "field": "productCode",
    "message": "must be valid code"
  }]
}`,
        statusCodes: [
          { code: "200", description: "Data berhasil diterima" },
          { code: "400", description: "Bad Request" },
          { code: "404", description: "Data/URL tidak ditemukan" },
          { code: "500", description: "Internal Server Error" }
        ]
      },
      endpointSummary: [
        { api: "Authentication", method: "POST", endpoint: "/authenticate", function: "Generate JWT token" },
        { api: "Stock Bulk", method: "POST", endpoint: "/api/subdist/v1/stocks/bulk", function: "Upload stok barang" },
        { api: "Order Bulk", method: "POST", endpoint: "/api/subdist/v1/orders/bulk", function: "Upload taking order" },
        { api: "Product Sales", method: "POST", endpoint: "/api/subdist/v1/productsales/bulk", function: "Upload data sales" }
      ],
      integrationFlow: ["Authenticate JWT Login", "Get Token Bearer JWT", "Send Data Stok/Order/Sales", "Response Validation"],
      technology: {
        tech: ["REST API", "JSON Format", "JWT Authentication", "Bulk Data Processing"],
        characteristics: ["Stateless Architecture", "Secure Authentication (JWT 5 jam)", "Bulk Insert Support", "System-to-System Integration", "Real-time Synchronization"]
      }
    }
  ]
}
