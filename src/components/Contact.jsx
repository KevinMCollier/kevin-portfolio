/* src/components/ContactSplit.jsx */
import { useState } from 'react';

export default function ContactSplit() {
  const [showForm, setShowForm] = useState(false);

  /* --- reusable button style helper --- */
  const btn = (...classes) =>
    `block w-full text-center font-semibold px-6 py-3 rounded-lg transition ${classes.join(' ')}`;

  return (
    <section className="bg-off-white">
      {/* ---------- TOP GRID ---------- */}
      <div className="mx-auto max-w-7xl grid gap-10 px-6 lg:px-12 py-20 lg:py-24 md:grid-cols-3">

        {/* 1 — Heading */}
        <div className="row-span-2">
          <h2 className="font-mont font-black text-midnight-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
            Let’s<br />Connect
          </h2>
        </div>

        {/* 2 — Mail list */}
        <div>
          <a
            href="https://yoursubscribe.com"
            className={btn('bg-copper-rust text-off-white hover:bg-copper-rust/90')}
          >
            Join Mailing List
          </a>
        </div>

        {/* 3 — Calendly */}
        <div>
          <a
            href="https://calendly.com/yourlink/15min"
            target="_blank" rel="noopener noreferrer"
            className={btn(
              'border-2 border-midnight-navy text-midnight-navy',
              'hover:bg-midnight-navy hover:text-off-white'
            )}
          >
            Book 15-Minute Call
          </a>
        </div>

        {/* 4 — Inquiry toggle / form */}
        <div className="md:col-span-2">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className={btn('underline underline-offset-4 text-copper-rust')}
            >
              Send Inquiry →
            </button>
          ) : (
            <form
              action="https://formspree.io/f/yourFormID"          /* ← replace */
              method="POST"
              className="space-y-4"
            >
              <div className="flex gap-4">
                <input
                  required
                  name="name"
                  placeholder="Name"
                  className="flex-1 border border-stone-grey rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-copper-rust"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 border border-stone-grey rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-copper-rust"
                />
              </div>
              <textarea
                required
                name="message"
                placeholder="How can we help?"
                rows={4}
                className="w-full border border-stone-grey rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-copper-rust"
              />
              <div className="flex gap-4">
                <button type="submit" className={btn('bg-copper-rust text-off-white hover:bg-copper-rust/90 flex-1')}>
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className={btn('border border-graphite text-graphite flex-1')}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ---------- CROPPED IMAGE ---------- */}
      <div className="h-48 sm:h-60 lg:h-72 overflow-hidden">
        <img
          src="/public/arizona-canyon-nicolas-cool.jpg"                       /* path to your asset */
          alt="Canyon opening toward the sky"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
    </section>
  );
}
