const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

// 소개
const profile = {
  name: '이동윤',
  school: '인하공업전문대학교 정보통신공학과',
  intro: '안녕하세요 이동윤 입니다.'
};

// 좋아하는 음식
const foods = [
  { name: '츠케멘', desc: '진한 국물에 면을 찍어 먹는 면요리', img: 'https://i.namu.wiki/i/_l3LQsx9BzQVhn78uyQ2a4ERcs95aZoteY9j6Y3awb5yPdsc5Rrz2-NknPd-Ocwc9dBv1F5Jp6V_CZ-CpsdyPw.webp' },
  { name: '삼겹살', desc: '불판에 구워 먹는 고기', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTLxM2sPDAP2Qrqcri1tWG_pNotPDl8IIJrhiUGTgyQ&s=10' },
  { name: '국밥', desc: '든든하고 따뜻한 한 그릇', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKLwnRuEUvcJpgrz4rQ94HaByPruvy9wcyjXzpxqr0g&s=10' }
];

// 수업 시간표 (과목, 요일, 시간)
const timetable = [
  { subject: '사물 인터넷 실습', day: '월', time: '09:00 ~ 11:40' },
  { subject: '웹 개발 실습', day: '월', time: '13:35 ~ 16:15' },
  { subject: '클라우드 컴퓨팅 실습', day: '수', time: '09:55 ~ 11:40' },
  { subject: 'PCB 설계 실습', day: '목', time: '11:45 ~ 14:25' },
  { subject: 'RF 공학 실습', day: '금', time: '12:40 ~ 15:20' },
  { subject: '네트워크 보안', day: '금', time: '16:20 ~ 18:05' }
];

// 소개 페이지
app.get('/', (req, res) => {
  res.render('index', { profile: profile });
});

// 좋아하는 음식 페이지
app.get('/foods', (req, res) => {
  res.render('foods', { foods: foods });
});

// 수업 시간표 페이지
app.get('/timetable', (req, res) => {
  res.render('timetable', { timetable: timetable });
});

// 구구단 페이지
app.get('/gugudan_:dan', (req, res) => {
  const dan = Number(req.params.dan);

  if (!Number.isInteger(dan)) {
    return res.status(400).send('숫자를 넣어주세요. 예: /gugudan_3');
  }

  res.render('gugudan', { dan: dan });
});

app.listen(PORT, () => {
  console.log('Server running: http://localhost:' + PORT);
});
