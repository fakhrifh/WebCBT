document.addEventListener('DOMContentLoaded', () => {

    // --- DATA SOAL (Isi 30 soal di sini) ---
    // Format: { question: "...", options: ["A", "B", "C", "D"], answer: "A" }
    const questions = [
        { question: "Ilmu yang mempelajari bagaimana individu dan masyarakat mengalokasikan sumber daya yang langka untuk memenuhi kebutuhan yang tidak terbatas disebut...", options: ["Ilmu Sosiologi", "Ilmu Ekonomi", "Ilmu Politik", "Ilmu Akuntansi"], answer: "Ilmu Ekonomi" },
        { question: "Berikut ini yang bukan merupakan faktor produksi adalah...", options: ["Tenaga Kerja", "Modal", "Tanah", "Konsumsi"], answer: "Konsumsi" },
        { question: "Harga keseimbangan di pasar tercapai ketika...", options: ["Permintaan lebih besar dari penawaran", "Penawaran lebih besar dari permintaan", "Jumlah yang diminta sama dengan jumlah yang ditawarkan", "Pemerintah menetapkan harga"], answer: "Jumlah yang diminta sama dengan jumlah yang ditawarkan" },
        // --- Tambahkan 27 soal lainnya di sini ---
        { question: "Soal 4", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Soal 5", options: ["A", "B", "C", "D"], answer: "B" },
        { question: "Soal 6", options: ["A", "B", "C", "D"], answer: "C" },
        { question: "Soal 7", options: ["A", "B", "C", "D"], answer: "D" },
        { question: "Soal 8", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Soal 9", options: ["A", "B", "C", "D"], answer: "B" },
        { question: "Soal 10", options: ["A", "B", "C", "D"], answer: "C" },
        { question: "Soal 11", options: ["A", "B", "C", "D"], answer: "D" },
        { question: "Soal 12", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Soal 13", options: ["A", "B", "C", "D"], answer: "B" },
        { question: "Soal 14", options: ["A", "B", "C", "D"], answer: "C" },
        { question: "Soal 15", options: ["A", "B", "C", "D"], answer: "D" },
        { question: "Soal 16", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Soal 17", options: ["A", "B", "C", "D"], answer: "B" },
        { question: "Soal 18", options: ["A", "B", "C", "D"], answer: "C" },
        { question: "Soal 19", options: ["A", "B", "C", "D"], answer: "D" },
        { question: "Soal 20", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Soal 21", options: ["A", "B", "C", "D"], answer: "B" },
        { question: "Soal 22", options: ["A", "B", "C", "D"], answer: "C" },
        { question: "Soal 23", options: ["A", "B", "C", "D"], answer: "D" },
        { question: "Soal 24", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Soal 25", options: ["A", "B", "C", "D"], answer: "B" },
        { question: "Soal 26", options: ["A", "B", "C", "D"], answer: "C" },
        { question: "Soal 27", options: ["A", "B", "C", "D"], answer: "D" },
        { question: "Soal 28", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "Soal 29", options: ["A", "B", "C", "D"], answer: "B" },
        { question: "Soal 30", options: ["A", "B", "C", "D"], answer: "C" },
    ];

    // --- Variabel & Konstanta ---
    const totalQuestions = questions.length;
    let currentQuestionIndex = 0;
    let userAnswers = new Array(totalQuestions).fill(null);
    let doubtfulQuestions = new Set();
    let timerInterval;

    const loginContainer = document.getElementById('login-container');
    const examContainer = document.getElementById('exam-container');
    const resultContainer = document.getElementById('result-container');
    
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
        startTimer(30 * 60); // 30 Menit
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
        
        document.getElementById('question-number').textContent = `Soal Nomor ${index + 1}`;
        document.getElementById('question-text').textContent = question.question;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        question.options.forEach((option, i) => {
            const label = document.createElement('label');
            label.className = 'option';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'answer';
            radio.value = option;
            radio.checked = userAnswers[index] === option;
            radio.addEventListener('change', () => selectAnswer(index, option));
            
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            optionsContainer.appendChild(label);
        });

        document.getElementById('prev-btn').disabled = index === 0;
        document.getElementById('next-btn').disabled = index === totalQuestions - 1;
        updateNavStatus();
    }

    function selectAnswer(index, answer) {
        userAnswers[index] = answer;
        updateNavStatus();
    }

    function goToQuestion(index) {
        loadQuestion(index);
    }
    
    function nextQuestion() {
        if (currentQuestionIndex < totalQuestions - 1) {
            loadQuestion(currentQuestionIndex + 1);
        }
    }

    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            loadQuestion(currentQuestionIndex - 1);
        }
    }

    function toggleDoubtful() {
        if (doubtfulQuestions.has(currentQuestionIndex)) {
            doubtfulQuestions.delete(currentQuestionIndex);
        } else {
            doubtfulQuestions.add(currentQuestionIndex);
        }
        updateNavStatus();
    }

    function updateNavStatus() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach((btn, i) => {
            btn.classList.remove('current', 'answered', 'doubtful');
            if (i === currentQuestionIndex) {
                btn.classList.add('current');
            }
            if (userAnswers[i] !== null) {
                btn.classList.add('answered');
            }
            if (doubtfulQuestions.has(i)) {
                btn.classList.add('doubtful');
            }
        });
        // Update status tombol ragu-ragu
        document.getElementById('doubtful-btn').classList.toggle('active', doubtfulQuestions.has(currentQuestionIndex));
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
                submitExam();
            }
        }, 1000);
    }

    function calculateScore() {
        let correctAnswers = 0;
        questions.forEach((q, i) => {
            if (q.answer === userAnswers[i]) {
                correctAnswers++;
            }
        });
        const score = (correctAnswers / totalQuestions) * 100;
        return score.toFixed(2);
    }

    function submitExam() {
        const unanswered = userAnswers.filter(a => a === null).length;
        let confirmation = true;
        if (unanswered > 0) {
             confirmation = confirm(`Anda belum menjawab ${unanswered} soal. Apakah Anda yakin ingin menyelesaikan ujian?`);
        } else {
             confirmation = confirm("Apakah Anda yakin ingin menyelesaikan ujian?");
        }

        if (confirmation) {
            clearInterval(timerInterval);
            const finalScore = calculateScore();
            document.getElementById('score').textContent = finalScore;
            examContainer.classList.add('hidden');
            resultContainer.classList.remove('hidden');
        }
    }
});