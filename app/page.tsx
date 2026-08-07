import Image from "next/image";

const features = [
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Annonces immobilieres",
    desc: "Chambres, studios, appartements, villas — trouvez le logement ideal pres de chez vous a Yaounde, Douala et partout au Cameroun.",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Carte interactive",
    desc: "Visualisez les annonces sur une carte Google Maps avec des marqueurs colores par type de bien. Trouvez les annonces proches de vous.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Paiement Mobile Money",
    desc: "Payez en toute securite via Orange Money ou MTN Mobile Money. Pas de carte bancaire necessaire — 100% adapte au Cameroun.",
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: "Messagerie integree",
    desc: "Contactez directement les prestataires depuis l'application. Chat en temps reel, notifications push et historique des conversations.",
  },
  {
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    title: "Sponsoring & mise en avant",
    desc: "Boostez la visibilite de vos annonces avec le sponsoring. Apparaissez en premier dans les recherches et sur la page d'accueil.",
  },
  {
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    title: "Alertes prioritaires",
    desc: "Activez une alerte et soyez notifie en premier quand un bien correspondant a vos criteres est publie. Ne ratez plus aucune opportunite.",
  },
];

const steps = [
  {
    num: "01",
    title: "Telechargez l'app",
    desc: "Disponible gratuitement sur Android (Play Store) et sur iOS (App Store).",
  },
  {
    num: "02",
    title: "Creez votre compte",
    desc: "Inscription rapide par numero de telephone avec verification OTP par SMS.",
  },
  {
    num: "03",
    title: "Explorez les annonces",
    desc: "Parcourez les annonces par type, ville, budget ou directement sur la carte interactive.",
  },
  {
    num: "04",
    title: "Contactez & louez",
    desc: "Echangez avec les prestataires via le chat integre et concluez votre affaire.",
  },
];

const stats = [
  { value: "6+", label: "Types de biens" },
  { value: "100%", label: "Mobile Money" },
  { value: "2", label: "Langues (FR/EN)" },
  { value: "24/7", label: "Disponible" },
];

const screenshots = [
  { src: "/images/screenshots/accueil.png", alt: "Ecran d'accueil Horem+" },
  { src: "/images/screenshots/carte.png", alt: "Carte interactive" },
  { src: "/images/screenshots/detail.png", alt: "Detail d'une annonce" },
  { src: "/images/screenshots/chat.png", alt: "Messagerie integree" },
  { src: "/images/screenshots/dashboard.png", alt: "Dashboard prestataire" },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-[#0091FF]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur rounded-full text-sm text-white mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Disponible sur Play Store &amp; App Store
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Trouvez votre{" "}
                <span className="text-accent">logement ideal</span> au Cameroun
              </h1>
              <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-lg">
                Horem+ est la plateforme de petites annonces immobilieres et
                services au Cameroun. Chambres, studios, appartements, villas,
                restaurants, ecoles et pharmacies — tout en une seule app.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-primary-dark font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.609-.92zM14.5 12.708l2.302 2.302-9.07 5.17L14.5 12.707zm3.436-1.956l1.907 1.088c.55.31.55 1.01 0 1.32l-1.907 1.088L15.5 12l2.436-1.248zM7.732 3.82l9.07 5.17L14.5 11.293 7.732 3.82z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">
                      Disponible sur
                    </div>
                    <div className="text-base font-bold -mt-0.5">
                      Google Play
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-primary-dark font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">
                      Disponible sur
                    </div>
                    <div className="text-base font-bold -mt-0.5">App Store</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[520px] bg-white/10 backdrop-blur rounded-[2.5rem] border-2 border-white/20 shadow-2xl flex items-center justify-center">
                  <div className="text-center px-6">
                    <Image
                      src="/images/logo.png"
                      alt="Horem+"
                      width={80}
                      height={80}
                      className="mx-auto mb-4 rounded-2xl"
                    />
                    <p className="text-white text-xl font-bold">Horem+</p>
                    <p className="text-blue-200 text-sm mt-1">
                      Immobilier &amp; Services
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-2xl shadow-lg flex items-center justify-center rotate-12">
                  <svg
                    className="w-10 h-10 text-primary-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {s.value}
                </div>
                <div className="text-sm text-text-secondary mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FONCTIONNALITES ─── */}
      <section id="fonctionnalites" className="bg-section-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tout ce dont vous avez <span className="text-primary">besoin</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Horem+ reunit toutes les fonctionnalites pour trouver, publier et
              gerer vos annonces immobilieres et services au Cameroun.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6 text-primary group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={f.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMENT CA MARCHE ─── */}
      <section id="comment-ca-marche" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comment ca <span className="text-primary">marche</span> ?
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              En 4 etapes simples, trouvez le logement ou le service dont vous
              avez besoin au Cameroun.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark text-white text-2xl font-bold rounded-2xl mb-5 shadow-lg">
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCREENSHOTS ─── */}
      <section id="screenshots" className="bg-section-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Decouvrez l&apos;application en <span className="text-primary">images</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Un apercu des ecrans principaux de Horem+.
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {screenshots.map((s) => (
              <div
                key={s.alt}
                className="flex-shrink-0 snap-center"
              >
                <div className="w-60 h-[480px] bg-white rounded-[2rem] shadow-lg border border-border overflow-hidden flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-text-secondary">
                      {s.alt}
                    </p>
                    <p className="text-xs text-text-hint mt-1">
                      Capture a venir
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-hint mt-6">
            Les captures d&apos;ecran reelles seront ajoutees prochainement.
          </p>
        </div>
      </section>

      {/* ─── TYPES DE BIENS ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tous les types de <span className="text-primary">biens</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Que vous cherchiez un logement, un restaurant, une ecole ou une
              pharmacie de garde, Horem+ couvre tous vos besoins.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Chambres", color: "bg-blue-500" },
              { name: "Studios", color: "bg-purple-500" },
              { name: "Appartements", color: "bg-orange-500" },
              { name: "Villas", color: "bg-green-700" },
              { name: "Restaurants", color: "bg-amber-500" },
              { name: "Pharmacies", color: "bg-emerald-500" },
            ].map((t) => (
              <div
                key={t.name}
                className="text-center p-5 rounded-2xl bg-section-alt border border-border hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div
                  className={`w-12 h-12 ${t.color} rounded-xl mx-auto mb-3 flex items-center justify-center`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-[#0091FF] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pret a trouver votre <span className="text-accent">logement</span> ?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Telechargez Horem+ gratuitement et commencez a explorer des
            centaines d&apos;annonces immobilieres et services au Cameroun.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-dark font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-lg"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734c0-.382.218-.72.609-.92zM14.5 12.708l2.302 2.302-9.07 5.17L14.5 12.707zm3.436-1.956l1.907 1.088c.55.31.55 1.01 0 1.32l-1.907 1.088L15.5 12l2.436-1.248zM7.732 3.82l9.07 5.17L14.5 11.293 7.732 3.82z" />
              </svg>
              Google Play
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-dark font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-lg"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
