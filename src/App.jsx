import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Download, ArrowUpRight, MapPin, GraduationCap, Send, Code2, Layers3, CheckCircle2, ArrowLeft, ExternalLink, Check } from 'lucide-react';
import FloatingTech from './components/FloatingTech';
import { skills, projects, experience } from './data';
import { TechIcon } from './utils/techIcons';

const Fade = ({ children, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .15 }}
    transition={{ duration: .55 }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ eyebrow, title, side }) => (
  <div className="section-head">
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
    {side}
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'projects'
  const [selectedProject, setSelectedProject] = useState(null); // null | project object
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ success: false, message: '', type: '' });

  // Scroll to top on view or selected project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProject]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setStatus({ success: false, message: 'Please enter your full name.', type: 'error' });
      return;
    }
    if (!trimmedEmail) {
      setStatus({ success: false, message: 'Please enter your email address.', type: 'error' });
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setStatus({ success: false, message: 'Please enter a valid email address.', type: 'error' });
      return;
    }
    if (!trimmedMessage) {
      setStatus({ success: false, message: 'Please enter your message.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ success: false, message: '', type: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsSubmitting(false);
      setStatus({
        success: false,
        message: 'EmailJS keys are missing. Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.',
        type: 'error'
      });
      return;
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: trimmedName,
          from_email: trimmedEmail,
          message: trimmedMessage,
          reply_to: trimmedEmail
        },
        publicKey
      );

      if (response.status === 200 || response.text === 'OK') {
        setStatus({
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
          type: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          success: false,
          message: 'Something went wrong. Please try again.',
          type: 'error'
        });
      }
    } catch (err) {
      console.error('EmailJS submit error:', err);
      setStatus({
        success: false,
        message: 'Something went wrong. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const navToProjects = (e, project = null) => {
    if (e) e.preventDefault();
    setCurrentView('projects');
    setSelectedProject(project);
  };

  const navToHome = (e, targetHash = '#home') => {
    if (e) e.preventDefault();
    setSelectedProject(null);
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.querySelector(targetHash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header>
        <a className="brand" href="#home" onClick={(e) => navToHome(e, '#home')}>ANSIYA <b>K</b> <b>H</b></a>
        <nav>
          <a href="#about" onClick={(e) => navToHome(e, '#about')}>About</a>
          <a href="#skills" onClick={(e) => navToHome(e, '#skills')}>Skills</a>
          <a href="#projects" onClick={(e) => navToProjects(e)} className={currentView === 'projects' ? 'active-nav' : ''}>Projects</a>
          <a href="#experience" onClick={(e) => navToHome(e, '#experience')}>Experience</a>
          <a href="#contact" onClick={(e) => navToHome(e, '#contact')}>Contact</a>
        </nav>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {currentView === 'projects' && (
            <button className="pill back-home-nav-btn" onClick={(e) => navToHome(e, '#home')}>
              <ArrowLeft size={16} /> Back to Home
            </button>
          )}
          <a className="pill dark" href="/Ansiya-K-H-CV.pdf" download>Download CV <Download size={16} /></a>
        </div>
      </header>

      {currentView === 'home' ? (
        <main>
          <section id="home" className="hero">
            <div className="hero-copy">
              <span className="eyebrow">PYTHON FULL STACK DEVELOPER</span>
              <h1>Hi, I’m<br /><strong>Ansiya K <em>H</em></strong></h1>
              <h3>Building Scalable Web Applications</h3>
              <p>I build clean, reliable web products with Python, Django, REST APIs, modern frontend technologies and thoughtful user experiences.</p>
              <div className="actions">
                <button className="pill dark" onClick={(e) => navToProjects(e)}>View Projects <ArrowUpRight size={17} /></button>
                <a className="pill" href="#contact" onClick={(e) => navToHome(e, '#contact')}><Mail size={17} /> Contact Me</a>
              </div>
              <div className="socials">
                <a href="https://www.linkedin.com/in/ansiya-k-h-9890a32ab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href="https://github.com/AnsiyaHussain" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
                <a href="mailto:ansiyahussain.dev@gmail.com" aria-label="Email"><Mail /></a>
              </div>
            </div>
            <div className="scene-wrap">
              <div className="orb one" />
              <div className="orb two" />
              <FloatingTech />
              <span className="scene-note">TURNING IDEAS<br />INTO IMPACT</span>
            </div>
          </section>

          <section id="about" className="section">
            <Fade className="about-grid">
              <div className="portrait">
          <img
            src={`${import.meta.env.BASE_URL}siya.png`}
            alt="Ansiya K H"
            className="portrait-img"
          />               
           <span>Passionate about building real-world solutions.</span>
              </div>
              <div>
                <span className="eyebrow">ABOUT ME</span>
                <h2>More Than Just Code</h2>
                <p>I’m a Python Full Stack Developer experienced in Python, Django, Django REST Framework, PostgreSQL and JavaScript. I enjoy solving real-world problems, learning new tools and building scalable, maintainable applications.</p>
                <div className="mini-grid">
                  <div><GraduationCap /><b>B.Voc in Software Development</b><small>Calicut University</small></div>
                  <div><MapPin /><b>Open to Relocate</b><small>Dubai, UAE</small></div>
                  <div><Code2 /><b>Always Learning</b><small>React, AWS & modern tooling</small></div>
                </div>
              </div>
            </Fade>
          </section>

          <section id="skills" className="section">
            <SectionTitle eyebrow="SKILLS" title="Technologies I Work With" />
            <div className="skills">
              {skills.map((s) => (
                <motion.div
                  whileHover={{ y: -7, rotateX: 4, rotateY: -3 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="skill"
                  key={s}
                >
                  <TechIcon name={s} size={36} />
                  <b>{s}</b>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="projects" className="section alt">
            <SectionTitle
              eyebrow="PROJECTS"
              title="Featured Projects"
              side={
                <button className="pill" onClick={(e) => navToProjects(e)}>
                  View All Projects <ArrowUpRight size={15} />
                </button>
              }
            />
            <div className="projects-grid-3">
              {projects.map((p) => (
                <Fade className="project-card-item" key={p.id}>
                  <div className="project-shot-wrap" onClick={(e) => navToProjects(e, p)}>
                    <img src={p.image} alt={p.title} className="project-card-img" />
                  </div>
                  <div className="project-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tags">{p.tags.slice(0, 3).map(t => <span key={t}>{t}</span>)}</div>
                    <div className="project-links">
                      <button className="pill dark btn-small" onClick={(e) => navToProjects(e, p)}>
                        View Details <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </section>

          <section id="experience" className="section">
            <SectionTitle eyebrow="EXPERIENCE" title="My Professional Journey" />
            <div className="timeline">
              {experience.map(x => (
                <Fade className="timeline-row" key={x.date}>
                  <time>{x.date}</time>
                  <div>
                    <h3>{x.role} <span>| {x.company}</span></h3>
                    <small>{x.place}</small>
                    <p>{x.text}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </section>

          <section className="section alt">
            <SectionTitle eyebrow="EDUCATION & CERTIFICATIONS" title="Learning Foundation" />
            <div className="education">
              <div>
                <GraduationCap />
                <section>
                  <h3>Bachelor of Vocation (B.Voc) in Software Development</h3>
                  <p>Calicut University, Carmel College, Mala, Kerala · 2020–2023</p>
                </section>
              </div>
              <div>
                <Layers3 />
                <section>
                  <h3>Python Full Stack Development Training</h3>
                  <p>Luminar Technolab, Kakkanad · Sep 2023–May 2024</p>
                </section>
              </div>
            </div>
          </section>

          <section id="contact" className="section contact">
            <div>
              <span className="eyebrow">CONTACT</span>
              <h2>Let’s Work Together</h2>
              <p>I’m open to new opportunities and interesting software projects. Feel free to reach out.</p>
              <div className="contact-cards">
                <a href="mailto:ansiyahussain.dev@gmail.com"><Mail />Email</a>
                <a href="https://www.linkedin.com/in/ansiya-k-h-9890a32ab/" target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn</a>
                <a href="https://github.com/AnsiyaHussain" target="_blank" rel="noopener noreferrer"><Github />GitHub</a>
              </div>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={status.type === 'success' ? 'form-success' : 'form-error'}
                >
                  {status.type === 'success' && <CheckCircle2 size={20} />}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <input
                placeholder="Full Name"
                value={formData.name}
                disabled={isSubmitting}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (status.type === 'error') setStatus({ success: false, message: '', type: '' });
                }}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                disabled={isSubmitting}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (status.type === 'error') setStatus({ success: false, message: '', type: '' });
                }}
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                disabled={isSubmitting}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (status.type === 'error') setStatus({ success: false, message: '', type: '' });
                }}
              />
              <button type="submit" className="pill dark" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </section>
        </main>
      ) : (
        /* Standalone Projects Showcase Page */
        <main className="projects-page">
          {/* <section className="projects-hero">
            <div className="projects-hero-inner">
              <span className="eyebrow">FEATURED PORTFOLIO</span>
              <h1>My <strong>Projects</strong> Showcase</h1>
              <p>Explore full-stack web applications, database architectures, REST APIs, and interfaces built with Python, Django, PostgreSQL, and React.</p>
            </div>
          </section> */}

          <section className="section showcase-section">
            {selectedProject ? (
              /* Inline Project Detail View */
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="project-detail-view"
              >
                <button className="pill back-all-projects-btn" onClick={() => setSelectedProject(null)}>
                  <ArrowLeft size={16} /> All Projects
                </button>

                <div className="detail-header">
                  <h2>{selectedProject.title}</h2>
                  {selectedProject.role && (
                    <span className="detail-role">Role: {selectedProject.role}</span>
                  )}
                </div>

                <div className="detail-hero-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>

                <div className="detail-body">
                  <div className="detail-overview">
                    <h3>Overview</h3>
                    <p>{selectedProject.longDesc || selectedProject.desc}</p>
                  </div>

                  {selectedProject.features && (
                    <div className="detail-features">
                      <h3>Key Highlights &amp; Features</h3>
                      <ul>
                        {selectedProject.features.map((feat, fIdx) => (
                          <li key={fIdx}><Check size={16} color="#1769ff" /> {feat}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="detail-tech">
                    <h3>Technologies Used</h3>
                    <div className="tags">
                      {selectedProject.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                  </div>

                  <div className="detail-actions">
                    {/* Live Demo Handling */}
                    {selectedProject.demo && selectedProject.demo !== '#' ? (
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="pill dark">
                        Live Demo <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="badge-disabled">Live Demo — Coming Soon</span>
                    )}

                    {/* GitHub Handling */}
                    {selectedProject.github && selectedProject.github !== '#' ? (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="pill dark">
                        <Github size={16} /> GitHub Repository
                      </a>
                    ) : (
                      <span className="badge-disabled">GitHub — Not Available</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* 3-Card Single-Row Desktop Grid */
              <div className="projects-grid-3">
                {projects.map((p) => (
                  <Fade className="project-card-item" key={p.id}>
                    <div className="project-shot-wrap" onClick={() => setSelectedProject(p)}>
                      <img src={p.image} alt={p.title} className="project-card-img" />
                    </div>
                    <div className="project-body">
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      <div className="tags">{p.tags.slice(0, 3).map(t => <span key={t}>{t}</span>)}</div>
                      <div className="project-links">
                        <button className="pill dark btn-small" onClick={() => setSelectedProject(p)}>
                          View Details <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            )}
          </section>
        </main>
      )}

      <footer>
        <div>
          <a className="brand" href="#home" onClick={(e) => navToHome(e, '#home')}>ANSIYA <b>K</b> <b>H</b></a>
          <p>Python Full Stack Developer<br />Open to relocate to Dubai, UAE</p>
        </div>
        <div>© 2026 Ansiya K H. All rights reserved.</div>
      </footer>
    </>
  );
}
