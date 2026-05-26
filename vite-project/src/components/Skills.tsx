import { useInView } from '../hooks/useInView'

const skills = [
  { name: 'React',      level: 90, icon: '⚛',  color: '#61DAFB' },
  { name: 'TypeScript', level: 85, icon: 'TS', color: '#3178C6' },
  { name: 'JavaScript', level: 92, icon: 'JS', color: '#F7DF1E' },
  { name: 'HTML / CSS', level: 95, icon: '#',  color: '#E34F26' },
  { name: 'Node.js',    level: 75, icon: '⬡',  color: '#339933' },
  { name: 'Vite',       level: 80, icon: '⚡',  color: '#646CFF' },
  { name: 'Git',        level: 88, icon: '⎇',  color: '#F05032' },
  { name: 'Figma',      level: 72, icon: '◈',  color: '#F24E1E' },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">기술 <span className="gold">스택</span></h2>
          <p className="section-desc">주력으로 사용하는 기술과 도구들입니다</p>
        </div>

        <div ref={ref} className={`skills__grid fade-in${inView ? ' visible' : ''}`}>
          {skills.map(s => (
            <div key={s.name} className="skill-card">
              <div className="skill-card__top">
                <div
                  className="skill-card__icon"
                  style={{ color: s.color, borderColor: s.color + '40', background: s.color + '14' }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="skill-card__name">{s.name}</div>
                  <div className="skill-card__pct">{s.level}%</div>
                </div>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar__fill"
                  style={{
                    width: inView ? `${s.level}%` : '0%',
                    background: `linear-gradient(90deg, ${s.color}80, ${s.color})`,
                    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
