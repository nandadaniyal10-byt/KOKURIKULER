// ===== KONSTANTA & VARIABEL GLOBAL =====
const batikData = [
    {
        id: 1,
        name: "Batik Parang",
        description: "Motif kuno yang melambangkan ombak laut yang tak pernah berhenti. Melambangkan kesinambungan dan perjuangan hidup.",
        region: "jawa",
        category: "keraton",
        color: "#8B4513",
        popularity: 95,
        image: "images/6388380875a11341b9e1db6289d4b838.jpg",
        meaning: "Motif Parang melambangkan senjata tradisional Jawa yang berbentuk seperti ombak. Simbol perjuangan, kepemimpinan, dan kesinambungan.",
        technique: "tulis",
        year: "Abad ke-16"
    },
    {
        id: 2,
        name: "Batik Mega Mendung",
        description: "Motif awan dari Cirebon yang penuh warna. Melambangkan kesabaran, ketenangan, dan kebijaksanaan.",
        region: "jawa",
        category: "alam",
        color: "#2C5F9E",
        popularity: 90,
        image: "images/a4f826bddd73fbf5305d7fe523ef35ab.jpg",
        meaning: "Awan melambangkan dunia luas tanpa batas. Mengajarkan manusia untuk berpikir luas dan bersabar.",
        technique: "tulis",
        year: "Abad ke-17"
    },
    {
        id: 3,
        name: "Batik Kawung",
        description: "Motif geometris berbentuk elips yang teratur. Melambangkan kesempurnaan, kemurnian, dan keabadian.",
        region: "jawa",
        category: "geometris",
        color: "#2C1810",
        popularity: 85,
        image: "images/04316686b704a184e600a258ca6feb73.jpg",
        meaning: "Terinspirasi dari buah kawung (sejenis aren). Melambangkan hati yang bersih dan pikiran yang jernih.",
        technique: "tulis",
        year: "Abad ke-13"
    },
    {
        id: 4,
        name: "Batik Tumpal",
        description: "Motif segitiga berjajar dari Sumatera. Biasanya digunakan sebagai pinggiran kain.",
        region: "sumatera",
        category: "geometris",
        color: "#D4AF37",
        popularity: 75,
        image: "images/e6e2d66f1c59b2dea8e78fbd17903ac6.jpg",
        meaning: "Segitiga melambangkan gunung, simbol kekuatan dan keteguhan. Juga melambangkan tiga fase kehidupan.",
        technique: "tulis",
        year: "Abad ke-18"
    },
    {
        id: 5,
        name: "Bikat Gajah Oling",
        description: "Motif dari Banyuwangi dengan gambar gajah kecil. Melambangkan kekuatan dan kebijaksanaan.",
        region: "jawa",
        category: "alam",
        color: "#228B22",
        popularity: 80,
        image: "images/9e761b6a29f8d991ddc2f2a85c0b3c08.jpg",
        meaning: "Gajah melambangkan kekuatan dan kebijaksanaan. Oling berarti mengingat, agar manusia selalu ingat asal usul.",
        technique: "cap",
        year: "Abad ke-19"
    },
    {
        id: 6,
        name: "Batik Singa Barong",
        description: "Motif mitologis dari Cirebon. Menggambarkan makhluk mitos penjaga istana.",
        region: "jawa",
        category: "keraton",
        color: "#8B0000",
        popularity: 70,
        image: "images/c6c4d73ea693d0155bac81332f311069.jpg",
        meaning: "Singa Barong adalah makhluk mitos penjaga istana. Melambangkan kekuasaan dan perlindungan.",
        technique: "tulis",
        year: "Abad ke-16"
    },
    {
        id: 7,
        name: "Batik Bali",
        description: "Motif dari Bali dengan pengaruh Hindu yang kuat. Penuh dengan simbol-simbol religius.",
        region: "bali",
        category: "alam",
        color: "#FF6B6B",
        popularity: 88,
        image: "images/a6cc4a5cd44bff4a10a04c7dc8782154.jpg",
        meaning: "Kombinasi unsur alam dan kepercayaan Hindu. Melambangkan harmoni antara manusia dan alam.",
        technique: "lukis",
        year: "Abad ke-20"
    },
    {
        id: 8,
        name: "Batik Toraja",
        description: "Motif dari Sulawesi dengan pola geometris khas. Terinspirasi dari rumah adat Tongkonan.",
        region: "sulawesi",
        category: "geometris",
        color: "#654321",
        popularity: 65,
        image: "images/92490d50baa7fd48c6d1af0c89eaa198.jpg",
        meaning: "Pola geometris melambangkan hubungan manusia dengan leluhur dan alam. Simbol kesetaraan dan persatuan.",
        technique: "ikat",
        year: "Abad ke-18"
    },
    {
        id: 9,
        name: "Batik Dayak",
        description: "Motif dari Kalimantan dengan pola tanaman dan hewan. Warna dominan hitam dan merah.",
        region: "kalimantan",
        category: "alam",
        color: "#000000",
        popularity: 60,
        image: "images/558ccec3fb97a2210c0b6e1dd86f134b.jpg",
        meaning: "Motif hewan dan tanaman melambangkan ketergantungan manusia pada alam. Simbol kehidupan yang harmonis.",
        technique: "tulis",
        year: "Abad ke-17"
    },
    {
        id: 10,
        name: "Batik Sekar Jagad",
        description: "Motif peta dunia dengan pola bunga. Melambangkan keindahan dan keragaman dunia.",
        region: "jawa",
        category: "alam",
        color: "#4B0082",
        popularity: 92,
        image: "images/c6f9342892cfe22266e29a286c4eaf39.jpg",
        meaning: "Sekar berarti bunga, jagad berarti dunia. Melambangkan keindahan dan keragaman dunia yang harus dijaga.",
        technique: "tulis",
        year: "Abad ke-18"
    },
    {
        id: 11,
        name: "Batik Truntum",
        description: "Motif bintang-bintang kecil yang berserakan. Diciptakan oleh Ratu Kencana untuk suaminya.",
        region: "jawa",
        category: "keraton",
        color: "#2C1810",
        popularity: 87,
        image: "images/97f6ed7919fc2d90f7c28ffc59e3a768.jpg",
        meaning: "Melambangkan cinta yang bersemi kembali. Sering digunakan dalam pernikahan adat Jawa.",
        technique: "tulis",
        year: "Abad ke-19"
    },
    {
        id: 12,
        name: "Bikat Sidomukti",
        description: "Motif dengan pola daun dan bunga yang simetris. Melambangkan harapan untuk mencapai kebahagiaan.",
        region: "jawa",
        category: "keraton",
        color: "#8B4513",
        popularity: 82,
        image: "images/661effc16992b3503e83158123518ab3.jpg",
        meaning: "Sido berarti menjadi, mukti berarti bahagia. Melambangkan harapan untuk mencapai kebahagiaan lahir batin.",
        technique: "tulis",
        year: "Abad ke-18"
    },
    {
        id: 13,
        name: "Batik Pesisiran",
        description: "Motif dari daerah pesisir dengan warna cerah. Dipengaruhi budaya Tionghoa dan Eropa.",
        region: "jawa",
        category: "alam",
        color: "#FFD700",
        popularity: 78,
        image: "images/2bf320f0d1a90a12e42ff3651ef2a783.jpg",
        meaning: "Mencerminkan kehidupan masyarakat pesisir yang dinamis dan terbuka terhadap pengaruh luar.",
        technique: "cap",
        year: "Abad ke-19"
    },
    {
        id: 14,
        name: "Batik Tambal",
        description: "Motif berupa tambalan dengan berbagai pola. Dipercaya memiliki kekuatan penyembuhan.",
        region: "jawa",
        category: "geometris",
        color: "#8B4513",
        popularity: 73,
        image: "images/62a6b354848eaac9159c8341bf5c61ee.jpg",
        meaning: "Dalam budaya Jawa, kain tambal dipercaya dapat menyembuhkan penyakit. Simbol penyembuhan.",
        technique: "tulis",
        year: "Abad ke-17"
    },
    {
        id: 15,
        name: "Batik Papua",
        description: "Motif dari Papua dengan pola geometris berani. Warna-warna cerah dan kontras.",
        region: "papua",
        category: "geometris",
        color: "#FF0000",
        popularity: 68,
        image: "images/4300455370ef09282bf791c35c174a4e.jpg",
        meaning: "Pola geometris melambangkan hubungan antar suku. Warna cerah mencerminkan semangat hidup.",
        technique: "printing",
        year: "Abad ke-20"
    },
    {
        id: 16,
        name: "Bikat Lereng",
        description: "Motif garis-garis diagonal seperti lereng bukit. Melambangkan kesuburan dan kemakmuran.",
        region: "jawa",
        category: "geometris",
        color: "#2E8B57",
        popularity: 76,
        image: "images/a77d96d198db3a738099d2e2b3f128f0.jpg",
        meaning: "Lereng bukit melambangkan kesuburan tanah. Harapan untuk kemakmuran dan kehidupan yang sejahtera.",
        technique: "cap",
        year: "Abad ke-19"
    },
    {
        id: 17,
        name: "Batik Ceplok",
        description: "Motif geometris dengan pola bunga dalam kotak. Simetris dan teratur rapi.",
        region: "jawa",
        category: "geometris",
        color: "#8B4513",
        popularity: 79,
        image: "images/3a1ea5817b8a324e171368ec2ba4fd12.jpg",
        meaning: "Pola teratur melambangkan keteraturan dalam hidup. Simbol keseimbangan dan harmoni.",
        technique: "tulis",
        year: "Abad ke-18"
    },
    {
        id: 18,
        name: "Batik Nitik",
        description: "Motif titik-titik kecil yang membentuk pola. Terinspirasi dari tenun songket.",
        region: "jawa",
        category: "geometris",
        color: "#2C1810",
        popularity: 71,
        image: "images/b3303a10ae4174881f99ad9adb6128ed.jpg",
        meaning: "Titik-titik kecil melambangkan bintang di langit. Simbol harapan dan impian yang tak terhitung.",
        technique: "tulis",
        year: "Abad ke-17"
    },
    {
        id: 19,
        name: "Batik Sido Asih",
        description: "Motif dengan pola bunga dan burung. Melambangkan cinta kasih yang abadi.",
        region: "jawa",
        category: "keraton",
        color: "#8B0000",
        popularity: 84,
        image: "images/b1f3d4505bd60123a38dcdfd1b6a97bb.jpg",
        meaning: "Sido berarti menjadi, asih berarti kasih sayang. Melambangkan harapan untuk hidup penuh cinta kasih.",
        technique: "tulis",
        year: "Abad ke-19"
    },
    {
        id: 20,
        name: "Bikat Ulamsari Mas",
        description: "Motif ikan dan udang dari Bali. Melambangkan kemakmuran hasil laut.",
        region: "bali",
        category: "alam",
        color: "#4682B4",
        popularity: 77,
        image: "images/Motif-Batik-Ulamsari-Mas-1684750201.webp",
        meaning: "Ikan dan udang melambangkan kemakmuran hasil laut. Simbol rezeki yang melimpah dari alam.",
        technique: "lukis",
        year: "Abad ke-20"
    }
];

// ===== STATE APLIKASI =====
let currentFilter = 'all';
let displayedCount = 8;
let currentTheme = localStorage.getItem('theme') || 'light';
let quizState = {
    currentQuestion: 0,
    score: 0,
    selectedAnswers: [],
    timeStarted: null,
    timeElapsed: 0,
    timerInterval: null,
    questions: [],
    quizStarted: false
};

// ===== FUNGSI INISIALISASI =====
function init() {
    setTheme(currentTheme);
    renderBatikCards();
    setupEventListeners();
    setupQuiz();
    updateYear();
}

// ===== FUNGSI TEMA =====
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
}

// ===== FUNGSI RENDER BATIK =====
function renderBatikCards(filter = 'all') {
    const grid = document.getElementById('featuredGrid');
    const totalCount = document.getElementById('totalBatikAll');
    const currentCount = document.getElementById('totalBatikCount');
    
    // Filter data
    let filteredData = batikData;
    if (filter !== 'all') {
        filteredData = batikData.filter(batik => 
            batik.region === filter || batik.category === filter
        );
    }
    
    // Update counters
    totalCount.textContent = batikData.length;
    currentCount.textContent = Math.min(displayedCount, filteredData.length);
    
    // Render cards
    grid.innerHTML = '';
    const displayData = filteredData.slice(0, displayedCount);
    
    displayData.forEach(batik => {
        const card = createBatikCard(batik);
        grid.appendChild(card);
    });
}

function createBatikCard(batik) {
    const card = document.createElement('div');
    card.className = 'batik-card';
    card.dataset.id = batik.id;
    card.dataset.region = batik.region;
    card.dataset.category = batik.category;
    
    // Determine popularity color
    let popularityColor, popularityText;
    if (batik.popularity >= 85) {
        popularityColor = '#2ecc71';
        popularityText = 'Sangat Populer';
    } else if (batik.popularity >= 70) {
        popularityColor = '#f39c12';
        popularityText = 'Populer';
    } else {
        popularityColor = '#e74c3c';
        popularityText = 'Spesial';
    }
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${batik.image}" alt="${batik.name}" onerror="this.src='images/placeholder.jpg'">
            <div class="card-popularity" style="background: ${popularityColor}">
                <i class="fas fa-fire"></i> ${batik.popularity}%
            </div>
        </div>
        <div class="card-content">
            <span class="card-tag">${getRegionName(batik.region)}</span>
            <h3 class="card-title">${batik.name}</h3>
            <p class="card-description">${batik.description}</p>
            <div class="card-footer">
                <div class="card-region">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${getCategoryName(batik.category)}</span>
                </div>
                <a href="#" class="card-link" data-id="${batik.id}">
                    Detail <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
    
    // Add click event
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.card-link')) {
            showBatikDetail(batik.id);
        }
    });
    
    // Add detail link event
    const detailLink = card.querySelector('.card-link');
    detailLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showBatikDetail(batik.id);
    });
    
    return card;
}

function getRegionName(region) {
    const regions = {
        'jawa': 'Pulau Jawa',
        'sumatera': 'Sumatera',
        'bali': 'Bali & NTT',
        'kalimantan': 'Kalimantan',
        'sulawesi': 'Sulawesi',
        'papua': 'Papua'
    };
    return regions[region] || region;
}

function getCategoryName(category) {
    const categories = {
        'keraton': 'Motif Keraton',
        'alam': 'Motif Alam',
        'geometris': 'Geometris'
    };
    return categories[category] || category;
}

function showBatikDetail(id) {
    const batik = batikData.find(b => b.id === id);
    if (!batik) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-detail">
            <div class="detail-header">
                <div class="detail-image">
                    <img src="${batik.image}" alt="${batik.name}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="detail-info">
                    <span class="detail-tag">${getRegionName(batik.region)}</span>
                    <h2>${batik.name}</h2>
                    <div class="detail-stats">
                        <div class="stat">
                            <i class="fas fa-fire"></i>
                            <span>Populeritas: ${batik.popularity}%</span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-palette"></i>
                            <span>Warna Dominan: <span style="color:${batik.color}">${batik.color}</span></span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-history"></i>
                            <span>Era: ${batik.year}</span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-paint-brush"></i>
                            <span>Teknik: ${batik.technique}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-content">
                <div class="detail-section">
                    <h3><i class="fas fa-book"></i> Makna Filosofis</h3>
                    <p>${batik.meaning}</p>
                </div>
                <div class="detail-section">
                    <h3><i class="fas fa-info-circle"></i> Deskripsi</h3>
                    <p>${batik.description}</p>
                </div>
                <div class="detail-section">
                    <h3><i class="fas fa-map-marked-alt"></i> Daerah Asal</h3>
                    <p>Motif ini berasal dari ${getRegionName(batik.region)} dan termasuk dalam kategori ${getCategoryName(batik.category)}.</p>
                </div>
            </div>
            <div class="detail-actions">
                <button class="share-btn" onclick="shareBatik(${batik.id})">
                    <i class="fas fa-share-alt"></i> Bagikan
                </button>
                <button class="favorite-btn" onclick="toggleFavorite(${batik.id})">
                    <i class="far fa-heart"></i> Favorit
                </button>
            </div>
        </div>
    `;
    
    // Show modal
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== FUNGSI QUIZ =====
function setupQuiz() {
    // Quiz questions data
    quizState.questions = [
        {
            question: "Batik dari daerah manakah yang terkenal dengan motif Mega Mendung?",
            options: [
                "Yogyakarta",
                "Cirebon", 
                "Pekalongan",
                "Solo"
            ],
            correct: 1,
            difficulty: "easy",
            explanation: "Motif Mega Mendung berasal dari Cirebon dan menggambarkan awan dengan warna-warna cerah."
        },
        {
            question: "Apa alat tradisional yang digunakan untuk membatik tulis?",
            options: [
                "Kuas",
                "Canting",
                "Rol Cetak",
                "Stempel"
            ],
            correct: 1,
            difficulty: "easy",
            explanation: "Canting adalah alat tradisional berbentuk seperti pena dengan ujung logam untuk menorehkan lilin panas."
        },
        {
            question: "Pada tahun berapa batik diakui UNESCO sebagai Warisan Budaya Dunia?",
            options: [
                "2005",
                "2009",
                "2012",
                "2015"
            ],
            correct: 1,
            difficulty: "medium",
            explanation: "Batik Indonesia diakui UNESCO sebagai Warisan Budaya Tak Benda pada 2 Oktober 2009."
        },
        {
            question: "Motif batik apa yang melambangkan kesinambungan dan perjuangan hidup?",
            options: [
                "Kawung",
                "Parang",
                "Truntum",
                "Sido Asih"
            ],
            correct: 1,
            difficulty: "medium",
            explanation: "Motif Parang melambangkan ombak laut yang tak pernah berhenti, simbol kesinambungan dan perjuangan."
        },
        {
            question: "Apa nama proses melepas lilin dari kain batik?",
            options: [
                "Pencelupan",
                "Pelorodan",
                "Pengeringan",
                "Penyetrikaan"
            ],
            correct: 1,
            difficulty: "medium",
            explanation: "Pelorodan adalah proses merebus kain dalam air mendidih untuk melepas lilin malam."
        },
        {
            question: "Batik dengan teknik apa yang paling mahal harganya?",
            options: [
                "Batik Cap",
                "Batik Printing",
                "Batik Tulis",
                "Batik Kombinasi"
            ],
            correct: 2,
            difficulty: "easy",
            explanation: "Batik tulis paling mahal karena dibuat sepenuhnya manual dengan ketelitian tinggi."
        },
        {
            question: "Motif batik apa yang terinspirasi dari buah aren?",
            options: [
                "Parang",
                "Kawung",
                "Mega Mendung",
                "Sekar Jagad"
            ],
            correct: 1,
            difficulty: "hard",
            explanation: "Motif Kawung terinspirasi dari buah kawung (sejenis aren) yang teratur susunannya."
        },
        {
            question: "Apa warna tradisional yang paling umum dalam batik klasik?",
            options: [
                "Biru dan Merah",
                "Hitam dan Coklat",
                "Hijau dan Kuning",
                "Ungu dan Orange"
            ],
            correct: 1,
            difficulty: "medium",
            explanation: "Warna tradisional batik adalah sogan (coklat tua) dan hitam, berasal dari pewarna alam."
        },
        {
            question: "Batik dari daerah mana yang dipengaruhi budaya Tionghoa?",
            options: [
                "Yogyakarta",
                "Solo",
                "Pekalongan",
                "Madura"
            ],
            correct: 2,
            difficulty: "hard",
            explanation: "Batik Pekalongan banyak dipengaruhi budaya Tionghoa, terlihat dari warna cerah dan motifnya."
        },
        {
            question: "Hari Batik Nasional diperingati setiap tanggal?",
            options: [
                "17 Agustus",
                "2 Oktober",
                "21 April",
                "10 November"
            ],
            correct: 1,
            difficulty: "easy",
            explanation: "Hari Batik Nasional diperingati setiap 2 Oktober, mengikuti pengakuan UNESCO pada 2009."
        }
    ];
}

function showQuiz() {
    const quizModal = document.getElementById('quizModal');
    const quizContent = document.getElementById('quizContent');
    
    if (!quizState.quizStarted) {
        // Show welcome screen
        quizContent.innerHTML = `
            <div class="welcome-screen">
                <div class="welcome-icon">
                    <i class="fas fa-brain"></i>
                </div>
                <h2>Quiz Batik Explorer</h2>
                <p>Uji pengetahuanmu tentang batik Nusantara! Jawab 10 pertanyaan dan raih skor tertinggi.</p>
                
                <div class="quiz-rules">
                    <h4><i class="fas fa-list-check"></i> Aturan Quiz:</h4>
                    <ul>
                        <li><i class="fas fa-clock"></i> <strong>Waktu:</strong> Tidak ada batas waktu</li>
                        <li><i class="fas fa-star"></i> <strong>Skor:</strong> 10 poin per jawaban benar</li>
                        <li><i class="fas fa-question"></i> <strong>Pertanyaan:</strong> 10 pertanyaan acak</li>
                        <li><i class="fas fa-trophy"></i> <strong>Penilaian:</strong> Lihat hasil di akhir quiz</li>
                    </ul>
                </div>
                
                <button class="start-quiz-btn" id="startQuizBtn">
                    <i class="fas fa-play-circle"></i> Mulai Quiz
                </button>
            </div>
        `;
        
        // Add start button event
        setTimeout(() => {
            document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
        }, 100);
    } else {
        // Show current question
        showQuestion(quizState.currentQuestion);
    }
    
    quizModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function startQuiz() {
    quizState = {
        currentQuestion: 0,
        score: 0,
        selectedAnswers: new Array(quizState.questions.length).fill(null),
        timeStarted: new Date(),
        timeElapsed: 0,
        timerInterval: null,
        questions: [...quizState.questions],
        quizStarted: true
    };
    
    // Start timer
    startTimer();
    
    // Show first question
    showQuestion(0);
}

function startTimer() {
    if (quizState.timerInterval) clearInterval(quizState.timerInterval);
    
    quizState.timerInterval = setInterval(() => {
        const now = new Date();
        quizState.timeElapsed = Math.floor((now - quizState.timeStarted) / 1000);
        
        const minutes = Math.floor(quizState.timeElapsed / 60);
        const seconds = quizState.timeElapsed % 60;
        document.getElementById('timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function showQuestion(index) {
    const quizContent = document.getElementById('quizContent');
    const question = quizState.questions[index];
    
    // Update progress
    updateProgress(index);
    
    // Build question HTML
    let optionsHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((option, i) => {
        const isSelected = quizState.selectedAnswers[index] === i;
        const isCorrect = quizState.selectedAnswers[index] !== null && i === question.correct;
        const isWrong = quizState.selectedAnswers[index] === i && quizState.selectedAnswers[index] !== question.correct;
        
        let btnClass = 'option-btn';
        if (isSelected) btnClass += ' selected';
        if (isCorrect && quizState.selectedAnswers[index] !== null) btnClass += ' correct';
        if (isWrong) btnClass += ' wrong';
        
        optionsHTML += `
            <button class="${btnClass}" data-index="${i}">
                <div class="option-letter">${letters[i]}</div>
                <div class="option-text">${option}</div>
            </button>
        `;
    });
    
    // Build feedback HTML if answer selected
    let feedbackHTML = '';
    if (quizState.selectedAnswers[index] !== null) {
        const isCorrect = quizState.selectedAnswers[index] === question.correct;
        feedbackHTML = `
            <div class="question-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}">
                <div class="feedback-title">
                    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    ${isCorrect ? 'Jawaban Benar!' : 'Jawaban Salah'}
                </div>
                <p class="feedback-explanation">${question.explanation}</p>
                ${!isCorrect ? `<p class="correct-answer">Jawaban yang benar: ${question.options[question.correct]}</p>` : ''}
            </div>
        `;
    }
    
    quizContent.innerHTML = `
        <div class="question-screen">
            <div class="question-header">
                <div class="question-number">
                    Pertanyaan <span class="current">${index + 1}</span> dari ${quizState.questions.length}
                </div>
                <div class="question-difficulty ${question.difficulty}">
                    ${question.difficulty === 'easy' ? 'Mudah' : question.difficulty === 'medium' ? 'Sedang' : 'Sulit'}
                </div>
            </div>
            
            <div class="question-text">
                ${question.question}
            </div>
            
            <div class="options-container">
                ${optionsHTML}
            </div>
            
            ${feedbackHTML}
        </div>
    `;
    
    // Update quiz controls
    updateQuizControls(index);
    
    // Add option click events
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (quizState.selectedAnswers[index] !== null) return;
            
            const selectedIndex = parseInt(this.dataset.index);
            quizState.selectedAnswers[index] = selectedIndex;
            
            if (selectedIndex === question.correct) {
                quizState.score += 10;
                updateScore();
            }
            
            showQuestion(index);
        });
    });
}

function updateProgress(index) {
    const progressFill = document.getElementById('progressFill');
    const progressPercent = ((index + 1) / quizState.questions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    document.getElementById('currentQuestionNum').textContent = index + 1;
    document.getElementById('totalQuestions').textContent = quizState.questions.length;
}

function updateScore() {
    document.getElementById('currentScore').textContent = quizState.score;
}

function updateQuizControls(index) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Previous button
    prevBtn.disabled = index === 0;
    prevBtn.onclick = () => showQuestion(index - 1);
    
    // Next button
    if (index === quizState.questions.length - 1) {
        nextBtn.textContent = 'Selesai';
        nextBtn.innerHTML = 'Selesai <i class="fas fa-flag-checkered"></i>';
        nextBtn.onclick = finishQuiz;
    } else {
        nextBtn.textContent = 'Selanjutnya';
        nextBtn.innerHTML = 'Selanjutnya <i class="fas fa-arrow-right"></i>';
        nextBtn.disabled = quizState.selectedAnswers[index] === null;
        nextBtn.onclick = () => showQuestion(index + 1);
    }
}

function finishQuiz() {
    clearInterval(quizState.timerInterval);
    
    // Calculate final results
    const correctAnswers = quizState.selectedAnswers.filter((answer, index) => 
        answer === quizState.questions[index].correct
    ).length;
    
    const wrongAnswers = quizState.questions.length - correctAnswers;
    
    // Determine result title based on score
    let resultTitle, resultDescription;
    const percentage = (quizState.score / 100) * 100;
    
    if (percentage >= 90) {
        resultTitle = "Ahli Batik!";
        resultDescription = "Luar biasa! Pengetahuanmu tentang batik sangat mendalam. Kamu benar-benar mengenal warisan budaya Indonesia.";
    } else if (percentage >= 70) {
        resultTitle = "Pecinta Batik";
        resultDescription = "Bagus! Kamu memiliki pengetahuan yang baik tentang batik. Terus pelajari dan lestarikan budaya kita.";
    } else if (percentage >= 50) {
        resultTitle = "Pemula Batik";
        resultDescription = "Lumayan! Kamu sudah mulai mengenal batik. Jangan berhenti belajar, masih banyak yang bisa dieksplor.";
    } else {
        resultTitle = "Pendatang Baru";
        resultDescription = "Jangan menyerah! Batik adalah warisan yang kaya. Teruslah belajar dan eksplorasi keindahannya.";
    }
    
    // Update results modal
    document.getElementById('finalScore').textContent = quizState.score;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    document.getElementById('quizTime').textContent = `${quizState.timeElapsed} detik`;
    document.getElementById('resultTitle').textContent = resultTitle;
    document.getElementById('resultDescription').textContent = resultDescription;
    
    // Animate score circle
    const circle = document.querySelector('.score-circle-progress');
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = circumference;
    
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);
    
    // Close quiz modal and show results
    document.getElementById('quizModal').classList.remove('active');
    document.getElementById('resultsModal').classList.add('active');
    
    // Reset quiz state
    setTimeout(() => {
        quizState.quizStarted = false;
    }, 1000);
}

// ===== FUNGSI UTILITAS =====
function updateYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function shareBatik(id) {
    const batik = batikData.find(b => b.id === id);
    if (!batik) return;
    
    const shareText = `Lihat motif batik "${batik.name}" dari ${getRegionName(batik.region)} di Batik Explorer!`;
    
    if (navigator.share) {
        navigator.share({
            title: batik.name,
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(shareText);
        showToast('Tautan berhasil disalin!', 'success');
    }
}

function toggleFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('batikFavorites')) || [];
    const index = favorites.indexOf(id);
    
    if (index === -1) {
        favorites.push(id);
        showToast('Ditambahkan ke favorit!', 'success');
    } else {
        favorites.splice(index, 1);
        showToast('Dihapus dari favorit', 'info');
    }
    
    localStorage.setItem('batikFavorites', JSON.stringify(favorites));
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter and render
            currentFilter = this.dataset.filter;
            displayedCount = 8;
            renderBatikCards(currentFilter);
            
            // Smooth scroll to grid
            document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Load more button
    document.getElementById('loadMoreBtn').addEventListener('click', function() {
        displayedCount += 4;
        renderBatikCards(currentFilter);
        
        // Scroll to new cards
        const cards = document.querySelectorAll('.batik-card');
        if (cards.length > 0) {
            cards[cards.length - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    // Map points
    document.querySelectorAll('.map-point').forEach(point => {
        point.addEventListener('click', function() {
            const region = this.dataset.region;
            currentFilter = region;
            displayedCount = 8;
            
            // Update filter buttons
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector(`.filter-btn[data-filter="${region}"]`).classList.add('active');
            
            renderBatikCards(region);
            showToast(`Menampilkan batik dari ${getRegionName(region)}`, 'info');
        });
    });
    
    // Gallery navigation
    let currentSlide = 0;
    const slides = document.querySelectorAll('.gallery-item');
    const indicators = document.querySelectorAll('.gallery-indicator span');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    // Navigation buttons
    document.querySelector('.gallery-nav.prev').addEventListener('click', () => {
        showSlide((currentSlide - 1 + totalSlides) % totalSlides);
    });
    
    document.querySelector('.gallery-nav.next').addEventListener('click', () => {
        showSlide((currentSlide + 1) % totalSlides);
    });
    
    // Indicators
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            showSlide(i);
        });
    });
    
    // Auto-rotate gallery
    setInterval(() => {
        showSlide((currentSlide + 1) % totalSlides);
    }, 5000);
    
    // Quiz button
    document.getElementById('quizFloatingBtn').addEventListener('click', showQuiz);
    
    // Quiz close button
    document.getElementById('quizClose').addEventListener('click', () => {
        document.getElementById('quizModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Modal close
    document.getElementById('modalClose').addEventListener('click', () => {
        document.getElementById('modalOverlay').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking overlay
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modalOverlay')) {
            document.getElementById('modalOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Results modal buttons
    document.getElementById('shareResults').addEventListener('click', () => {
        const score = quizState.score;
        const shareText = `Saya baru saja mencoba Quiz Batik Explorer dan mendapatkan ${score} poin! Coba tantanganmu di ${window.location.href}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Hasil Quiz Batik Explorer',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText);
            showToast('Hasil berhasil disalin!', 'success');
        }
    });
    
    document.getElementById('restartQuiz').addEventListener('click', () => {
        document.getElementById('resultsModal').classList.remove('active');
        setTimeout(() => {
            showQuiz();
        }, 300);
    });
    
    document.getElementById('closeResults').addEventListener('click', () => {
        document.getElementById('resultsModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Newsletter
    document.getElementById('newsletterBtn').addEventListener('click', () => {
        const email = document.getElementById('newsletterInput').value;
        if (email && email.includes('@')) {
            showToast('Terima kasih telah berlangganan!', 'success');
            document.getElementById('newsletterInput').value = '';
        } else {
            showToast('Masukkan email yang valid', 'info');
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                if (this.classList.contains('nav-link')) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Scroll spy for navigation
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!searchTerm) return;
    
    const results = batikData.filter(batik => 
        batik.name.toLowerCase().includes(searchTerm) ||
        batik.description.toLowerCase().includes(searchTerm) ||
        batik.region.toLowerCase().includes(searchTerm) ||
        batik.category.toLowerCase().includes(searchTerm)
    );
    
    if (results.length > 0) {
        // Show modal with search results
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="search-results">
                <h2><i class="fas fa-search"></i> Hasil Pencarian: "${searchTerm}"</h2>
                <p>Ditemukan ${results.length} motif batik:</p>
                <div class="results-grid">
                    ${results.map(batik => `
                        <div class="result-card" onclick="showBatikDetail(${batik.id})">
                            <img src="${batik.image}" alt="${batik.name}" onerror="this.src='images/placeholder.jpg'">
                            <h3>${batik.name}</h3>
                            <span class="result-region">${getRegionName(batik.region)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        document.getElementById('modalOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        showToast('Tidak ditemukan batik dengan kata kunci tersebut', 'info');
    }
}

// ===== INISIALISASI APLIKASI =====
document.addEventListener('DOMContentLoaded', init);

// ===== STYLE DINAMIS UNTUK SEARCH RESULTS =====
const style = document.createElement('style');
style.textContent = `
    .search-results {
        padding: 2rem;
    }
    
    .search-results h2 {
        color: var(--primary);
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .search-results > p {
        color: var(--gray);
        margin-bottom: 2rem;
    }
    
    .results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
    }
    
    .result-card {
        background: var(--light-gray);
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        transition: var(--transition);
    }
    
    .result-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow);
    }
    
    .result-card img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    
    .result-card h3 {
        padding: 1rem 1rem 0.5rem;
        font-size: 1.1rem;
        color: var(--primary);
    }
    
    .result-region {
        display: block;
        padding: 0 1rem 1rem;
        font-size: 0.9rem;
        color: var(--accent);
    }
    
    .modal-detail {
        padding: 2rem;
    }
    
    .detail-header {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
        margin-bottom: 2rem;
    }
    
    @media (max-width: 768px) {
        .detail-header {
            grid-template-columns: 1fr;
        }
    }
    
    .detail-image img {
        width: 100%;
        border-radius: 15px;
        box-shadow: var(--shadow);
    }
    
    .detail-info h2 {
        font-family: 'Prata', serif;
        font-size: 2rem;
        margin: 0.5rem 0 1rem;
        color: var(--primary);
    }
    
    .detail-tag {
        display: inline-block;
        background: var(--accent);
        color: var(--dark);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    .detail-stats {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 1.5rem;
    }
    
    .detail-stats .stat {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0.8rem;
        background: var(--light-gray);
        border-radius: 10px;
    }
    
    .detail-stats .stat i {
        color: var(--accent);
    }
    
    .detail-content {
        margin: 2rem 0;
    }
    
    .detail-section {
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--light-gray);
    }
    
    .detail-section:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    
    .detail-section h3 {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--primary);
        margin-bottom: 0.8rem;
        font-size: 1.2rem;
    }
    
    .detail-section h3 i {
        color: var(--accent);
    }
    
    .detail-section p {
        color: var(--gray);
        line-height: 1.6;
    }
    
    .detail-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--light-gray);
    }
    
    .detail-actions button {
        padding: 0.8rem 1.5rem;
        border: none;
        border-radius: 50px;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .share-btn {
        background: var(--primary);
        color: white;
    }
    
    .share-btn:hover {
        background: var(--secondary);
    }
    
    .favorite-btn {
        background: transparent;
        color: var(--gray);
        border: 2px solid var(--light-gray);
    }
    
    .favorite-btn:hover {
        background: var(--light-gray);
    }
`;
document.head.appendChild(style);