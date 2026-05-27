import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const TIMELINE = [
  {
    n: '01', time: '09:00 ─ 11:00 · 2시간',
    title: 'Claude Code 심화 활용',
    points: [
      'Claude Code 프로젝트 구조 설계',
      'CLAUDE.md 작성 전략',
      '멀티 파일 편집과 컨텍스트 관리',
      'MCP 서버 연동 실습',
      { p: true, t: '실습 — Claude Code로 실제 기능 구현하기' },
    ]
  },
  {
    n: '02', time: '11:00 ─ 13:00 · 2시간',
    title: '배포 자동화 (CI/CD)',
    points: [
      'GitHub Actions 워크플로우 작성',
      'Vercel / GitHub Pages 자동 배포',
      '환경변수 관리와 시크릿 설정',
      '배포 후 모니터링 방법',
      { p: true, t: '실습 — 내 프로젝트 자동 배포 파이프라인 구성하기' },
    ]
  },
  {
    n: '03', time: '14:00 ─ 15:00 · 1시간',
    title: '프로젝트 점검 & 피드백',
    points: [
      '개인 프로젝트 코드 리뷰',
      'AI 활용 개발 워크플로우 정리',
      '질의응답 및 보충 설명',
      { p: true, t: '실습 — 프로젝트 완성도 높이기' },
    ]
  },
];

type TimelinePoint = string | { p: boolean; t: string };

const CurriculumDay25 = (): ReactElement => {
  return (
    <>
      <SEOHead title="2.5일차 커리큘럼 — Claude Code & 배포" description="바이브코딩 2.5일차: Claude Code 심화, CI/CD 자동 배포, 프로젝트 점검 (5시간)" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Day 2.5 · 5H</div>
          <h2>2.5일차 — Claude Code & 배포</h2>
          <p>Claude Code 심화 활용, GitHub Actions 자동 배포, 프로젝트 점검</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 2.5일차</div>
            <h2 className="section-title-ed"><span className="accent">5시간</span> · 3파트</h2>
            <div className="section-meta">Day 2.5 — Claude Code & Deploy</div>
          </div>

          <div className="curriculum-ed">
            <aside className="curr-aside">
              <h3>{'Claude Code\n& 배포'}</h3>
              <p>
                Claude Code를 심화 활용하여 실전 프로젝트를 완성하고,
                GitHub Actions로 CI/CD 파이프라인을 구축합니다.
                개인 프로젝트 코드 리뷰와 피드백으로 마무리합니다.
              </p>
              <div className="curr-meta">
                <div className="curr-meta-row"><span className="curr-meta-key">일정</span><span className="curr-meta-val">5H</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">도구</span><span className="curr-meta-val">Claude Code · GitHub Actions</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">포맷</span><span className="curr-meta-val">강의 20% + 실습 80%</span></div>
              </div>
            </aside>

            <div className="timeline">
              {TIMELINE.map((item) => (
                <div className="tl-item" key={item.n}>
                  <div>
                    <div className="tl-time">{item.time}</div>
                    <div className="tl-num">{item.n}<span>/03</span></div>
                  </div>
                  <div className="tl-body">
                    <h4>{item.title}</h4>
                    <ul>
                      {item.points.map((p: TimelinePoint, i: number) => (
                        typeof p === 'string'
                          ? <li key={i}>{p}</li>
                          : <li key={i} className="practice">{p.t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurriculumDay25;
