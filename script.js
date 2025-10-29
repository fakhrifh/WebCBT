document.addEventListener('DOMContentLoaded', () => {
    // --- KONFIGURASI ---
    // const GOOGLE_SCRIPT_URL = ... (DIHAPUS SESUAI PERMINTAAN)
    const EXAM_PASSWORD = 'cek123';
    const EXAM_DURATION_MINUTES = 90;

    // --- KUMPULAN TEKS BACAAN (KONTEKS) ---
    // Teks ini akan digunakan berulang kali untuk soal-soal terkait

    const KONTEKS_MEDSOS_1 = `(1) Media sosial menjadi sebuah media yang para penggunanya dapat dengan mudah berpartisipasi, berbagi, dan dapat menciptakan konten melalui internet. (2) Pendapat lain mengatakan bahwa media sosial merupakan media yang mendukung interaksi sosial yang dapat mengubah komunikasi menjadi dialog interaktif melalui internet. (3) Saat teknologi internet semakin maju dapat disadari bahwa, media sosial pun ikut tumbuh dengan pesat. (4) Kini untuk mengakses Facebook atau Twitter saja bisa dilakukan di mana saja dan kapan saja hanya dengan menggunakan sebuah telepon genggam.

(6) Pesatnya perkembangan media sosial saat ini, disebabkan oleh masyarakat yang memiliki alat komunikasi modern dan melupakan yang lama. (7) Kecepatan media sosial juga mulai tampak menggantikan peranan media massa konvensional dalam menyebarkan berita-berita. (8) Media konvensional seperti televisi, radio, atau koran dibutuhkan modal yang besar dan tenaga kerja yang banyak untuk mendapatkan informasi. (9) Seorang pengguna media sosial bisa mengakses sosial media dengan jaringan internet, tanpa biaya besar, tanpa alat mahal, dan dapat dilakukan sendiri tanpa karyawan. (10) Kita sebagai pengguna sosial media dengan bebas bisa mengedit, menambahkan, memodifikasi tulisan, gambar, video, grafis, dan berbagai model konten lainnya. (11) Semua hal tersebut di sosial media dapat dilakukan dengan sangat mudah dan praktis.`;

    const KONTEKS_MEDSOS_2 = `(1) Media sosial nampaknya telah menjadi bagian yang tidak terpisahkan dari kehidupan masyarakat masa kini. (2) Namun, ketergantungan yang tinggi akan media sosial terkadang memberi dampak negatif, karena dapat memengaruhi kesehatan mental para penggunanya. (3) Saat digunakan secara bijak, media sosial memang dapat memberikan beragam keuntungan bagi penggunanya. (4) Namun, jika terlalu sering menggunakan media sosial dalam jangka panjang dapat membuat pengguna merasa terisolasi. (5) Dampak negatif penggunaan sosial media, terlebih terhadap kesehatan mental ini jarang disadari oleh pengguna yang bersangkutan.

(6) Independent mengungkapkan setidaknya ada tiga dampak negatif yang bisa ditimbulkan dari penggunaan sosial media berlebih terhadap kesehatan mental. (7) Tiga hal tersebut, yaitu terdapat dampak negatif lainnya dari penggunaan media sosial seperti, menjadi sulit tidur, merasa cemas dan depresi serta tidak dapat konsentrasi. (8) Pengguna media sosial pada dasarnya tidak harus benar-benar meninggalkan media sosial. (9) Namun, ketika perasaan negatif mulai muncul akibat penggunaan media sosial, tidak ada salahnya sedikit membatasi waktu terlebih dahulu dari media sosial.`;
    
    const KONTEKS_KAI = `(1) PT KAI menggelar KAI Online Travel Fair, yang dimulai pada 13-17 Oktober 2018. (2) Menurut Manager Humas PT Kereta Api Daop 2 Bandung, Joni Martinus, untuk Online Travel Fair terdapat 9.930 tiket KA komersial jarak jauh dan menengah yang akan menerapkan tarif khusus. (3) Terdapat 140 tempat duduk per hari yang disediakan khusus untuk promo ini. (4) Pada tarif promo ini berlaku untuk kereta kelas ekonomi, bisnis, dan eksekutif pada keberangkatan 13 Oktober 2018-15 Januari 2019.

(5) Promo ΚΑΙ Online Travel Fair diadakan agar masyarakat lebih mudah dalam membeli tiket kereta serta mendapatkan harga yang lebih terjangkau dari biasanya. (6) Promo ini membuat masyarakat dapat membeli tiket seharga Rp50.000 untuk tiket KA kelas ekonomi, Rp60.000 untuk KA kelas bisnis, dan Rp100.000 untuk KA kelas eksekutif. (7) Tiket promo Online Travel Fair dapat dipesan melalui aplikasi KAI Access dan website kai.id. (8) Tiket promo ini memiliki beberapa ketentuan yang harus dipahami para pembeli tiket promo Online Travel Fair. (9) Ketentuan tersebut, yaitu tiket promo pada ΚΑΙ Online Travel Fair ini tidak dapat dibatalkan dan tidak dapat mengubah jadwal, tidak berlaku reduksi dan tarif parsial, dan tidak dapat digabung dengan tarif reduksi atau diskon lainnya.

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


    // --- DATA SOAL (40 Soal Sesuai Pembahasan Anda) ---
    const questions = [
        // RTO-8SINMLX (Soal 1-20)
        {
            context: KONTEKS_MEDSOS_2,
            question: "Kalimat topik paragraf pertama adalah kalimat...",
            options: ["(1)", "(2)", "(3)", "(4)"],
            answer: "(1)",
            explanation: `Kalimat topik berisi gagasan atau ide suatu
paragraf. Kalimat topik sering juga disebut sebagai gagasan pokok, ide
pokok, atau pokok pikiran. Kalimat topik yang terdapat pada paragraf
pertama teks tersebut adalah kalimat nomor 1 yang merupakan kalimat
utama. Sementara itu, kalimat nomor 2, 3, dan 4 merupakan
kalimat penjelas karena terdapat kata rujukan dan pengulangan ide dari kalimat 1.
`,
        },
        {
            context: KONTEKS_MEDSOS_2,
            question: "Kesalahan penggunaan tanda baca koma terdapat pada kalimat ....",
            options: ["(2)", "(4)", "(7)", "(9)"],
            answer: "(2)",
            explanation: `
Tanda baca koma tidak dapat diletakkan di
depan keterangan yang didahului oleh induk kalimat. Bukan hanya anak
kalimat, melainkan juga keterangan yang berada di belakang induk
kalimat tidak tepat jika didahului tanda baca koma. Pada kalimat kedua
terdapat tanda baca koma sebelum kata karena. Kata karena merupakan
konjungsi penanda unsur keterangan. Kata tersebut berada di belakang induk
kalimat sehingga penggunaan tanda baca koma pada kalimat tersebut tidak tepat.
Dengan demikian, jawaban yang tepat adalah A.`
        },
        {
            context: KONTEKS_MEDSOS_2,
            question: "Pertanyaan manakah yang jawabannya TIDAK ditemukan dalam teks tersebut?",
            options: ["Apa dampak yang didapat dari penggunaan media sosial?", "Mengapa masyarakat dapat ketergantungan media sosial?", "Kapan masyarakat menggunakan media sosial?", "Bagaimana cara menangani perasaan negatif saat menggunakan media sosial?"],
            answer: "Kapan masyarakat menggunakan media sosial?",
            explanation: `Jawaban yang benar adalah ...
Pertanyaan yang jawabannya tidak ditemukan dalam
teks terdapat pada pilihan jawaban C, yaitu "Kapan masyarakat menggunakan
media sosial?"
Sementara itu, penjelasan pilihan jawaban yang lain adalah
sebagai berikut.

Pilihan jawaban A tidak tepat karena pertanyaan tersebut terdapat
jawabannya pada kalimat (7). 
Pilihan jawaban B tidak tepat karena pertanyaan
tersebut terdapat jawabannya pada kalimat (3). 
Pilihan jawaban D tidak tepat karena pertanyaan
tersebut terdapat jawabannya pada kalimat (9). 
Pilihan jawaban E tidak tepat karena pertanyaan
tersebut terdapat jawabannya pada kalimat (8) dan (9). 
Jadi, jawaban yang tepat adalah pilihan C. 
`
        },
        {
            context: KONTEKS_MEDSOS_2,
            question: "Kelemahan paragraf kedua teks tersebut adalah...",
            options: ["data tidak dipaparkan dengan jelas dan menyeluruh", "dampak negatif penggunaan media sosial tidak ditemukan", "menanggulangi perasaan negatif yang muncul tidak dijelaskan", "kesehatan mental dalam dampak negatif tidak dijabarkan"],
            answer: "data tidak dipaparkan dengan jelas dan menyeluruh",
            explanation: "Kelemahan pada paragraf kedua tersebut, yaitu tidak dijelaskan secara jelas mengenai dampak negatif penggunaan media sosial. Isi paragraf kedua hanya menyebutkan dampak-dampak negatifnya tanpa menjelaskan alasan dan penjelasannya sehingga data tidak dipaparkan dengan jelas dan menyeluruh."
        },
        {
            context: KONTEKS_KAI,
            question: "Gagasan utama paragraf kedua adalah...",
            options: ["Promo KAI Online Travel Fair diadakan agar masyarakat lebih mudah dalam membeli tiket kereta, serta mendapatkan harga yang lebih terjangkau dari biasanya.", "Tiket promo Online Travel Fair dapat dipesan melalui aplikasi KAI Access dan website kai.id.", "Pada September 2018, tercatat sebanyak 1.148.274 pengguna jasa telah melakukan transaksi.", "Sebanyak 9.930 tiket KA komersial jarak jauh dan menengah yang akan menerapkan tarif khusus."],
            answer: "Promo KAI Online Travel Fair diadakan agar masyarakat lebih mudah dalam membeli tiket kereta, serta mendapatkan harga yang lebih terjangkau dari biasanya.",
            explanation: "Gagasan utama adalah pernyataan yang dapat mewakili sebuah paragraf. Kalimat (5) berisikan kalimat utama dalam teks tersebut karena menjelaskan tentang inti paragraf, yaitu tujuan diadakannya promo."
        },
        {
            context: KONTEKS_KAI,
            question: "Apa upaya yang perlu dilakukan PT. KAI untuk mengurangi pembelian tiket di loket?",
            options: ["Menggelar KAI Online Travel Fair", "Pemesanan tiket KA bisa melalui website kai.id", "Meresmikan aplikasi All New KAI Access", "Adanya tiket promo pada KAI Online Travel Fair"],
            answer: "Pemesanan tiket KA bisa melalui website kai.id",
            explanation: "Dari kalimat (13) dan (14), disimpulkan bahwa dengan adanya program KAI Online Travel Fair, makin banyak orang yang melakukan pemesanan tiket KA lewat website kai.id sehingga menjadi salah satu cara untuk mengurangi antrean di loket stasiun."
        },
        {
            context: KONTEKS_KAI,
            question: "Kalimat yang tidak efektif adalah kalimat .....",
            options: ["(1) dan (5)", "(2) dan (6)", "(4) dan (9)", "(7) dan (10)"],
            answer: "(4) dan (9)",
            explanation: "Kalimat tidak efektif ditemukan pada kalimat (4) dan (9). Kalimat (4) tidak memiliki subjek. Kalimat (9) tidak mudah dipahami karena susunan kalimatnya yang berantakan dan perlu dipecah."
        },
        {
            context: KONTEKS_KAI,
            question: "Apa simpulan isi teks tersebut?",
            options: ["Promo PT KAI bertujuan untuk mengurangi antrean di loket stasiun.", "KAI Online Travel Fair mengadakan promo agar banyaknya pengguna website kai.id.", "Masyarakat dapat membeli tiket kereta lebih murah di KAI Online Travel Fair.", "PT KAI melakukan peningkatan pengunjung website dengan promosi harga tiket."],
            answer: "KAI Online Travel Fair mengadakan promo agar banyaknya pengguna website kai.id.",
            explanation: "Simpulan harus mencerminkan topik bacaan. Topik bacaan adalah promosi KAI Online Travel Fair yang bertujuan agar banyak orang menggunakan website kai.id untuk membeli tiket."
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
            explanation: "Pernyataan pada jawaban B tidak sesuai karena masyarakat Baduy sebenarnya bisa keluar wilayah, seperti yang dijelaskan di kalimat (6): '...hanya pada waktu-waktu terdesak barulah mereka keluar wilayah.'"
        },
        {
            context: KONTEKS_SUKU_BADUY,
            question: "Apa yang dirujuk oleh kata mereka pada kalimat (5)?",
            options: ["suku Baduy", "masyarakat Baduy", "keturunan raja pajajaran", "penghuni pegunungan kendeng"],
            answer: "masyarakat Baduy",
            explanation: "Kata rujukan 'mereka' pada kalimat (5) merujuk kepada subjek pada kalimat sebelumnya (kalimat 4), yaitu 'Masyarakat Baduy'."
        },
        {
            context: KONTEKS_SUKU_BADUY,
            question: "Apa kelemahan yang ada pada paragraf ke-2?",
            options: ["Penggunaan kata sebenarnya pada kalimat (2).", "Penggunaan kata diambil pada kalimat (3).", "Penggunaan kata karena pada kalimat (6).", "Penggunaan kata menjadi pada kalimat (8)."],
            answer: "Penggunaan kata karena pada kalimat (6).",
            explanation: "Kelemahan pada teks adalah kalimat tidak efektif pada kalimat (6). Kalimat tersebut tidak membutuhkan kata 'karena' di awal kalimatnya karena kalimat tersebut bukanlah sebuah kalimat majemuk bertingkat."
        },
        {
            context: KONTEKS_KELUARGA,
            question: "How does the third sentence relate to the second sentence?",
            options: ["explains how perfect the author to his family", "states the example how the author helps his family's financial", "argues that the perfect son or brother have to be a responsible to his family", "tells how to be the responsible member of the family"],
            answer: "states the example how the author helps his family's financial",
            explanation: "Kalimat kedua adalah pernyataan umum ('I help out financially'). Kalimat ketiga adalah contoh spesifik dari pernyataan tersebut ('For example, ... I give my parents $100...')."
        },
        {
            context: KONTEKS_KELUARGA,
            question: "Which of the following statement is relevant with the idea of 'help out financially' in the passage?",
            options: ["Never arguing with your parents", "Driving for your sister to school or soccer practice", "Buying some tickets to watch a movie and pizza on the weekend", "Paying for every rent in your family"],
            answer: "Buying some tickets to watch a movie and pizza on the weekend",
            explanation: "Kalimat yang relevan dengan 'membantu secara finansial' ada di kalimat (4), di mana penulis membayar untuk 'movie rentals and take-out pizza'."
        },
        {
            context: KONTEKS_KELUARGA,
            question: "Based on the passage, which sentences that illustrate the author's relationship with his siblings?",
            options: ["8, 9, 10", "6, 7, 9", "3, 7, 8", "3, 4, 5"],
            answer: "8, 9, 10",
            explanation: "Ilustrasi hubungan penulis dengan saudara-saudaranya terdapat pada kalimat (8) (mengerjakan PR bersama), (9) (memberi nasihat pada adik laki-lakinya), dan (10) (mengantar adik perempuannya)."
        },
        {
            context: KONTEKS_KELUARGA,
            question: "About respecting parents in the passage, the author's attitude is ....",
            options: ["appreciating his parents' contributions to the family", "giving some money to his parents each month to help with the rent", "always obeying his parents rules, like the midnight curfew on weekends", "being a good role model for his younger siblings"],
            answer: "always obeying his parents rules, like the midnight curfew on weekends",
            explanation: "Teks secara eksplisit menjelaskan sikap hormat penulis, salah satunya adalah: 'I obey their rules, like the midnight curfew on weekends...'"
        },
        {
            context: KONTEKS_KULIAH,
            question: "The author thinks that the helpful mentor in paragraph 3 is someone who...",
            options: ["becomes your best friend and helps you to finish your college", "teaches you so much about taking care of your health", "reads your assignments and provides tough but sensitive criticism", "motivates you by sharing his/her many experiences in life and in college"],
            answer: "motivates you by sharing his/her many experiences in life and in college",
            explanation: "Paragraf ketiga secara jelas menyatakan, 'Jocelyn motivated me by sharing her many experiences in life and in college'. Pilihan lain adalah detail pendukung, tapi ini adalah ide utamanya."
        },
        {
            context: KONTEKS_KULIAH,
            question: "In presenting the ideas, the author starts by.....",
            options: ["describing the author's college life", "arguing the college material and taking the career assessment test", "telling how the author's assumption about the college activities", "stating the motivation to start her education in the college"],
            answer: "telling how the author's assumption about the college activities",
            explanation: "Penulis memulai paragraf pertama dengan menyampaikan pandangannya/asumsinya tentang berkuliah, 'Thinking about attending college was intimidating to me' dan 'I often wondered whether I was \"college material\"'."
        },
        {
            context: KONTEKS_KULIAH,
            question: "In connection to paragraph 1, paragraph 2 functions to ....",
            options: ["exemplify the intimidating college class", "explain the author's experience when started her college", "state the steps to begin taking classes", "show the way to find a helpful mentor"],
            answer: "explain the author's experience when started her college",
            explanation: "Paragraf 1 menyebut 3 motivasi. Paragraf 2 menjelaskan motivasi pertama (career placement exam), yang merupakan pengalaman penulis ketika memulai masa kuliahnya."
        },
        {
            context: KONTEKS_KULIAH,
            question: "The last paragraph of the passage most likely deals with...",
            options: ["suggestions from the author for a new college student", "examples the more experience and successful students", "the reason students to be successful student in the college", "factors that motivate the successful student"],
            answer: "suggestions from the author for a new college student",
            explanation: "Paragraf terakhir dimulai dengan 'If you are a new college student... take my advice...'. Ini jelas menunjukkan bahwa paragraf tersebut berisi saran (suggestions) untuk mahasiswa baru."
        },

        // RTO-Q706WAS (Soal 21-40)
        {
            context: KONTEKS_MEDSOS_1,
            question: "Apa gagasan utama paragraf pertama?",
            options: ["Internet menjadi sumber untuk pengguna media sosial.", "Media sosial menjadi tempat untuk interaksi sosial melalui internet.", "Media sosial memudahkan untuk berpartisipasi, berbagi dan menciptakan konten.", "Teknologi internet yang semakin maju dapat memudahkan untuk akses media sosial."],
            answer: "Media sosial memudahkan untuk berpartisipasi, berbagi dan menciptakan konten.",
            explanation: "Gagasan utama paragraf pertama terdapat pada kalimat (1), yang menyatakan bahwa media sosial memudahkan penggunanya untuk berpartisipasi, berbagi, dan menciptakan konten."
        },
        {
            context: KONTEKS_MEDSOS_1,
            question: "Kesalahan penggunaan tanda baca ditemukan pada kalimat...",
            options: ["(4)", "(6)", "(8)", "(10)"],
            answer: "(6)",
            explanation: "Pada kalimat (6), terdapat tanda baca koma sebelum kata 'disebabkan'. Tanda baca koma tidak tepat diletakkan di depan keterangan (disebabkan...) yang didahului oleh induk kalimat."
        },
        {
            context: KONTEKS_MEDSOS_1,
            question: "Manakah pertanyaan yang jawabannya TIDAK terdapat dalam teks?",
            options: ["Apakah media sosial termasuk pendukung interaksi sosial?", "Mengapa media massa konvensional mulai ditinggalkan?", "Apakah mendapatkan informasi melalui televisi dan radio membutuhkan modal besar?", "Bagaimana media sosial dapat digunakan oleh semua orang?"],
            answer: "Bagaimana media sosial dapat digunakan oleh semua orang?",
            explanation: "Jawaban untuk pertanyaan A ada di kalimat (2). Jawaban B ada di kalimat (7). Jawaban C ada di kalimat (8). Jawaban D tidak memiliki jawaban yang jelas di dalam teks."
        },
        {
            context: KONTEKS_MEDSOS_1,
            question: "Kata sambung yang salah adalah...",
            options: ["dengan pada kalimat (1)", "bahwa pada kalimat (3)", "yang pada kalimat (6)", "untuk pada kalimat (8)"],
            answer: "bahwa pada kalimat (3)",
            explanation: "Kata 'bahwa' pada kalimat (3) tidak tepat karena pada kalimat tersebut sudah terdapat tanda baca koma yang berfungsi menghindari pemaknaan ganda."
        },
        {
            context: KONTEKS_SUKU_DAYAK,
            question: "Kalimat manakah yang maknanya sejajar dengan kata mengapresiasi pada kalimat (2) Teks B?",
            options: ["Guru memberikan penghargaan kepada murid yang nilainya sangat baik.", "Setelah menyaksikan konser tersebut penonton berdiri sambil bertepuk tangan.", "Teman saya datang ke pesta ulang tahunku dengan membawa hadiah.", "Hebat sekali, anak itu dapat menyanyikan lagu dengan merdu."],
            answer: "Setelah menyaksikan konser tersebut penonton berdiri sambil bertepuk tangan.",
            explanation: "Kata 'mengapresiasi' bermakna melakukan pengamatan, penilaian, dan penghargaan. Kalimat 'penonton berdiri sambil bertepuk tangan' bermakna penonton mengapresiasi (memberi penghargaan) sebuah konser."
        },
        {
            context: KONTEKS_SUKU_DAYAK,
            question: "Apa simpulan kedua teks di atas?",
            options: ["Suku Dayak merupakan suku asli kalimantan yang memiliki keragaman budaya.", "Suku Dayak di Kalimantan memiliki etnik, tradisi, dan budaya yang selalu dilakukan.", "Kehidupan suku Dayak dipenuhi dengan warisan magis yang kuat.", "Tradisi dan budaya yang dimiliki suku dayak dilakukan sebagai ungkapan rasa syukur."],
            answer: "Suku Dayak di Kalimantan memiliki etnik, tradisi, dan budaya yang selalu dilakukan.",
            explanation: "Teks A membahas etnik dan budaya Suku Dayak. Teks B membahas budaya dan tradisi yang selalu dilakukan. Simpulan keduanya adalah Suku Dayak di Kalimantan memiliki etnik, tradisi, dan budaya yang selalu dilakukan."
        },
        {
            context: KONTEKS_SUKU_DAYAK,
            question: "Informasi manakah yang terdapat pada Teks 1, tetapi tidak terdapat pada Teks 2?",
            options: ["Suku Dayak berada di Kalimantan, yang rata-rata berprofesi sebagai petani.", "Upacara adat selalu dilakukan oleh masyarakat suku di pedalaman tanah Borneo.", "Suku ini terkenal karena memiliki keunikan tradisi, etnik, dan budayanya.", "Simbol khas yang dimiliki oleh suku dayak yaitu ilmu-ilmu spiritualnya."],
            answer: "Simbol khas yang dimiliki oleh suku dayak yaitu ilmu-ilmu spiritualnya.",
            explanation: "Jawaban D (ilmu-ilmu spiritual) dibahas pada Teks 1 (kalimat 4), tetapi tidak dibahas sama sekali pada Teks 2."
        },
        {
            context: null,
            question: "Kalimat manakah yang salah satu katanya ditulis secara tidak tepat?",
            options: ["Walau bagaimanapun, panitia tetap akan melaksanakan kegiatan pembukaan acara.", "Meskipun demikian, Jakarta tetaplah menjadi kota terpadat se-Indonesia.", "Jumlah peserta yang mengikuti lomba sekitar 30-an orang.", "Ada lima puluh lima siswa yang mengikuti acara Raimuna di Cibubur."],
            answer: "Ada lima puluh lima siswa yang mengikuti acara Raimuna di Cibubur.",
            explanation: "Sesuai kaidah penulisan ejaan, bilangan yang dinyatakan dengan lebih dari dua kata (seperti 'lima puluh lima') seharusnya ditulis menggunakan angka (55)."
        },
        {
            context: KONTEKS_LAHAN_TAILING,
            question: "Apakah inti kalimat (1)?",
            options: ["Peneliti dari Universitas Negeri Papua, Sartji Taberima mengatakan.", "Sartji Taberima mengatakan sesuatu.", "Sartji Taberima mengatakan lahan tailing atau kawasan pengendapan pasir sisa tambang bisa dimanfaatkan menjadi lahan pertanian.", "Sartji Taberima mengatakan tentang lahan tailing."],
            answer: "Sartji Taberima mengatakan sesuatu.",
            explanation: "Inti kalimat harus memiliki Subjek (S) dan Predikat (P). Inti kalimat (1) adalah 'Sartji Taberima' (S) dan 'mengatakan' (P). 'sesuatu' (O) bisa ditambahkan. Pilihan C terlalu panjang dan menyertakan keterangan."
        },
        {
            context: KONTEKS_LAHAN_TAILING,
            question: "Pernyataan manakah yang TIDAK sesuai dengan isi teks tersebut?",
            options: ["Penelitian lahan tailing menghasilkan lahan tailing yang bisa dijadikan lahan pertanian.", "Lahan tailing dapat dijadikan lahan pertanian.", "Kawasan pertambangan PT Freeport di Timika memiliki ketebalan lahan berkisar antara 1,5 meter hingga 6 meter.", "Masyarakat dapat memberdayakan lahan tailing untuk lahan pertanian."],
            answer: "Kawasan pertambangan PT Freeport di Timika memiliki ketebalan lahan berkisar antara 1,5 meter hingga 6 meter.",
            explanation: "Pernyataan C tidak sesuai karena yang memiliki ketebalan 1,5 - 6 meter adalah 'lahan tailing yang berada di kawasan pertambangan' (Kalimat 4), bukan 'kawasan pertambangan'-nya itu sendiri."
        },
        {
            context: KONTEKS_LAHAN_TAILING,
            question: "Apa pesan tersirat di balik teks yang ingin disampaikan penulis?",
            options: ["Peneliti ingin masyarakat mengubah lahan tailing menjadi lahan pertanian.", "Peneliti ingin lahan tailing ditambahkan unsur hara dan bahan organik.", "Masyarakat dapat ikut serta meneliti lahan tailing untuk lahan pertanian.", "Masyarakat dapat peduli mengenai lahan tailing yang akan dijadikan lahan pertanian."],
            answer: "Peneliti ingin masyarakat mengubah lahan tailing menjadi lahan pertanian.",
            explanation: "Pesan tersirat adalah maksud tersembunyi. Teks ini ingin menyampaikan bahwa peneliti (Sartji Taberima) ingin masyarakat memanfaatkan (mengubah) lahan tailing menjadi lahan pertanian. Hal ini dibuktikan dari kalimat terakhir (6)."
        },
        {
            context: null,
            question: "Kalimat manakah yang mengandung bentukan kata yang TIDAK tepat?",
            options: ["Seluruh warga Indonesia turut menyukseskan Asian Games 2018.", "Para nelayan telah memercayai kebijakan Menteri Kelautan.", "Penggunaan teknologi informasi mempengaruhi perubahan sosial di masyarakat.", "Presiden mentraktir seluruh warga Yogyakarta yang datang ke rumahnya."],
            answer: "Penggunaan teknologi informasi mempengaruhi perubahan sosial di masyarakat.",
            explanation: "Kata 'mempengaruhi' tidak baku. Kata dasar 'pengaruh' (diawali huruf P) jika mendapat imbuhan 'meng-' harus luluh menjadi 'memengaruhi'."
        },
        {
            context: KONTEKS_GEMPA_BUMI,
            question: "What is the author's attitude towards the topic of the passage?",
            options: ["Concerned", "Critical", "Informative", "Satisfied"],
            answer: "Informative",
            explanation: "Teks ini secara konsisten menyajikan fakta, definisi, dan penjelasan ilmiah tentang gempa bumi tanpa menunjukkan opini atau emosi pribadi. Sikap penulis adalah informatif."
        },
        {
            context: KONTEKS_GEMPA_BUMI,
            question: "The paragraph following the passage most likely discusses...",
            options: ["suggestions to emerge the seismology", "examples of the substantial damage that caused by the earthquake", "the development of seismology to identify the earthquake earlier", "factors that cause the earthquake and seismic wave"],
            answer: "examples of the substantial damage that caused by the earthquake",
            explanation: "Paragraf terakhir ditutup dengan kalimat '...responsible for millions of deaths and an incalculable amount of damage...'. Topik yang paling padu untuk melanjutkan kalimat ini adalah memberikan contoh-contoh spesifik dari kerusakan tersebut."
        },
        {
            context: KONTEKS_GEMPA_BUMI,
            question: "The idea in the passage may be best summarized that ...",
            options: ["Earthquake is any sudden shaking of the ground that can be identified by the seismology.", "Earthquake is any sudden shaking of the ground that can cause substantial damage if their centers are near areas of habitation.", "Earthquake is suddenly released the masses of the rock straining against one another.", "The seismology was being emerge at the beginning of the 20th century."],
            answer: "Earthquake is any sudden shaking of the ground that can cause substantial damage if their centers are near areas of habitation.",
            explanation: "Ringkasan yang baik mencakup ide utama. Teks ini mendefinisikan gempa (getaran tiba-tiba) dan juga menjelaskan dampaknya (kerusakan substansial jika dekat pemukiman). Pilihan B merangkum kedua ide ini."
        },
        {
            context: KONTEKS_GEMPA_BUMI,
            question: "What will happen when seismic waves pass through Earth's rocks?",
            options: ["It will answer why and how earthquakes occur.", "It may cause an earthquake.", "It will store some form of energy in Earth's crust.", "The masses of rock will slip."],
            answer: "It may cause an earthquake.",
            explanation: "Kalimat pertama teks mendefinisikan gempa bumi sebagai 'guncangan tiba-tiba dari tanah yang DISEBABKAN oleh lewatnya gelombang seismik melalui batuan bumi'. Jadi, jika gelombang seismik lewat, itu dapat menyebabkan gempa."
        },
        {
            context: KONTEKS_KANKER,
            question: "What topic does the paragraph preceding the passage most likely discuss?",
            options: ["The factors causing the cancer in human body", "The description of cancer as the frightening disease", "The types of cancer that have been identified", "Statistical data about death caused by cancer"],
            answer: "The description of cancer as the frightening disease",
            explanation: "Kalimat pertama ('...the numbers are terrifying... it is (terrifying)') menunjukkan bahwa paragraf sebelumnya telah memberikan data/angka yang membentuk persepsi bahwa kanker adalah penyakit yang mengerikan (frightening disease)."
        },
        {
            context: KONTEKS_KANKER,
            question: "The author's attitude regarding the factor of the mutations of DNA is .....",
            options: ["agreement", "informative", "indifferent", "approving"],
            answer: "informative",
            explanation: "Penulis menjabarkan fakta tentang mutasi DNA dan faktor-faktor penyebabnya (radiasi, virus, dll) secara objektif tanpa memberi opini. Sikap penulis adalah informatif."
        },
        {
            context: KONTEKS_KANKER,
            question: "Based on the passage, the mutations of DNA cause...",
            options: ["normal cells formed to be the cancer cells that happened continuously in the organism", "the cancer cells in the organism cured", "heart disease that formed into the cancer cells in the organism", "the evolution of the cancer cells in the organism"],
            answer: "normal cells formed to be the cancer cells that happened continuously in the organism",
            explanation: "Teks dengan jelas menyatakan 'Cancer cells come from normal cells because of mutations of DNA' (Sel kanker berasal dari sel normal karena mutasi DNA)."
        },

        // Soal 27-29 dari RTO-8SINMLX (KONTEKS_KULIAH)
        {
            context: KONTEKS_KULIAH,
            question: "The author thinks that the helpful mentor in paragraph 3 is someone who...",
            options: ["becomes your best friend and helps you to finish your college", "teaches you so much about taking care of your health", "reads your assignments and provides tough but sensitive criticism", "motivates you by sharing his/her many experiences in life and in college"],
            answer: "motivates you by sharing his/her many experiences in life and in college",
            explanation: "The first sentence of the paragraph about Jocelyn explicitly states this as the main point: 'Jocelyn motivated me by sharing her many experiences...'"
        },
        {
            context: KONTEKS_KULIAH,
            question: "In presenting the ideas, the author starts by.....",
            options: ["describing the author's college life", "arguing the college material", "telling how the author's assumption about the college activities", "stating the motivation to start her education in the college"],
            answer: "stating the motivation to start her education in the college",
            explanation: "The author begins by stating his initial feelings and then immediately pivots to the main thesis of the essay: the three key factors that motivated him."
        },
        {
            context: KONTEKS_KULIAH,
            question: "The last paragraph of the passage most likely deals with...",
            options: ["suggestions from the author for a new college student", "examples the more experience and successful students", "the reason students to be successful student in the college", "factors that motivate the successful student"],
            answer: "suggestions from the author for a new college student",
            explanation: "The entire final paragraph is structured as a series of direct suggestions and advice aimed at new college students who might be feeling a lack of motivation."
        },

        // Soal 30 (Soal Mandiri)
        {
            context: null,
            question: "Kalimat manakah yang mengandung bentukan kata yang TIDAK tepat?",
            options: ["Seluruh warga Indonesia turut menyukseskan Asian Games 2018.", "Para nelayan telah memercayai kebijakan Menteri Kelautan.", "Penggunaan teknologi informasi mempengaruhi perubahan sosial di masyarakat.", "Presiden mentraktir seluruh warga Yogyakarta yang datang ke rumahnya."],
            answer: "Penggunaan teknologi informasi mempengaruhi perubahan sosial di masyarakat.",
            explanation: "Kata 'mempengaruhi' seharusnya ditulis 'memengaruhi' sesuai kaidah PUEBI, karena kata dasar 'pengaruh' diawali huruf 'p' dan mendapat awalan 'me-', sehingga huruf 'p' luluh menjadi 'm'."
        },
    ];
    
    // --- Variabel & State Aplikasi ---
    let username = "";
    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let doubtfulQuestions = new Set();
    let timerInterval;
    let examSubmitted = false;

    // --- Elemen DOM ---
    const pages = {
        login: document.getElementById('login-container'),
        exam: document.getElementById('exam-container'),
        result: document.getElementById('result-container'),
        review: document.getElementById('review-container')
    };

    // --- Fungsi Navigasi Halaman ---
    function showPage(pageName) {
        Object.values(pages).forEach(page => page.classList.remove('active'));
        pages[pageName].classList.add('active');
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
        document.getElementById('user-greeting').textContent = `Peserta: ${username}`;
        
        showPage('exam');
        buildQuestionNav();
        loadQuestion(0);
        startTimer(EXAM_DURATION_MINUTES * 60);
        examSubmitted = false;
        
        // Aktifkan deteksi pindah tab
        window.addEventListener('visibilitychange', handleVisibilityChange);
    }

    function loadQuestion(index) {
        currentQuestionIndex = index;
        const q = questions[index];
        const contextEl = document.getElementById('question-context');
        
        document.getElementById('question-number').textContent = `Soal Nomor ${index + 1} dari ${questions.length}`;
        contextEl.style.display = q.context ? 'block' : 'none';
        contextEl.textContent = q.context || '';
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
        navContainer.innerHTML = questions.map((_, i) => `<button class="nav-btn" data-index="${i}">${i + 1}</button>`).join('');
        navContainer.addEventListener('click', (e) => {
            if (e.target.matches('.nav-btn')) {
                loadQuestion(parseInt(e.target.dataset.index));
            }
        });
    }

    function updateNavAndButtons() {
        // Update tombol navigasi
        document.querySelectorAll('.nav-btn').forEach((btn, i) => {
            btn.className = 'nav-btn'; // Reset
            if (userAnswers[i] !== null) btn.classList.add('answered');
            if (doubtfulQuestions.has(i)) btn.classList.add('doubtful');
            if (i === currentQuestionIndex) btn.classList.add('current');
        });

        // Update tombol ragu-ragu
        document.getElementById('doubtful-btn').classList.toggle('active', doubtfulQuestions.has(currentQuestionIndex));

        // Update tombol prev/next
        document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
        document.getElementById('next-btn').disabled = currentQuestionIndex === questions.length - 1;
    }
    
    function submitExam() {
        const unansweredCount = userAnswers.filter(a => a === null).length;
        const confirmationMessage = unansweredCount > 0
            ? `Anda belum menjawab ${unansweredCount} soal. Apakah Anda yakin ingin menyelesaikan ujian?`
            : "Apakah Anda yakin ingin menyelesaikan ujian?";

        if (confirm(confirmationMessage)) {
            examSubmitted = true;
            clearInterval(timerInterval);
            window.removeEventListener('visibilitychange', handleVisibilityChange);
            
            const score = calculateScore();
            sendDataToGoogleSheet(score);
            
            document.getElementById('result-greeting').textContent = `Selamat, ${username}!`;
            document.getElementById('score').textContent = score;
            showPage('result');
        }
    }
    
    // --- Fungsi Helper & Tambahan ---
    function startTimer(duration) {
        let timer = duration;
        const timerEl = document.getElementById('timer');
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
        return ((correctCount / questions.length) * 100).toFixed(0);
    }
    
    function handleVisibilityChange() {
        if (document.hidden && !examSubmitted) {
            alert("Anda terdeteksi berpindah tab. Sesi ujian akan direset.");
            location.reload();
        }
    }

    function generateReview() {
        const reviewContent = document.getElementById('review-content');
        reviewContent.innerHTML = '';
        questions.forEach((q, i) => {
            const userAnswer = userAnswers[i];
            const isCorrect = userAnswer === q.answer;
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            let optionsHTML = q.options.map(option => {
                let className = '';
                let icon = '<i class="bi bi-circle"></i>';
                if (option === q.answer) {
                    className = 'correct';
                    icon = '<i class="bi bi-check-circle-fill"></i>';
                } else if (option === userAnswer) {
                    className = 'incorrect';
                    icon = '<i class="bi bi-x-circle-fill"></i>';
                }
                return `<li class="${className}">${icon}${option}</li>`;
            }).join('');

            reviewItem.innerHTML = `
                ${q.context ? `<div class="question-context">${q.context}</div>` : ''}
                <p class="review-question"><strong>${i + 1}. ${q.question}</strong></p>
                <ul class="review-answer-list">${optionsHTML}</ul>
                <div class="review-explanation">
                    <p>Jawaban Anda: <strong>${userAnswer || 'Tidak Dijawab'}</strong></p>
                    <hr>
                    <p><strong>Pembahasan:</strong> ${q.explanation}</p>
                </div>
            `;
            reviewContent.appendChild(reviewItem);
        });
    }

    async function sendDataToGoogleSheet(score) {
        if (GOOGLE_SCRIPT_URL === 'PASTE_YOUR_WEB_APP_URL_HERE') {
            console.warn("URL Google Script belum diatur. Data tidak dikirim.");
            return;
        }

        const formData = new FormData();
        formData.append('Nama', username);
        formData.append('Skor', score);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData,
            });
            console.log("Data berhasil dikirim ke Google Sheet.");
        } catch (error) {
            console.error('Gagal mengirim data:', error);
        }
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
});
