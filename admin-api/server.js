// ✅ 관리자 홈페이지 & API (로컬 서버 테스트용)
// Express를 사용하여 상담 신청 데이터를 수집 및 관리하는 로컬 API 서버

const express = require('express');
const cors = require('cors');

const app = express(); // ✅ 먼저 선언
const port = 3000;

// CORS 설정 (모든 출처 허용)
app.use(cors({ origin: '*' }));
app.use(express.json());

// 상담 신청 데이터를 저장할 임시 배열
let consultations = [];

// CORS 허용 (로컬 테스트용)
app.use(cors());
app.use(express.json());

// 📌 상담 신청 데이터 수집 API
app.post('/api/consultations', (req, res) => {
    const consultation = req.body;
    consultations.push({
        id: consultations.length + 1,
        ...consultation,
        createdAt: new Date().toISOString()
    });
    console.log('신규 상담 신청:', consultation);
    res.status(200).json({ message: '상담 신청 접수 완료' });
});

// 📌 모든 상담 신청 데이터 조회 API
app.get('/api/consultations', (req, res) => {
    res.json(consultations);
});

// 📌 특정 상담 신청 조회 API (ID 기반)
app.get('/api/consultations/:id', (req, res) => {
    const consultation = consultations.find(c => c.id == req.params.id);
    if (consultation) {
        res.json(consultation);
    } else {
        res.status(404).json({ error: '상담 신청을 찾을 수 없습니다.' });
    }
});

// 📌 서버 실행
app.listen(port, () => {
    console.log(`🚀 관리자 API 서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
