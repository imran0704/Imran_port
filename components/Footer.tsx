import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="py-12 bg-white text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-8">
          {/* Logo & Statement */}
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white font-mono text-[11px] font-bold">
              IK
            </span>
            <span className="font-semibold text-slate-900">
              Imran &mdash; Full-Stack &amp; UI/UX
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@imran.dev"
              aria-label="Email"
              className="p-2 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <p>
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Imran. Architected with Next.js 16, Sanity CMS &amp; Tailwind CSS.
          </p>

          <a
            href="#"
            className="hover:text-slate-900 transition-colors underline underline-offset-4"
          >
            Back to Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
