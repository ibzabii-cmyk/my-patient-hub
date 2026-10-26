function Footer() {
  return (
    <footer className="w-full bg-[#f7f8fa] px-5 py-6 md:px-8">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 md:flex-row">
        {/* Copyright */}
        <p className="text-center text-sm text-[#6b7a99] sm:text-base">
          © 2026, made with 🩶 by{" "}
          <span className="font-semibold text-[#3b4553]">MyPiHUB</span> for a
          better web. for a better web.
        </p>

        {/* Footer Links */}
        <nav className="flex items-center gap-6 sm:gap-8">
          <a
            href="#"
            className="text-sm text-[#6b7a99] transition-colors hover:text-[#384e70] sm:text-base"
          >
            MyPatientHUB
          </a>

          <a
            href="#"
            className="text-sm text-[#6b7a99] transition-colors hover:text-[#384e70] sm:text-base"
          >
            About Us
          </a>

          <a
            href="#"
            className="text-sm text-[#6b7a99] transition-colors hover:text-[#384e70] sm:text-base"
          >
            Blog
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
