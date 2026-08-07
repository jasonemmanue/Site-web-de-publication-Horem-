import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Horem+",
  description:
    "Besoin d'aide avec Horem+ ? Consultez notre FAQ ou contactez notre equipe de support.",
};

export default function SupportPage() {
  const faqs = [
    {
      question: "Comment creer un compte sur Horem+ ?",
      answer:
        "Telechargez l'application, entrez votre numero de telephone camerounais et verifiez-le avec le code SMS recu. Votre compte est pret en quelques secondes.",
    },
    {
      question: "Comment publier une annonce ?",
      answer:
        "Connectez-vous en tant que prestataire, accedez a votre tableau de bord et appuyez sur \"Nouvelle annonce\". Remplissez les informations (type de bien, photos, prix, localisation) et validez.",
    },
    {
      question: "Quels modes de paiement sont acceptes ?",
      answer:
        "Horem+ accepte les paiements via Mobile Money : Orange Money et MTN Mobile Money. Les transactions sont securisees et instantanees.",
    },
    {
      question: "Combien coute la publication d'une annonce ?",
      answer:
        "Les tarifs varient selon le type de service. Le sponsoring immobilier va de 500 a 2 000 XAF selon la duree. La visibilite annuelle pour les services (entreprises, restaurants, ecoles) va de 1 000 a 3 000 XAF. Les pharmacies sont gratuites.",
    },
    {
      question: "Comment contacter un proprietaire ?",
      answer:
        "Sur la page de detail d'une annonce, vous trouverez les informations de contact du prestataire. Vous pouvez aussi utiliser la messagerie integree pour envoyer un message directement.",
    },
    {
      question: "Qu'est-ce qu'une alerte prioritaire ?",
      answer:
        "L'alerte prioritaire vous permet d'etre notifie immediatement quand un bien correspondant a vos criteres est publie (type de bien, fourchette de prix). Le service coute 200 XAF pour 48 heures.",
    },
    {
      question: "Comment sponsoriser mon annonce ?",
      answer:
        "Depuis votre tableau de bord prestataire, selectionnez l'annonce a sponsoriser et choisissez la duree souhaitee (1 semaine, 2 semaines ou 1 mois). Les annonces sponsorisees apparaissent en priorite dans les resultats.",
    },
    {
      question: "Mon annonce n'est pas visible, pourquoi ?",
      answer:
        "Les nouvelles annonces sont soumises a moderation par notre equipe. Verifiez egalement que votre annonce est activee dans votre tableau de bord. Si le probleme persiste, contactez notre support.",
    },
    {
      question: "Comment supprimer mon compte ?",
      answer:
        "Contactez-nous par email a Horem+49@gmail.com avec votre numero de telephone. Nous procederons a la suppression de votre compte et de toutes vos donnees dans les meilleurs delais.",
    },
    {
      question:
        "L'application est-elle disponible sur iPhone et iPad ?",
      answer:
        "Oui, Horem+ est disponible sur iOS (iPhone et iPad) via l'App Store et sur Android via le Google Play Store.",
    },
  ];

  return (
    <div className="bg-background">
      <div className="bg-gradient-to-b from-primary-dark to-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Centre d&apos;aide
          </h1>
          <p className="mt-3 text-blue-100 text-lg max-w-2xl mx-auto">
            Trouvez des reponses a vos questions ou contactez notre equipe de
            support.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-primary-light rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-primary-dark mb-2">Email</h3>
            <a
              href="mailto:Horem+49@gmail.com"
              className="text-primary hover:underline text-sm"
            >
              Horem+49@gmail.com
            </a>
          </div>

          <div className="bg-primary-light rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
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
            <h3 className="font-semibold text-primary-dark mb-2">Adresse</h3>
            <p className="text-text-secondary text-sm">Yaounde, Cameroun</p>
          </div>

          <div className="bg-primary-light rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-primary-dark mb-2">
              Delai de reponse
            </h3>
            <p className="text-text-secondary text-sm">
              Sous 24 a 48 heures
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-dark mb-8 text-center">
          Questions frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 hover:bg-section-alt transition-colors">
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className="w-5 h-5 text-text-secondary shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-3">
            Vous n&apos;avez pas trouve de reponse ?
          </h3>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Notre equipe est la pour vous aider. Envoyez-nous un email et nous
            vous repondrons dans les plus brefs delais.
          </p>
          <a
            href="mailto:Horem+49@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-dark font-semibold rounded-full hover:bg-amber-400 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contacter le support
          </a>
        </div>
      </div>
    </div>
  );
}
