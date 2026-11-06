import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase B (Kelas IV) Mata Pelajaran IPAS
 * Lingkup Materi: Energi dan Perubahannya
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Kurikulum Merdeka IPAS Kelas 4
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bentuk Energi',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi sumber energi utama dan terbesar bagi seluruh kehidupan di bumi.',
    indikatorSoal:
      'Disajikan narasi tentang sumber energi alam, peserta didik dapat menentukan sumber energi utama bagi bumi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bentuk Energi',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep timbulnya energi bunyi dari benda atau materi yang bergetar.',
    indikatorSoal:
      'Disajikan fenomena alat musik atau lonceng yang bersuara, peserta didik dapat mengidentifikasi penyebab timbulnya energi bunyi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perubahan bentuk energi listrik menjadi energi panas (kalor) pada peralatan rumah tangga.',
    indikatorSoal:
      'Disajikan stimulus penggunaan setrika listrik untuk merapikan pakaian kusut, peserta didik dapat menentukan transformasi energi yang terjadi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan peralatan elektronik yang memanfaatkan perubahan energi listrik menjadi energi gerak.',
    indikatorSoal:
      'Disajikan daftar empat macam peralatan rumah tangga, peserta didik dapat memilih peralatan yang mengubah energi listrik menjadi gerak secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bentuk Energi',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bentuk energi kimia yang tersimpan di dalam makanan bagi kebutuhan tenaga tubuh makhluk hidup.',
    indikatorSoal:
      'Disajikan narasi tentang sarapan pagi untuk beraktivitas, peserta didik dapat menyebutkan bentuk energi yang terkandung pada makanan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat merunut alur tahapan perubahan energi pada lampu senter yang menggunakan batu baterai.',
    indikatorSoal:
      'Disajikan ilustrasi lampu senter baterai yang dinyalakan di malam hari, peserta didik dapat menentukan urutan transformasi energinya secara urut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi perubahan energi cahaya matahari menjadi energi kimia pada proses fotosintesis tumbuhan hijau.',
    indikatorSoal:
      'Disajikan proses pembuatan makanan oleh tumbuhan hijau dengan bantuan sinar matahari, peserta didik dapat menentukan perubahan energinya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peristiwa perubahan energi gerak (kinetik) menjadi energi panas akibat adanya gaya gesek.',
    indikatorSoal:
      'Disajikan aktivitas menggosokkan kedua telapak tangan saat kedinginan di pegunungan, peserta didik dapat menjelaskan perubahan energi yang terjadi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bentuk Energi',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep energi potensial gravitasi pada benda berdasarkan posisi ketinggiannya dari permukaan tanah.',
    indikatorSoal:
      'Disajikan beberapa contoh benda di sekitar lingkungan, peserta didik dapat menentukan benda yang menyimpan energi potensial gravitasi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis konversi energi potensial gravitasi menjadi energi kinetik pada gerak jatuh bebas suatu benda.',
    indikatorSoal:
      'Disajikan peristiwa bola basket yang dijatuhkan dari lantai dua ke lapangan, peserta didik dapat menganalisis perubahan energi potensial dan kinetik bola.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi perubahan energi gerak menjadi energi bunyi pada instrumen musik tradisional.',
    indikatorSoal:
      'Disajikan permainan alat musik angklung yang digoyangkan, peserta didik dapat menentukan perubahan bentuk energinya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Energi Terbarukan dan Alternatif',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi lempeng panel surya dalam mengonversi energi cahaya matahari menjadi energi listrik.',
    indikatorSoal:
      'Disajikan penerapan teknologi panel surya di atap gedung sekolah, peserta didik dapat menentukan fungsi utama konversi energinya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Energi Terbarukan dan Alternatif',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi pemanfaatan energi alternatif angin dalam teknologi modern pembangkit listrik (PLTB).',
    indikatorSoal:
      'Disajikan stimulus pemanfaatan tiupan angin oleh manusia, peserta didik dapat menentukan peran angin pada kincir turbin PLTB.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Energi Terbarukan dan Alternatif',
    tujuanPembelajaran:
      'Peserta didik dapat memahami pengolahan limbah kotoran ternak menjadi energi alternatif biogas untuk keperluan rumah tangga.',
    indikatorSoal:
      'Disajikan cerita peternakan sapi yang mengolah kotoran hewan di tangki biodigester, peserta didik dapat mengidentifikasi nama energi alternatif tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Energi Terbarukan dan Alternatif',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis rangkaian transformasi energi pada Pembangkit Listrik Tenaga Air (PLTA).',
    indikatorSoal:
      'Disajikan alur aliran air waduk yang memutar turbin dan generator listrik, peserta didik dapat merunut rangkaian urutan perubahan energinya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Energi Terbarukan dan Alternatif',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan sumber-sumber energi terbarukan yang ramah lingkungan dan tidak akan habis di alam.',
    indikatorSoal:
      'Disajikan lima macam sumber energi alam, peserta didik dapat memilih kelompok sumber energi yang tergolong terbarukan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Penghematan Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan perilaku hemat energi listrik dalam kehidupan sehari-hari di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan beberapa opsi perilaku siswa di kelas, peserta didik dapat memilih tindakan nyata yang mencerminkan sikap hemat listrik.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Penghematan Energi',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi dampak negatif penggunaan bahan bakar fosil bagi lingkungan dan perlunya peralihan ke energi alternatif.',
    indikatorSoal:
      'Disajikan konteks konsumsi minyak bumi dan batubara pada kendaraan, peserta didik dapat menjelaskan alasan pentingnya menghemat bahan bakar fosil.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis berbagai jenis peralatan rumah tangga yang mengubah energi listrik menjadi energi panas (kalor).',
    indikatorSoal:
      'Disajikan tiga pilihan peralatan rumah tangga, peserta didik dapat memilih semua peralatan yang menghasilkan energi panas dengan tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Bentuk Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis prinsip kerja energi potensial pegas (elastis) dan kinetik pada busur panah.',
    indikatorSoal:
      'Disajikan narasi olahraga panahan dengan tali busur yang ditarik, peserta didik dapat menentukan kebenaran konsep energi pegas dan gerak anak panah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Energi Terbarukan dan Alternatif',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi berbagai keunggulan pemanfaatan sumber energi alternatif terbarukan bagi kelestarian bumi.',
    indikatorSoal:
      'Disajikan tiga opsi pernyataan mengenai energi terbarukan, peserta didik dapat memilih semua keunggulan sumber energi alternatif yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bentuk Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menilai kebenaran pernyataan mengenai karakteristik bentuk-bentuk energi (bunyi, kimia, panas) di sekitar kita.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai getaran bunyi, makanan, dan api unggun, peserta didik dapat menentukan kategori Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi fungsi dan prinsip transformasi energi pada televisi, mesin cuci, dan pengering rambut.',
    indikatorSoal:
      'Disajikan tiga pernyataan perubahan energi pada alat elektronik rumah tangga, peserta didik dapat menentukan status Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bentuk Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis konsep energi kinetik pada benda yang bergerak dan mengalir.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang energi kinetik benda diam, laju sepeda, dan aliran air sungai, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat memahami dan mengevaluasi penerapan prinsip Hukum Kekekalan Energi dalam kehidupan.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang hukum kekekalan energi dan perubahan energi bahan bakar, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bentuk Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peranan pancaran energi panas dan cahaya matahari bagi manusia dan makhluk hidup lainnya.',
    indikatorSoal:
      'Disajikan tiga pernyataan manfaat matahari (penjemuran hasil laut, vitamin D, fotosintesis), peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Energi Terbarukan dan Alternatif',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan karakteristik sumber energi fosil tak terbarukan dengan sumber energi alternatif terbarukan.',
    indikatorSoal:
      'Disajikan tiga pernyataan pembentukan minyak bumi, batubara, dan geotermal, peserta didik dapat menentukan status Benar atau Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Penghematan Energi',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi tindakan nyata dalam menerapkan kebiasaan hemat energi listrik sehari-hari.',
    indikatorSoal:
      'Disajikan tiga pernyataan tindakan pemakaian listrik di rumah, peserta didik dapat menentukan status Benar atau Salah tiap tindakan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Transformasi Energi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan timbal balik energi potensial gravitasi dan energi kinetik pada ayunan anak.',
    indikatorSoal:
      'Disajikan tiga pernyataan posisi lintasan ayunan dan besaran energi potensial serta kinetiknya, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Penghematan Energi',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi efisiensi energi pada inovasi teknologi ramah lingkungan (lampu LED, sepeda, pendingin ruangan).',
    indikatorSoal:
      'Disajikan tiga pernyataan efisiensi lampu LED, mobilitas sepeda, dan penggunaan AC, peserta didik dapat menentukan status Benar atau Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Helper untuk format representasi string kunci jawaban butir soal
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return String(q.correctAnswer || '-');
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.sort().join(', ');
    }
    return String(q.correctAnswer || '-');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements.map((s) => (s.correctAnswer ? 'B' : 'S')).join(' | ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep materi ${q.topic} pada mata pelajaran IPAS.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus kontekstual tentang ${q.topic}, peserta didik dapat menganalisis dan menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (
    t.includes('panas') ||
    t.includes('listrik') ||
    t.includes('gerak') ||
    t.includes('fotosintesis') ||
    t.includes('transformasi') ||
    t.includes('kekekalan') ||
    t.includes('perubahan')
  ) {
    return 'Transformasi Energi';
  }
  if (
    t.includes('alternatif') ||
    t.includes('terbarukan') ||
    t.includes('surya') ||
    t.includes('angin') ||
    t.includes('plta') ||
    t.includes('pltb') ||
    t.includes('biogas') ||
    t.includes('fosil')
  ) {
    return 'Energi Terbarukan dan Alternatif';
  }
  if (
    t.includes('hemat') ||
    t.includes('penghematan') ||
    t.includes('efisiensi') ||
    t.includes('lingkungan')
  ) {
    return 'Penghematan Energi';
  }
  return 'Bentuk Energi';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar energi',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep transformasi energi sehari-hari',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis fenomena & efisiensi energi kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}

export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman)';
    case 'L2':
      return 'L2 (Aplikasi)';
    case 'L3':
      return 'L3 (Penalaran/HOTS)';
    default:
      return level;
  }
}

export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'PGK Kategori (Benar/Salah)';
    default:
      return type;
  }
}
