function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />

      <div className="hero__content">
        <span className="hero__greeting">👋 안녕하세요, 저는</span>
        <h1 className="hero__name">
          김<span>민재</span>
        </h1>
        <p className="hero__title">Frontend Developer &amp; UI Designer</p>
        <p className="hero__bio">
          사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.<br />
          React와 TypeScript를 주력으로 아름답고 직관적인 웹을 만듭니다.
        </p>
        <div className="hero__actions">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            프로젝트 보기 →
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            연락하기
          </button>
        </div>
        <div className="hero__badges">
          {['React', 'TypeScript', 'Vite', 'Node.js'].map(t => (
            <span key={t} className="hero__badge">{t}</span>
          ))}
        </div>
      </div>

      <button className="hero__scroll" onClick={() => scrollTo('about')} aria-label="아래로 스크롤">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </button>
    </section>
  )
}
