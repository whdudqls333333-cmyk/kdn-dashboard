import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        <div ref={ref} className={`about__inner fade-in${inView ? ' visible' : ''}`}>
          <div className="about__avatar-col">
            <div className="about__avatar-wrap">
              <div className="about__avatar">KM</div>
              <div className="about__avatar-ring" />
            </div>
          </div>

          <div className="about__text">
            <span className="section-tag">About Me</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginTop: 12 }}>
              코드로 세상을 <span className="gold">더 아름답게</span>
            </h2>
            <p className="about__para">
              3년차 프론트엔드 개발자로 사용자 중심의 UI/UX 설계와 구현에 열정을 가지고 있습니다.
              React 생태계를 중심으로 최신 웹 기술을 꾸준히 학습하며 성장하고 있습니다.
            </p>
            <p className="about__para">
              클린한 코드와 성능 최적화를 중시하며, 디자인과 개발의 간극을 좁히는 것을 목표로 합니다.
              팀원과의 원활한 소통과 협업을 통해 더 나은 결과물을 만들어 가고 있습니다.
            </p>
            <div className="about__facts">
              {[
                { num: '3+', label: '경력 (년)' },
                { num: '20+', label: '프로젝트' },
                { num: '5+', label: '협업 팀' },
              ].map(f => (
                <div key={f.label} className="about__fact">
                  <span className="about__fact-num">{f.num}</span>
                  <span className="about__fact-label">{f.label}</span>
                </div>
              ))}
            </div>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              GitHub 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
