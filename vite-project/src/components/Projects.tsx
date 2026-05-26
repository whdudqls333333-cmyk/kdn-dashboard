import { useInView } from '../hooks/useInView'

const projects = [
  {
    title: '이커머스 플랫폼',
    desc: 'React + Redux로 구축한 풀스택 이커머스. 결제, 장바구니, 관리자 대시보드를 포함한 종합 쇼핑몰입니다.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com/',
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2D4A8A 100%)',
    emoji: '🛒',
  },
  {
    title: '태스크 관리 앱',
    desc: '드래그 앤 드롭 기반의 칸반 보드. 팀 협업과 프로젝트 진행 상황을 직관적으로 관리합니다.',
    tags: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    github: 'https://github.com/',
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #0F4C3A 100%)',
    emoji: '📋',
  },
  {
    title: '날씨 대시보드',
    desc: 'OpenWeather API를 활용한 실시간 날씨 대시보드. 지역별 날씨, 주간 예보, 시각화 차트를 제공합니다.',
    tags: ['React', 'TypeScript', 'Chart.js', 'API'],
    github: 'https://github.com/',
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #0C3454 100%)',
    emoji: '🌤',
  },
  {
    title: '포트폴리오 빌더',
    desc: '드래그 앤 드롭으로 포트폴리오를 손쉽게 제작하는 SaaS. 다양한 템플릿과 커스터마이징을 지원합니다.',
    tags: ['Vite', 'React', 'TypeScript', 'Supabase'],
    github: 'https://github.com/',
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #3D1A4A 100%)',
    emoji: '🎨',
  },
]

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">주요 <span className="gold">프로젝트</span></h2>
          <p className="section-desc">최근 진행한 프로젝트들을 소개합니다</p>
        </div>

        <div ref={ref} className={`projects__grid fade-in${inView ? ' visible' : ''}`}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="project-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="project-card__img" style={{ background: p.gradient }}>
                <span className="project-card__emoji">{p.emoji}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link">
                  GitHub에서 보기 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
