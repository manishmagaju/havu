import type { ReactNode } from "react";
import Link from "next/link";
import { Moon } from "lucide-react";
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="w-full bg-[#0b0b0d] text-white">
      <div className="mx-auto flex h-[70px] max-w-[1160px] items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <span className="text-3xl">Λ</span>
          <span>HAVU</span>
        </Link>

        {/* Right Navigation */}
        <nav className="flex items-center gap-6">

          {/* Services */}
          <Link
            href="/services"
            className="text-sm font-semibold transition-opacity hover:opacity-60"
          >
            Services
          </Link>

          {/* FAQ */}
          <Link
            href="/faq"
            className="text-sm font-semibold transition-opacity hover:opacity-60"
          >
            FAQ
          </Link>

          {/* Language Switch */}
          <div className="flex items-center rounded-full border border-white/20 p-1 text-xs font-semibold">
            <button className="rounded-full px-2 py-1 text-white/40">
              JA
            </button>

            <button className="rounded-full bg-white px-2 py-1 text-black">
              EN
            </button>
          </div>

          {/* Dark Mode */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20"
            aria-label="Toggle theme"
          >
            <Moon size={15} />
          </button>

          {/* Contact */}
          <Link
            href="/contact"
            className="rounded-full border border-white px-6 py-2 text-sm font-semibold transition-all hover:bg-white hover:text-black"
          >
            Get in touch
          </Link>

          {/* Menu */}
          <button className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em]">
            MENU

            <span className="flex flex-col gap-1">
              <span className="block h-px w-6 bg-white" />
              <span className="block h-px w-6 bg-white" />
            </span>
          </button>

        </nav>
      </div>
    </header>

        {children}

        <footer>NewaNext Footer</footer>
      </body>
    </html>
  );
}