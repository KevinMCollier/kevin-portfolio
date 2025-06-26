/* src/components/ContactSplit.jsx */
import { useState } from 'react';

export default function ContactSplit() {
  const [openInquiry, setOpenInquiry] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  /** 🔸 Unified button helper
      – identical size / typography / border thickness
      – pass extra classes for color & hovers */
  const btn = (...c) =>
    `block w-full text-center text-base font-semibold px-6 py-2 rounded-lg transition ${c.join(
      ' '
    )}`;

  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/kevin-collier-consulting/30min',
    });
  };

  return (
    <section id="contact" className="bg-off-white">
      {/* =============== MAIN FLEX ROW =============== */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-24 flex flex-col md:flex-row md:items-start md:justify-center gap-10 md:gap-14">
        {/* ---------- LEFT : headline ---------- */}
        <h2 className="flex-none max-w-md font-mont font-black text-midnight-navy text-3xl sm:text-4xl leading-tight">
          Get&nbsp;in&nbsp;touch&nbsp;—
          <br className="hidden sm:block" />
          <span className="text-copper-rust"> learn more</span>
        </h2>

        {/* ---------- RIGHT : CTA stack ---------- */}
        <div className="flex-none w-full max-w-sm space-y-4">
          {/* Join List (opens modal) */}
          <button
            onClick={() => setOpenSignup(true)}
            className={btn(
              'bg-copper-rust text-off-white',
              'hover:bg-copper-rust/90'
            )}
          >
            Join Early-Access List
          </button>

          {/* Book Call – outlined navy */}
          <button
            onClick={openCalendly}
            className={btn(
              'border border-midnight-navy text-midnight-navy',
              'hover:bg-midnight-navy hover:text-off-white'
            )}
          >
            Book Quick Call
          </button>

          {/* Inquiry — outlined graphite */}
          <button
            onClick={() => setOpenInquiry(true)}
            className={btn(
              'border border-graphite text-graphite',
              'hover:bg-graphite hover:text-off-white'
            )}
          >
            Send Inquiry
          </button>

          {/* Pre-launch note */}
          <p className="text-xs text-graphite leading-snug pt-2">

            <em>The Coach Call</em> — is coming soon.
            Join the waitlist to be first.
          </p>
        </div>
      </div>

      {/* =============== HERO IMAGE =============== */}
      <div className="h-40 sm:h-56 lg:h-64 overflow-hidden">
        <img
          src="/arizona-canyon-nicolas-cool.jpg"
          alt="Canyon opening toward the sky"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* =============== MODAL: JOIN LIST =============== */}
      {openSignup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setOpenSignup(false)}
        >
          <div
            className="bg-off-white w-full max-w-md rounded-xl p-8 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-midnight-navy font-bold text-2xl">
              Join the List
            </h3>

            <form
              action="https://kevin-collier.us8.list-manage.com/subscribe/post?u=3223839310f18f06bdb1456c2&id=7987856aee&f_id=004972e1f0"
              method="post"
              target="_blank"
              noValidate
              className="space-y-4"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Your email"
                required
                className="w-full border border-stone-grey rounded px-4 py-2 focus:ring-2 focus:ring-copper-rust focus:outline-none"
              />

              {/* Honeypot */}
              <div className="absolute -left-[5000px]" aria-hidden="true">
                <input
                  type="text"
                  name="b_3223839310f18f06bdb1456c2_7987856aee"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>

              <button
                type="submit"
                className={btn(
                  'bg-copper-rust text-off-white',
                  'hover:bg-copper-rust/90'
                )}
              >
                Subscribe
              </button>

              {/* Mailchimp badge (Free plan requirement) */}
              <p className="text-center opacity-70">
                <a
                  href="http://eepurl.com/jhC0UY"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Mailchimp – email marketing made easy and fun"
                >
                  <img
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                    alt="Intuit Mailchimp"
                    className="h-6 mx-auto"
                  />
                </a>
              </p>
            </form>

            <button
              onClick={() => setOpenSignup(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-graphite hover:text-midnight-navy"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* =============== MODAL: INQUIRY =============== */}
      {openInquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setOpenInquiry(false)}
        >
          <div
            className="bg-off-white w-full max-w-lg rounded-xl p-8 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-midnight-navy font-bold text-2xl">
              Send an Inquiry
            </h3>

            <form
              name="inquiry"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="inquiry" />
              <input type="hidden" name="redirect" value="/thank-you.html" />

              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <input
                required
                name="name"
                placeholder="Name"
                className="w-full border border-stone-grey rounded px-4 py-2 focus:ring-2 focus:ring-copper-rust focus:outline-none"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-stone-grey rounded px-4 py-2 focus:ring-2 focus:ring-copper-rust focus:outline-none"
              />
              <textarea
                required
                name="message"
                rows={4}
                placeholder="How can we help?"
                className="w-full border border-stone-grey rounded px-4 py-2 focus:ring-2 focus:ring-copper-rust focus:outline-none"
              />

              <div className="flex gap-4">
                <button
                  type="submit"
                  className={btn(
                    'flex-1 bg-copper-rust text-off-white',
                    'hover:bg-copper-rust/90'
                  )}
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setOpenInquiry(false)}
                  className={btn(
                    'flex-1 border border-graphite text-graphite',
                    'hover:bg-graphite hover:text-off-white'
                  )}
                >
                  Cancel
                </button>
              </div>
            </form>

            <button
              onClick={() => setOpenInquiry(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-graphite hover:text-midnight-navy"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
