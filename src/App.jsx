import React, { useEffect, useRef, useState } from "react";

import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";


const APP = "https://nextperiod.pages.dev/";
const asset = (name) => `/assets/${name}`;
const Arrow = ({ diagonal = false }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "↗"}</span>
);
function Logo({ className = "" }) {
  return (
    <img
      className={`logo ${className}`}
      src={asset("minerva-logo.jpg")}
      width="1280"
      height="1280"
      alt="Minerva Studio"
    />
  );
}
function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
function Header({ home }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const prefix = home ? "" : "/";
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <a
        className="brand"
        href={home ? "#home" : "/"}
        aria-label="Minerva Studio home"
      >
        <Logo />
        <span>
          MINERVA <small>STUDIO</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href={`${prefix}#about`}>The studio</a>
        <a href={`${prefix}#products`}>Our products</a>
        <a href="/support.html">
          Get in touch <Arrow />
        </a>
      </nav>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="mobile-menu"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        onClick={() => setOpen(false)}
      >
        <a href={`${prefix}#about`}>The studio</a>
        <a href={`${prefix}#nextperiod`}>NextPeriod</a>
        <a href={`${prefix}#products`}>Our products</a>
        <a href="/support.html">Get in touch</a>
      </nav>
    </motion.header>
  );
}
function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="wrap">
        <div className="footer-top">
          <a className="brand" href="/#home">
            <Logo />
            <span>
              MINERVA <small>STUDIO</small>
            </span>
          </a>
          <p>
            A little more clarity.
            <br />A world of possibility.
          </p>
        </div>
        <div className="footer-links">
          <nav aria-label="Studio links">
            <a href="/#products">Products</a>
            <a href="/#about">About</a>
            <a href="/support.html">Support</a>
            <a href="/privacy.html">Privacy</a>
          </nav>
          <nav aria-label="Find us elsewhere">
            <a href="https://www.youtube.com/@MinervaStudioTech">
              YouTube <Arrow />
            </a>
            <a href="https://x.com/MinervaStu_tech">
              X <Arrow />
            </a>
            <a href={APP}>
              NextPeriod <Arrow />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Minerva Studio</small>
          <a href="#home">Back to top ↑</a>
          <span>BUILD WHAT SHOULD EXIST.</span>
        </div>
      </div>
    </footer>
  );
}
function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  return (
    <section ref={ref} id="home" className="hero" aria-labelledby="hero-title">
      <motion.div
        className="earth"
        style={{ y: reduced ? 0 : y }}
        aria-hidden="true"
      />
      <div className="hero-shade" />
      <div className="wrap hero-content">
        <motion.p
          className="eyebrow"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          INDEPENDENT MINDS. SHARED HORIZONS.
        </motion.p>
        <motion.h1
          id="hero-title"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          Build what
          <br />
          should <em>exist.</em>
        </motion.h1>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <p className="hero-copy">
            Thoughtful software for everyday life.
            <br />
            Made with purpose. Built for what comes next.
          </p>
          <a className="button light" href="#nextperiod">
            Explore our work <Arrow />
          </a>
        </motion.div>
      </div>
      <div className="hero-bottom wrap">
        <span>01 / A WORLD OF POSSIBILITY</span>
        <a href="#about">
          SCROLL TO DISCOVER{" "}
          <span className="scroll-line" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
const features = [
  {
    title: "Your week, at a glance.",
    label: "Timetable",
    text: "Bring classes, rooms, and times together in one clear timetable.",
    image: "nextperiod-timetable.jpg",
    alt: "Authentic NextPeriod mobile timetable showing Friday classes",
  },
  {
    title: "A timely heads-up.",
    label: "Reminders",
    text: "Choose when to be reminded before class. Keep NextPeriod open in a browser tab to receive alerts.",
    image: "nextperiod-reminders.jpg",
    alt: "NextPeriod class reminder settings, including the open-tab requirement",
  },
  {
    title: "Room to breathe.",
    label: "Class Breaks",
    text: "Add optional time between newly scheduled classes, with suggested or automatic breaks. Existing changes require a preview and confirmation.",
    image: "nextperiod-breaks.jpg",
    alt: "NextPeriod Class Breaks with break duration options",
  },
  {
    title: "Make yourself at home.",
    label: "Appearance & language",
    text: "Choose light, dark, or automatic appearance. Use NextPeriod in English or Thai.",
    image: "nextperiod-appearance.jpg",
    alt: "NextPeriod appearance modes and language setting",
  },
];
function Phone({ image, alt, className = "" }) {
  return (
    <div className={`phone ${className}`}>
      <img
        src={asset(image)}
        alt={alt}
        width="390"
        height="844"
        loading="lazy"
      />
    </div>
  );
}
function Showcase() {
  const [active, setActive] = useState(0);
  const feature = features[active];
  return (
    <section
      className="showcase"
      id="nextperiod"
      aria-labelledby="nextperiod-title"
    >
      <div className="wrap">
        <Reveal className="section-meta">
          <span>03 / NEXT PERIOD, CLEARER</span>
          <span className="status">
            <i /> AVAILABLE NOW
          </span>
        </Reveal>
        <Reveal className="product-heading">
          <div>
            <p className="product-name">
              Next<span>Period</span>
            </p>
            <h2 id="nextperiod-title">
              Know what’s <em>next.</em>
            </h2>
          </div>
          <div>
            <p>
              A clearer school day starts here.
              <br />
              Your timetable, your rhythm. One less thing to keep in your head.
            </p>
            <a className="text-link" href={APP}>
              Open NextPeriod <Arrow />
            </a>
          </div>
        </Reveal>
        <div className="showcase-stage">
          <div className="orbit-line" aria-hidden="true" />
          <Reveal className="side-note">
            <span className="tiny-label">DESIGNED AROUND YOUR DAY</span>
            <p>
              A little less friction.
              <br />A little more focus.
            </p>
            <span className="fine-rule" />
          </Reveal>
          <Reveal className="phone-side" delay={0.1}>
            <Phone
              image="nextperiod-breaks.jpg"
              alt="Actual NextPeriod Class Breaks settings"
            />
          </Reveal>
          <Reveal className="phone-main" delay={0.2}>
            <Phone image={feature.image} alt={feature.alt} />
          </Reveal>
          <div className="stage-caption">
            <span>
              THE REAL APP.
              <br />
              THOUGHTFULLY CONSIDERED.
            </span>
            <span>EN / TH</span>
          </div>
        </div>
        <div className="product-explorer">
          <div
            className="feature-controls"
            role="group"
            aria-label="Choose a NextPeriod screenshot"
          >
            {features.map((f, i) => (
              <button
                key={f.label}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span>0{i + 1}</span>
                {f.label}
                <span aria-hidden="true">{i === active ? "−" : "+"}</span>
              </button>
            ))}
          </div>
          <div className="feature-description" aria-live="polite">
            <span className="eyebrow">A CLOSER LOOK</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
            <a
              href={asset(feature.image)}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View full screenshot <Arrow />
            </a>
          </div>
        </div>
        <Reveal className="product-details">
          <div>
            <span>CONNECTED</span>
            <h3>Cloud synchronization</h3>
            <p>Sign in to keep your timetable connected across devices.</p>
          </div>
          <div>
            <span>PERSONAL</span>
            <h3>English. ไทย. Your choice.</h3>
            <p>Language and appearance settings that fit your day.</p>
          </div>
          <div>
            <span>ACCESSIBLE</span>
            <h3>Free to use.</h3>
            <p>Optional support helps NextPeriod keep improving.</p>
          </div>
        </Reveal>
        <p className="capture-note">
          Actual NextPeriod screens. Captured October 2026.
        </p>
      </div>
    </section>
  );
}
function Home() {
  return (
    <>
      <Header home />
      <main id="main">
        <Hero />
        <section className="studio" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <Reveal className="section-meta">
              <span>02 / WHAT IS MINERVA STUDIO?</span>
              <span>IDEAS WITH INTENTION</span>
            </Reveal>
            <Reveal className="studio-intro">
              <h2 id="about-title">
                A small studio.
                <br />
                <em>A long horizon.</em>
              </h2>
              <div>
                <p className="lead">
                  We build software that earns
                  <br className="desktop-break" /> its place in your day.
                </p>
                <p>
                  Minerva Studio turns everyday problems into thoughtful digital
                  tools. We start with what people need, make room for the
                  details, and build with the future in mind.
                </p>
              </div>
            </Reveal>
            <div className="principles">
              {[
                [
                  "Useful",
                  "Start with a real need. Make the everyday a little easier.",
                ],
                [
                  "Thoughtful",
                  "Care for the details. Keep the experience clear and human.",
                ],
                [
                  "Built for what’s next",
                  "Think beyond the first version. Leave room to grow.",
                ],
              ].map(([title, text], i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <span className="principle-index">
                    0{i + 1}{" "}
                    <span aria-hidden="true">{["↗", "✳", "→"][i]}</span>
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <Showcase />
        <section
          className="products"
          id="products"
          aria-labelledby="products-title"
        >
          <div className="wrap">
            <Reveal className="section-meta">
              <span>04 / OUR PRODUCTS</span>
              <span>SMALL TOOLS. MEANINGFUL DIFFERENCE.</span>
            </Reveal>
            <Reveal className="products-title">
              <h2 id="products-title">
                Good ideas.
                <br />
                <em>Made real.</em>
              </h2>
              <p>
                One product today.
                <br />
                The same thoughtful approach to everything that comes next.
              </p>
            </Reveal>
            <Reveal>
              <a className="product-card" href={APP}>
                <div className="product-card-art">
                  <Phone
                    image="nextperiod-timetable.jpg"
                    alt="NextPeriod timetable preview"
                  />
                </div>
                <div className="product-card-copy">
                  <span className="status">
                    <i /> LIVE · WEB APP
                  </span>
                  <h3>NextPeriod</h3>
                  <p>
                    A calmer way to manage classes,
                    <br />
                    and know what comes next.
                  </p>
                  <span className="text-link">
                    Explore NextPeriod <Arrow />
                  </span>
                </div>
              </a>
            </Reveal>
          </div>
        </section>
        <section className="identity" aria-labelledby="identity-title">
          <div className="identity-bg" aria-hidden="true" />
          <div className="wrap">
            <p className="eyebrow">05 / THE MINERVA SPIRIT</p>
            <Reveal className="identity-mark">
              <Logo />
            </Reveal>
            <Reveal>
              <h2 id="identity-title">
                Thoughtful technology.
                <br />
                <em>Built for what comes next.</em>
              </h2>
              <p>MINERVA STUDIO — BUILD WHAT SHOULD EXIST.</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
function Interior({ privacy }) {
  return (
    <>
      <Header />
      <main id="main" className="interior">
        <div id="home" className="wrap">
          <p className="eyebrow">
            MINERVA STUDIO / {privacy ? "PRIVACY" : "SUPPORT"}
          </p>
          <h1>{privacy ? "Privacy, plainly." : "Here to help."}</h1>
          {privacy ? (
            <>
              <p className="lead">
                This notice covers the Minerva Studio website only.
              </p>
              <article>
                <h2>A simple website</h2>
                <p>
                  This site has no accounts, contact forms, advertising
                  trackers, or analytics scripts. It does not set cookies or
                  store personal information in your browser.
                </p>
                <h2>Hosting</h2>
                <p>
                  The site is prepared for Cloudflare Pages. When hosted, the
                  provider may process technical request information to deliver
                  and protect the website. See{" "}
                  <a href="https://www.cloudflare.com/privacypolicy/">
                    Cloudflare’s privacy policy
                  </a>
                  .
                </p>
                <h2>Links and messages</h2>
                <p>
                  Other websites, including NextPeriod, have their own data
                  practices. If you email us, we use your email address and
                  message to respond to your request.
                </p>
                <h2>Questions</h2>
                <p>
                  Email{" "}
                  <a href="mailto:minervastudio.tech@gmail.com">
                    minervastudio.tech@gmail.com
                  </a>{" "}
                  for questions about this site or NextPeriod.
                </p>
                <p className="muted">Updated October 10, 2026.</p>
              </article>
            </>
          ) : (
            <>
              <p className="lead">
                Questions, feedback, or something not working?
                <br />
                Tell us what happened.
              </p>
              <a
                className="button light"
                href="mailto:minervastudio.tech@gmail.com"
              >
                Email Minerva Studio <Arrow />
              </a>
              <article>
                <h2>NextPeriod, explained.</h2>
                {[
                  [
                    "Is NextPeriod free?",
                    "Yes. NextPeriod is free to use. Optional support helps it keep improving.",
                  ],
                  [
                    "How do class reminders work?",
                    "Enable notifications for NextPeriod and choose a reminder time in Settings. Keep NextPeriod open in a browser tab to receive reminders.",
                  ],
                  [
                    "Can I change the language and appearance?",
                    "Yes. In Settings, choose English or Thai and light, dark, or automatic appearance.",
                  ],
                  [
                    "How do Class Breaks work?",
                    "Class Breaks add optional time between newly scheduled classes. Choose suggestions or automatic mode. Changes to existing classes require a preview and confirmation.",
                  ],
                  [
                    "Need help with cloud synchronization?",
                    "Check your internet connection and make sure you are signed in to the same account on each device. If the problem continues, email us with the devices involved and what you see.",
                  ],
                ].map(([q, a]) => (
                  <details key={q}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
                <p>
                  Please include your device, what you expected, and what
                  happened. Leave out passwords and sensitive personal
                  information.
                </p>
                <a className="text-link" href={APP}>
                  Open NextPeriod <Arrow />
                </a>
              </article>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
export default function App() {
 const path=window.location.pathname;
 return <MotionConfig reducedMotion="user">{path.includes('privacy')?<Interior privacy/>:path.includes('support')?<Interior/>:<Home/>}</MotionConfig>;
}
