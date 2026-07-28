import type { Language } from "@/lib/i18n/types"

export type LegalSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type LegalPageContent = {
  title: string
  lastUpdatedLabel: string
  intro: string
  sections: LegalSection[]
  contactTitle: string
  contactBody: string
}

export type LegalTranslations = {
  backHome: string
  legalEyebrow: string
  privacyLink: string
  cookiesLink: string
  copyright: string
  cookieBanner: {
    title: string
    description: string
    accept: string
    reject: string
    learnMore: string
  }
  privacy: LegalPageContent
  cookies: LegalPageContent
}

const company = {
  name: "Ai2INNOVATE SRL",
  address: "Avenue Louise, 523, 1050 Ixelles, Belgium",
  email: "info@ai2innovate.io",
}

const contactBody = `${company.name}\n${company.address}\n${company.email}`

export const legalTranslations: Record<Language, LegalTranslations> = {
  en: {
    backHome: "← Back to home",
    legalEyebrow: "Legal",
    privacyLink: "Privacy Policy",
    cookiesLink: "Cookies",
    copyright: "© {year} AI2INNOVATE. All rights reserved.",
    cookieBanner: {
      title: "We use cookies",
      description:
        "We use essential cookies to run this site and optional analytics cookies to understand how visitors use it. You can accept or reject non-essential cookies.",
      accept: "Accept",
      reject: "Reject",
      learnMore: "Cookie policy",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdatedLabel: "Last updated: 28 July 2026",
      intro: `${company.name} (“we”, “us”, “our”) respects your privacy. This policy explains how we collect, use, and protect personal data when you visit ai2innovate.io or contact us.`,
      sections: [
        {
          title: "1. Who we are",
          paragraphs: [
            `${company.name} is the data controller for personal data processed via this website.`,
            `Registered address: ${company.address}.`,
            `Contact: ${company.email}.`,
          ],
        },
        {
          title: "2. Data we collect",
          paragraphs: ["Depending on how you interact with us, we may process:"],
          bullets: [
            "Identity and contact data you submit via forms (name, email, company, message content).",
            "Technical data such as IP address, browser type, device information, and pages visited.",
            "Usage data from analytics tools (if you consent to non-essential cookies).",
          ],
        },
        {
          title: "3. How we use your data",
          paragraphs: ["We use personal data to:"],
          bullets: [
            "Respond to enquiries and provide requested services.",
            "Operate, secure, and improve our website.",
            "Measure traffic and performance (only with your consent where required).",
            "Comply with legal obligations.",
          ],
        },
        {
          title: "4. Legal bases",
          paragraphs: [
            "Under the GDPR, we process data on the basis of: your consent (e.g. analytics cookies); performance of a contract or pre-contractual steps (e.g. handling a service enquiry); our legitimate interests (e.g. securing the site); and legal obligations where applicable.",
          ],
        },
        {
          title: "5. Sharing and processors",
          paragraphs: [
            "We do not sell your personal data. We may share data with trusted service providers who process it on our behalf, such as hosting and analytics providers (for example Vercel and Google Analytics when enabled), under appropriate agreements.",
          ],
        },
        {
          title: "6. International transfers",
          paragraphs: [
            "Some providers may process data outside the European Economic Area. Where that occurs, we rely on appropriate safeguards such as Standard Contractual Clauses or an adequacy decision.",
          ],
        },
        {
          title: "7. Retention",
          paragraphs: [
            "We keep personal data only as long as needed for the purposes described above. Contact form messages are typically retained for up to 24 months unless a longer period is required for an ongoing relationship or legal reason. Analytics data follows the retention settings of the relevant provider.",
          ],
        },
        {
          title: "8. Your rights",
          paragraphs: [
            "You may request access, rectification, erasure, restriction, portability, or object to certain processing. Where processing is based on consent, you may withdraw consent at any time. You also have the right to lodge a complaint with the Belgian Data Protection Authority (Autorité de protection des données / Gegevensbeschermingsautoriteit).",
            `To exercise your rights, email ${company.email}.`,
          ],
        },
        {
          title: "9. Security",
          paragraphs: [
            "We apply appropriate technical and organisational measures to protect personal data. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
          ],
        },
        {
          title: "10. Changes",
          paragraphs: [
            "We may update this policy from time to time. The “Last updated” date at the top of this page will change when we do.",
          ],
        },
      ],
      contactTitle: "Contact",
      contactBody,
    },
    cookies: {
      title: "Cookie Policy",
      lastUpdatedLabel: "Last updated: 28 July 2026",
      intro: `This policy explains how ${company.name} uses cookies and similar technologies on ai2innovate.io.`,
      sections: [
        {
          title: "1. What are cookies?",
          paragraphs: [
            "Cookies are small text files stored on your device when you visit a website. They help the site function, remember preferences, and (if you allow) measure how the site is used.",
          ],
        },
        {
          title: "2. Cookies we use",
          paragraphs: ["We use the following categories:"],
          bullets: [
            "Essential cookies — required for basic site operation and to remember your cookie preferences.",
            "Analytics cookies — optional. Used via Google Analytics and Vercel Analytics to understand traffic and improve the site. These are only set if you accept non-essential cookies.",
          ],
        },
        {
          title: "3. Analytics providers",
          paragraphs: [
            "When you accept analytics cookies, we may use Google Analytics (measurement ID G-CH5415SHTC) and Vercel Analytics. These tools can collect information such as pages viewed, approximate location derived from IP, device/browser type, and referral source.",
          ],
        },
        {
          title: "4. Managing cookies",
          paragraphs: [
            "On your first visit you can accept or reject non-essential cookies via our banner. You can change your choice later by clearing site data for this domain in your browser, which will show the banner again. You can also block or delete cookies through your browser settings.",
          ],
        },
        {
          title: "5. More information",
          paragraphs: [
            `For how we handle personal data more broadly, see our Privacy Policy. Questions: ${company.email}.`,
          ],
        },
      ],
      contactTitle: "Contact",
      contactBody,
    },
  },

  fr: {
    backHome: "← Retour à l’accueil",
    legalEyebrow: "Juridique",
    privacyLink: "Politique de confidentialité",
    cookiesLink: "Cookies",
    copyright: "© {year} AI2INNOVATE. Tous droits réservés.",
    cookieBanner: {
      title: "Nous utilisons des cookies",
      description:
        "Nous utilisons des cookies essentiels pour faire fonctionner le site et des cookies analytiques optionnels pour comprendre son utilisation. Vous pouvez accepter ou refuser les cookies non essentiels.",
      accept: "Accepter",
      reject: "Refuser",
      learnMore: "Politique cookies",
    },
    privacy: {
      title: "Politique de confidentialité",
      lastUpdatedLabel: "Dernière mise à jour : 28 juillet 2026",
      intro: `${company.name} (« nous ») respecte votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons les données personnelles lorsque vous visitez ai2innovate.io ou nous contactez.`,
      sections: [
        {
          title: "1. Qui sommes-nous",
          paragraphs: [
            `${company.name} est le responsable du traitement des données personnelles traitées via ce site.`,
            `Adresse enregistrée : ${company.address}.`,
            `Contact : ${company.email}.`,
          ],
        },
        {
          title: "2. Données que nous collectons",
          paragraphs: ["Selon votre interaction avec nous, nous pouvons traiter :"],
          bullets: [
            "Données d’identité et de contact soumises via les formulaires (nom, e-mail, société, message).",
            "Données techniques telles que l’adresse IP, le type de navigateur, les informations sur l’appareil et les pages consultées.",
            "Données d’utilisation issues des outils d’analyse (si vous consentez aux cookies non essentiels).",
          ],
        },
        {
          title: "3. Comment nous utilisons vos données",
          paragraphs: ["Nous utilisons les données personnelles pour :"],
          bullets: [
            "Répondre aux demandes et fournir les services demandés.",
            "Exploiter, sécuriser et améliorer notre site.",
            "Mesurer le trafic et les performances (uniquement avec votre consentement lorsque requis).",
            "Respecter nos obligations légales.",
          ],
        },
        {
          title: "4. Bases juridiques",
          paragraphs: [
            "Conformément au RGPD, nous traitons les données sur la base de : votre consentement (p. ex. cookies analytiques) ; l’exécution d’un contrat ou de mesures précontractuelles (p. ex. traitement d’une demande) ; nos intérêts légitimes (p. ex. sécurisation du site) ; et les obligations légales le cas échéant.",
          ],
        },
        {
          title: "5. Partage et sous-traitants",
          paragraphs: [
            "Nous ne vendons pas vos données personnelles. Nous pouvons les partager avec des prestataires de confiance qui les traitent pour notre compte, comme des hébergeurs et des outils d’analyse (par exemple Vercel et Google Analytics lorsqu’ils sont activés), dans le cadre d’accords appropriés.",
          ],
        },
        {
          title: "6. Transferts internationaux",
          paragraphs: [
            "Certains prestataires peuvent traiter des données hors de l’Espace économique européen. Dans ce cas, nous nous appuyons sur des garanties appropriées telles que les clauses contractuelles types ou une décision d’adéquation.",
          ],
        },
        {
          title: "7. Conservation",
          paragraphs: [
            "Nous conservons les données personnelles uniquement aussi longtemps que nécessaire aux finalités décrites. Les messages du formulaire de contact sont généralement conservés jusqu’à 24 mois, sauf si une période plus longue est requise. Les données d’analyse suivent les paramètres du prestataire concerné.",
          ],
        },
        {
          title: "8. Vos droits",
          paragraphs: [
            "Vous pouvez demander l’accès, la rectification, l’effacement, la limitation, la portabilité, ou vous opposer à certains traitements. Lorsque le traitement repose sur le consentement, vous pouvez le retirer à tout moment. Vous avez également le droit d’introduire une plainte auprès de l’Autorité de protection des données belge.",
            `Pour exercer vos droits, écrivez à ${company.email}.`,
          ],
        },
        {
          title: "9. Sécurité",
          paragraphs: [
            "Nous appliquons des mesures techniques et organisationnelles appropriées pour protéger les données personnelles. Aucune méthode de transmission ou de stockage n’est totalement sûre ; nous ne pouvons donc pas garantir une sécurité absolue.",
          ],
        },
        {
          title: "10. Modifications",
          paragraphs: [
            "Nous pouvons mettre à jour cette politique de temps à autre. La date de « Dernière mise à jour » en haut de cette page sera alors modifiée.",
          ],
        },
      ],
      contactTitle: "Contact",
      contactBody,
    },
    cookies: {
      title: "Politique relative aux cookies",
      lastUpdatedLabel: "Dernière mise à jour : 28 juillet 2026",
      intro: `Cette politique explique comment ${company.name} utilise les cookies et technologies similaires sur ai2innovate.io.`,
      sections: [
        {
          title: "1. Qu’est-ce qu’un cookie ?",
          paragraphs: [
            "Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site. Ils aident le site à fonctionner, à mémoriser vos préférences et (si vous l’autorisez) à mesurer l’utilisation du site.",
          ],
        },
        {
          title: "2. Cookies que nous utilisons",
          paragraphs: ["Nous utilisons les catégories suivantes :"],
          bullets: [
            "Cookies essentiels — nécessaires au fonctionnement de base du site et pour mémoriser vos préférences cookies.",
            "Cookies analytiques — optionnels. Utilisés via Google Analytics et Vercel Analytics pour comprendre le trafic et améliorer le site. Ils ne sont déposés que si vous acceptez les cookies non essentiels.",
          ],
        },
        {
          title: "3. Prestataires d’analyse",
          paragraphs: [
            "Lorsque vous acceptez les cookies analytiques, nous pouvons utiliser Google Analytics (ID G-CH5415SHTC) et Vercel Analytics. Ces outils peuvent collecter des informations telles que les pages consultées, une localisation approximative dérivée de l’IP, le type d’appareil/navigateur et la source de référence.",
          ],
        },
        {
          title: "4. Gérer les cookies",
          paragraphs: [
            "Lors de votre première visite, vous pouvez accepter ou refuser les cookies non essentiels via notre bandeau. Vous pouvez modifier votre choix plus tard en effaçant les données du site pour ce domaine dans votre navigateur. Vous pouvez aussi bloquer ou supprimer les cookies via les paramètres du navigateur.",
          ],
        },
        {
          title: "5. Plus d’informations",
          paragraphs: [
            `Pour le traitement plus large des données personnelles, consultez notre Politique de confidentialité. Questions : ${company.email}.`,
          ],
        },
      ],
      contactTitle: "Contact",
      contactBody,
    },
  },

  de: {
    backHome: "← Zurück zur Startseite",
    legalEyebrow: "Rechtliches",
    privacyLink: "Datenschutz",
    cookiesLink: "Cookies",
    copyright: "© {year} AI2INNOVATE. Alle Rechte vorbehalten.",
    cookieBanner: {
      title: "Wir verwenden Cookies",
      description:
        "Wir verwenden notwendige Cookies für den Betrieb der Website und optionale Analyse-Cookies, um die Nutzung zu verstehen. Sie können nicht notwendige Cookies akzeptieren oder ablehnen.",
      accept: "Akzeptieren",
      reject: "Ablehnen",
      learnMore: "Cookie-Richtlinie",
    },
    privacy: {
      title: "Datenschutzerklärung",
      lastUpdatedLabel: "Zuletzt aktualisiert: 28. Juli 2026",
      intro: `${company.name} („wir“) respektiert Ihre Privatsphäre. Diese Erklärung beschreibt, wie wir personenbezogene Daten erheben, nutzen und schützen, wenn Sie ai2innovate.io besuchen oder uns kontaktieren.`,
      sections: [
        {
          title: "1. Wer wir sind",
          paragraphs: [
            `${company.name} ist der Verantwortliche für personenbezogene Daten, die über diese Website verarbeitet werden.`,
            `Sitz: ${company.address}.`,
            `Kontakt: ${company.email}.`,
          ],
        },
        {
          title: "2. Welche Daten wir erheben",
          paragraphs: ["Je nach Ihrer Interaktion mit uns können wir verarbeiten:"],
          bullets: [
            "Identitäts- und Kontaktdaten aus Formularen (Name, E-Mail, Unternehmen, Nachricht).",
            "Technische Daten wie IP-Adresse, Browsertyp, Geräteinformationen und besuchte Seiten.",
            "Nutzungsdaten aus Analysetools (wenn Sie nicht notwendigen Cookies zustimmen).",
          ],
        },
        {
          title: "3. Wie wir Ihre Daten nutzen",
          paragraphs: ["Wir nutzen personenbezogene Daten, um:"],
          bullets: [
            "Anfragen zu beantworten und angeforderte Leistungen zu erbringen.",
            "Unsere Website zu betreiben, zu sichern und zu verbessern.",
            "Traffic und Leistung zu messen (nur mit Ihrer Einwilligung, soweit erforderlich).",
            "Rechtliche Verpflichtungen zu erfüllen.",
          ],
        },
        {
          title: "4. Rechtsgrundlagen",
          paragraphs: [
            "Nach der DSGVO verarbeiten wir Daten auf Basis von: Ihrer Einwilligung (z. B. Analyse-Cookies); Vertragserfüllung oder vorvertraglichen Maßnahmen (z. B. Bearbeitung einer Anfrage); unseren berechtigten Interessen (z. B. Sicherung der Website); sowie gesetzlichen Pflichten, soweit anwendbar.",
          ],
        },
        {
          title: "5. Weitergabe und Auftragsverarbeiter",
          paragraphs: [
            "Wir verkaufen Ihre personenbezogenen Daten nicht. Wir können sie an vertrauenswürdige Dienstleister weitergeben, die sie in unserem Auftrag verarbeiten — etwa Hosting- und Analyseanbieter (z. B. Vercel und Google Analytics, sofern aktiviert) — unter geeigneten Vereinbarungen.",
          ],
        },
        {
          title: "6. Internationale Übermittlungen",
          paragraphs: [
            "Einige Anbieter können Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten. In solchen Fällen stützen wir uns auf geeignete Garantien wie Standardvertragsklauseln oder einen Angemessenheitsbeschluss.",
          ],
        },
        {
          title: "7. Speicherdauer",
          paragraphs: [
            "Wir speichern personenbezogene Daten nur so lange wie für die beschriebenen Zwecke erforderlich. Kontaktformularnachrichten werden in der Regel bis zu 24 Monate aufbewahrt, sofern keine längere Frist nötig ist. Analysedaten folgen den Einstellungen des jeweiligen Anbieters.",
          ],
        },
        {
          title: "8. Ihre Rechte",
          paragraphs: [
            "Sie können Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit oder Widerspruch gegen bestimmte Verarbeitungen verlangen. Bei Einwilligung können Sie diese jederzeit widerrufen. Sie haben außerdem das Recht, sich bei der belgischen Datenschutzbehörde zu beschweren.",
            `Zur Ausübung Ihrer Rechte schreiben Sie an ${company.email}.`,
          ],
        },
        {
          title: "9. Sicherheit",
          paragraphs: [
            "Wir setzen angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten ein. Keine Übertragung oder Speicherung ist vollständig sicher; absolute Sicherheit können wir nicht garantieren.",
          ],
        },
        {
          title: "10. Änderungen",
          paragraphs: [
            "Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Das Datum „Zuletzt aktualisiert“ oben auf dieser Seite wird dann angepasst.",
          ],
        },
      ],
      contactTitle: "Kontakt",
      contactBody,
    },
    cookies: {
      title: "Cookie-Richtlinie",
      lastUpdatedLabel: "Zuletzt aktualisiert: 28. Juli 2026",
      intro: `Diese Richtlinie erklärt, wie ${company.name} Cookies und ähnliche Technologien auf ai2innovate.io verwendet.`,
      sections: [
        {
          title: "1. Was sind Cookies?",
          paragraphs: [
            "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen der Website zu funktionieren, Einstellungen zu speichern und (falls erlaubt) die Nutzung zu messen.",
          ],
        },
        {
          title: "2. Welche Cookies wir verwenden",
          paragraphs: ["Wir verwenden folgende Kategorien:"],
          bullets: [
            "Notwendige Cookies — erforderlich für den Grundbetrieb der Website und zum Speichern Ihrer Cookie-Einstellungen.",
            "Analyse-Cookies — optional. Über Google Analytics und Vercel Analytics, um Traffic zu verstehen und die Website zu verbessern. Sie werden nur gesetzt, wenn Sie nicht notwendigen Cookies zustimmen.",
          ],
        },
        {
          title: "3. Analyseanbieter",
          paragraphs: [
            "Wenn Sie Analyse-Cookies akzeptieren, können wir Google Analytics (Mess-ID G-CH5415SHTC) und Vercel Analytics nutzen. Diese Tools können Informationen wie aufgerufene Seiten, ungefähren Standort aus der IP, Gerät/Browser-Typ und Verweisquelle erfassen.",
          ],
        },
        {
          title: "4. Cookies verwalten",
          paragraphs: [
            "Beim ersten Besuch können Sie nicht notwendige Cookies über unser Banner akzeptieren oder ablehnen. Sie können Ihre Wahl später ändern, indem Sie Website-Daten für diese Domain im Browser löschen. Cookies können Sie auch in den Browser-Einstellungen blockieren oder löschen.",
          ],
        },
        {
          title: "5. Weitere Informationen",
          paragraphs: [
            `Informationen zur allgemeinen Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung. Fragen: ${company.email}.`,
          ],
        },
      ],
      contactTitle: "Kontakt",
      contactBody,
    },
  },

  nl: {
    backHome: "← Terug naar home",
    legalEyebrow: "Juridisch",
    privacyLink: "Privacybeleid",
    cookiesLink: "Cookies",
    copyright: "© {year} AI2INNOVATE. Alle rechten voorbehouden.",
    cookieBanner: {
      title: "Wij gebruiken cookies",
      description:
        "We gebruiken essentiële cookies om de site te laten werken en optionele analytische cookies om het gebruik te begrijpen. U kunt niet-essentiële cookies accepteren of weigeren.",
      accept: "Accepteren",
      reject: "Weigeren",
      learnMore: "Cookiebeleid",
    },
    privacy: {
      title: "Privacybeleid",
      lastUpdatedLabel: "Laatst bijgewerkt: 28 juli 2026",
      intro: `${company.name} (“wij”) respecteert uw privacy. Dit beleid legt uit hoe we persoonsgegevens verzamelen, gebruiken en beschermen wanneer u ai2innovate.io bezoekt of contact met ons opneemt.`,
      sections: [
        {
          title: "1. Wie wij zijn",
          paragraphs: [
            `${company.name} is de verwerkingsverantwoordelijke voor persoonsgegevens die via deze website worden verwerkt.`,
            `Geregistreerd adres: ${company.address}.`,
            `Contact: ${company.email}.`,
          ],
        },
        {
          title: "2. Gegevens die we verzamelen",
          paragraphs: ["Afhankelijk van hoe u met ons communiceert, kunnen we verwerken:"],
          bullets: [
            "Identiteits- en contactgegevens via formulieren (naam, e-mail, bedrijf, bericht).",
            "Technische gegevens zoals IP-adres, browsertype, apparaatinformatie en bezochte pagina’s.",
            "Gebruiksgegevens van analysetools (als u toestemt met niet-essentiële cookies).",
          ],
        },
        {
          title: "3. Hoe we uw gegevens gebruiken",
          paragraphs: ["We gebruiken persoonsgegevens om:"],
          bullets: [
            "Vragen te beantwoorden en gevraagde diensten te leveren.",
            "Onze website te laten werken, te beveiligen en te verbeteren.",
            "Verkeer en prestaties te meten (alleen met uw toestemming waar vereist).",
            "Aan wettelijke verplichtingen te voldoen.",
          ],
        },
        {
          title: "4. Rechtsgrondslagen",
          paragraphs: [
            "Onder de AVG verwerken we gegevens op basis van: uw toestemming (bijv. analytische cookies); uitvoering van een overeenkomst of precontractuele stappen (bijv. een aanvraag); onze gerechtvaardigde belangen (bijv. beveiliging van de site); en wettelijke verplichtingen waar van toepassing.",
          ],
        },
        {
          title: "5. Delen en verwerkers",
          paragraphs: [
            "We verkopen uw persoonsgegevens niet. We kunnen ze delen met vertrouwde dienstverleners die ze namens ons verwerken, zoals hosting- en analyseproviders (bijvoorbeeld Vercel en Google Analytics wanneer ingeschakeld), onder passende overeenkomsten.",
          ],
        },
        {
          title: "6. Internationale doorgiften",
          paragraphs: [
            "Sommige providers kunnen gegevens buiten de Europese Economische Ruimte verwerken. In dat geval vertrouwen we op passende waarborgen zoals standaardcontractbepalingen of een adequaatheidsbesluit.",
          ],
        },
        {
          title: "7. Bewaartermijn",
          paragraphs: [
            "We bewaren persoonsgegevens alleen zo lang als nodig voor de beschreven doelen. Berichten via het contactformulier worden doorgaans tot 24 maanden bewaard, tenzij een langere periode nodig is. Analytische gegevens volgen de instellingen van de betreffende provider.",
          ],
        },
        {
          title: "8. Uw rechten",
          paragraphs: [
            "U kunt inzage, rectificatie, wissing, beperking, overdraagbaarheid of bezwaar tegen bepaalde verwerkingen vragen. Bij toestemming kunt u die te allen tijde intrekken. U heeft ook het recht een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit.",
            `Om uw rechten uit te oefenen, mail ${company.email}.`,
          ],
        },
        {
          title: "9. Beveiliging",
          paragraphs: [
            "We passen passende technische en organisatorische maatregelen toe om persoonsgegevens te beschermen. Geen methode van overdracht of opslag is volledig veilig; absolute beveiliging kunnen we niet garanderen.",
          ],
        },
        {
          title: "10. Wijzigingen",
          paragraphs: [
            "We kunnen dit beleid van tijd tot tijd bijwerken. De datum “Laatst bijgewerkt” bovenaan deze pagina verandert dan.",
          ],
        },
      ],
      contactTitle: "Contact",
      contactBody,
    },
    cookies: {
      title: "Cookiebeleid",
      lastUpdatedLabel: "Laatst bijgewerkt: 28 juli 2026",
      intro: `Dit beleid legt uit hoe ${company.name} cookies en vergelijkbare technologieën gebruikt op ai2innovate.io.`,
      sections: [
        {
          title: "1. Wat zijn cookies?",
          paragraphs: [
            "Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt. Ze helpen de site te functioneren, voorkeuren te onthouden en (als u dat toestaat) het gebruik te meten.",
          ],
        },
        {
          title: "2. Cookies die we gebruiken",
          paragraphs: ["We gebruiken de volgende categorieën:"],
          bullets: [
            "Essentiële cookies — nodig voor de basiswerking van de site en om uw cookievoorkeuren te onthouden.",
            "Analytische cookies — optioneel. Via Google Analytics en Vercel Analytics om verkeer te begrijpen en de site te verbeteren. Deze worden alleen geplaatst als u niet-essentiële cookies accepteert.",
          ],
        },
        {
          title: "3. Analyseproviders",
          paragraphs: [
            "Wanneer u analytische cookies accepteert, kunnen we Google Analytics (meet-ID G-CH5415SHTC) en Vercel Analytics gebruiken. Deze tools kunnen informatie verzamelen zoals bekeken pagina’s, bij benadering locatie via IP, apparaat/browsertype en verwijzingsbron.",
          ],
        },
        {
          title: "4. Cookies beheren",
          paragraphs: [
            "Bij uw eerste bezoek kunt u niet-essentiële cookies via onze banner accepteren of weigeren. U kunt later wijzigen door sitegegevens voor dit domein in uw browser te wissen. U kunt cookies ook blokkeren of verwijderen via de browserinstellingen.",
          ],
        },
        {
          title: "5. Meer informatie",
          paragraphs: [
            `Voor hoe we persoonsgegevens in het algemeen verwerken, zie ons Privacybeleid. Vragen: ${company.email}.`,
          ],
        },
      ],
      contactTitle: "Contact",
      contactBody,
    },
  },

  sk: {
    backHome: "← Späť na domov",
    legalEyebrow: "Právne",
    privacyLink: "Ochrana súkromia",
    cookiesLink: "Cookies",
    copyright: "© {year} AI2INNOVATE. Všetky práva vyhradené.",
    cookieBanner: {
      title: "Používame cookies",
      description:
        "Používame nevyhnutné cookies na chod webu a voliteľné analytické cookies na pochopenie návštevnosti. Voliteľné cookies môžete prijať alebo odmietnuť.",
      accept: "Prijať",
      reject: "Odmietnuť",
      learnMore: "Zásady cookies",
    },
    privacy: {
      title: "Zásady ochrany súkromia",
      lastUpdatedLabel: "Posledná aktualizácia: 28. júl 2026",
      intro: `${company.name} („my“) rešpektuje vaše súkromie. Tieto zásady vysvetľujú, ako zhromažďujeme, používame a chránime osobné údaje, keď navštívite ai2innovate.io alebo nás kontaktujete.`,
      sections: [
        {
          title: "1. Kto sme",
          paragraphs: [
            `${company.name} je prevádzkovateľom osobných údajov spracúvaných prostredníctvom tohto webu.`,
            `Sídlo: ${company.address}.`,
            `Kontakt: ${company.email}.`,
          ],
        },
        {
          title: "2. Aké údaje zbierame",
          paragraphs: ["V závislosti od vašej interakcie s nami môžeme spracúvať:"],
          bullets: [
            "Identifikačné a kontaktné údaje z formulárov (meno, e-mail, firma, správa).",
            "Technické údaje ako IP adresa, typ prehliadača, informácie o zariadení a navštívené stránky.",
            "Údaje o používaní z analytických nástrojov (ak súhlasíte s nepovinnými cookies).",
          ],
        },
        {
          title: "3. Ako používame vaše údaje",
          paragraphs: ["Osobné údaje používame na:"],
          bullets: [
            "Odpovedanie na dopyty a poskytovanie požadovaných služieb.",
            "Prevádzku, zabezpečenie a zlepšovanie webu.",
            "Meranie návštevnosti a výkonu (len so súhlasom, ak je to potrebné).",
            "Plnenie zákonných povinností.",
          ],
        },
        {
          title: "4. Právne základy",
          paragraphs: [
            "Podľa GDPR spracúvame údaje na základe: vášho súhlasu (napr. analytické cookies); plnenia zmluvy alebo predzmluvných krokov (napr. vybavenie dopytu); našich oprávnených záujmov (napr. zabezpečenie webu); a zákonných povinností, ak sa uplatňujú.",
          ],
        },
        {
          title: "5. Zdieľanie a sprostredkovatelia",
          paragraphs: [
            "Vaše osobné údaje nepredávame. Môžeme ich zdieľať s dôveryhodnými poskytovateľmi služieb, ktorí ich spracúvajú v našom mene — napríklad hosting a analytika (Vercel a Google Analytics, ak sú zapnuté) — na základe vhodných zmlúv.",
          ],
        },
        {
          title: "6. Medzinárodné prenosy",
          paragraphs: [
            "Niektorí poskytovatelia môžu spracúvať údaje mimo Európskeho hospodárskeho priestoru. V takom prípade sa spoliehame na vhodné záruky, napríklad štandardné zmluvné doložky alebo rozhodnutie o primeranosti.",
          ],
        },
        {
          title: "7. Uchovávanie",
          paragraphs: [
            "Osobné údaje uchovávame len tak dlho, ako je potrebné na uvedené účely. Správy z kontaktného formulára sa zvyčajne uchovávajú až 24 mesiacov, pokiaľ nie je potrebná dlhšia lehota. Analytické údaje sa riadia nastaveniami príslušného poskytovateľa.",
          ],
        },
        {
          title: "8. Vaše práva",
          paragraphs: [
            "Môžete požiadať o prístup, opravu, vymazanie, obmedzenie, prenosnosť alebo namietať proti určitému spracúvaniu. Ak je spracúvanie založené na súhlase, môžete súhlas kedykoľvek odvolať. Máte aj právo podať sťažnosť belgickému úradu na ochranu údajov.",
            `Na uplatnenie práv napíšte na ${company.email}.`,
          ],
        },
        {
          title: "9. Bezpečnosť",
          paragraphs: [
            "Uplatňujeme vhodné technické a organizačné opatrenia na ochranu osobných údajov. Žiadna metóda prenosu ani uloženia nie je úplne bezpečná; absolútnu bezpečnosť nemôžeme zaručiť.",
          ],
        },
        {
          title: "10. Zmeny",
          paragraphs: [
            "Tieto zásady môžeme občas aktualizovať. Dátum „Posledná aktualizácia“ v hornej časti stránky sa potom zmení.",
          ],
        },
      ],
      contactTitle: "Kontakt",
      contactBody,
    },
    cookies: {
      title: "Zásady používania cookies",
      lastUpdatedLabel: "Posledná aktualizácia: 28. júl 2026",
      intro: `Tieto zásady vysvetľujú, ako ${company.name} používa cookies a podobné technológie na ai2innovate.io.`,
      sections: [
        {
          title: "1. Čo sú cookies?",
          paragraphs: [
            "Cookies sú malé textové súbory uložené vo vašom zariadení pri návšteve webu. Pomáhajú webu fungovať, pamätať si preferencie a (ak to povolíte) merať používanie stránky.",
          ],
        },
        {
          title: "2. Aké cookies používame",
          paragraphs: ["Používame tieto kategórie:"],
          bullets: [
            "Nevyhnutné cookies — potrebné na základnú prevádzku webu a na zapamätanie vašich preferencií cookies.",
            "Analytické cookies — voliteľné. Cez Google Analytics a Vercel Analytics na pochopenie návštevnosti a zlepšenie webu. Nastavia sa len ak prijmete nepovinné cookies.",
          ],
        },
        {
          title: "3. Poskytovatelia analytiky",
          paragraphs: [
            "Ak prijmete analytické cookies, môžeme používať Google Analytics (ID G-CH5415SHTC) a Vercel Analytics. Tieto nástroje môžu zbierať informácie ako zobrazené stránky, približnú polohu z IP, typ zariadenia/prehliadača a zdroj odkazu.",
          ],
        },
        {
          title: "4. Správa cookies",
          paragraphs: [
            "Pri prvej návšteve môžete nepovinné cookies prijať alebo odmietnuť cez náš banner. Voľbu môžete neskôr zmeniť vymazaním údajov webu pre túto doménu v prehliadači. Cookies môžete aj blokovať alebo mazať v nastaveniach prehliadača.",
          ],
        },
        {
          title: "5. Viac informácií",
          paragraphs: [
            `O širšom spracúvaní osobných údajov pozrite naše Zásady ochrany súkromia. Otázky: ${company.email}.`,
          ],
        },
      ],
      contactTitle: "Kontakt",
      contactBody,
    },
  },
}
