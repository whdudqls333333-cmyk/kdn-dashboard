import { useInView } from '../hooks/useInView'

const contactItems = [
  { icon: '✉️', label: '이메일', value: 'minjai.dev@gmail.com', href: 'mailto:minjai.dev@gmail.com' },
  { icon: '📱', label: '연락처', value: '010-1234-5678',        href: 'tel:01012345678' },
]

const socials = [
  { icon: '🐙', label: 'GitHub',   href: 'https://github.com/' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: '🐦', label: 'Twitter',  href: 'https://twitter.com/' },
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">함께 <span className="gold">일해요</span></h2>
          <p className="section-desc">새로운 기회와 협업 제안을 환영합니다</p>
        </div>

        <div ref={ref} className={`contact__inner fade-in${inView ? ' visible' : ''}`}>
          <div className="contact__info">
            {contactItems.map(c => (
              <a key={c.label} href={c.href} className="contact__item">
                <span className="contact__icon">{c.icon}</span>
                <div>
                  <div className="contact__label">{c.label}</div>
                  <div className="contact__value">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="contact__socials">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social-btn"
                  aria-label={s.label}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact__cta">
            <div className="contact__cta-inner">
              <h3>새로운 프로젝트가 있으신가요?</h3>
              <p>아이디어를 현실로 만들어 드립니다.<br />언제든지 편하게 연락주세요!</p>
              <a href="mailto:minjai.dev@gmail.com" className="btn-primary">
                이메일 보내기 ✉️
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>© 2024 김민재. React + TypeScript + Vite로 제작.</p>
        </div>
      </footer>
    </section>
  )
}
