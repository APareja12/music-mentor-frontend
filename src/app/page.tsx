export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        color: 'white',
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(51, 65, 85, 0.5)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '4rem',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
              }}
            >
              🎵
            </div>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Music Mentorship
            </span>
          </div>

          {/* Auth Buttons */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <button
              className="nav-button-login"
              style={{
                padding: '0.5rem 1rem',
                color: '#cbd5e1',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
            <button
              className="nav-button-cta"
              style={{
                padding: '0.5rem 1.5rem',
                background: 'linear-gradient(to right, #a855f7, #ec4899)',
                borderRadius: '0.75rem',
                color: 'white',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: '4rem',
        }}
      >
        {/* Background Elements */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <div
            className="bg-orb-1"
            style={{
              position: 'absolute',
              top: '25%',
              left: '25%',
              width: '18rem',
              height: '18rem',
              background: 'rgba(168, 85, 247, 0.2)',
              borderRadius: '50%',
              filter: 'blur(3rem)',
              animation: 'pulse 4s infinite',
            }}
          />
          <div
            className="bg-orb-2"
            style={{
              position: 'absolute',
              bottom: '25%',
              right: '25%',
              width: '24rem',
              height: '24rem',
              background: 'rgba(236, 72, 153, 0.2)',
              borderRadius: '50%',
              filter: 'blur(3rem)',
              animation: 'pulse 4s infinite',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 'bold',
                lineHeight: '1.1',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  background:
                    'linear-gradient(to right, #a78bfa, #f472b6, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Master Your Musical
              </div>
              <div
                style={{
                  background: 'linear-gradient(to right, #f472b6, #fb7185)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Journey
              </div>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                color: '#cbd5e1',
                maxWidth: '48rem',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              Connect with world-class music instructors and unlock your
              potential through personalized 1-on-1 mentorship and
              expert-crafted courses.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '2rem',
              }}
            >
              <button
                className="cta-primary"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.125rem',
                  background: 'linear-gradient(to right, #a855f7, #ec4899)',
                  borderRadius: '1rem',
                  color: 'white',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 25px rgba(168, 85, 247, 0.3)',
                  transition: 'transform 0.2s',
                }}
              >
                Start Learning Today
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <button
                className="cta-secondary"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.125rem',
                  background: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(51, 65, 85, 1)',
                  borderRadius: '1rem',
                  color: 'white',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 3.7a1 1 0 011.4-.4l8 4a1 1 0 010 1.8l-8 4a1 1 0 01-1.4-1.4V3.7z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                paddingTop: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    fill="#fbbf24"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{ color: '#cbd5e1' }}>
                Rated 4.9/5 by 10,000+ students
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: '5rem 0',
          borderTop: '1px solid rgba(30, 41, 59, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { number: '10,000+', label: 'Students Taught' },
              { number: '500+', label: 'Expert Instructors' },
              { number: '50+', label: 'Instruments' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, #a78bfa, #f472b6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
