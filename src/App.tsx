
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  BadgeDollarSign, 
  ChevronRight, 
  PhoneCall, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import peterRothImg from './assets/peter-roth.webp';

function App() {
  return (
    <div className="flex-col" style={{ minHeight: '100vh' }}>
      {/* Navigation */}
      <nav className="glass-panel" style={{ 
        position: 'fixed', 
        top: '1rem', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: 'calc(100% - 2rem)', 
        maxWidth: '1200px', 
        zIndex: 50,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '100px'
      }}>
        <div className="flex items-center gap-sm">
          <PhoneCall size={24} className="text-gradient" style={{ color: '#3b82f6' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
            Scalify <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>Partners</span>
          </span>
        </div>
        <button 
          className="btn btn-primary"
          onClick={() => {
            // Attempt to trigger GHL popup if applicable, or scroll to a section.
            // Since GHL popups often trigger on their own or via their own logic,
            // we will add a fallback alert just in case the embed is delayed.
            const iframe = document.getElementById('popup-CWF9iTw0qN8VtUa5M60w');
            if (iframe) {
                iframe.style.display = 'block';
            }
          }}
          style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', borderRadius: '50px' }}
        >
          Apply to Partner
        </button>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="hero-section">
          <div className="hero-bg-glow"></div>
          <div className="container flex-col items-center" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '2rem', color: '#60a5fa', fontSize: '0.875rem', fontWeight: 600 }}
            >
              <Zap size={16} fill="currentColor" />
              <span>THE SCALIFY AFFILIATE PROGRAM</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', maxWidth: '900px', marginBottom: '1.5rem' }}
            >
              Earn Massive Commissions on <br/>
              <span className="text-gradient">Elite Call Center Buildouts</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '3rem' }}
            >
              Partner with industry leader Peter Roth. Refer your B2B clients to Scalify and earn a <strong>5% commission</strong> on every fully managed, high-ticket call center we build for them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-md"
            >
              <button 
                className="btn btn-primary"
                style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
                onClick={() => {
                  const iframe = document.getElementById('popup-CWF9iTw0qN8VtUa5M60w');
                  if (iframe) iframe.style.display = 'block';
                }}
              >
                Become a Partner <ChevronRight size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="grid grid-cols-3 md:grid-cols-1 gap-lg">
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-panel text-center"
                style={{ padding: '3rem 2rem' }}
              >
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '20px', color: '#3b82f6', marginBottom: '1.5rem' }}>
                  <BadgeDollarSign size={40} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5% High-Ticket Commission</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Our customized call centers are an elite investment for businesses. Just a single successful referral can yield thousands in commission for you.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-panel text-center"
                style={{ padding: '3rem 2rem' }}
              >
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '20px', color: '#10b981', marginBottom: '1.5rem' }}>
                  <Building2 size={40} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Fully Managed Operations</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  You confidently refer. We do the heavy lifting. We build, train, and manage the entire 20-line autodialer call center system for the client.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-panel text-center"
                style={{ padding: '3rem 2rem' }}
              >
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '20px', color: '#f59e0b', marginBottom: '1.5rem' }}>
                  <TrendingUp size={40} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Proven Scalify Blueprint</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Led by Peter Roth, a trusted authority in home services lead generation. Clients see an up to 20x jump in appointment bookings, making it an easy sell.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Authority Section */}
        <section style={{ padding: '8rem 0' }}>
          <div className="container grid grid-cols-2 md:grid-cols-1 gap-xl items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                Leverage the Authority of <span className="text-gradient-gold">Peter Roth</span>
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                Peter Roth has successfully built multiple seven-figure companies and helped other enterprises scale to 7 and 8 figures. 
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
                He's spoken on national stages including the Services Summit, SolarCon, and Solar Mastermind International. By joining our partner program, you align yourself with an established industry pillar. We ensure your referrals are taken care of at the highest level of professionalism.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e4e4e7', fontSize: '1.125rem' }}>
                  <ShieldCheck color="#3b82f6" /> Highly Respected in Roofing, HVAC, Solar
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e4e4e7', fontSize: '1.125rem' }}>
                  <ShieldCheck color="#3b82f6" /> Featured on Dozens of Top Industry Podcasts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e4e4e7', fontSize: '1.125rem' }}>
                  <ShieldCheck color="#3b82f6" /> Exclusive 1-Call-Center-Per-Market Guarantee
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div style={{ 
                width: '100%', 
                maxWidth: '500px', 
                aspectRatio: '4/5', 
                borderRadius: '24px', 
                background: 'linear-gradient(45deg, #1e1e2f, #111116)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(59, 130, 246, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `url("${peterRothImg}") center/cover`, opacity: 0.8 }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', height: '50%' }}></div>
                <h3 style={{ position: 'absolute', bottom: '2rem', left: '2rem', fontSize: '2rem', zIndex: 10 }}>Peter Roth <br/><span style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 500 }}>Founder & CEO, Scalify</span></h3>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)', zIndex: -1 }}></div>
          <div className="container">
            <div className="glass-panel text-center" style={{ padding: '5rem 3rem', background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.9))', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Start Earning?</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
                Join the exclusive Scalify Partner network today. Submit your application below to get access to your referral portal and promotional assets.
              </p>
              <button 
                className="btn btn-primary" 
                style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', borderRadius: '50px' }}
                onClick={() => {
                  const iframe = document.getElementById('popup-CWF9iTw0qN8VtUa5M60w');
                  if (iframe) iframe.style.display = 'block';
                }}
              >
                Apply to the Affiliate Program
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container flex-col items-center gap-md">
          <div className="flex items-center gap-sm">
            <PhoneCall size={20} className="text-gradient" style={{ color: '#3b82f6' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
              Scalify
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>© Copyright Scalify Call Centers 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
