document.addEventListener('DOMContentLoaded', () => {
    // --- KONFIGURASI ---
    const EXAM_PASSWORD = 'cek123';
    const EXAM_DURATION_MINUTES = 90;

    // --- KUMPULAN TEKS BACAAN (KONTEKS) ---
    const KONTEKS_MEDSOS_1 = `(1) Media sosial menjadi sebuah media yang para penggunanya dapat dengan mudah berpartisipasi, berbagi, dan dapat menciptakan konten melalui internet. (2) Pendapat lain mengatakan bahwa media sosial merupakan media yang mendukung interaksi sosial yang dapat mengubah komunikasi menjadi dialog interaktif melalui internet. (3) Saat teknologi internet semakin maju dapat disadari bahwa, media sosial pun ikut tumbuh dengan pesat. (4) Kini untuk mengakses Facebook atau Twitter saja bisa dilakukan di mana saja dan kapan saja hanya dengan menggunakan sebuah telepon genggam.

(6) Pesatnya perkembangan media sosial saat ini, disebabkan oleh masyarakat yang memiliki alat komunikasi modern dan melupakan yang lama. (7) Kecepatan media sosial juga mulai tampak menggantikan peranan media massa konvensional dalam menyebarkan berita-berita. (8) Media konvensional seperti televisi, radio, atau koran dibutuhkan modal yang besar dan tenaga kerja yang banyak untuk mendapatkan informasi. (9) Seorang pengguna media sosial bisa mengakses sosial media dengan jaringan internet, tanpa biaya besar, tanpa alat mahal, dan dapat dilakukan sendiri tanpa karyawan. (10) Kita sebagai pengguna sosial media dengan bebas bisa mengedit, menambahkan, memodifikasi tulisan, gambar, video, grafis, dan berbagai model konten lainnya. (11) Semua hal tersebut di sosial media dapat dilakukan dengan sangat mudah dan praktis.`;

    const KONTEKS_MEDSOS_2 = `(1) Media sosial nampaknya telah menjadi bagian yang tidak terpisahkan dari kehidupan masyarakat masa kini. (2) Namun, ketergantungan yang tinggi akan media sosial terkadang memberi dampak negatif, karena dapat memengaruhi kesehatan mental para penggunanya. (3) Saat digunakan secara bijak, media sosial memang dapat memberikan beragam keuntungan bagi penggunanya. (4) Namun, jika terlalu sering menggunakan media sosial dalam jangka panjang dapat membuat pengguna merasa terisolasi. (5) Dampak negatif penggunaan sosial media, terlebih terhadap kesehatan mental ini jarang disadari oleh pengguna yang bersangkutan.

(6) Independent mengungkapkan setidaknya ada tiga dampak negatif yang bisa ditimbulkan dari penggunaan sosial media berlebih terhadap kesehatan mental. (7) Tiga hal tersebut, yaitu terdapat dampak negatif lainnya dari penggunaan media sosial seperti, menjadi sulit tidur, merasa cemas dan depresi serta tidak dapat konsentrasi. (8) Pengguna media sosial pada dasarnya tidak harus benar-benar meninggalkan media sosial. (9) Namun, ketika perasaan negatif mulai muncul akibat penggunaan media sosial, tidak ada salahnya sedikit membatasi waktu terlebih dahulu dari media sosial.`;
    
    const KONTEKS_KAI = `(1) PT KAI menggelar KAI Online Travel Fair, yang dimulai pada 13-17 Oktober 2018. (2) Menurut Manager Humas PT Kereta Api Daop 2 Bandung, Joni Martinus, untuk Online Travel Fair terdapat 9.930 tiket KA komersial jarak jauh dan menengah yang akan menerapkan tarif khusus. (3) Terdapat 140 tempat duduk per hari yang disediakan khusus untuk promo ini. (4) Pada tarif promo ini berlaku untuk kereta kelas ekonomi, bisnis, dan eksekutif pada keberangkatan 13 Oktober 2018-15 Januari 2019.

(5) Promo KAI Online Travel Fair diadakan agar masyarakat lebih mudah dalam membeli tiket kereta serta mendapatkan harga yang lebih terjangkau dari biasanya. (6) Promo ini membuat masyarakat dapat membeli tiket seharga Rp50.000 untuk tiket KA kelas ekonomi, Rp60.000 untuk KA kelas bisnis, dan Rp100.000 untuk KA kelas eksekutif. (7) Tiket promo Online Travel Fair dapat dipesan melalui aplikasi KAI Access dan website kai.id. (8) Tiket promo ini memiliki beberapa ketentuan yang harus dipahami para pembeli tiket promo Online Travel Fair. (9) Ketentuan tersebut, yaitu tiket promo pada KAI Online Travel Fair ini tidak dapat dibatalkan dan tidak dapat mengubah jadwal, tidak berlaku reduksi dan tarif parsial, dan tidak dapat digabung dengan tarif reduksi atau diskon lainnya.

(10) Semenjak sejak diresmikannya aplikasi All New KAI Access pada September 2017 lalu hingga Agustus 2018, tercatat sebanyak 1.447.791 pengguna aktif aplikasi ini. (11) Sementara itu, untuk pemesanan tiket KA melalui website kai.id, mulai Januari hingga September 2018 tercatat sebanyak 1.148.274 pengguna jasa telah melakukan transaksi pembelian tiket melalui website kai.id.

(13) Dengan adanya program KAI Online Travel Fair ini, makin banyak orang yang menjadi pengguna aktif aplikasi KAI Access atau melakukan pemesanan tiket KA lewat website kai.id. (14) Tawaran ini menjadi salah satu cara untuk mengurangi antrean di loket stasiun. (15) Selanjutnya, PT KAI akan memikirkan cara-cara lain agar masyarakat dapat menggunakan pemesanan tiket melalui website kai.id.`;
    
    const KONTEKS_SUKU_DAYAK = `Teks A
(1) Suku Dayak merupakan suku asli Kalimantan yang sangat terkenal sampai ke mancanegara. (2) Suku ini terkenal karena memiliki keunikan etnik dan budayanya. (3) Keunikan dari suku Dayak karena memiliki warisan magis yang kuat. (4) Hal itu terlihat ilmu-ilmu spiritual yang menjadi salah satu simbol khas yang dimiliki oleh suku di pedalaman tanah Borneo. (5) Kata dayak sebenarnya diberikan oleh orang-orang Melayu yang datang ke Kalimantan.

Teks B
(1) Suku Dayak memiliki satu tradisi atau budaya yang selalu dilakukan yaitu upacara adat naik dango. (2) Orang suku dayak mengapresiasi tradisi kebudayaan masyarakat adat Dayak Kanayatn, Kalimantan Barat, yang rata-rata berprofesi sebagai petani. (3) Makna dari upacara adat naik dango bagi masyarakat suku Dayak Kanayatn adalah sebagai ungkapan rasa syukur atas karunia Jubata (Tuhan) kepada Talino (manusia) karena telah memberikan padi sebagai makanan manusia. (4) Ritual ini juga dijadikan sebagai media permohonan doa restu kepada Jubata untuk menggunakan padi yang telah disimpan di dango padi. (5) Hal tersebut dilakukan agar padi yang digunakan benar-benar menjadi berkat bagi manusia dan tidak cepat habis.`;

    const KONTEKS_SUKU_BADUY = `(1) Suku Baduy adalah kelompok kehidupan yang patuh pada adat, ritual, dan agama yang mereka anut. (2) Nama sebenarnya masyarakat Baduy adalah Urang Kanekes. (3) Nama Baduy sendiri diambil dari nama sungai yang melewati wilayah tersebut yaitu sungai Cibaduy. (4) Masyarakat Baduy merupakan bangsa Indonesia yang bertempat tinggal di Pegunungan Kendeng Kabupaten Lebak (Jawa Barat). (5) Mereka masih keturunan Raja Pajajaran yang menolak masuknya agama lain dan menolak jadi pengikut Sunan Gunung Jati, karena untuk mengembangkan agama lama mereka di dalam belantara yang sulit diterobos. (6) Karena orang Baduy hidupnya sangat terisolasi dan jauh dari pergaulan umum, hanya pada waktu-waktu terdesak barulah mereka keluar wilayah.

(7) Masyarakat suku Baduy memuja lelembut yaitu roh halus atau roh gaib yang dianggap sebagai nenek moyang pemberi hidup dan mati. (8) Roh itu adalah yang menjiwai segala-galanya yang menjadi pemegang kekuasaan tunggal atau disebut Batara Tunggal. (9) Objek pemujaan penting dirahasiakan lokasinya. (10) Hanya ketua adat tertinggi beserta rombongan terpilihnya yang bisa pergi ke sana setiap setahun sekali di bulan kelima. (11) Nama objek pemujaan tersebut yaitu Arca Domas. (12) Arca ini memiliki batu lumping yang menjadi petunjuk apakah panen mereka akan berhasil atau gagal.`;
    
    const KONTEKS_LAHAN_TAILING = `(1) Peneliti dari Universitas Negeri Papua, Sartji Taberima mengatakan lahan tailing atau kawasan pengendapan pasir sisa tambang bisa dimanfaatkan menjadi lahan pertanian. (2) Lhan tailing minim unsur hara dan rendah akan bahan organik. (3) Oleh dari itu, diperlukan penambahan bahan organik untuk mengembalikan fungsi tanah seperti sediakala. (4) Telah diteliti bahwa lahan tailing yang berada di kawasan pertambangan PT Freeport di Timika, Papua, memiliki ketebalan lahan berkisar antara 1,5 meter hingga 6 meter, sedangkan umur lahan tersebut sekitar 20 tahun. (5) Di lahan tersebut juga terdapat tanaman yang tumbuh secara alami. (6) Sehingga lahan tersebut bisa diberdayakan sebagai lahan pertanian bagi masyarakat sekitar.`;
    
    const KONTEKS_GEMPA_BUMI = `Earthquake is any sudden shaking of the ground caused by the passage of seismic waves through Earth's rocks. Seismic waves are produced when some form of energy stored in Earth's crust is suddenly released, usually when masses of rock straining against one another suddenly fracture and "slip". Earthquakes occur most often along geologic faults, narrow zones where rock masses move in relation to one another. The major fault lines of the world are located at the fringes of the huge tectonic plates that make up Earth's crust.

Little was understood about earthquakes until the emergence of seismology at the beginning of the 20th century. Seismology, which involves the scientific study of all aspects of earthquakes, has yielded answers to such long-standing questions as why and how earthquakes occur. About 50,000 earthquakes large enough to be noticed without the aid of instruments occur annually over the entire Earth. Of these, approximately 100 are of sufficient size to produce substantial damage if their centers are near areas of habitation. Very great earthquakes occur on average about once per year. Over the centuries they have been responsible for millions of deaths and an incalculable amount of damage to property.`;
    
    const KONTEKS_KANKER = `Up to this point, the numbers are terrifying, isn't it? Well, that is because it is. Cancer is the second leading cause of death, right after heart disease, but let us go back to the fundamental question first. What exactly is cancer? It is actually a group of more than one hundred separate diseases. Cancer cells come from normal cells because of mutations in DNA. Those mutations can occur spontaneously. The mutations may be also induced by other factors such as nuclear and electromagnetic radiation, viruses, bacteria and fungi, parasites, heat, chemicals in the air, water and food, mechanical cell-level injury, free radicals, evolution, and aging of DNA. All such factors can produce mutations that may start cancer.

Cancer cells are formed continuously in the organism. It is estimated that there are about 10,000 cancer cells at any given time in a healthy person. Why do some result in macroscopic-level cancers and some do not? First, not all damaged cells can multiply and many of them die quickly. Second, those which potentially divide and form cancer are effectively destroyed by the mechanisms available to the immune system. Therefore, cancer develops if the immune system is not working properly or the amount of cells produced is too great for the immune system to eliminate.`;
    
    const KONTEKS_KELUARGA = `(1) Although I am not a perfect son or brother, I believe I am a responsible member of my family. (2) First, I help out financially whenever I can. (3) For example, from the pay for my part-time job, I give my parents $100 each month to help with the rent. (4) Also, on the weekends, I pay for movie rentals and take-out pizza because I know that my parents can't afford extras. (5) In an emergency, my family can always count on me. (6) Last year, when my father's car got impounded, I took all the money from my savings account so he could get it back and drive to work.

(7) Second, I am a good role model for my younger siblings. (8) For instance, I sit with them every night and do my college homework while they do their homework. (9) In addition, my brother needs lots of advice about women, and since I am an expert, I always tell him how to treat the ladies with respect. (10) I also change my schedule when possible to drive my sister to school and soccer practices, so she doesn't have to take the bus.

(11) Last, I respect my parents. (12) I try never to argue with them about things like yard work or girlfriends. (13) I obey their rules, like the midnight curfew on weekends, because I know that the rules are for my benefit. (14) Plus, I honor their religious beliefs even though I don't worship with them anymore. (15) I know that my parents and siblings love me and appreciate my contributions to our family.`;
    
    const KONTEKS_KULIAH = `Thinking about attending college was intimidating to me. I wondered whether I could make it through the classes, and I often wondered whether I was "college material." However, once I began taking classes at City College, three things motivated me to stick with my education. Taking a career assessment test, finding a helpful mentor, and writing in my English class all motivated me to work hard in college.

First of all, when I started college, my counselor told me to identify my goals by taking a career placement exam. The exam did not sound interesting to me, but I took it anyway. I was surprised by how much fun I had answering the questions... [Teks dipersingkat] ...Taking the career placement exam turned out to be a great motivator for my college success.

One thing that really motivated me in school was finding a mentor in my friend Jocelyn. To begin with, Jocelyn motivated me by sharing her many experiences in life and in college. For example, she had been divorced and coped with her depression by drinking... [Teks dipersingkat] ...I am so grateful for Jocelyn's mentorship, and I hope that one day I can be a mentor for another student who is just starting out in college.

One of the most important ways I became motivated in college was by writing in my first English class. In high school, writing essays always bored me. However, my college English instructor, Ms. Ezell, encouraged me to write on topics that meant a lot to me... [Teks dipersingkat] ...I learned that when I write about topics that matter, writing can be powerful.

If you are a new college student, and your motivation is low, take my advice: Go take a career placement test, immediately! Then, identify another student (one who has more experience than you and is successful) and ask that person to be your mentor. You will probably get a positive response. Last, go visit your English instructor and say that you would like to write on a topic that has personal meaning for you. If you are lucky, you may get another positive response that will boost your motivation and allow you to enjoy your college work.`;


    // --- DATA SOAL (40 Soal) ---
    const questions = [
        // RTO-8SINMLX (Soal 1-20)
        {
            context: KONTEKS_MEDSOS_2,
            question: "Kalimat topik paragraf pertama adalah kalimat...",
            options: ["(1)", "(2)", "(3)", "(4)"],
            answer: "(1)",
            explanation: `Kalimat topik berisi gagasan atau ide suatu paragraf. Kalimat topik sering juga disebut sebagai gagasan pokok, ide pokok, atau pokok pikiran. Kalimat topik yang terdapat pada paragraf pertama teks tersebut adalah kalimat nomor 1 yang merupakan kalimat utama. Sementara itu, kalimat nomor 2, 3, dan 4 merupakan kalimat penjelas karena terdapat kata rujukan dan pengulangan ide dari kalimat 1.`
        },
        {
            context: KONTEKS_MEDSOS_2,
            question: "Kesalahan penggunaan tanda baca koma terdapat pada kalimat ....",
            options: ["(2)", "(4)", "(7)", "(9)"],
            answer: "(2)",
            explanation: `Tanda baca koma tidak dapat diletakkan di depan keterangan yang didahului oleh induk kalimat. Bukan hanya anak kalimat, melainkan juga keterangan yang berada di belakang induk kalimat tidak tepat jika didahului tanda baca koma. Pada kalimat kedua terdapat tanda baca koma sebelum kata karena. Kata karena merupakan konjungsi penanda unsur keterangan. Kata tersebut berada di belakang induk kalimat sehingga penggunaan tanda baca koma pada kalimat tersebut tidak tepat. Dengan demikian, jawaban yang tepat adalah A.`
        },
        {
            context: KONTEKS_MEDSOS_2,
            question: "Pertanyaan manakah yang jawabannya TIDAK ditemukan dalam teks tersebut?",
            options: ["Apa dampak yang didapat dari penggunaan media sosial?", "Mengapa masyarakat dapat ketergantungan media sosial?", "Kapan masyarakat menggunakan media sosial?", "Bagaimana cara menangani perasaan negatif saat menggunakan media sosial?"],
            answer: "Kapan masyarakat menggunakan media sosial?",
            explanation: `Teks tidak membahas tentang kapan masyarakat menggunakan media sosial. Sementara itu, penjelasan pilihan jawaban yang lain adalah sebagai berikut. Pilihan jawaban A tidak tepat karena pertanyaan tersebut terdapat jawabannya pada kalimat (7). Pilihan jawaban B tidak tepat karena pertanyaan tersebut terdapat jawabannya pada kalimat (3). Pilihan jawaban D tidak tepat karena pertanyaan tersebut terdapat jawabannya pada kalimat (9). Jadi, jawaban yang tepat adalah pilihan C.`
        },
        {
            context: KONTEKS_MEDSOS_2,
            question: "Kelemahan paragraf kedua teks tersebut adalah...",
            options: ["data tidak dipaparkan dengan jelas dan menyeluruh", "dampak negatif penggunaan media sosial tidak ditemukan", "menanggulangi perasaan negatif yang muncul tidak dijelaskan", "kesehatan mental dalam dampak negatif tidak dijabarkan"],
            answer: "data tidak dipaparkan dengan jelas dan menyeluruh",
            explanation: `Kelemahan sebuah paragraf dapat berupa pernyataan yang kurang tepat dalam paragraf, pernyataan yang tidak terdapat dalam paragraf, atau pernyataan yang berlebih dalam paragraf. Biasanya, kelemahan sebuah paragraf mengacu pada kalimat sumbang atau kalimat yang tidak sesuai dengan ide pokok paragraf. Kelemahan paragraf juga banyak ditemukan berupa hal penting yang tidak dijelaskan lebih rinci pada paragraf tersebut. Kelemahan pada paragraf kedua tersebut, yaitu tidak dijelaskan secara jelas mengenai dampak negatif penggunaan media sosial. Isi paragraf kedua hanya menyebutkan dampak-dampak negatifnya tanpa menjelaskan alasan dan penjelasannya sehingga data tidak dipaparkan dengan jelas dan menyeluruh. Dengan demikian, jawaban yang tepat adalah A.`
        },
        {
            context: KONTEKS_KAI,
            question: "Gagasan utama paragraf kedua adalah...",
            options: ["Promo KAI Online Travel Fair diadakan agar masyarakat lebih mudah dalam membeli tiket kereta, serta mendapatkan harga yang lebih terjangkau dari biasanya.", "Tiket promo Online Travel Fair dapat dipesan melalui aplikasi KAI Access dan website kai.id.", "Pada September 2018, tercatat sebanyak 1.148.274 pengguna jasa telah melakukan transaksi.", "Sebanyak 9.930 tiket KA komersial jarak jauh dan menengah yang akan menerapkan tarif khusus."],
            answer: "Promo KAI Online Travel Fair diadakan agar masyarakat lebih mudah dalam membeli tiket kereta, serta mendapatkan harga yang lebih terjangkau dari biasanya.",
            explanation: `Gagasan utama adalah pernyataan yang dapat mewakili sebuah paragraf. Gagasan utama ada yang tersurat, yakni yang muncul sebagai kalimat utama dan yang tersirat di keseluruhan isi paragraf. Kalimat utama biasanya berisi pernyataan umum dan dijelaskan oleh kalimat-kalimat selanjutnya. Kalimat yang berisikan pernyataan umum adalah kalimat (5) yang berisikan kalimat utama dalam teks tersebut karena menjelaskan tentang inti paragraf. Kalimat (5) Promo KAI Online Travel Fair diadakan agar masyarakat lebih mudah dalam membeli tiket kereta serta mendapatkan harga yang lebih terjangkau dari biasanya menjadi gagasan utama dalam paragraf tersebut. Jadi, jawaban yang tepat adalah pilihan A.`
        },
        {
            context: KONTEKS_KAI,
            question: "Apa upaya yang perlu dilakukan PT. KAI untuk mengurangi pembelian tiket di loket?",
            options: ["Menggelar KAI Online Travel Fair", "Pemesanan tiket KA bisa melalui website kai.id", "Meresmikan aplikasi All New KAI Access", "Adanya tiket promo pada KAI Online Travel Fair"],
            answer: "Pemesanan tiket KA bisa melalui website kai.id",
            explanation: `Jawaban dari pertanyaan tersebut terdapat pada kalimat (13) dan (14). (13) Dengan adanya program KAI Online Travel Fair ini, makin banyak orang yang menjadi pengguna aktif aplikasi KAI Access atau melakukan pemesanan tiket KA lewat website kai.id. (14) Tawaran ini menjadi salah satu cara untuk mengurangi antrean di loket stasiun. Dari kedua kalimat tersebut, dapat disimpulkan bahwa dengan adanya program KAI Online Travel Fair ini, makin banyak orang yang menjadi pengguna aktif aplikasi KAI Access atau melakukan pemesanan tiket KA lewat website kai.id sehingga menjadi salah satu cara untuk mengurangi antrean di loket stasiun. Jadi, jawaban yang tepat adalah pilihan B.`
        },
        {
            context: KONTEKS_KAI,
            question: "Kalimat yang tidak efektif adalah kalimat .....",
            options: ["(1) dan (5)", "(2) dan (6)", "(4) dan (9)", "(7) dan (10)"],
            answer: "(4) dan (9)",
            explanation: `Kalimat tidak efektif adalah kalimat yang susunan kalimatnya tidak mudah untuk dipahami dan tidak dapat memunculkan pesan yang lengkap dan jelas bagi pembaca atau pendengar. Kalimat tidak efektif ditemukan pada kalimat (4) dan (9). Penjelasan kedua kalimat tersebut adalah sebagai berikut. Kalimat (4) tidak memiliki subjek. Penjelasan struktur kalimat tersebut adalah sebagai berikut. Pada tarif promo ini (K) berlaku (P) untuk kereta kelas ekonomi, bisnis, dan eksekutif keberangkatan 13 Oktober 2018—15 Januari 2019. (K) Kalimat (9): Ketentuan tersebut, yaitu tiket promo pada KAI Online Travel Fair ini tidak dapat dibatalkan dan tidak dapat mengubah jadwal, tidak berlaku reduksi dan tarif parsial, dan tidak dapat digabung dengan tarif reduksi atau diskon lainnya. Kalimat (9) tidak mudah dipahami karena susunan kalimatnya yang berantakan. Kalimat tersebut harus dipecah menjadi dua kalimat agar mudah dipahami oleh pembacanya. Perbaikan yang tepat adalah sebagai berikut. Ketentuan tiket promo pada KAI Online Travel Fair ini tidak dapat dibatalkan dan tidak dapat diubah jadwalnya. Selain itu, ketentuan tiket promo pada KAI Online Travel Fair ini juga tidak berlaku reduksi dan tarif parsial, dan tidak dapat digabung dengan tarif reduksi atau diskon lainnya. Jadi, jawaban yang tepat adalah pilihan C.`
        },
        {
            context: KONTEKS_KAI,
            question: "Apa simpulan isi teks tersebut?",
            options: ["Promo PT KAI bertujuan untuk mengurangi antrean di loket stasiun.", "KAI Online Travel Fair mengadakan promo agar banyaknya pengguna website kai.id.", "Masyarakat dapat membeli tiket kereta lebih murah di KAI Online Travel Fair.", "PT KAI melakukan peningkatan pengunjung website dengan promosi harga tiket."],
            answer: "KAI Online Travel Fair mengadakan promo agar banyaknya pengguna website kai.id.",
            explanation: `Simpulan dalam sebuah teks harus mencerminkan topik dari bacaan. Topik dalam bacaan tersebut adalah promosi KAI Online Travel Fair yang kemudian dijelaskan kembali pada setiap paragraf. Promosi tersebut bertujuan agar banyak orang yang menggunakan website kai.id untuk membeli tiket secara mudah dibandingkan membeli di loket. Jadi, simpulan teks tersebut KAI Online Travel Fair mengadakan promo agar banyaknya pengguna website kai.id. Dengan demikian, jawaban yang tepat adalah pilihan B.`
        },
        {
            context: KONTEKS_SUKU_BADUY,
            question: "Apa gagasan utama paragraf ke-2 pada teks di atas?",
            options: ["Suku Baduy menyembah nenek moyang pemberi hidup dan mati.", "Pemujaan suku Baduy terhadap pemegang kekuasaan.", "Masyarakat suku Baduy memuja roh halus atau roh gaib.", "Masyarakat suku Baduy memuja objek pemujaan."],
            answer: "Masyarakat suku Baduy memuja roh halus atau roh gaib.",
            explanation: "Kalimat utama paragraf kedua terletak di awal kalimat (kalimat 7) yang membahas tentang Suku Baduy yang memuja roh halus atau roh gaib. Kalimat-kalimat selanjutnya menjadi penjelas."
        },
        {
            context: KONTEKS_SUKU_BADUY,
            question: "Pernyataan manakah yang TIDAK sesuai dengan isi teks?",
            options: ["Nama Baduy berasal dari nama sungai yang melewati wilayah tersebut.", "Masyarakat Baduy tidak bisa keluar wilayahnya.", "Masyarakat Baduy menolak adanya agama lain yang masuk ke sukunya.", "Ketua adat yang bisa pergi ke tempat objek pemujaan."],
            answer: "Masyarakat Baduy tidak bisa keluar wilayahnya.",
            explanation: `Pernyataan A sesuai dengan teks pada kalimat (3). Pernyataan C sesuai dengan teks pada kalimat (5). Pernyataan D sesuai dengan teks pada kalimat (7) Pernyataan E sesuai dengan teks pada kalimat (10). Sementara itu, pernyataan pada jawaban B tidak sesuai karena masyarakat Baduy sebenarnya bisa keluar wilayah tetapi jika hanya ada kebutuhan mendesak saja. Pernyataan tersebut bisa disanggah oleh kalimat (6). Karena orang Baduy hidupnya sangat terisolasi dan jauh dari pergaulan umum, hanya pada waktu-waktu terdesak barulah mereka keluar wilayah. Jadi, jawaban yang benar adalah B.`
        },
        {
            context: KONTEKS_SUKU_BADUY,
            question: "Apa yang dirujuk oleh kata mereka pada kalimat (5)?",
            options: ["suku Baduy", "masyarakat Baduy", "keturunan raja pajajaran", "penghuni pegunungan kendeng"],
            answer: "masyarakat Baduy",
            explanation: `Kata "mereka" pada kalimat (5) merujuk pada "masyarakat Baduy" yang disebutkan dalam kalimat sebelumnya. Kalimat (4) menyebutkan "Masyarakat Baduy merupakan bangsa Indonesia...", kemudian kalimat (5) melanjutkan "Mereka masih keturunan Raja Pajajaran...". Jadi, kata "mereka" jelas merujuk pada masyarakat Baduy.`
        },
        {
            context: KONTEKS_SUKU_BADUY,
            question: "Apa kelemahan yang ada pada paragraf ke-2?",
            options: ["Penggunaan kata sebenarnya pada kalimat (2).", "Penggunaan kata diambil pada kalimat (3).", "Penggunaan kata karena pada kalimat (6).", "Penggunaan kata menjadi pada kalimat (8)."],
            answer: "Penggunaan kata diambil pada kalimat (3).",
            explanation: `Kelemahan pada paragraf kedua adalah penggunaan kata "diambil" pada kalimat (3) yang kurang tepat. Seharusnya digunakan kata "berasal" atau "diambil dari" dengan struktur yang lebih baik. Kalimat (3) seharusnya: "Nama Baduy sendiri berasal dari nama sungai yang melewati wilayah tersebut, yaitu sungai Cibaduy."`
        },
        {
            context: KONTEKS_KELUARGA,
            question: "How does the third sentence relate to the second sentence?",
            options: ["explains how perfect the author to his family","argues that the perfect son or brother have to be a responsible to his family", "states the example how the author helps his family's financial", "tells how to be the responsible member of the family"],
            answer: "states the example how the author helps his family's financial",
            explanation: `Soal tersebut menanyakan hubungan kalimat ketiga dengan kalimat kedua. Di awal teks, penulis menyatakan bahwa ia adalah anggota keluarga yang bertanggung jawab. Pada kalimat kedua, penulis menjelaskan hal pertama yang dapat ia lakukan sebagai anggota keluarga yang bertanggung jawab adalah membantu keluarganya dalam hal keuangan (First, I help out financially whenever I can.). Pada kalimat ketiga, penulis menjelaskan bahwa gaji dari pekerjaan paruh waktunya diberikan untuk orang tuanya setiap bulan untuk membantu sewa (For example, from the pay for my part-time job, I give my parents $100 each month to help with the rent.). Dengan demikian, hubungan kalimat ketiga dengan kalimat kedua adalah kalimat ketiga menyebutkan contoh cara penulis membantu keuangan keluarganya (states the example how the author helps his family's financial). Jadi, pilihan jawaban yang tepat adalah C`
        },
        {
            context: KONTEKS_KELUARGA,
            question: "Which of the following statement is relevant with the idea of 'help out financially' in the passage?",
            options: ["Never arguing with your parents", "Driving for your sister to school or soccer practice", "Buying some tickets to watch a movie and pizza on the weekend", "Paying for every rent in your family"],
            answer: "Buying some tickets to watch a movie and pizza on the weekend",
            explanation: `Soal tersebut meminta pernyataan yang relevan dengan gagasan 'membantu secara finansial' dalam teks bacaan. Kalimat yang berkaitan dengan 'membantu secara finansial' (the idea of help out financially) dapat ditemukan dalam beberapa contoh yang disebutkan oleh penulis. Pada kalimat ketiga, penulis membantu keuangan keluarganya dengan cara memberikan orang tuanya 100 dolar setiap bulan untuk membayar sewa (I give my parents $100 each month to help with the rent). Pada kalimat keempat, penulis membantu keuangan keluarganya dengan cara membeli tiket untuk menonton film dan membeli pizza (on the weekends, I pay for movie rentals and take-out pizza). Pada kalimat keenam, penulis membantu keuangan keluarganya dengan cara memberikan semua uang tabungannya ke orang tuanya untuk menebus mobil ayahnya yang disita (when my father's car got impounded, I took all the money from my savings account so he could get it back and drive to work). Dengan demikian, dapat diketahui bahwa pernyataan yang relevan dengan gagasan 'membantu secara finansial' adalah pilihan D, yaitu buying some tickets to watch a movie and pizza on the weekend. Jadi, pilihan jawaban yang benar adalah C.`
        },
        {
            context: KONTEKS_KELUARGA,
            question: "Based on the passage, which sentences that illustrate the author's relationship with his siblings?",
            options: ["8, 9, 10", "6, 7, 9", "3, 7, 8", "3, 4, 5"],
            answer: "8, 9, 10",
            explanation: `Soal tersebut menanyakan kalimat yang menggambarkan hubungan antara penulis dengan saudara kandungnya. Berdasarkan paragraf tersebut, penulis menjadi sosok yang bertanggung jawab dalam keluarganya dengan tiga cara. Salah satu cara penulis bertanggung jawab terhadap keluarganya adalah menjadi panutan bagi adik-adiknya (I am a good role model for my younger siblings). Adapun, ilustrasi yang menggambarkan hubungan si penulis dengan saudara-saudaranya terdapat pada kalimat berikut. Kalimat ke-8, tertulis I sit with them every night and do my college homework while they do their homework. Penulis menjelaskan bahwa ia duduk bersama mereka (saudara-saudaranya) setiap malam dan mengerjakan tugas kuliahnya, sementara mereka mengerjakan tugas sekolah mereka. Kalimat ke-9, tertulis my brother needs lots of advice about women … I always tell him how to treat the ladies with respect. Penulis menjelaskan bahwa ia memberikan saran untuk adik laki-lakinya ketika ia membutuhkan banyak nasihat tentang wanita. Kalimat ke-10, tertulis I also change my schedule when possible to drive my sister to school and soccer practice so she doesn't have to take the bus. Penulis menjelaskan bahwa ia mengubah jadwal kegiatannya jika memungkinkan untuk mengantar adiknya ke sekolah dan latihan sepak bola sehingga dia tidak harus naik bus. Berdasarkan penjelasan tersebut, gambaran mengenai hubungan antara penulis dengan saudara kandungnya terdapat pada kalimat ke-8, ke-9, dan ke-10. Dengan demikian, pilihan jawaban yang tepat adalah A.`
        },
        {
            context: KONTEKS_KELUARGA,
            question: "About respecting parents in the passage, the author's attitude is ....",
            options: ["appreciating his parents' contributions to the family", "helping out financially for his parents and siblings", "always obeying his parents rules, like the midnight curfew on weekends", "being a good role model for his younger siblings"],
            answer: "always obeying his parents rules, like the midnight curfew on weekends",
            explanation: `Soal tersebut menanyakan sikap penulis tentang menghormati orang tua dalam teks. Berdasarkan teks, penulis menunjukkan sikap menghormati orang tua dengan cara: (12) I try never to argue with them about things like yard work or girlfriends. (13) I obey their rules, like the midnight curfew on weekends, because I know that the rules are for my benefit. (14) Plus, I honor their religious beliefs even though I don't worship with them anymore. Dari pilihan yang ada, yang paling tepat menggambarkan sikap penulis dalam menghormati orang tua adalah "always obeying his parents rules, like the midnight curfew on weekends".`
        },
        {
            context: KONTEKS_KULIAH,
            question: "The author thinks that the helpful mentor in paragraph 3 is someone who...",
            options: ["becomes your best friend and helps you to finish your college", "teaches you so much about taking care of your health", "reads your assignments and provides tough but sensitive criticism", "motivates you by sharing his/her many experiences in life and in college"],
            answer: "motivates you by sharing his/her many experiences in life and in college",
            explanation: `Soal tersebut menanyakan pendapat penulis mengenai mentor yang sangat membantu berdasarkan teks. Penulis menyampaikan pada paragraf ketiga tentang the helpful mentor. Menurut penulis, mentor yang sangat membantu adalah yang memberikan motivasi kepada penulis melalui cerita pengalaman dalam hidup dan masa di kampus seperti yang tertulis pada kalimat "Jocelyn motivated me by sharing her many experiences in life and in college". Jocelyn sebagai mentor juga mendukung penulis menjadi merasa pandai (Jocelyn supported me was by making me feel intelligent) dan memberikan pujian serta meyakinkan penulis untuk menyelesaikan masa perkuliahan (she praised my ability and encouraged me to stick with it). Berdasarkan hal tersebut, pilihan jawaban yang tepat adalah D.`
        },
        {
            context: KONTEKS_KULIAH,
            question: "In presenting the ideas, the author starts by.....",
            options: ["describing the author's college life", "arguing the college material and taking the career assessment test", "telling how the author's assumption about the college activities", "stating the motivation to start her education in the college"],
            answer: "telling how the author's assumption about the college activities",
            explanation: `Soal tersebut menanyakan cara penulis memulai menyajikan idenya pada teks tersebut. Pada teks, penulis memulai paragraf pertama dengan menyampaikan pandangannya tentang berkuliah. Hal tersebut dapat dilihat pada kalimat "Thinking about attending college was intimidating to me." Kalimat kedua "I wondered whether I could make it through the classes, and I often wondered whether I was 'college material'." memperkuat pandangan penulis yang berasumsi tentang kegiatannya di kampus. Dengan demikian, pilihan jawaban yang tepat adalah C.`
        },
        {
            context: KONTEKS_KULIAH,
            question: "In connection to paragraph 1, paragraph 2 functions to ....",
            options: ["exemplify the intimidating college class", "explain the author's experience when started her college", "state the steps to begin taking classes", "show the way to find a helpful mentor"],
            answer: "explain the author's experience when started her college",
            explanation: `Pada paragraf pertama kalimat "Thinking about attending college was intimidating to me." penulis berasumsi tentang pendidikan tingginya yang menjadi momok bagi dirinya. Namun, pada paragraf kedua di beberapa kalimat, yaitu "… when I started college, my counselor told me to identify my goals by taking a career placement exam ….", "The exam did not sound interesting to me…. I was surprised by how much fun I had answering the questions about where I wanted to work (inside or outside), what hours I wanted to work (day, evening, or night), and where I wanted to live.", "… the exam helped me see that some careers would require me", dan "taking the career placement exam turned out to be a great motivator for my college success." menjelaskan pengalaman penulis ketika memulai masa perkuliahannya. Jadi, pilihan jawaban yang benar adalah B.`
        },
        {
            context: KONTEKS_KULIAH,
            question: "The last paragraph of the passage most likely deals with...",
            options: ["suggestions from the author for a new college student", "examples the more experience and successful students", "the reason students to be successful student in the college", "factors that motivate the successful student"],
            answer: "suggestions from the author for a new college student",
            explanation: `Pada paragraf terakhir kalimat "If you are a new college student, and your motivation is low, take my advice …." menyatakan bahwa penulis memberikan saran kepada mahasiswa baru untuk memiliki motivasi yang baik. Pilihan A, suggestions from the author for a new college student merujuk pada paragraf terakhir yang membahas tentang saran penulis kepada mahasiswa baru. Jadi, pilihan jawaban yang paling tepat adalah A.`
        },

        // RTO-Q706WAS (Soal 21-40)
        {
            context: KONTEKS_MEDSOS_1,
            question: "Apa gagasan utama paragraf pertama?",
            options: ["Internet menjadi sumber untuk pengguna media sosial.", "Media sosial menjadi tempat untuk interaksi sosial melalui internet.", "Media sosial memudahkan untuk berpartisipasi, berbagi dan menciptakan konten.", "Teknologi internet yang semakin maju dapat memudahkan untuk akses media sosial."],
            answer: "Media sosial memudahkan untuk berpartisipasi, berbagi dan menciptakan konten.",
            explanation: `Gagasan utama sebuah paragraf terdapat pada kalimat utama. Kalimat utama tersebut dapat berada di awal paragraf, di akhir paragraf, atau keduanya. Kalimat pertama pada paragraf pertama menyatakan bahwa media sosial memudahkan penggunanya untuk berpartisipasi, berbagi, dan dapat menciptakan konten melalui internet. Kalimat selanjutnya memaparkan pernyataan yang mendukung kalimat pertama. Dari informasi tersebut dapat diketahui kalimat utama pada paragraf tersebut terdapat di awal paragraf. Sementara itu, kalimat berikutnya adalah kalimat penjelas. Kalimat utama paragraf pertama membicarakan media sosial yang menjadi media didapat dengan mudah berpartisipasi, berbagi, dan dapat menciptakan konten. Kalimat selanjutnya menjelaskan tentang media sosial. Dengan demikian gagasan utama dari paragraf tersebut adalah media sosial memudahkan untuk berpartisipasi, berbagi dan menciptakan konten. Jadi, jawaban yang tepat adalah C.`
        },
        {
            context: KONTEKS_MEDSOS_1,
            question: "Kesalahan penggunaan tanda baca ditemukan pada kalimat...",
            options: ["(4)", "(6)", "(8)", "(10)"],
            answer: "(6)",
            explanation: `Pesatnya perkembangan media sosial saat ini, disebabkan oleh masyarakat yang memiliki alat komunikasi modern dan melupakan yang lama. Pada kalimat (6) terdapat kesalahan penggunaan tanda baca koma. Tanda baca koma tidak dapat diletakkan di depan keterangan yang didahului oleh induk kalimat. Bukan hanya anak kalimat, melainkan juga keterangan yang berada di belakang induk kalimat tidak tepat jika didahului tanda baca koma. Pada kalimat (6) terdapat tanda baca koma sebelum kata disebabkan. Kata disebabkan merupakan konjungsi penanda unsur keterangan. Kata disebabkan tersebut berada di belakang induk kalimat sehingga penggunaan tanda baca koma pada kalimat tersebut tidak tepat. Dengan demikian, jawaban yang tepat adalah B.`
        },
        {
            context: KONTEKS_MEDSOS_1,
            question: "Manakah pertanyaan yang jawabannya TIDAK terdapat dalam teks?",
            options: ["Apakah media sosial termasuk pendukung interaksi sosial?", "Mengapa media massa konvensional mulai ditinggalkan?", "Apakah mendapatkan informasi melalui televisi dan radio membutuhkan modal besar?", "Bagaimana media sosial dapat digunakan oleh semua orang?"],
            answer: "Bagaimana media sosial dapat digunakan oleh semua orang?",
            explanation: `Jawaban D tidak ada jawaban dari pertanyaannya. Jawaban pertanyaan A, yaitu media sosial merupakan media yang mendukung interaksi sosial yang dapat mengubah komunikasi menjadi dialog interaktif melalui internet. Jawaban pertanyaan B, yaitu kecepatan media sosial juga mulai tampak menggantikan peranan media massa konvensional dalam menyebarkan berita-berita. Jawaban pertanyaan C, yaitu televisi, radio, atau koran dibutuhkan modal yang besar dan tenaga kerja yang banyak untuk mendapatkan informasi. Jawaban pertanyaan E, yaitu media sosial merupakan media yang mendukung interaksi sosial yang dapat mengubah komunikasi menjadi dialog interaktif melalui internet, sedangkan media konvensional, yaitu televisi, radio atau koran. Jadi, jawaban yang benar adalah D.`
        },
        {
            context: KONTEKS_MEDSOS_1,
            question: "Kata sambung yang salah adalah...",
            options: ["dengan pada kalimat (1)", "bahwa pada kalimat (3)", "yang pada kalimat (6)", "untuk pada kalimat (8)"],
            answer: "bahwa pada kalimat (3)",
            explanation: `Kata sambung atau kata hubung adalah kata yang berfungsi menghubungkan dua kata, frasa, kalimat, maupun paragraf. Kata sambung yang tidak tepat terdapat pada kalimat berikut. Saat teknologi internet semakin maju dapat disadari bahwa, media sosial pun ikut tumbuh dengan pesat. Kata bahwa pada kalimat tersebut tidak tepat karena pada kalimat tersebut sudah terdapat tanda baca koma. Tanda baca koma pada kalimat tersebut berfungsi untuk menghindari pemaknaan ganda yang dapat muncul. Dengan demikian, jawaban yang tepat adalah B.`
        },
        {
            context: KONTEKS_SUKU_DAYAK,
            question: "Kalimat manakah yang maknanya sejajar dengan kata mengapresiasi pada kalimat (2) Teks B?",
            options: ["Guru memberikan penghargaan kepada murid yang nilainya sangat baik.", "Setelah menyaksikan konser tersebut penonton berdiri sambil bertepuk tangan.", "Teman saya datang ke pesta ulang tahunku dengan membawa hadiah.", "Hebat sekali, anak itu dapat menyanyikan lagu dengan merdu."],
            answer: "Setelah menyaksikan konser tersebut penonton berdiri sambil bertepuk tangan.",
            explanation: `Orang suku dayak mengapresiasi tradisi kebudayaan masyarakat adat Dayak Kanayatn, Kalimantan Barat, yang rata-rata berprofesi sebagai petani. Kata mengapresiasi pada kalimat (2) teks B bermakna melakukan pengamatan, penilaian, dan penghargaan (misalnya terhadap karya seni). Kalimat yang maknanya sejajar dengan kata tersebut adalah Setelah menyaksikan konser tersebut penonton berdiri sambil bertepuk tangan. Kalimat tersebut bermakna penonton mengapresiasi sebuah konser. Dengan demikian, jawaban yang tepat adalah B.`
        },
        {
            context: KONTEKS_SUKU_DAYAK,
            question: "Apa simpulan kedua teks di atas?",
            options: ["Suku Dayak merupakan suku asli kalimantan yang memiliki keragaman budaya.", "Suku Dayak di Kalimantan memiliki etnik, tradisi, dan budaya yang selalu dilakukan.", "Kehidupan suku Dayak dipenuhi dengan warisan magis yang kuat.", "Tradisi dan budaya yang dimiliki suku dayak dilakukan sebagai ungkapan rasa syukur."],
            answer: "Suku Dayak di Kalimantan memiliki etnik, tradisi, dan budaya yang selalu dilakukan.",
            explanation: `Simpulan adalah mengambil intisari bacaan dan mencari jawaban ide pokok kemudian menyusunnya menjadi pernyataan menggunakan bahasa sendiri. Menyusun sebuah simpulan dari teks mengharuskan pembaca memahami isi teks tersebut dengan membaca keseluruhan. Teks A membahas tentang pemahaman suku dayak dan suku Dayak etnik dan budayanya. Teks B membahas tentang budaya dan tradisi yang bisa dilakukan oleh suku Dayak. Kedua teks tersebut membahas etnik, tradisi, dan budaya yang selalu dilakukan oleh suku Dayak di Kalimantan. Simpulan dari kedua teks tersebut adalah Suku Dayak di Kalimantan memiliki etnik, tradisi, dan budaya yang selalu dilakukan. Dengan demikian, jawaban yang tepat yaitu B.`
        },
        {
            context: KONTEKS_SUKU_DAYAK,
            question: "Informasi manakah yang terdapat pada Teks 1, tetapi tidak terdapat pada Teks 2?",
            options: ["Suku Dayak berada di Kalimantan, yang rata-rata berprofesi sebagai petani.", "Upacara adat selalu dilakukan oleh masyarakat suku di pedalaman tanah Borneo.", "Suku ini terkenal karena memiliki keunikan tradisi, etnik, dan budayanya.", "Simbol khas yang dimiliki oleh suku dayak yaitu ilmu-ilmu spiritualnya."],
            answer: "Simbol khas yang dimiliki oleh suku dayak yaitu ilmu-ilmu spiritualnya.",
            explanation: `Jawaban D paling tepat karena pembahasan mengenai ilmu-ilmu spiritual yang dimiliki suku dayak hanya dibahas pada paragraf 1. Dengan demikian, jawaban yang tepat adalah D.`
        },
        {
            context: null,
            question: "Kalimat manakah yang salah satu katanya ditulis secara tidak tepat?",
            options: ["Walau bagaimanapun, panitia tetap akan melaksanakan kegiatan pembukaan acara.", "Meskipun demikian, Jakarta tetaplah menjadi kota terpadat se-Indonesia.", "Jumlah peserta yang mengikuti lomba sekitar 30-an orang.", "Ada lima puluh lima siswa yang mengikuti acara Raimuna di Cibubur."],
            answer: "Ada lima puluh lima siswa yang mengikuti acara Raimuna di Cibubur.",
            explanation: `Berikut analisis kalimat pada pilihan jawaban. Pilihan jawaban A "Walau bagaimanapun, panitia tetap akan melaksanakan kegiatan pembukaan acara." tidak terdapat penulisan ejaan yang salah. Pilihan jawaban B "Meskipun demikian, Jakarta tetaplah menjadi kota terpadat se-Indonesia." tidak terdapat penulisan ejaan yang salah. Pilihan jawaban C "Jumlah peserta yang mengikuti lomba sekitar 30-an orang." tidak terdapat penulisan ejaan yang salah. Pilihan jawaban D "Ada lima puluh lima siswa yang mengikuti acara Raimuna di Cibubur." Sesuai kaidah penulisan ejaan kata lima puluh lima harus ditulis menggunakan angka. Bilangan yang dinyatakan dengan lebih dari dua kata ditulis menggunakan angka Dengan demikian, jawaban yang paling tepat adalah D.`
        },
        {
            context: KONTEKS_LAHAN_TAILING,
            question: "Apakah inti kalimat (1)?",
            options: ["Peneliti dari Universitas Negeri Papua, Sartji Taberima mengatakan.", "Sartji Taberima mengatakan sesuatu.", "Sartji Taberima mengatakan lahan tailing atau kawasan pengendapan pasir sisa tambang bisa dimanfaatkan menjadi lahan pertanian.", "Sartji Taberima mengatakan tentang lahan tailing."],
            answer: "Sartji Taberima mengatakan lahan tailing atau kawasan pengendapan pasir sisa tambang bisa dimanfaatkan menjadi lahan pertanian.",
            explanation: `Inti kalimat adalah unsur-unsur inti dalam kalimat yang wajib ada dalam sebuah struktur kalimat. Sebuah inti kalimat harus memiliki unsur Subjek dan Predikat. Inti kalimat boleh ditambahkan unsur O (pada kalimat transitif) dan pelengkap, tetapi tidak boleh ada unsur keterangan. Selain itu, setiap unsur kalimat haruslah berupa kata, bukan frasa. Inti kalimat (1) adalah Sartji Taberima mengatakan lahan tailing atau kawasan pengendapan pasir sisa tambang bisa dimanfaatkan menjadi lahan pertanian. Dengan demikian, jawaban yang tepat, yaitu C.`
        },
        {
            context: KONTEKS_LAHAN_TAILING,
            question: "Pernyataan manakah yang TIDAK sesuai dengan isi teks tersebut?",
            options: ["Penelitian lahan tailing menghasilkan lahan tailing yang bisa dijadikan lahan pertanian.", "Lahan tailing dapat dijadikan lahan pertanian.", "Kawasan pertambangan PT Freeport di Timika memiliki ketebalan lahan berkisar antara 1,5 meter hingga 6 meter.", "Masyarakat dapat memberdayakan lahan tailing untuk lahan pertanian."],
            answer: "Kawasan pertambangan PT Freeport di Timika memiliki ketebalan lahan berkisar antara 1,5 meter hingga 6 meter.",
            explanation: `Pernyataan yang tidak sesuai dengan isi teks terdapat pada pilihan jawaban C karena yang memiliki ketebalan lahan berkisar antara 1,5 meter hingga 6 meter adalah tanah tailing yang ada di kawasan pertambangan PT Freeport di Timika, bukan ketebalan dari kawasan pertambangannya. Sementara itu, pernyataan pada pilihan jawaban A, B, D, dan E sudah sesuai dengan ini teks. Jadi, jawaban yang tepat adalah pilihan C.`
        },
        {
            context: KONTEKS_LAHAN_TAILING,
            question: "Apa pesan tersirat di balik teks yang ingin disampaikan penulis?",
            options: ["Peneliti ingin masyarakat mengubah lahan tailing menjadi lahan pertanian.", "Peneliti ingin lahan tailing ditambahkan unsur hara dan bahan organik.", "Masyarakat dapat ikut serta meneliti lahan tailing untuk lahan pertanian.", "Masyarakat dapat peduli mengenai lahan tailing yang akan dijadikan lahan pertanian."],
            answer: "Peneliti ingin masyarakat mengubah lahan tailing menjadi lahan pertanian.",
            explanation: `Pesan tersirat adalah maksud atau makna pembicaraan atau tulisan yang tidak disampaikan secara gamblang tetapi secara tersembunyi yang hanya dapat dimengerti dengan benar-benar memahami keseluruhan pembicaraan atau tulisan. Teks tersebut ingin menyampaikan bahwa peneliti ingin masyarakat mengubah lahan tailing menjadi lahan pertanian. Hal tersebut dibuktikan dari kalimat terakhir, yaitu "Sehingga lahan tersebut bisa diberdayakan sebagai lahan pertanian bagi masyarakat sekitar." Dengan demikian, jawaban yang tepat adalah pilihan A.`
        },
        {
            context: null,
            question: "Kalimat manakah yang mengandung bentukan kata yang TIDAK tepat?",
            options: ["Seluruh warga Indonesia turut menyukseskan Asian Games 2018.", "Para nelayan telah memercayai kebijakan Menteri Kelautan.", "Penggunaan teknologi informasi mempengaruhi perubahan sosial di masyarakat.", "Presiden mentraktir seluruh warga Yogyakarta yang datang ke rumahnya."],
            answer: "Penggunaan teknologi informasi mempengaruhi perubahan sosial di masyarakat.",
            explanation: `Kalimat yang menggunakan bentukan kata secara tidak tepat adalah kalimat pada pilihan jawaban C, yaitu Penggunaan teknologi informasi mempengaruhi perubahan sosial di masyarakat. Kata mempengaruhi tidak baku. Hal tersebut disebabkan huruf p pada kata dasar pengaruh harus lebur saat mendapat imbuhan meng- di awal katanya. Dengan begitu, kata tersebut seharusnya ditulis memengaruhi agar menjadi baku. Dengan demikian, jawaban yang tepat adalah pilihan C.`
        },
        {
            context: KONTEKS_GEMPA_BUMI,
            question: "What is the author's attitude towards the topic of the passage?",
            options: ["Concerned", "Critical", "Informative", "Satisfied"],
            answer: "Informative",
            explanation: `Soal menanyakan sikap penulis terhadap teks tersebut. Sikap penulis dalam sebuah wacana dinyatakan dengan kata sifat, seperti yang terlihat pada pilihan-pilihan yang tersedia. Supaya dapat menentukan kata sifat yang tepat, pembaca perlu memperhatikan hal-hal seperti pilihan kata, jenis kalimat (kalimat fakta atau opini), asumsi, kesimpulan, dan keberpihakan penulis baik yang tersurat maupun tersirat dalam tulisannya. Teks bacaan menunjukkan bahwa topik pembicaraan penulis adalah peristiwa gempa bumi. Di paragraf pertama, penulis memberikan definisi serta menjelaskan proses terjadinya gempa bumi. Di paragraf selanjutnya, penulis berbicara tentang bidang keilmuan seismologi serta terobosan yang dicapainya. Dalam kedua paragraf tersebut, penulis secara konsisten memakai kalimat-kalimat yang bersifat faktual. Selain itu, tidak ada kalimat, frasa, atau kata yang memperlihatkan reaksi pribadi penulis terhadap topik yang dibicarakannya. Dari lima pilihan kata sifat yang tersedia, kata informative adalah kata yang paling tepat menggambarkan sikap penulis. Dengan demikian, pilihan jawaban yang tepat adalah C.`
        },
        {
            context: KONTEKS_GEMPA_BUMI,
            question: "The paragraph following the passage most likely discusses...",
            options: ["suggestions to emerge the seismology", "examples of the substantial damage that caused by the earthquake", "the development of seismology to identify the earthquake earlier", "factors that cause the earthquake and seismic wave"],
            answer: "examples of the substantial damage that caused by the earthquake",
            explanation: `Soal menanyakan topik yang kemungkinan besar dibahas pada paragraf selanjutnya setelah teks tersebut. Dalam sebuah wacana, topik sebuah paragraf lanjutan harus padu dengan topik paragraf sebelumnya. Untuk menguji kepaduan ini, pembaca dapat melihat pada bagian penutup paragraf terakhir dan bagian awal paragraf selanjutnya. Kepaduan dua paragraf tersebut akan terlihat dari bagian-bagian tersebut. Bagian penutup paragraf terakhir di teks bacaan adalah kalimat over the centuries they have been responsible for millions of deaths and an incalculable amount of damage to property. Kalimat penutup ini berbicara mengenai akibat gempa, yaitu hilangnya nyawa manusia dan kerusakan-kerusakan properti. Dari lima pilihan topik yang tersedia, topik yang paling padu dengan kalimat ini adalah examples of the substantial damage that caused by the earthquake. Paragraf dengan topik tersebut akan menjadi paragraf yang padu dengan paragraf terakhir dalam teks bacaan. Jadi, pilihan jawaban yang tepat adalah B.`
        },
        {
            context: KONTEKS_GEMPA_BUMI,
            question: "The idea in the passage may be best summarized that ...",
            options: ["Earthquake is any sudden shaking of the ground that can be identified by the seismology.", "Earthquake is any sudden shaking of the ground that can cause substantial damage if their centers are near areas of habitation.", "Earthquake is suddenly released the masses of the rock straining against one another.", "The seismology was being emerge at the beginning of the 20th century."],
            answer: "Earthquake is any sudden shaking of the ground that can cause substantial damage if their centers are near areas of habitation.",
            explanation: `Soal menanyakan ringkasan berdasarkan ide-ide yang tertulis pada teks. Pada teks tersebut, penulis memulai paragraf dengan menjelaskan gempa bumi bisa terjadi pada kalimat Earthquake is any sudden shaking of the ground caused by the passage of seismic waves through Earth's rocks. Penulis mengakhiri paragraf dengan menyebutkan bahwa gempa bumi yang terjadi di dekat pemukiman akan menimbulkan dampak kerusakan dengan kalimat ... approximately 100 are of sufficient size to produce substantial damage if their centers are near areas of habitation. Dengan demikian, dapat disimpulkan bahwa gempa bumi merupakan getaran tiba-tiba dari permukaan bumi yang dapat menyebabkan kerusakan besar jika pusatnya dekat dengan area pemukiman. Dengan demikian, pilihan jawaban yang tepat adalah B.`
        },
        {
            context: KONTEKS_GEMPA_BUMI,
            question: "What will happen when seismic waves pass through Earth's rocks?",
            options: ["It will answer why and how earthquakes occur.", "It may cause an earthquake.", "It will store some form of energy in Earth's crust.", "The masses of rock will slip."],
            answer: "It may cause an earthquake.",
            explanation: `Soal tersebut menanyakan hal yang akan terjadi ketika gelombang seismik melewati batuan bumi. Informasi tentang gelombang seismik dapat ditemukan dalam paragraf pertama. Dikatakan bahwa 'gempa bumi adalah setiap guncangan tiba-tiba dari tanah yang disebabkan oleh lewatnya gelombang seismik melalui batuan bumi.' Berdasarkan pendefinisian tersebut,  dapat disimpulkan bahwa jika lempengan bumi menerima gelombang seismik, gempa bumi akan terjadi. Jadi, pilihan jawaban yang tepat adalah B.`
        },
        {
            context: KONTEKS_KANKER,
            question: "What topic does the paragraph preceding the passage most likely discuss?",
            options: ["The factors causing the cancer in human body", "The description of cancer as the frightening disease", "The types of cancer that have been identified", "Statistical data about death caused by cancer"],
            answer: "The description of cancer as the frightening disease",
            explanation: `Soal tersebut menanyakan topik paragraf yang paling masuk akal untuk muncul sebelum teks pada soal. Paragraf pertama kalimat pertama diawali dengan 'Hingga titik ini, angka-angka (yang dipaparkan pada paragraf sebelumnya) terlihat mengerikan, bukan? Ya, karena itu (kanker) memang menakutkan.' Hal ini menunjukkan, bahwa paragraf sebelum teks telah memberikan data yang membentuk persepsi pembaca untuk berpikir bahwa kanker adalah penyakit yang mengerikan. Data yang dimunculkan tersebut dapat berupa bagian dari informasi detail untuk memberikan ilustrasi bahwa kanker adalah penyakit yang mengerikan. Jadi, pilihan B tepat. Pilihan A (faktor penyebab kanker), pilihan C (jenis kanker yang telah teridentifikasi), pilihan D (penyakit-penyakit yang mengindikasi adanya kanker), dan pilihan E (kelompok penyakit penyerta sebelum kanker) tidak tepat karena paragraf awal teks tidak memiliki keterkaitan dengan faktor, jenis, indikasi, maupun penyakit penyerta kanker. Jadi, pilihan jawaban yang tepat adalah B.`
        },
        {
            context: KONTEKS_KANKER,
            question: "The author's attitude regarding the factor of the mutations of DNA is .....",
            options: ["agreement", "informative", "indifferent", "approving"],
            answer: "informative",
            explanation: `Soal menanyakan sikap penulis. Pada paragraf kedua penulis menjabarkan hal yang menyebabkan tumbuhnya sel kanker pada kalimat Cancer cells come from normal cells because of mutations of DNA. Penulis juga menjelaskan faktor-faktor yang menyebabkan terjadinya mutasi DNA seperti pada kalimat The mutations may be also induced by other factors such as: nuclear and electromagnetic radiation, viruses, bacteria and fungi, parasites, heat, chemicals in the air, water and food, mechanical cell-level injury, free radicals, evolution, and ageing of DNA, etc. All such factors can produce mutations that may start cancer. Dengan begitu sikap penulis terhadap penjabarannya tentang the mutations of DNA adalah informatif. Jadi, pilihan jawaban yang tepat adalah B.`
        },
        {
            context: KONTEKS_KANKER,
            question: "Based on the passage, the mutations of DNA cause...",
            options: ["normal cells formed to be the cancer cells that happened continuously in the organism", "the cancer cells in the organism cured", "heart disease that formed into the cancer cells in the organism", "the evolution of the cancer cells in the organism"],
            answer: "normal cells formed to be the cancer cells that happened continuously in the organism",
            explanation: `Soal tersebut menanyakan informasi yang tepat mengenai mutasi DNA. Pada paragraf kedua, penulis menyatakan Cancer cells come from normal cells because of mutations of DNA yang berarti 'sel kanker terbentuk dari sel-sel normal yang berubah karena mutasi DNA'. Pada kalimat ketiga paragraf 2, penulis juga menjelaskan faktor-faktor terjadinya mutasi DNA seperti radiasi nuklir dan elektromagnetik; virus; bakteri dan jamur; parasit; panas; bahan kimia di udara, air dan makanan; cedera tingkat sel mekanis; radikal bebas; evolusi; penuaan DNA. Semua faktor tersebut dapat menghasilkan mutasi yang dapat memicu kanker. Berdasarkan penjelasan tersebut, dapat disimpulkan bahwa mutasi DNA menyebabkan terjadinya sel-sel normal yang berubah menjadi sel kanker yang terjadi secara terus-menerus di dalam organisme. Jadi, pilihan jawaban yang tepat adalah A.`
        },
        {
            context: KONTEKS_KANKER,
            question: "What is the best summary of the passage?",
            options: ["Cancer is a group of more than one hundred separate diseases in the organism that cannot be cured.", "Cancer cause the death because of one hundred separate diseases in the organism. ", "Cancer cells that are come from normal cells because of mutations of DNA can occur spontaneously.", "Cancer is the second leading cause of death because cancer cells are come from normal cells because of mutations of DNA that form continuously in the organism.  "],
            answer: "Cancer is the second leading cause of death because cancer cells are come from normal cells because of mutations of DNA that form continuously in the organism.  ",
            explanation: `Soal menanyakan ringkasan dari teks tersebut. Pada paragraf pertama, penulis memulai dengan penjelasan kanker secara umum. Pada paragraf kedua, informasi yang ditulis oleh penulis adalah tentang sel kanker yang berasal dari mutasi DNA sel normal. Selanjutnya, penulis membahas mengenai pembentukan sel kanker secara terus-menerus dalam organisme pada paragraf ketiga. Terakhir, pada paragraf keempat, penulis menyatakan penyebab perkembangan sel kanker yang berkembang jika sistem imun tidak bekerja dengan baik atau jumlah sel yang diproduksi lebih banyak untuk dieliminasi oleh sistem imun. Berdasarkan isi dari masing-masing paragraf tersebut, maka dapat disimpulkan bahwa kanker merupakan penyebab kematian nomor dua karena sel kanker berasal dari sel normal karena mutasi DNA yang terbentuk terus menerus dalam organisme. Dengan demikian, pilihan D tepat. Jadi, pilihan jawaban yang benar adalah D.`
        }
    ];
    
    // --- Variabel & State Aplikasi ---
    let username = "";
    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let doubtfulQuestions = new Set();
    let timerInterval;
    let examSubmitted = false;
    let currentReviewIndex = 0;
    let remainingTime = 0;
    

    // --- Elemen DOM ---
    const pages = {
        login: document.getElementById('login-container'),
        exam: document.getElementById('exam-container'),
        result: document.getElementById('result-container'),
        review: document.getElementById('review-container')
    };

    // --- Fungsi Navigasi Halaman ---
    function showPage(pageName) {
        console.log('Menampilkan halaman:', pageName);
        Object.values(pages).forEach(page => {
            if (page) {
                page.classList.remove('active');
            }
        });
        if (pages[pageName]) {
            pages[pageName].classList.add('active');
        } else {
            console.error('Halaman tidak ditemukan:', pageName);
        }
    }

    // --- Logika Ujian ---
    function startExam(e) {
        e.preventDefault();
        const enteredPassword = document.getElementById('password').value;
        const loginError = document.getElementById('login-error');

        if (enteredPassword !== EXAM_PASSWORD) {
            loginError.textContent = 'Password salah. Silakan coba lagi.';
            return;
        }
        
        username = document.getElementById('username').value;
        if (!username.trim()) {
            loginError.textContent = 'Username harus diisi.';
            return;
        }
        
        document.getElementById('user-greeting').textContent = `Peserta: ${username}`;
        
        showPage('exam');
        buildQuestionNav();
        loadQuestion(0);
        startTimer(EXAM_DURATION_MINUTES * 60);
        examSubmitted = false;
        
        window.addEventListener('visibilitychange', handleVisibilityChange);
    }

    function loadQuestion(index) {
        currentQuestionIndex = index;
        const q = questions[index];
        const contextEl = document.getElementById('question-context');
        
        document.getElementById('question-number').textContent = `Soal Nomor ${index + 1} dari ${questions.length}`;
        
        if (q.context) {
            contextEl.style.display = 'block';
            contextEl.textContent = q.context;
        } else {
            contextEl.style.display = 'none';
            contextEl.textContent = '';
        }
        
        document.getElementById('question-text').textContent = q.question;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        q.options.forEach(option => {
            const isChecked = userAnswers[index] === option;
            const optionEl = document.createElement('label');
            optionEl.className = 'option' + (isChecked ? ' selected' : '');
            optionEl.innerHTML = `
                <input type="radio" name="answer" value="${option}" ${isChecked ? 'checked' : ''}>
                <span>${option}</span>
            `;
            optionEl.addEventListener('click', () => {
                selectAnswer(index, option);
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                optionEl.classList.add('selected');
            });
            optionsContainer.appendChild(optionEl);
        });

        updateNavAndButtons();
    }

    function selectAnswer(index, answer) {
        userAnswers[index] = answer;
        if (doubtfulQuestions.has(index)) {
            doubtfulQuestions.delete(index);
        }
        updateNavAndButtons();
    }
    
    function toggleDoubtful() {
        const btn = document.getElementById('doubtful-btn');
        if (doubtfulQuestions.has(currentQuestionIndex)) {
            doubtfulQuestions.delete(currentQuestionIndex);
            btn.classList.remove('active');
        } else {
            doubtfulQuestions.add(currentQuestionIndex);
            btn.classList.add('active');
        }
        updateNavAndButtons();
    }

    function buildQuestionNav() {
        const navContainer = document.getElementById('question-nav');
        if (!navContainer) {
            console.error('Element question-nav tidak ditemukan');
            return;
        }
        
        navContainer.innerHTML = questions.map((_, i) => 
            `<button type="button" class="nav-btn" data-index="${i}">${i + 1}</button>`
        ).join('');
        
        navContainer.addEventListener('click', (e) => {
            if (e.target.matches('.nav-btn')) {
                const index = parseInt(e.target.dataset.index);
                if (!isNaN(index)) {
                    loadQuestion(index);
                }
            }
        });
    }

    function updateNavAndButtons() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach((btn, i) => {
            btn.className = 'nav-btn';
            if (userAnswers[i] !== null) btn.classList.add('answered');
            if (doubtfulQuestions.has(i)) btn.classList.add('doubtful');
            if (i === currentQuestionIndex) btn.classList.add('current');
        });

        const doubtfulBtn = document.getElementById('doubtful-btn');
        if (doubtfulBtn) {
            doubtfulBtn.classList.toggle('active', doubtfulQuestions.has(currentQuestionIndex));
        }

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
        if (nextBtn) nextBtn.disabled = currentQuestionIndex === questions.length - 1;
    }
    
    function submitExam() {
        console.log('Submit exam dipanggil');
        
        const unansweredCount = userAnswers.filter(a => a === null).length;
        const confirmationMessage = unansweredCount > 0
            ? `Anda belum menjawab ${unansweredCount} soal. Apakah Anda yakin ingin menyelesaikan ujian?`
            : "Apakah Anda yakin ingin menyelesaikan ujian?";

        if (!confirm(confirmationMessage)) {
            console.log('User membatalkan submit');
            return;
        }

        console.log('User mengkonfirmasi submit');
        
        try {
            examSubmitted = true;
            clearInterval(timerInterval);
            window.removeEventListener('visibilitychange', handleVisibilityChange);
            
            const score = calculateScore();
            const correctCount = calculateCorrectCount();
            const incorrectCount = questions.length - correctCount - unansweredCount;
            const timeTaken = document.getElementById('timer').textContent;

            console.log('Score:', score, 'Correct:', correctCount, 'Incorrect:', incorrectCount, 'Unanswered:', unansweredCount);

            // Update result page
            const resultGreeting = document.getElementById('result-greeting');
            const scoreNumber = document.getElementById('score-number');
            const scorePercentage = document.getElementById('score-percentage');
            const correctCountEl = document.getElementById('correct-count');
            const incorrectCountEl = document.getElementById('incorrect-count');
            const unansweredCountEl = document.getElementById('unanswered-count');
            const timeTakenEl = document.getElementById('time-taken');
            const scoreCircle = document.getElementById('score-circle');

            if (resultGreeting) resultGreeting.textContent = `Selamat, ${username}!`;
            if (scoreNumber) scoreNumber.textContent = score;
            if (scorePercentage) scorePercentage.textContent = `${score}% Benar`;
            if (correctCountEl) correctCountEl.textContent = correctCount;
            if (incorrectCountEl) incorrectCountEl.textContent = incorrectCount;
            if (unansweredCountEl) unansweredCountEl.textContent = unansweredCount;
            if (timeTakenEl) timeTakenEl.textContent = timeTaken;
            
            // Set warna lingkaran berdasarkan skor
            if (scoreCircle) {
                // Hapus semua kelas warna sebelumnya
                scoreCircle.classList.remove('excellent', 'good', 'average', 'poor');
                
                // Tambahkan kelas warna berdasarkan skor
                if (score >= 90) {
                    scoreCircle.classList.add('excellent');
                } else if (score >= 70) {
                    scoreCircle.classList.add('good');
                } else if (score >= 50) {
                    scoreCircle.classList.add('average');
                } else {
                    scoreCircle.classList.add('poor');
                }
                
                // Set persentase untuk gradien conic
                scoreCircle.style.setProperty('--score-percent', `${score}%`);
            }

            // Animasi skor
            animateScore(score, scoreNumber);

            // Confetti untuk skor tinggi
            if (score >= 80) {
                createConfetti();
            }

            console.log('Menampilkan halaman result');
            showPage('result');
            
        } catch (error) {
            console.error('Error dalam submitExam:', error);
            alert('Terjadi error saat menyelesaikan ujian. Silakan coba lagi.');
        }
    }
    function animateScore(targetScore, scoreElement) {
        let currentScore = 0;
        const increment = 1;
        const delay = 30;
        const scoreCircle = document.getElementById('score-circle');
        
        const timer = setInterval(() => {
            currentScore += increment;
            scoreElement.textContent = currentScore;
            
            // Update persentase gradien
            scoreCircle.style.setProperty('--score-percent', `${currentScore}%`);
            
            if (currentScore >= targetScore) {
                clearInterval(timer);
                scoreElement.textContent = targetScore;
            }
        }, delay);
    }
    function calculateCorrectCount() {
        let correctCount = 0;
        questions.forEach((q, i) => {
            if (q.answer === userAnswers[i]) correctCount++;
        });
        return correctCount;
    }

    function getScoreColor(score) {
        if (score >= 80) return 'var(--success-color)';
        if (score >= 60) return 'var(--primary-color)';
        if (score >= 40) return 'var(--warning-color)';
        return 'var(--danger-color)';
    }

    function createConfetti() {
        const container = document.createElement('div');
        container.className = 'confetti-container';
        document.body.appendChild(container);

        const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            container.appendChild(confetti);
        }

        setTimeout(() => {
            if (container.parentNode) {
                container.remove();
            }
        }, 5000);
    }
    
    // --- Fungsi Helper & Tambahan ---
    function startTimer(duration) {
        let timer = duration;
        const timerEl = document.getElementById('timer');
        if (!timerEl) {
            console.error('Element timer tidak ditemukan');
            return;
        }
        
        timerInterval = setInterval(() => {
            const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
            const seconds = String(timer % 60).padStart(2, '0');
            timerEl.textContent = `${minutes}:${seconds}`;
            
            if (--timer < 0) {
                clearInterval(timerInterval);
                alert("Waktu habis! Ujian akan diselesaikan secara otomatis.");
                examSubmitted = true;
                submitExam();
            }
        }, 1000);
    }

    function calculateScore() {
        let correctCount = 0;
        questions.forEach((q, i) => {
            if (q.answer === userAnswers[i]) correctCount++;
        });
        return Math.round((correctCount / questions.length) * 100);
    }
    
    function handleVisibilityChange() {
        if (document.hidden && !examSubmitted) {
            alert("Anda terdeteksi berpindah tab. Sesi ujian akan direset.");
            location.reload();
        }
    }

    function generateReview() {
        currentReviewIndex = 0;
        loadReviewQuestion(0);
    }

    function loadReviewQuestion(index) {
        if (index < 0) index = 0;
        if (index >= questions.length) index = questions.length - 1;
        currentReviewIndex = index;

        const reviewContent = document.getElementById('review-content');
        if (!reviewContent) {
            console.error('Element review-content tidak ditemukan');
            return;
        }

        const q = questions[index];
        const userAnswer = userAnswers[index];

        reviewContent.innerHTML = '';

        // Navigasi atas
        const navTop = document.createElement('div');
        navTop.className = 'review-nav-top';
        navTop.innerHTML = questions.map((_, i) => {
            const isActive = i === index;
            const isCorrect = userAnswers[i] === questions[i].answer;
            const isIncorrect = userAnswers[i] !== null && userAnswers[i] !== questions[i].answer;
            
            const classes = [
                'review-nav-btn',
                isActive ? 'active' : '',
                isCorrect ? 'correct' : '',
                isIncorrect ? 'incorrect' : ''
            ].join(' ').trim();
            
            return `<button class="${classes}" data-index="${i}">${i + 1}</button>`;
        }).join('');
        
        reviewContent.appendChild(navTop);

        navTop.querySelectorAll('.review-nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.index);
                if (!isNaN(idx)) loadReviewQuestion(idx);
            });
        });

        // Konten review
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item two-column';

        const leftColumn = document.createElement('div');
        leftColumn.className = 'review-left';
        leftColumn.innerHTML = `
            ${q.context ? `<div class="question-context">${q.context}</div>` : ''}
            <p class="review-question"><strong>${index + 1}. ${q.question}</strong></p>
            <ul class="review-answer-list">
                ${q.options.map(option => {
                    let className = '';
                    let icon = '<i class="bi bi-circle"></i>';
                    if (option === q.answer) {
                        className = 'correct';
                        icon = '<i class="bi bi-check-circle-fill"></i>';
                    } else if (option === userAnswer) {
                        className = 'incorrect';
                        icon = '<i class="bi bi-x-circle-fill"></i>';
                    }
                    return `<li class="${className}">${icon}<span style="margin-left:8px">${option}</span></li>`;
                }).join('')}
            </ul>
        `;

        const rightColumn = document.createElement('div');
        rightColumn.className = 'review-right';
        const correctness = userAnswer === q.answer ? 'Benar' : 'Salah';
        const colorClass = userAnswer === q.answer ? 'correct' : 'incorrect';
        rightColumn.innerHTML = `
            <div class="discussion">
                <h3>Pembahasan soal:</h3>
                <p><strong>Jawaban yang benar adalah: ${q.answer}</strong></p>
                <div class="explanation-text">${q.explanation || '-'}</div>
                <div class="answer-feedback ${colorClass}">
                    <p>Jawaban kamu: <strong>${userAnswer || 'Tidak dijawab'}</strong></p>
                    <p class="status"><strong>Status: ${correctness}</strong></p>
                    ${userAnswer === q.answer
                        ? `<div class="success-note"><i class="bi bi-emoji-smile"></i> Yeay, jawaban kamu benar!</div>`
                        : `<div class="error-note"><i class="bi bi-emoji-frown"></i> Belajar lagi ya, semangat!</div>`
                    }
                </div>
            </div>
        `;

        reviewItem.appendChild(leftColumn);
        reviewItem.appendChild(rightColumn);
        reviewContent.appendChild(reviewItem);

        // Navigasi bawah
        const bottomNav = document.createElement('div');
        bottomNav.className = 'review-navigation';
        bottomNav.innerHTML = `
            <button id="review-prev-btn" class="btn btn-secondary"><i class="bi bi-chevron-left"></i> Sebelumnya</button>
            <span id="review-page-info">Soal ${index + 1} dari ${questions.length}</span>
            <button id="review-next-btn" class="btn btn-primary">Selanjutnya <i class="bi bi-chevron-right"></i></button>
        `;
        reviewContent.appendChild(bottomNav);

        const prevBtn = document.getElementById('review-prev-btn');
        const nextBtn = document.getElementById('review-next-btn');

        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === (questions.length - 1);

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentReviewIndex > 0) loadReviewQuestion(currentReviewIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentReviewIndex < questions.length - 1) loadReviewQuestion(currentReviewIndex + 1);
            });
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- Event Listeners ---
    document.getElementById('login-form').addEventListener('submit', startExam);
    document.getElementById('next-btn').addEventListener('click', () => loadQuestion(currentQuestionIndex + 1));
    document.getElementById('prev-btn').addEventListener('click', () => loadQuestion(currentQuestionIndex - 1));
    document.getElementById('doubtful-btn').addEventListener('click', toggleDoubtful);
    document.getElementById('submit-btn').addEventListener('click', submitExam);
    document.getElementById('review-btn').addEventListener('click', () => {
        generateReview();
        showPage('review');
    });
    document.getElementById('restart-btn').addEventListener('click', () => location.reload());
    document.getElementById('back-to-home-btn').addEventListener('click', () => location.reload());

    // --- Inisialisasi ---
    showPage('login');
    console.log('Aplikasi initialized');
});
