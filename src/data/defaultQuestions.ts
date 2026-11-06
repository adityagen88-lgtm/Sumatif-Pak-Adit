import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (18 BUTIR SOAL, NO 1 - 18)
  // Bentuk: 4 Opsi (A, B, C, D) dengan 1 Jawaban Benar
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Sumber Energi Utama Bumi',
    difficulty: 'Mudah',
    text: 'Sumber energi terbesar dan paling utama bagi seluruh kehidupan di bumi yang memancarkan energi cahaya dan energi panas secara terus-menerus adalah...',
    options: [
      { id: 'A', text: 'Bulan' },
      { id: 'B', text: 'Matahari' },
      { id: 'C', text: 'Minyak bumi' },
      { id: 'D', text: 'Angin' },
    ],
    correctAnswer: 'B',
    explanation:
      'Matahari adalah sumber energi utama dan terbesar di muka bumi. Pancaran energi cahaya dan panas matahari sangat penting untuk fotosintesis tumbuhan, menghangatkan suhu bumi, siklus daur air, dan penerangan alami pada siang hari.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Bentuk Energi Bunyi',
    difficulty: 'Mudah',
    text: 'Saat lonceng sekolah dipukul atau senar gitar dipetik, telinga kita dapat mendengar suara. Energi bunyi tersebut pada dasarnya dihasilkan oleh benda yang...',
    options: [
      { id: 'A', text: 'Bergetar' },
      { id: 'B', text: 'Diam dan tenang' },
      { id: 'C', text: 'Meleleh' },
      { id: 'D', text: 'Mendingin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Energi bunyi selalu dihasilkan dari getaran suatu benda. Getaran tersebut merambat melalui medium (seperti udara) dalam bentuk gelombang bunyi hingga tertangkap oleh indra pendengaran telinga kita.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Transformasi Energi Listrik ke Panas',
    difficulty: 'Mudah',
    text: 'Ibu menggunakan setrika listrik untuk merapikan seragam sekolah yang kusut. Perubahan bentuk energi yang terjadi pada setrika listrik saat tersambung ke sumber listrik adalah...',
    options: [
      { id: 'A', text: 'Energi listrik menjadi energi cahaya' },
      { id: 'B', text: 'Energi listrik menjadi energi gerak' },
      { id: 'C', text: 'Energi listrik menjadi energi panas (kalor)' },
      { id: 'D', text: 'Energi listrik menjadi energi kimia' },
    ],
    correctAnswer: 'C',
    explanation:
      'Di dalam setrika listrik terdapat komponen elemen pemanas. Ketika dialiri arus listrik, elemen tersebut menahan arus dan mengubah energi listrik menjadi energi panas (kalor) yang digunakan untuk menghaluskan pakaian.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Transformasi Energi Listrik ke Gerak',
    difficulty: 'Sedang',
    text: 'Perhatikan beberapa peralatan rumah tangga berikut:\n(1) Kipas angin dinding\n(2) Blender pelumat buah\n(3) Mesin cuci pakaian\n(4) Oven pemanggang kue\n\nPeralatan yang memanfaatkan perubahan energi listrik menjadi energi gerak secara utama ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '(1), (2), dan (3)' },
      { id: 'B', text: '(1), (2), dan (4)' },
      { id: 'C', text: '(2), (3), dan (4)' },
      { id: 'D', text: '(1), (3), dan (4)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kipas angin memutar baling-baling (gerak), blender memutar pisau pemotong (gerak), dan mesin cuci memutar tabung pencuci (gerak). Sedangkan oven pemanggang kue mengubah energi listrik menjadi energi panas.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Energi Kimia pada Tubuh',
    difficulty: 'Mudah',
    text: 'Sebelum berangkat ke sekolah, siswa dianjurkan sarapan pagi terlebih dahulu. Makanan yang kita makan setiap hari menyimpan bentuk energi yang diolah tubuh menjadi tenaga untuk beraktivitas. Bentuk energi yang tersimpan di dalam makanan adalah...',
    options: [
      { id: 'A', text: 'Energi kimia' },
      { id: 'B', text: 'Energi bunyi' },
      { id: 'C', text: 'Energi kinetik' },
      { id: 'D', text: 'Energi listrik' },
    ],
    correctAnswer: 'A',
    explanation:
      'Makanan dan minuman menyimpan energi kimia di dalam ikatan molekulnya. Melalui proses pencernaan dan metabolisme tubuh, energi kimia ini diubah menjadi energi gerak (aktivitas) dan energi panas tubuh.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Transformasi Energi pada Senter Baterai',
    difficulty: 'Sedang',
    text: 'Saat listrik di rumah padam pada malam hari, Ayah menyalakan lampu senter portabel yang menggunakan batu baterai. Urutan perubahan bentuk energi yang tepat pada lampu senter tersebut adalah...',
    options: [
      { id: 'A', text: 'Energi cahaya → energi kimia → energi listrik' },
      { id: 'B', text: 'Energi kimia → energi listrik → energi cahaya' },
      { id: 'C', text: 'Energi gerak → energi listrik → energi panas' },
      { id: 'D', text: 'Energi listrik → energi kimia → energi bunyi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Batu baterai menyimpan energi kimia. Ketika sakelar senter dinyalakan, zat kimia di dalam baterai bereaksi menghasilkan aliran energi listrik, yang kemudian dialirkan ke lampu LED senter untuk menghasilkan energi cahaya.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Transformasi Energi pada Fotosintesis',
    difficulty: 'Sedang',
    text: 'Tumbuhan hijau memanfaatkan gas karbon dioksida dari udara, air dari dalam tanah, serta klorofil pada daun untuk memasak makanannya dengan bantuan sinar matahari melalui fotosintesis. Perubahan bentuk energi pada proses fotosintesis adalah...',
    options: [
      { id: 'A', text: 'Energi panas menjadi energi gerak' },
      { id: 'B', text: 'Energi cahaya matahari menjadi energi kimia' },
      { id: 'C', text: 'Energi kimia menjadi energi cahaya' },
      { id: 'D', text: 'Energi gerak menjadi energi bunyi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Klorofil pada daun menyerap energi cahaya matahari dan menggunakannya untuk mengubah air dan karbon dioksida menjadi glukosa/zat makanan. Dengan demikian, energi cahaya berubah menjadi energi kimia yang tersimpan pada makanan tumbuhan.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Transformasi Energi Gerak ke Panas',
    difficulty: 'Sedang',
    text: 'Ketika berkemah di daerah perbukitan yang berhawa dingin, Wayan menggosok-gosokkan kedua telapak tangannya secara cepat dan berulang-ulang. Beberapa saat kemudian telapak tangannya terasa hangat. Peristiwa tersebut membuktikan bahwa...',
    options: [
      { id: 'A', text: 'Energi gerak dapat berubah menjadi energi panas' },
      { id: 'B', text: 'Energi panas dapat berubah menjadi energi bunyi' },
      { id: 'C', text: 'Energi kimia dapat berubah menjadi energi cahaya' },
      { id: 'D', text: 'Energi listrik dapat berubah menjadi energi magnet' },
    ],
    correctAnswer: 'A',
    explanation:
      'Gesekan antara dua permukaan telapak tangan yang saling bergerak menyebabkan perubahan energi gerak (kinetik) menjadi energi panas (kalor), sehingga telapak tangan terasa lebih hangat.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Energi Potensial Gravitasi',
    difficulty: 'Sedang',
    text: 'Energi potensial gravitasi adalah energi yang tersimpan pada suatu benda karena posisi ketinggiannya dari permukaan tanah. Contoh benda berikut yang memiliki energi potensial gravitasi adalah...',
    options: [
      { id: 'A', text: 'Bola kasti yang sedang menggelinding di lantai lapangan' },
      { id: 'B', text: 'Buah kelapa tua yang masih menggantung di dahan pohon yang tinggi' },
      { id: 'C', text: 'Kelereng yang diam tepat di atas permukaan tanah' },
      { id: 'D', text: 'Air yang tenang di dalam baskom di atas lantai' },
    ],
    correctAnswer: 'B',
    explanation:
      'Buah kelapa yang berada di dahan pohon memiliki ketinggian tertentu dari permukaan tanah. Posisi ketinggian ini memberikan energi potensial gravitasi. Jika tangkainya terlepas, energi potensial ini akan berubah menjadi energi gerak saat kelapa jatuh.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Perubahan Energi Potensial ke Kinetik',
    difficulty: 'Sukar',
    text: 'Sebuah bola basket dijatuhkan dari lantai dua gedung sekolah menuju lapangan di bawahnya. Pernyataan yang paling tepat mengenai perubahan energi pada bola basket saat bergerak jatuh ke bawah adalah...',
    options: [
      { id: 'A', text: 'Energi kinetik bola berkurang dan energi potensialnya bertambah' },
      { id: 'B', text: 'Energi potensial gravitasi berkurang dan berubah menjadi energi kinetik (gerak)' },
      { id: 'C', text: 'Energi kimia bola berubah menjadi energi listrik' },
      { id: 'D', text: 'Total energi mekanik bola habis dan musnah di udara' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ketika bola berada di tempat tinggi, ia memiliki energi potensial gravitasi maksimum. Saat dijatuhkan, posisinya semakin rendah (energi potensial berkurang) sementara laju geraknya semakin cepat (energi kinetik bertambah). Energi potensial berubah menjadi energi kinetik.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Alat Musik Tradisional & Energi Bunyi',
    difficulty: 'Mudah',
    text: 'Alat musik tradisional angklung khas daerah Jawa Barat terbuat dari tabung-tabung bambu. Angklung akan mengeluarkan bunyi nada yang khas apabila dimainkan dengan cara digoyangkan. Perubahan bentuk energi yang terjadi adalah...',
    options: [
      { id: 'A', text: 'Energi gerak menjadi energi bunyi' },
      { id: 'B', text: 'Energi listrik menjadi energi cahaya' },
      { id: 'C', text: 'Energi panas menjadi energi kimia' },
      { id: 'D', text: 'Energi kimia menjadi energi listrik' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tangan pemain menggerakkan dan menggoyangkan rangka bambu angklung (energi gerak). Benturan dan getaran tabung bambu yang bergoyang tersebut kemudian menghasilkan alunan suara (energi bunyi).',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Teknologi Panel Surya',
    difficulty: 'Sedang',
    text: 'Di atap gedung sekolah dipasang lempengan panel surya (solar cell). Pemanfaatan teknologi panel surya tersebut bertujuan untuk...',
    options: [
      { id: 'A', text: 'Mengubah energi angin menjadi energi gerak' },
      { id: 'B', text: 'Mengubah energi cahaya matahari menjadi energi listrik' },
      { id: 'C', text: 'Mengubah energi panas bumi menjadi energi bunyi' },
      { id: 'D', text: 'Mengubah energi aliran air menjadi energi kimia' },
    ],
    correctAnswer: 'B',
    explanation:
      'Panel surya tersusun atas sel-sel fotovoltaik yang berfungsi menangkap pancaran energi cahaya matahari dan mengubahnya secara langsung menjadi energi listrik tanpa menghasilkan asap atau polusi.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Energi Alternatif Angin',
    difficulty: 'Sedang',
    text: 'Angin merupakan salah satu sumber energi terbarukan yang melimpah di alam. Pemanfaatan hembusan energi angin dalam kehidupan modern saat ini contohnya adalah...',
    options: [
      { id: 'A', text: 'Memutar bilah turbin pada Pembangkit Listrik Tenaga Bayu (PLTB)' },
      { id: 'B', text: 'Membakar batu bara di dalam tungku pabrik semen' },
      { id: 'C', text: 'Mengisi tabung gas elpiji untuk memasak makanan' },
      { id: 'D', text: 'Memanaskan air di dalam ketel pemanas berbahan solar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada PLTB (Pembangkit Listrik Tenaga Bayu), hembusan angin kencang memutar kincir/turbin angin raksasa. Putaran turbin tersebut menggerakkan generator untuk memproduksi listrik yang ramah lingkungan.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Energi Alternatif Biogas',
    difficulty: 'Sedang',
    text: 'Warga desa peternakan memanfaatkan kotoran sapi yang ditampung dalam tangki pengolah tertutup (biodigester). Kotoran tersebut mengalami fermentasi dan menghasilkan gas yang dapat dialirkan ke kompor dapur untuk memasak. Energi alternatif ini disebut...',
    options: [
      { id: 'A', text: 'Minyak tanah' },
      { id: 'B', text: 'Biogas' },
      { id: 'C', text: 'Bensin' },
      { id: 'D', text: 'Batu bara' },
    ],
    correctAnswer: 'B',
    explanation:
      'Biogas adalah gas metana yang dihasilkan dari penguraian bahan organik (seperti kotoran hewan ternak) oleh mikroorganisme dalam kondisi tanpa udara. Biogas dapat digunakan sebagai bahan bakar kompor pengganti gas elpiji.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Prinsip Kerja PLTA',
    difficulty: 'Sukar',
    text: 'Pada Pembangkit Listrik Tenaga Air (PLTA), air waduk di tempat tinggi dialirkan turun melalui saluran pipa untuk memutar turbin, yang kemudian memutar generator listrik. Rangkaian transformasi energi yang tepat pada proses tersebut adalah...',
    options: [
      { id: 'A', text: 'Energi potensial air → energi gerak turbin → energi listrik generator' },
      { id: 'B', text: 'Energi kimia air → energi panas turbin → energi cahaya generator' },
      { id: 'C', text: 'Energi listrik → energi gerak turbin → energi bunyi generator' },
      { id: 'D', text: 'Energi panas air → energi kimia turbin → energi listrik generator' },
    ],
    correctAnswer: 'A',
    explanation:
      'Air di waduk yang tinggi menyimpan energi potensial. Saat mengalir turun, energi ini berubah menjadi energi kinetik/gerak air yang memutar sudu-sudu turbin. Turbin yang berputar menggerakkan generator untuk menghasilkan energi listrik.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Sumber Energi Terbarukan',
    difficulty: 'Sedang',
    text: 'Perhatikan kelompok sumber energi berikut:\n(1) Cahaya matahari\n(2) Batu bara\n(3) Aliran air sungai\n(4) Minyak bumi\n(5) Hembusan angin\n\nSumber energi yang tergolong sebagai sumber energi terbarukan (ramah lingkungan dan tidak akan habis jika digunakan terus-menerus) adalah...',
    options: [
      { id: 'A', text: '(1), (2), dan (4)' },
      { id: 'B', text: '(1), (3), dan (5)' },
      { id: 'C', text: '(2), (3), dan (4)' },
      { id: 'D', text: '(2), (4), dan (5)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Cahaya matahari, aliran air sungai, dan hembusan angin adalah sumber energi terbarukan karena siklus alamiahnya selalu memperbarui energi tersebut secara terus-menerus. Sedangkan batu bara dan minyak bumi adalah energi fosil tak terbarukan yang suatu saat akan habis.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Perilaku Penghematan Energi Listrik',
    difficulty: 'Mudah',
    text: 'Sebagai siswa yang mencerminkan profil pelajar peduli lingkungan, tindakan nyata yang paling tepat untuk menghemat energi listrik di lingkungan sekolah adalah...',
    options: [
      { id: 'A', text: 'Menyalakan semua lampu kelas sepanjang hari meskipun jendela terbuka terang' },
      { id: 'B', text: 'Mematikan lampu ruang kelas dan kipas angin ketika seluruh siswa keluar beristirahat' },
      { id: 'C', text: 'Membiarkan layar komputer ruang laboratorium menyala terus seharian' },
      { id: 'D', text: 'Menyalakan pendingin ruangan dengan pintu kelas terbuka lebar' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mematikan lampu dan kipas angin saat ruangan tidak digunakan adalah tindakan nyata penghematan energi listrik yang mudah dipraktikkan oleh siswa di sekolah.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Dampak Ketergantungan Energi Fosil',
    difficulty: 'Sukar',
    text: 'Bahan bakar fosil seperti minyak bumi dan batu bara saat ini masih menjadi bahan bakar utama kendaraan dan pembangkit listrik. Alasan utama manusia harus mulai beralih ke sumber energi alternatif terbarukan adalah...',
    options: [
      { id: 'A', text: 'Bahan bakar fosil terbentuk dalam waktu yang sangat singkat' },
      { id: 'B', text: 'Pembakaran bahan bakar fosil mencemari udara dan cadangannya di bumi semakin menipis' },
      { id: 'C', text: 'Energi alternatif selalu menghasilkan limbah beracun yang lebih banyak' },
      { id: 'D', text: 'Bahan bakar fosil sama sekali tidak bisa menghasilkan energi panas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pembentukan bahan bakar fosil membutuhkan waktu jutaan tahun, sehingga cadangannya di perut bumi terbatas dan tidak dapat diperbarui. Selain itu, gas buang hasil pembakarannya memicu polusi udara, hujan asam, dan pemanasan global.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS / PGK (3 BUTIR SOAL, NO 19 - 21)
  // Bentuk: 3 Opsi (A, B, C) dengan jawaban benar BISA LEBIH DARI SATU
  // =========================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Peralatan Listrik Penghasil Panas',
    difficulty: 'Sedang',
    text: 'Dalam kehidupan sehari-hari di rumah tangga, banyak peralatan elektronik yang kita gunakan. Pilihlah SEMUA peralatan listrik berikut yang prinsip kerja utamanya mengubah energi listrik menjadi energi panas (kalor)! (Pilihan jawaban benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Penanak nasi listrik (rice cooker / magic com)' },
      { id: 'B', text: 'Oven listrik pemanggang roti dan kue' },
      { id: 'C', text: 'Kipas angin dinding' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Penanak nasi (A) dan oven listrik (B) memanfaatkan kawat pemanas untuk mengubah energi listrik menjadi energi panas guna memasak makanan. Sedangkan kipas angin (C) mengubah energi listrik menjadi energi gerak untuk memutar baling-baling.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Energi Potensial Pegas / Elastis',
    difficulty: 'Sukar',
    text: 'Siti sedang berlatih olahraga panahan di halaman sekolah. Ia merentangkan tali busur dengan menarik anak panah ke belakang sekuat tenaga, lalu melepaskannya hingga anak panah melesat cepat ke sasaran. Manakah dari pernyataan berikut yang bernilai BENAR terkait peristiwa tersebut? (Pilihan jawaban benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Saat tali busur ditarik ke belakang, busur panah menyimpan energi potensial pegas (elastis)' },
      { id: 'B', text: 'Semakin jauh tali busur ditarik ke belakang, energi potensial pegas yang tersimpan akan semakin besar' },
      { id: 'C', text: 'Saat tali busur dilepaskan, energi potensial pegas berubah menjadi energi kinetik (gerak) pada anak panah' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Semua pernyataan bernilai BENAR:\n- Tali busur yang ditarik meregang dan menyimpan energi potensial elastis (A benar).\n- Semakin panjang tarikan tali busur, semakin besar energi potensial pegas yang tersimpan (B benar).\n- Ketika dilepas, gaya pegas busur mendorong anak panah sehingga energi potensial berubah menjadi energi gerak (kinetik) yang melesatkan anak panah (C benar).',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Keunggulan Energi Alternatif Terbarukan',
    difficulty: 'Sedang',
    text: 'Masyarakat saat ini didorong untuk memanfaatkan sumber energi alternatif terbarukan seperti matahari, angin, dan aliran air. Manakah dari pernyataan-pernyataan berikut yang merupakan KEUNGGULAN dari sumber energi alternatif terbarukan? (Pilihan jawaban benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Ramah lingkungan karena tidak menghasilkan asap polusi atau gas buang berbahaya' },
      { id: 'B', text: 'Ketersediaannya melimpah di alam dan tidak akan pernah habis meskipun digunakan terus-menerus' },
      { id: 'C', text: 'Memerlukan pembakaran batu bara dan solar dalam jumlah yang sangat banyak' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Keunggulan energi alternatif terbarukan adalah sifatnya yang bersih/ramah lingkungan (A benar) dan pasokannya melimpah serta tidak akan habis (B benar). Pernyataan C salah karena energi alternatif tidak bergantung pada pembakaran batu bara atau solar.',
  },

  // =========================================================================
  // BAGIAN 3: PGK KATEGORI / BENAR-SALAH (9 BUTIR SOAL, NO 22 - 30)
  // Bentuk: 3 Sub-Pernyataan yang harus direspons Benar atau Salah
  // =========================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Karakteristik Bentuk Energi',
    difficulty: 'Mudah',
    text: 'Berbagai bentuk energi hadir di sekitar lingkungan kita setiap hari. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Energi bunyi hanya dapat timbul jika ada benda atau materi yang mengalami getaran.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bahan makanan yang kita makan dan batu baterai merupakan contoh benda yang menyimpan energi kimia.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Api unggun yang menyala di malam hari hanya menghasilkan energi cahaya tanpa menghasilkan energi panas sama sekali.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Bunyi selalu bersumber dari getaran benda yang merambat ke telinga (BENAR).\n2. Makanan, bahan bakar, dan baterai menyimpan energi kimia dalam ikatan senyawanya (BENAR).\n3. Api unggun menghasilkan energi cahaya sekaligus energi panas yang menghangatkan suasana di sekitarnya (SALAH, tertulis tanpa panas sama sekali).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Prinsip Kerja Alat Elektronik',
    difficulty: 'Sedang',
    text: 'Peralatan elektronik di rumah mengubah energi listrik menjadi bentuk energi yang berguna sesuai keperluan kita. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Televisi yang menyala mengubah energi listrik menjadi energi cahaya (gambar) dan energi bunyi (suara) secara bersamaan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Fungsi utama mesin cuci bekerja dengan mengubah energi listrik menjadi energi kimia.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pengering rambut (hair dryer) mengubah energi listrik menjadi energi gerak (memutar kipas) dan energi panas (meniupkan udara hangat).',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Televisi menampilkan visual cahaya di layar dan menghasilkan suara dari speaker (BENAR).\n2. Mesin cuci memutar tabung pencuci sehingga merupakan perubahan energi listrik menjadi energi gerak, bukan energi kimia (SALAH).\n3. Hair dryer memiliki dinamo pemutar baling-baling (gerak) dan kawat pemanas (panas) untuk mengeringkan rambut basah (BENAR).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Energi Kinetik (Gerak) pada Benda',
    difficulty: 'Sedang',
    text: 'Energi kinetik adalah energi yang dimiliki oleh materi atau benda yang berada dalam keadaan bergerak. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Sebuah buku tebal yang diletakkan diam tanpa bergerak di atas meja belajar memiliki energi kinetik yang sangat besar.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'Semakin cepat laju sepeda yang dikayuh siswa di jalan datar, maka energi kinetik sepeda tersebut akan semakin besar.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Aliran air sungai yang mengalir deras memiliki energi kinetik yang dapat dimanfaatkan untuk memutar kincir air.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Benda yang diam memiliki kelajuan nol, sehingga energi kinetiknya adalah nol (SALAH).\n2. Energi kinetik berbanding lurus dengan kelajuan gerak benda; makin cepat gerakannya makin besar energi kinetiknya (BENAR).\n3. Aliran air sungai yang deras memiliki energi kinetik yang sanggup memutar kincir air untuk irigasi atau menumbuk padi (BENAR).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Hukum Kekekalan Energi',
    difficulty: 'Sukar',
    text: 'Di alam semesta berlaku prinsip ilmiah yang dinamakan Hukum Kekekalan Energi. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Menurut hukum kekekalan energi, energi tidak dapat diciptakan dan tidak dapat dimusnahkan oleh manusia.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Energi hanya dapat berubah atau ditransformasikan dari satu bentuk energi ke bentuk energi lainnya.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Ketika bensin pada sepeda motor habis digunakan untuk berkendara, energi kimia bensin musnah lenyap begitu saja tanpa meninggalkan bentuk energi lain.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Hukum kekekalan energi menyatakan bahwa energi tidak dapat diciptakan dan tidak dapat dimusnahkan (BENAR).\n2. Manusia memanfaatkan energi dengan mengubah bentuknya dari satu bentuk ke bentuk lain yang dibutuhkan (BENAR).\n3. Energi kimia bensin tidak musnah, melainkan berubah menjadi energi gerak kendaraan, energi panas mesin, dan energi bunyi gas knalpot (SALAH).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Manfaat Energi Panas & Cahaya Matahari',
    difficulty: 'Sedang',
    text: 'Pancaran energi matahari memberikan banyak manfaat bagi kelangsungan hidup manusia, hewan, dan tumbuhan. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Energi panas matahari dimanfaatkan warga pesisir pantai untuk mengeringkan ikan asin dan menguapkan air laut pada pembuatan garam.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Paparan sinar matahari pagi dapat membantu tubuh manusia memproduksi vitamin D untuk kesehatan tulang dan gigi.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Tumbuhan hijau dapat melakukan proses fotosintesis dengan baik di dalam ruangan tertutup tanpa bantuan cahaya sedikit pun.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Panas matahari mempercepat penguapan air dalam proses penjemuran ikan dan pembuatan kristal garam (BENAR).\n2. Sinar matahari pagi membantu aktivasi provitamin D di bawah kulit menjadi vitamin D aktif (BENAR).\n3. Tumbuhan mutlak memerlukan energi cahaya (matahari atau lampu tumbuh) untuk menggerakkan reaksi kimia fotosintesis; tanpa cahaya fotosintesis terhenti (SALAH).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Perbandingan Energi Fosil & Energi Terbarukan',
    difficulty: 'Sukar',
    text: 'Bumi menyediakan sumber energi fosil dan sumber energi alternatif terbarukan. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Minyak bumi, gas alam, dan batu bara membutuhkan waktu pengendapan jutaan tahun dari sisa-sisa jasad renik dan tumbuhan purba yang tertimbun di dalam bumi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Batu bara merupakan sumber energi tak terbarukan yang suatu saat akan habis jika ditambang dan dikonsumsi secara terus-menerus.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Energi panas bumi (geotermal) merupakan contoh energi tak terbarukan yang berasal dari pembakaran sampah plastik.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Bahan bakar fosil terbentuk secara alami dari fosil makhluk hidup jutaan tahun silam (BENAR).\n2. Karena pembentukannya memakan waktu jutaan tahun, batu bara tergolong tidak dapat diperbarui dan persediaannya terbatas (BENAR).\n3. Panas bumi (geotermal) adalah energi terbarukan ramah lingkungan yang bersumber dari panas alami di dalam perut bumi, bukan dari pembakaran sampah (SALAH).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Tindakan Nyata Penghematan Energi',
    difficulty: 'Mudah',
    text: 'Melakukan tindakan penghematan energi merupakan kewajiban setiap warga masyarakat demi melestarikan lingkungan. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Membuka tirai jendela di pagi dan siang hari agar ruangan kelas terang merupakan langkah tepat untuk menghemat penggunaan lampu listrik.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membiarkan kabel pengisi daya (charger) tetap terhubung ke stopkontak listrik seharian meski tidak sedang digunakan adalah tindakan yang sangat hemat energi.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mematikan televisi dan lampu kamar saat hendak pergi tidur di malam hari dapat mencegah pemborosan energi listrik.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Memanfaatkan sinar matahari di siang hari mengurangi kebutuhan penerangan lampu listrik (BENAR).\n2. Colokan pengisi daya yang terus menancap di stopkontak tetap menyedot arus listrik (arus bocor/standby power) dan merupakan bentuk pemborosan energi (SALAH).\n3. Mematikan peralatan listrik saat beristirahat tidur merupakan kebiasaan hemat energi yang sangat baik (BENAR).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Kombinasi Energi Potensial dan Kinetik',
    difficulty: 'Sedang',
    text: 'Ketika seorang anak bermain ayunan di taman sekolah, terjadi pertukaran bentuk energi potensial dan energi kinetik. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pada saat posisi ayunan berada di titik lintasan paling tinggi, ayunan tersebut memiliki energi potensial gravitasi paling besar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada saat ayunan meluncur melewati titik lintasan paling bawah, laju ayunan paling cepat dan energi kinetiknya berada pada posisi maksimum.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Benda yang berada di ketinggian tertentu tidak memiliki energi sama sekali sebelum dibakar dengan api.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Di titik puncak tertinggi, ayunan memiliki ketinggian maksimum sehingga energi potensial gravitasinya terbesar (BENAR).\n2. Ketika meluncur turun ke titik terendah, seluruh energi potensial berubah menjadi energi kinetik maksimum dengan kecepatan tertinggi (BENAR).\n3. Benda di tempat tinggi sudah memiliki energi yang tersimpan berupa energi potensial gravitasi akibat tarikan gravitasi bumi, tanpa perlu dibakar dengan api (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Inovasi Teknologi dan Efisiensi Energi',
    difficulty: 'Sukar',
    text: 'Teknologi ramah lingkungan terus dikembangkan untuk meningkatkan efisiensi dan mengurangi pemborosan energi. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Lampu LED (Light Emitting Diode) jauh lebih hemat energi dibandingkan lampu pijar lama karena menghasilkan cahaya terang dengan panas yang sangat minim.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membiasakan diri berjalan kaki atau mengendarai sepeda kayuh untuk bepergian ke tempat yang dekat dapat menghemat bahan bakar minyak dan mengurangi polusi udara.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Menyalakan pendingin ruangan (AC) pada suhu paling dingin (16°C) dengan pintu dan jendela kamar terbuka lebar adalah tindakan yang sangat hemat listrik dan efisien.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Lampu LED mengubah sebagian besar energi listrik menjadi cahaya, berbeda dengan lampu pijar yang sebagian besar energinya terbuang menjadi panas (BENAR).\n2. Berjalan kaki dan bersepeda merupakan mobilitas tanpa bahan bakar minyak sehingga ramah lingkungan dan menyehatkan tubuh (BENAR).\n3. Membiarkan pintu terbuka saat AC menyala membuat udara dingin keluar dan kompresor AC bekerja ekstra keras tanpa henti, sehingga menyedot listrik sangat boros (SALAH).',
  },
];
