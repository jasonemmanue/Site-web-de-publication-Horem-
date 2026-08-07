import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Horem+"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold">
                Horem<span className="text-accent">+</span>
              </span>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              La plateforme de petites annonces immobilieres et services au
              Cameroun. Trouvez votre logement ideal en quelques clics.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-blue-200">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/#fonctionnalites"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Fonctionnalites
                </Link>
              </li>
              <li>
                <Link
                  href="/#comment-ca-marche"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Comment ca marche
                </Link>
              </li>
              <li>
                <Link
                  href="/#screenshots"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Captures d&apos;ecran
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-blue-200">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/confidentialite"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Politique de confidentialite
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-blue-200">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-blue-100">
                Horem+49@gmail.com
              </li>
              <li className="text-sm text-blue-100">Yaounde, Cameroun</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Play Store"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-xs font-medium hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.609-.92zM14.5 12.708l2.302 2.302-9.07 5.17L14.5 12.707zm3.436-1.956l1.907 1.088c.55.31.55 1.01 0 1.32l-1.907 1.088L15.5 12l2.436-1.248zM7.732 3.82l9.07 5.17L14.5 11.293 7.732 3.82z" />
                </svg>
                Play Store
              </a>
              <a
                href="#"
                aria-label="App Store"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-xs font-medium hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/30 mt-10 pt-6 text-center">
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} Horem+. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  );
}
