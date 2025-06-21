import { useState } from 'react';

export default function ContactSplit() {
  const [open, setOpen] = useState(false);

  /* uniform button helper */
  const btn = (...c) =>
    `block w-full text-center font-semibold px-6 py-2 rounded-lg transition ${c.join(
      ' '
    )}`;

  return (
    <section className="bg-off-white">
      {/* ================= MAIN FLEX ROW ================= */}
      <div
        className="
          mx-auto max-w-7xl
          px-6 lg:px-12
          py-20 lg:py-24
          flex flex-col md:flex-row md:items-start md:justify-center
          gap-10 md:gap-14
        "
      >
        {/* ---------- LEFT : headline ---------- */}
        <h2
          className="
            flex-none max-w-md
            font-mont font-black
            text-midnight-navy
            text-3xl sm:text-4xl leading-tight
          "
        >
          Get&nbsp;in&nbsp;touch&nbsp;—
          <br className="hidden sm:block" />
          <span className="text-copper-rust">learn more</span>
        </h2>

        {/* ---------- RIGHT : CTA stack ---------- */}
        <div className="flex-none w-full max-w-sm space-y-4">
          {/* Mailing-list */}
          <a
            href="https://yoursubscribe.com" /* replace with Mailchimp (or similar) */
            className={btn(
              'bg-copper-rust text-off-white hover:bg-copper-rust/90'
            )}
          >
            Join Early‑Access List
          </a>

          {/* Calendly */}
          <a
            href="https://calendly.com/yourlink/15min" /* replace */
            target="_blank"
            rel="noopener noreferrer"
            className={btn(
              'border-2 border-midnight-navy text-midnight-navy',
              'hover:bg-midnight-navy hover:text-off-white'
            )}
          >
            Book 15‑Minute Call
          </a>

          {/* Inquiry → modal */}
          <button
            onClick={() => setOpen(true)}
            className={btn(
              'border border-graphite text-graphite',
              'hover:bg-graphite hover:text-off-white'
            )}
          >
            Send Inquiry
          </button>

          {/* Pre‑launch disclaimer */}
          <p className="text-xs text-graphite leading-snug pt-2">
            Collier Consulting and its flagship service — <em>The&nbsp;Coach&nbsp;Call</em> — are currently in <span className="italic">pre‑launch</span>. Join the early‑access list to secure priority onboarding when our first cohort opens.
          </p>
        </div>
      </div>

      {/* ================= CROPPED HERO IMAGE ================= */}
      <div className="h-40 sm:h-56 lg:h-64 overflow-hidden">
        <img
          src="/arizona-canyon-nicolas-cool.jpg" /* adjust path if needed */
          alt="Canyon opening toward the sky"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* ================= INQUIRY MODAL (Netlify Form) ================= */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setOpen(false)} /* click backdrop to close */
        >
          <div
            className="bg-off-white w-full max-w-lg rounded-xl p-8 space-y-6 relative"
            onClick={(e) => e.stopPropagation()} /* stop inner clicks */
          >
            <h3 className="text-midnight-navy font-bold text-2xl">
              Send an Inquiry
            </h3>

            {/* Netlify form — name="inquiry" ties to hidden input */}
            <form
              name="inquiry"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              {/* Netlify hidden field is required */}
              <input type="hidden" name="form-name" value="inquiry" />

              <input
                required
                name="name"
                placeholder="Name"
                className="w-full border border-stone-grey rounded px-4 py-2
                           focus:ring-2 focus:ring-copper-rust focus:outline-none"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-stone-grey rounded px-4 py-2
                           focus:ring-2 focus:ring-copper-rust focus:outline-none"
              />
              <textarea
                required
                name="message"
                rows={4}
                placeholder="How can we help?"
                className="w-full border border-stone-grey rounded px-4 py-2
                           focus:ring-2 focus:ring-copper-rust focus:outline-none"
              />

              {/* (Optional) Netlify reCAPTCHA */}
              {/* <div data-netlify-recaptcha="true"></div> */}

              <div className="flex gap-4">
                <button
                  type="submit"
                  className={btn(
                    'flex-1 bg-copper-rust text-off-white hover:bg-copper-rust/90'
                  )}
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={btn('flex-1 border border-graphite text-graphite')}
                >
                  Cancel
                </button>
              </div>
            </form>

            {/* close icon */}
            <button
              onClick={() => setOpen(false)}
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
