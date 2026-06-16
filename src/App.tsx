import { useState, useEffect } from 'react';
import { profile, certifications, education, skills, projects } from './data/portfolio';
import './App.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--stuck' : ''}`}>
        <div className="nav__wrap">
          <span className="nav__name">{profile.name}</span>
          <div className="nav__links">
            {(['about', 'projects', 'skills', 'contact'] as const).map((id) => (
              <button key={id} onClick={() => go(id)} className="nav__btn">
                {{ about: '소개', projects: '프로젝트', skills: '기술', contact: '연락처' }[id]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="main">

        {/* ── 소개 ── */}
        <section id="about" className="hero">
          <div className="hero__text">
            {profile.available && (
              <p className="hero__badge"><span className="pulse" />구직 중</p>
            )}
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__role">{profile.role}</p>
            <p className="hero__intro">{profile.intro}</p>
            <div className="hero__cta">
              <a href={`mailto:${profile.email}`} className="btn-fill">이메일 보내기</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-line">GitHub</a>
            </div>
          </div>

          {/* 스킬 미리보기 — 히어로 오른쪽 */}
          <div className="hero__aside">
            <div className="aside__label">주로 쓰는 것</div>
            <div className="aside__tags">
              {skills.main.map((s) => <span key={s} className="stag stag--main">{s}</span>)}
            </div>
            <div className="aside__label" style={{ marginTop: 16 }}>그 외</div>
            <div className="aside__tags">
              {skills.also.map((s) => <span key={s} className="stag">{s}</span>)}
            </div>
            <div className="aside__divider" />
            <div className="aside__contact">
              <a href={`mailto:${profile.email}`} className="aside__link">{profile.email}</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="aside__link">GitHub</a>
            </div>
          </div>
        </section>

        {/* ── 자격증 & 교육 ── */}
        <section className="section">
          <div className="section__wrap">
            <h2 className="section__h">자격증 &amp; 교육</h2>
            <div className="cred__grid">
              <div>
                <p className="cred__sub">자격증</p>
                {certifications.map((c) => (
                  <div key={c.name} className="cred__row">
                    <div>
                      <span className="cred__name">{c.name}</span>
                      <span className="cred__org">{c.org}</span>
                    </div>
                    <span className="cred__date">{c.date}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="cred__sub">학력 &amp; 수강</p>
                {education.map((c) => (
                  <div key={c.name} className="cred__row">
                    <div>
                      <span className="cred__name">{c.name}</span>
                      <span className="cred__org">{c.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 프로젝트 ── */}
        <section id="projects" className="section section--alt">
          <div className="section__wrap">
            <h2 className="section__h">프로젝트</h2>
            <p className="section__sub">부트캠프 팀 프로젝트로 진행했습니다. 각 프로젝트에서 맡은 기능을 처음부터 끝까지 구현했습니다.</p>
            <div className="proj__list">
              {projects.map((p, i) => (
                <article key={i} className="proj">
                  <div className="proj__top" style={{ background: p.color }}>
                    <span className="proj__period">{p.period}</span>
                    <h3 className="proj__title">{p.title}</h3>
                    <p className="proj__sub2">{p.subtitle}</p>
                    <p className="proj__desc">{p.desc}</p>
                  </div>
                  <div className="proj__body">
                    <div className="proj__role-block">
                      <span className="proj__role-label">담당 역할</span>
                      <p className="proj__role-text">{p.role}</p>
                    </div>
                    <ul className="proj__what">
                      {p.what.map((w) => <li key={w}>{w}</li>)}
                    </ul>
                    <div className="proj__foot">
                      <div className="proj__stack">
                        {p.stack.map((s) => <span key={s} className="stag">{s}</span>)}
                      </div>
                      <div className="proj__links">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noreferrer" className="plink">
                            <IcoGithub /> GitHub
                          </a>
                        )}
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noreferrer" className="plink plink--accent">
                            <IcoExt /> 데모
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 기술 ── */}
        <section id="skills" className="section">
          <div className="section__wrap section__wrap--narrow">
            <h2 className="section__h">기술 스택</h2>
            <p className="section__sub">
              React / TypeScript를 주력으로 쓰고 있고, 나머지는 필요할 때마다 찾아 씁니다.
            </p>
            <div className="skills__row">
              {[...skills.main, ...skills.also].map((s) => (
                <span key={s} className={`stag stag--lg ${skills.main.includes(s) ? 'stag--main' : ''}`}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 연락처 ── */}
        <section id="contact" className="section section--dark">
          <div className="section__wrap section__wrap--center">
            <h2 className="contact__h">같이 만들어요</h2>
            <p className="contact__sub">
              궁금한 게 있거나 같이 하고 싶은 게 있으면 편하게 메일 주세요.
            </p>
            <a href={`mailto:${profile.email}`} className="contact__btn">{profile.email}</a>
            <div className="contact__links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__wrap">
          <span>{profile.name}</span>
          <span>2025</span>
        </div>
      </footer>
    </>
  );
}

const IcoGithub = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const IcoExt = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
