// EmailJS 초기화
emailjs.init("rizVJ9XgpAz-yIc-V"); // EmailJS user ID

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_y196tki', 'template_aq8vdrt', this)
    .then(() => {
      alert('이메일이 전송되었습니다!');
      this.reset();
    }, (error) => {
      alert('이메일 전송 실패');
      console.error(error);
    });
});

// 여기는 나중에 DB 연동할 때 수정해야 함
const projects = [
  {
    title: "포트폴리오 웹사이트",
    description: "HTML, CSS, JS 기반 포트폴리오",
    image: "images/project1.jpg",
    zip: "download/project1.zip"
  },
  {
    title: "리액트 클론 코딩",
    description: "React 기반 클론 코딩 프로젝트",
    image: "images/project2.jpg",
    zip: "download/project2.zip"
  },
  {
    title: "AWS CloudFormation",
    description: "AWS CloudFormation 템플릿",
    image: "images/project3.jpg",
    zip: "download/project3.zip"
  },
  {
    title: "관리자 대시보드",
    description: "차트와 테이블이 포함된 관리자 화면",
    image: "images/project4.jpg",
    zip: "download/project4.zip"
  }
];

const perPage = 3;
let currentPage = 1;

function renderProjects() {
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const visible = projects.slice(start, end);

  const container = document.getElementById('project-list');
  container.innerHTML = '';

  visible.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="thumbnail" style="background-image: url('${p.image}')"></div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <a href="${p.zip}" download>ZIP 다운로드</a>
    `;
    container.appendChild(card);
  });

  const totalPages = Math.ceil(projects.length / perPage);
  document.getElementById('page-indicator').textContent = `${currentPage} / ${totalPages}`;
}

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderProjects();
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  const total = Math.ceil(projects.length / perPage);
  if (currentPage < total) {
    currentPage++;
    renderProjects();
  }
});

renderProjects();
