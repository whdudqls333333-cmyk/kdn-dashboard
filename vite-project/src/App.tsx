import { useState } from 'react'
import './App.css'

const stats = [
  { label: '총 사용자', value: '12,847', change: '+8.2%', up: true, icon: '👥' },
  { label: '월 매출', value: '₩48.3M', change: '+12.5%', up: true, icon: '💰' },
  { label: '신규 주문', value: '1,293', change: '-3.1%', up: false, icon: '📦' },
  { label: '전환율', value: '3.68%', change: '+0.4%', up: true, icon: '📈' },
]

const barData = [
  { month: '1월', value: 65 },
  { month: '2월', value: 78 },
  { month: '3월', value: 55 },
  { month: '4월', value: 90 },
  { month: '5월', value: 83 },
  { month: '6월', value: 72 },
  { month: '7월', value: 95 },
]

const activities = [
  { user: '김민준', action: '신규 가입', time: '2분 전', status: '완료' },
  { user: '이서연', action: '결제 완료', time: '15분 전', status: '완료' },
  { user: '박지호', action: '주문 취소', time: '1시간 전', status: '취소' },
  { user: '최수아', action: '상품 문의', time: '2시간 전', status: '대기' },
  { user: '정우진', action: '리뷰 작성', time: '3시간 전', status: '완료' },
]

const navItems = ['대시보드', '사용자', '주문', '통계', '설정']

export default function App() {
  const [active, setActive] = useState('대시보드')

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-name">AdminPanel</span>
        </div>
        <nav>
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${active === item ? 'active' : ''}`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">v1.0.0</div>
      </aside>

      <div className="main">
        <header className="topbar">
          <div>
            <h1 className="page-title">{active}</h1>
            <p className="page-sub">2026년 5월 26일 기준</p>
          </div>
          <div className="topbar-right">
            <span className="badge">알림 3</span>
            <div className="avatar">관</div>
          </div>
        </header>

        <div className="content">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-top">
                  <span className="stat-icon">{s.icon}</span>
                  <span className={`stat-change ${s.up ? 'up' : 'down'}`}>
                    {s.up ? '▲' : '▼'} {s.change}
                  </span>
                </div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="card chart-card">
              <h2 className="card-title">월별 매출</h2>
              <div className="bar-chart">
                {barData.map((d) => (
                  <div key={d.month} className="bar-col">
                    <div
                      className="bar"
                      style={{ height: `${d.value}%` }}
                      title={`${d.value}%`}
                    />
                    <span className="bar-label">{d.month}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card activity-card">
              <h2 className="card-title">최근 활동</h2>
              <table className="activity-table">
                <thead>
                  <tr>
                    <th>사용자</th>
                    <th>활동</th>
                    <th>시간</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((a, i) => (
                    <tr key={i}>
                      <td className="user-cell">
                        <span className="mini-avatar">{a.user[0]}</span>
                        {a.user}
                      </td>
                      <td>{a.action}</td>
                      <td className="time-cell">{a.time}</td>
                      <td>
                        <span className={`status status-${a.status}`}>
                          {a.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
