document.addEventListener('DOMContentLoaded', () => {

    // --- DATA SOAL (20 Soal Pengetahuan dan Pemahaman Umum) ---
    // Format: { question: "...", options: ["A", "B", "C", "D"], answer: "A" }
    const questions = [
        // 10 Soal dari PDF
        {
            question: "Apa gagasan utama paragraf pertama dalam teks tentang media sosial?",
            options: [
                "Internet menjadi sumber untuk pengguna media sosial.",
                "Media sosial menjadi tempat untuk interaksi sosial melalui internet.",
                "Media sosial memudahkan untuk berpartisipasi, berbagi dan menciptakan konten.",
                "Teknologi internet yang semakin maju dapat memudahkan untuk akses media sosial."
            ],
            answer: "Media sosial memudahkan untuk berpartisipasi, berbagi dan menciptakan konten."
        },
        {
            question: "Berdasarkan teks media sosial, kesalahan penggunaan tanda baca ditemukan pada kalimat nomor...",
            options: ["(4)", "(6)", "(8)", "(10)"],
            answer: "(6)"
        },
        {
            question: "Manakah pertanyaan yang jawabannya TIDAK terdapat dalam teks tentang media sosial?",
            options: [
                "Apakah media sosial termasuk pendukung interaksi sosial?",
                "Mengapa media massa konvensional mulai ditinggalkan?",
                "Apakah mendapatkan informasi melalui televisi dan radio membutuhkan modal besar?",
                "Bagaimana media sosial dapat digunakan oleh semua orang?"
            ],
            answer: "Mengapa media massa konvensional mulai ditinggalkan?"
        },
        {
            question: "Pada teks tentang Suku Dayak, apa simpulan yang paling tepat dari kedua teks tersebut?",
            options: [
                "Suku Dayak merupakan suku asli kalimantan yang memiliki keragaman budaya.",
                "Kehidupan suku Dayak dipenuhi dengan warisan magis yang kuat.",
                "Tradisi dan budaya yang dimiliki suku dayak dilakukan sebagai ungkapan rasa syukur.",
                "Ritual dan tradisi yang dilakukan suku Dayak selalu dilakukan."
            ],
            answer: "Suku Dayak merupakan suku asli kalimantan yang memiliki keragaman budaya."
        },
        {
            question: "Informasi manakah yang terdapat pada Teks 1 (tentang Suku Dayak), tetapi tidak terdapat pada Teks 2?",
            options: [
                "Suku Dayak berada di Kalimantan, yang rata-rata berprofesi sebagai petani.",
                "Upacara adat selalu dilakukan oleh masyarakat suku di pedalaman tanah Borneo.",
                "Suku ini terkenal karena memiliki keunikan tradisi, etnik, dan budayanya.",
                "Simbol khas yang dimiliki oleh suku dayak yaitu ilmu-ilmu spiritualnya."
            ],
            answer: "Simbol khas yang dimiliki oleh suku dayak yaitu ilmu-ilmu spiritualnya."
        },
        {
            question: "Kalimat manakah yang salah satu katanya ditulis secara tidak tepat karena mengandung pemborosan kata (pleonasme)?",
            options: [
                "Walau bagaimanapun, panitia tetap akan melaksanakan kegiatan.",
                "Meskipun demikian, Jakarta tetaplah menjadi kota terpadat se-Indonesia.",
                "Ada lima puluh lima siswa yang mengikuti acara Raimuna di Cibubur.",
                "Majalah itu disenangi oleh banyak anak-anak yang membacanya."
            ],
            answer: "Majalah itu disenangi oleh banyak anak-anak yang membacanya."
        },
        {
            question: "Apakah inti dari kalimat (1) pada teks tentang lahan tailing?",
            options: [
                "Peneliti dari Universitas Negeri Papua, Sartji Taberima mengatakan.",
                "Sartji Taberima mengatakan sesuatu.",
                "Sartji Taberima mengatakan lahan tailing bisa dimanfaatkan menjadi lahan pertanian.",
                "Sartji Taberima mengatakan tentang lahan tailing."
            ],
            answer: "Sartji Taberima mengatakan lahan tailing bisa dimanfaatkan menjadi lahan pertanian."
        },
        {
            question: "Pernyataan manakah yang TIDAK sesuai dengan isi teks tentang lahan tailing?",
            options: [
                "Penelitian lahan tailing menghasilkan lahan tailing yang bisa dijadikan lahan pertanian.",
                "Lahan tailing dapat dijadikan lahan pertanian.",
                "Masyarakat dapat memberdayakan lahan tailing untuk lahan pertanian.",
                "Lahan tailing merupakan kawasan pengendapan pasir sisa tambang."
            ],
            answer: "Penelitian lahan tailing menghasilkan lahan tailing yang bisa dijadikan lahan pertanian."
        },
        {
            question: "Manakah kalimat yang mengandung bentukan kata yang TIDAK tepat?",
            options: [
                "Seluruh warga Indonesia turut menyukseskan Asian Games 2018.",
                "Para nelayan telah memercayai kebijakan Menteri Kelautan.",
                "Penggunaan teknologi informasi mempengaruhi perubahan sosial di masyarakat.",
                "Presiden mentraktir seluruh warga Yogyakarta yang datang ke rumahnya."
            ],
            answer: "Penggunaan teknologi informasi mempengaruhi perubahan sosial di masyarakat."
        },
        {
            question: "Apa sikap penulis (author's attitude) dalam teks bahasa Inggris tentang gempa bumi (earthquake)?",
            options: [
                "Khawatir (Concerned)",
                "Kritis (Critical)",
                "Informatif (Informative)",
                "Puas (Satisfied)"
            ],
            answer: "Informatif (Informative)"
        },
        // 10 Soal Pengetahuan Umum dari Internet
        {
            question: "Ibukota dari negara Australia adalah...",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            answer: "Canberra"
        },
        {
            question: "Perang Dunia II secara resmi berakhir pada tahun...",
            options: ["1942", "1945", "1948", "1950"],
            answer: "1945"
        },
        {
            question: "Planet di tata surya yang dikenal sebagai 'Planet Merah' adalah...",
            options: ["Venus", "Jupiter", "Mars", "Saturnus"],
            answer: "Mars"
        },
        {
            question: "Candi Borobudur, yang merupakan candi Buddha terbesar di dunia, terletak di provinsi...",
            options: ["DI Yogyakarta", "Jawa Tengah", "Jawa Timur", "Jawa Barat"],
            answer: "Jawa Tengah"
        },
        {
            question: "Siapakah penulis novel 'Laskar Pelangi' yang sangat populer di Indonesia?",
            options: ["Tere Liye", "Pramoedya Ananta Toer", "Andrea Hirata", "Eka Kurniawan"],
            answer: "Andrea Hirata"
        },
        {
            question: "Proses di mana tumbuhan menggunakan energi cahaya matahari untuk membuat makanannya sendiri disebut...",
            options: ["Respirasi", "Transpirasi", "Fotosintesis", "Gutasi"],
            answer: "Fotosintesis"
        },
        {
            question: "Siapakah presiden pertama Amerika Serikat?",
            options: ["Abraham Lincoln", "Thomas Jefferson", "John Adams", "George Washington"],
            answer: "George Washington"
        },
        {
            question: "Akronim dari 'WWW' dalam konteks internet adalah...",
            options: ["World Wide Web", "World Web Wide", "Western World Web", "World Wireless Web"],
            answer: "World Wide Web"
        },
        {
            question: "Garis khayal yang membagi bumi menjadi belahan utara dan selatan disebut...",
            options: ["Garis Lintang", "Garis Bujur", "Ekuator", "Garis Meridian"],
            answer: "Ekuator"
        },
        {
            question: "Lukisan terkenal 'Mona Lisa' adalah karya dari seniman Renaisans asal Italia yaitu...",
            options: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo", "Leonardo da Vinci"],
            answer: "Leonardo da Vinci"
        },
    ];

    // --- Variabel & Konstanta ---
    let username = "";
    const totalQuestions = questions.length;
    let currentQuestionIndex = 0;
    let userAnswers = new Array(totalQuestions).fill(null);
    let doubtfulQuestions = new Set();
    let timerInterval;

    const loginContainer = document.getElementById('login-container');
    const examContainer = document.getElementById('exam-container');
    const resultContainer = document.getElementById('result-container');
    const reviewContainer = document.getElementById('review-container');

    // --- Event Listeners ---
    document.getElementById('login-form').addEventListener('submit', startExam);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('doubtful-btn').addEventListener('click', toggleDoubtful);
    document.getElementById('submit-btn').addEventListener('click', submitExam);
    document.getElementById('restart-btn').addEventListener('click', () => location.reload());

    // --- Fungsi-fungsi ---
    function startExam(e) {
        e.preventDefault();
        loginContainer.classList.add('hidden');
        examContainer.classList.remove('hidden');
        buildQuestionNav();
        loadQuestion(currentQuestionIndex);
        startTimer(45 * 60); // 45 Menit
    }

    function buildQuestionNav() {
        const navContainer = document.getElementById('question-nav');
        navContainer.innerHTML = '';
        for (let i = 0; i < totalQuestions; i++) {
            const btn = document.createElement('button');
            btn.className = 'nav-btn';
            btn.textContent = i + 1;
            btn.dataset.index = i;
            btn.addEventListener('click', () => goToQuestion(i));
            navContainer.appendChild(btn);
        }
        updateNavStatus();
    }

    function loadQuestion(index) {
        currentQuestionIndex = index;
        const question = questions[index];
        const contextEl = document.getElementById('question-context');

        if (question.context) {
            contextEl.textContent = question.context;
            contextEl.style.display = 'block';
        } else {
            contextEl.style.display = 'none';
        }

        document.getElementById('question-number').textContent = `Soal Nomor ${index + 1}`;
        document.getElementById('question-text').textContent = question.question;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        question.options.forEach((option) => {
            const label = document.createElement('label');
            label.className = 'option';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'answer';
            radio.value = option;
            radio.checked = userAnswers[index] === option;
            radio.addEventListener('change', () => selectAnswer(index, option));
            
            label.appendChild(radio);
            label.appendChild(document.createTextNode(` ${option}`));
            optionsContainer.appendChild(label);
        });

        document.getElementById('prev-btn').disabled = index === 0;
        document.getElementById('next-btn').disabled = index === totalQuestions - 1;
        updateNavStatus();
    }

    function selectAnswer(index, answer) {
        userAnswers[index] = answer;
        if (doubtfulQuestions.has(index)) {
            doubtfulQuestions.delete(index);
        }
        updateNavStatus();
    }
    
    function goToQuestion(index) { loadQuestion(index); }
    function nextQuestion() { if (currentQuestionIndex < totalQuestions - 1) loadQuestion(currentQuestionIndex + 1); }
    function prevQuestion() { if (currentQuestionIndex > 0) loadQuestion(currentQuestionIndex - 1); }
    function toggleDoubtful() {
        if (doubtfulQuestions.has(currentQuestionIndex)) {
            doubtfulQuestions.delete(currentQuestionIndex);
        } else {
            doubtfulQuestions.add(currentQuestionIndex);
        }
        updateNavStatus();
    }

    function updateNavStatus() {
        document.querySelectorAll('.nav-btn').forEach((btn, i) => {
            btn.className = 'nav-btn'; // Reset
            if (i === currentQuestionIndex) btn.classList.add('current');
            if (userAnswers[i] !== null) btn.classList.add('answered');
            if (doubtfulQuestions.has(i)) {
                btn.classList.remove('answered');
                btn.classList.add('doubtful');
            }
        });
    }

    function startTimer(duration) {
        let timer = duration;
        const timerEl = document.getElementById('timer').querySelector('strong');
        timerInterval = setInterval(() => {
            const minutes = Math.floor(timer / 60);
            let seconds = timer % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            timerEl.textContent = `${minutes}:${seconds}`;
            if (--timer < 0) {
                clearInterval(timerInterval);
                alert("Waktu habis!");
                submitExam(true);
            }
        }, 1000);
    }

    function calculateScore() {
        let correctAnswers = 0;
        questions.forEach((q, i) => {
            if (q.answer === userAnswers[i]) correctAnswers++;
        });
        return ((correctAnswers / totalQuestions) * 100).toFixed(0);
    }

    function submitExam(force = false) {
        if (force) {
            showResults();
            return;
        }
        const unanswered = userAnswers.filter(a => a === null).length;
        let confirmation = unanswered > 0
            ? confirm(`Anda belum menjawab ${unanswered} soal. Yakin ingin menyelesaikan ujian?`)
            : confirm("Apakah Anda yakin ingin menyelesaikan ujian?");
        
        if (confirmation) showResults();
    }

    function showResults() {
        clearInterval(timerInterval);
        const finalScore = calculateScore();
        document.getElementById('result-greeting').textContent = `Selamat, ${username}!`;
        document.getElementById('score').textContent = finalScore;
        examContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
    }

    function showReview() {
        resultContainer.classList.add('hidden');
        reviewContainer.classList.remove('hidden');
        generateReview();
    }

    function generateReview() {
        const reviewContent = document.getElementById('review-content');
        reviewContent.innerHTML = '';

        questions.forEach((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === q.answer;

            const item = document.createElement('div');
            item.className = 'review-item';

            let reviewHTML = `
                <p class="review-question"><strong>${index + 1}. ${q.question}</strong></p>
                <ul class="review-answer">`;

            q.options.forEach(option => {
                let className = '';
                if (option === q.answer) {
                    className = 'correct'; // Tandai jawaban yang benar
                } else if (option === userAnswer && !isCorrect) {
                    className = 'incorrect'; // Tandai jawaban pengguna yang salah
                }
                reviewHTML += `<li class="${className}">${option}</li>`;
            });

            reviewHTML += `</ul>
                <div class="review-explanation">
                    <p>Jawaban Anda: <strong>${userAnswer || 'Tidak Dijawab'}</strong> ${isCorrect ? ' (Benar)' : ' (Salah)'}</p>
                    <p>Jawaban Benar: <strong>${q.answer}</strong></p>
                    <hr>
                    <p><strong>Pembahasan:</strong> ${q.explanation}</p>
                </div>`;
            
            item.innerHTML = reviewHTML;
            reviewContent.appendChild(item);
        });
    }
});