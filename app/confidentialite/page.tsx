import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite | Horem+",
  description:
    "Politique de confidentialite de l'application Horem+. Decouvrez comment nous protegeons vos donnees personnelles.",
};

export default function ConfidentialitePage() {
  const lastUpdated = "7 aout 2026";

  return (
    <div className="bg-background">
      <div className="bg-gradient-to-b from-primary-dark to-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Politique de confidentialite
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
              1. Introduction
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Horem+ (&laquo;&nbsp;nous&nbsp;&raquo;, &laquo;&nbsp;notre&nbsp;&raquo;, &laquo;&nbsp;l&apos;application&nbsp;&raquo;)
              est une plateforme de petites annonces immobilieres et de services
              operant au Cameroun. Nous nous engageons a proteger la vie privee
              de nos utilisateurs. Cette politique de confidentialite explique
              quelles donnees nous collectons, comment nous les utilisons et
              quels sont vos droits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              2. Donnees collectees
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Nous collectons les categories de donnees suivantes :
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                <strong>Informations d&apos;identification :</strong> numero de
                telephone, nom, prenom, photo de profil.
              </li>
              <li>
                <strong>Donnees de localisation :</strong> position
                geographique (avec votre consentement) pour afficher les
                annonces a proximite.
              </li>
              <li>
                <strong>Contenu utilisateur :</strong> annonces publiees
                (photos, descriptions, prix), messages echanges via la
                messagerie integree.
              </li>
              <li>
                <strong>Donnees de paiement :</strong> numero Mobile Money
                (Orange Money / MTN Mobile Money) pour les transactions.
                Aucune donnee bancaire n&apos;est stockee sur nos serveurs.
              </li>
              <li>
                <strong>Donnees d&apos;utilisation :</strong> statistiques
                d&apos;utilisation anonymisees via Firebase Analytics (pages
                visitees, fonctionnalites utilisees, duree de session).
              </li>
              <li>
                <strong>Donnees techniques :</strong> type d&apos;appareil,
                version du systeme d&apos;exploitation, identifiant unique
                d&apos;appareil pour les notifications push.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              3. Utilisation des donnees
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Vos donnees sont utilisees pour :
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                Creer et gerer votre compte utilisateur via
                l&apos;authentification par SMS (OTP).
              </li>
              <li>
                Publier et afficher les annonces immobilieres et de services.
              </li>
              <li>
                Faciliter la communication entre proprietaires et locataires
                via la messagerie integree.
              </li>
              <li>
                Traiter les paiements Mobile Money de maniere securisee.
              </li>
              <li>
                Envoyer des notifications push pertinentes (nouvelles annonces,
                alertes prioritaires, messages recus).
              </li>
              <li>
                Afficher les annonces sur la carte interactive en fonction de
                votre localisation.
              </li>
              <li>
                Ameliorer nos services grace a l&apos;analyse anonymisee de
                l&apos;utilisation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              4. Partage des donnees
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Nous ne vendons jamais vos donnees personnelles. Vos donnees
              peuvent etre partagees avec :
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                <strong>Firebase (Google) :</strong> pour l&apos;authentification,
                le stockage des donnees, les notifications push et
                l&apos;analyse d&apos;utilisation.
              </li>
              <li>
                <strong>Operateurs Mobile Money :</strong> Orange Money et MTN
                Mobile Money pour le traitement des paiements.
              </li>
              <li>
                <strong>Google Maps :</strong> pour l&apos;affichage des
                annonces sur la carte interactive.
              </li>
              <li>
                <strong>Autres utilisateurs :</strong> les informations de
                contact du prestataire (nom, telephone) sont visibles sur les
                annonces publiees.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              5. Stockage et securite
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Vos donnees sont stockees sur les serveurs securises de Firebase
              (Google Cloud Platform). Nous mettons en oeuvre des mesures de
              securite techniques et organisationnelles appropriees pour
              proteger vos donnees contre tout acces non autorise, toute
              modification, divulgation ou destruction.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Les paiements sont traites via des canaux securises. Nous ne
              stockons aucune information de paiement sensible sur nos serveurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              6. Vos droits
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Vous disposez des droits suivants concernant vos donnees
              personnelles :
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                <strong>Acces :</strong> vous pouvez consulter vos donnees
                personnelles dans votre profil.
              </li>
              <li>
                <strong>Modification :</strong> vous pouvez modifier vos
                informations de profil a tout moment.
              </li>
              <li>
                <strong>Suppression :</strong> vous pouvez demander la
                suppression de votre compte et de vos donnees en nous
                contactant.
              </li>
              <li>
                <strong>Portabilite :</strong> vous pouvez demander une copie
                de vos donnees dans un format lisible.
              </li>
              <li>
                <strong>Opposition :</strong> vous pouvez desactiver les
                notifications push et la geolocalisation dans les parametres
                de votre appareil.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              7. Consentement et localisation
            </h2>
            <p className="text-text-secondary leading-relaxed">
              L&apos;application demande votre consentement explicite avant
              d&apos;acceder a :
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>Votre camera (pour prendre des photos d&apos;annonces)</li>
              <li>
                Votre galerie photos (pour selectionner des images existantes)
              </li>
              <li>Votre microphone (pour enregistrer des videos)</li>
              <li>
                Votre localisation (pour afficher les annonces a proximite)
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Vous pouvez revoquer ces permissions a tout moment dans les
              parametres de votre appareil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              8. Cookies et technologies similaires
            </h2>
            <p className="text-text-secondary leading-relaxed">
              L&apos;application mobile n&apos;utilise pas de cookies. Nous
              utilisons Firebase Analytics qui collecte des identifiants
              d&apos;appareil anonymises pour mesurer l&apos;utilisation de
              l&apos;application. Ce site web peut utiliser des cookies
              techniques necessaires a son fonctionnement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              9. Enfants
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Horem+ n&apos;est pas destinee aux personnes de moins de 18 ans.
              Nous ne collectons pas sciemment de donnees personnelles
              d&apos;enfants. Si vous etes parent et que vous pensez que votre
              enfant nous a fourni des donnees personnelles, contactez-nous
              pour que nous puissions les supprimer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              10. Modifications
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Nous nous reservons le droit de modifier cette politique de
              confidentialite a tout moment. Les modifications seront publiees
              sur cette page avec une date de mise a jour. Nous vous
              encourageons a consulter regulierement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark">
              11. Contact
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Pour toute question concernant cette politique de confidentialite
              ou pour exercer vos droits, contactez-nous :
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
