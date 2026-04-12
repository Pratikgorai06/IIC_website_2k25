"use client";
import React, { useState, useEffect } from "react";
const ESummitCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const targetDate = new Date("2026-04-17T00:00:00").getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full overflow-hidden bg-[#f8f3ea] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.88),_rgba(248,250,252,0.95))]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-3 bg-slate-300/80 blur-sm" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-3 bg-slate-300/80 blur-sm" />
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col gap-8 px-6 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="mx-auto inline-flex rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-orange-600 md:mx-0">
              E-SUMMIT 2026 COUNTDOWN
            </span>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                E-Summit 2026
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                E-SUMMIT’26 is a national-level entrepreneurship and innovation
                summit at BIT Sindri. Bringing together students, startups, and
                industry experts to build, compete, and showcase real-world
                solutions. With 15+ events, it’s a platform to learn, gain
                exposure, and connect with a vibrant innovation ecosystem.
              </p>
              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  href="https://esummit.bitsindri.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-orange-600 shadow-inner animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M10.25 6.75a.75.75 0 0 1 1.5 0v3.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V6.75z" />
                    </svg>
                  </span>
                  Visit E-SUMMIT
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:items-end">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white/95 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-orange-600">
              17th–19th April | 150+ Institutions | 10,000+ Participants
            </p>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">
              <b>Innovating the Next Frontier.</b>
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Step into a national entrepreneurship summit where ideas evolve
              into ventures, strategies turn into execution, and innovation
              meets real-world impact.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600"><b>Innovation & Tech</b></p>
                <p className="mt-2 text-base font-semibold text-slate-950">
                  <div className="mt-3 space-y-2">
  {["INNOVATHON", "TEXcelerate", "UDAAN", "BuildX-Expo"].map((item) => (
    <div
      key={item}
      className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm"
    >
      • {item}
    </div>
  ))}
</div>
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600"><b>Business & Finance</b></p>
                <p className="mt-2 text-base font-semibold text-slate-950">
                  <div className="mt-3 space-y-2">
  {["Being an Entrepreneur", "Equity Minds"].map((item) => (
    <div
      key={item}
      className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm"
    >
      • {item}
    </div>
  ))}
</div>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white/95 p-6 shadow-sm">
            <div className="mb-4 text-center text-xs uppercase tracking-[0.35em] text-slate-500">
              Live countdown
            </div>
            <div className="grid gap-3 sm:grid-cols-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl bg-slate-50 px-3 py-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-semibold text-slate-950 sm:text-3xl">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.32em] text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-3xl border border-orange-200 bg-orange-50 px-4 py-3 text-center text-sm font-semibold text-orange-700">
              Time is ticking. The next frontier is yours to build.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ESummitCard;