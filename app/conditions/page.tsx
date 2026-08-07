import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Horem+",
  description:
    "Conditions generales d'utilisation de l'application Horem+. Regles et obligations des utilisateurs.",
};

export default function ConditionsPage() {
  const lastUpdated = "7 aout 2026";

  return (
    <div className="bg-background">
      <div className="bg-gradient-to-b from-primary-dark to-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Conditions generales d&apos;utilisation
          </h1>
          <p className="mt-3 text-blue-100 text-lg">
            Derniere mise a jour : {lastUpdated}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              1. Objet
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Les presentes conditions generales d&apos;utilisation (CGU)
              regissent l&apos;utilisation de l&apos;application mobile Horem+
              et de ses services associes. En utilisant l&apos;application,
              vous acceptez ces conditions dans leur integralite.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Horem+ est une plateforme de mise en relation entre
              proprietaires/prestataires de services et personnes a la
              recherche de logements ou de services au Cameroun.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              2. Inscription et compte
            </h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                L&apos;inscription se fait via verification par SMS (OTP) de
                votre numero de telephone camerounais.
              </li>
              <li>
                Vous devez etre age d&apos;au moins 18 ans pour utiliser
                l&apos;application.
              </li>
              <li>
                Vous etes responsable de la confidentialite de votre compte et
                de toutes les activites effectuees sous votre compte.
              </li>
              <li>
                Les informations fournies doivent etre exactes et a jour.
              </li>
              <li>
                Un meme numero de telephone ne peut etre associe qu&apos;a un
                seul compte.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              3. Roles des utilisateurs
            </h2>
            <p className="text-text-secondary leading-relaxed">
              L&apos;application distingue trois types d&apos;utilisateurs :
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                <strong>Visiteur (Client) :</strong> peut consulter les
                annonces, contacter les prestataires, utiliser la messagerie
                et creer des alertes prioritaires.
              </li>
              <li>
                <strong>Prestataire :</strong> peut publier des annonces
                immobilieres ou de services, gerer ses publications et
                utiliser les outils de promotion.
              </li>
              <li>
                <strong>Administrateur :</strong> gere la moderation des
                annonces et des utilisateurs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              4. Publication d&apos;annonces
            </h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                Les annonces doivent concerner des biens immobiliers ou des
                services reels situes au Cameroun.
              </li>
              <li>
                Les photos doivent correspondre au bien ou service propose.
                Les photos trompeuses ou volees sont interdites.
              </li>
              <li>
                Les prix affiches doivent etre exacts et en Francs CFA (XAF).
              </li>
              <li>
                Les annonces sont soumises a moderation par notre equipe
                avant d&apos;etre visibles publiquement.
              </li>
              <li>
                Horem+ se reserve le droit de supprimer toute annonce ne
                respectant pas ces conditions.
              </li>
              <li>
                Les types de biens acceptes incluent : chambres, studios,
                appartements, villas, restaurants, ecoles, pharmacies et
                entreprises.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              5. Services payants
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Horem+ propose des services payants pour les prestataires :
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                <strong>Sponsoring d&apos;annonces :</strong> mise en avant
                d&apos;une annonce pour une duree determinee.
              </li>
              <li>
                <strong>Visibilite annuelle :</strong> pour les services
                (entreprises, restaurants, ecoles), paiement unique par an.
              </li>
              <li>
                <strong>Publicites :</strong> creation de contenus
                promotionnels affiches aux visiteurs.
              </li>
              <li>
                <strong>Alertes prioritaires :</strong> pour les visiteurs
                souhaitant etre notifies en priorite des nouvelles annonces.
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Les paiements sont effectues via Mobile Money (Orange Money ou
              MTN Mobile Money). Les tarifs sont affiches dans
              l&apos;application avant chaque transaction. Aucun remboursement
              n&apos;est possible une fois le service active.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              6. Messagerie
            </h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                La messagerie integree permet aux visiteurs de contacter
                directement les prestataires.
              </li>
              <li>
                Les messages doivent rester courtois et en rapport avec les
                annonces.
              </li>
              <li>
                Tout contenu abusif, harcelant, discriminatoire ou illegal est
                strictement interdit.
              </li>
              <li>
                Horem+ se reserve le droit de suspendre les comptes
                contrevenants.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              7. Contenu interdit
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Il est strictement interdit de publier :
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>Des annonces frauduleuses ou trompeuses.</li>
              <li>
                Du contenu a caractere illegal, diffamatoire, obscene ou
                discriminatoire.
              </li>
              <li>
                Des informations personnelles de tiers sans leur consentement.
              </li>
              <li>
                Du spam ou des messages publicitaires non sollicites via la
                messagerie.
              </li>
              <li>
                Des annonces pour des biens ou services n&apos;existant pas.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              8. Responsabilites
            </h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                Horem+ agit en tant qu&apos;intermediaire et ne peut etre tenu
                responsable des transactions entre utilisateurs.
              </li>
              <li>
                Nous ne garantissons pas l&apos;exactitude des informations
                publiees par les prestataires.
              </li>
              <li>
                Les utilisateurs sont encourages a verifier les biens en
                personne avant toute transaction.
              </li>
              <li>
                Horem+ n&apos;est pas responsable des dommages resultant de
                l&apos;utilisation de l&apos;application ou des transactions
                entre utilisateurs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              9. Propriete intellectuelle
            </h2>
            <p className="text-text-secondary leading-relaxed">
              L&apos;application Horem+, son design, son logo et son contenu
              sont proteges par les lois sur la propriete intellectuelle. Toute
              reproduction, distribution ou utilisation non autorisee est
              interdite.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Les utilisateurs conservent la propriete de leur contenu
              (photos, textes) mais accordent a Horem+ une licence
              d&apos;utilisation pour l&apos;affichage sur la plateforme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              10. Suspension et resiliation
            </h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                Horem+ peut suspendre ou supprimer un compte en cas de
                violation des presentes CGU.
              </li>
              <li>
                L&apos;utilisateur peut supprimer son compte a tout moment en
                contactant le support.
              </li>
              <li>
                La suspension d&apos;un compte entraine la desactivation de
                toutes les annonces associees.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              11. Modifications des CGU
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Nous nous reservons le droit de modifier ces conditions a tout
              moment. Les utilisateurs seront informes des modifications
              importantes via l&apos;application. L&apos;utilisation continue
              de l&apos;application apres modification vaut acceptation des
              nouvelles conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              12. Droit applicable
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Les presentes CGU sont regies par le droit camerounais. Tout
              litige relatif a l&apos;utilisation de l&apos;application sera
              soumis aux tribunaux competents de Yaounde, Cameroun.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              13. Contact
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Pour toute question concernant ces conditions d&apos;utilisation :
            </p>
            <ul className="list-none pl-0 text-text-secondary space-y-1">
              <li>
                Email :{" "}
                <a
                  href="mailto:Horem+49@gmail.com"
                  className="text-primary hover:underline"
                >
                  Horem+49@gmail.com
                </a>
              </li>
              <li>Adresse : Yaounde, Cameroun</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
