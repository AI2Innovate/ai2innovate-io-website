import type { Language } from "../types"

export interface DnaTranslations {
  nav: {
    services: string
    industries: string
    solutions: string
    whyUs: string
    bookFreeCall: string
  }
  hero: {
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    geneTicker1: string
    geneTicker2: string
    geneTicker3: string
    geneTicker4: string
    titleLine1: string
    titleLine2: string
  }
  services: {
    eyebrow: string
    title: string
    subtitle: string
    gene1Title: string
    gene1Description: string
    gene2Title: string
    gene2Description: string
    gene3Title: string
    gene3Description: string
    gene4Title: string
    gene4Description: string
  }
  industries: {
    eyebrow: string
    title: string
    subtitle: string
    retailTitle: string
    retailDesc: string
    healthcareTitle: string
    healthcareDesc: string
    financeTitle: string
    financeDesc: string
    manufacturingTitle: string
    manufacturingDesc: string
    technologyTitle: string
    technologyDesc: string
    professionalTitle: string
    professionalDesc: string
  }
  solutions: {
    eyebrow: string
    title: string
    subtitle: string
    cyberxdefend: string
    shopmuse: string
    chainfoundry: string
    multimind: string
    dbabridge: string
    visit: string
  }
  whyUs: {
    eyebrow: string
    title: string
    subtitle: string
    benefit1Title: string
    benefit1Description: string
    benefit2Title: string
    benefit2Description: string
    benefit3Title: string
    benefit3Description: string
  }
  cta: {
    title: string
    subtitle: string
    button: string
    perk1: string
    perk2: string
    perk3: string
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    messagePlaceholder: string
    sendButton: string
    emailTitle: string
    emailSubtitle: string
  }
  footer: {
    tagline: string
    quickLinks: string
    services: string
    getInTouch: string
    linkServices: string
    linkIndustries: string
    linkSolutions: string
    linkWhyUs: string
    linkContact: string
    service1: string
    service2: string
    service3: string
    service4: string
    service5: string
    copyright: string
    sequenceComplete: string
    linkPrivacy: string
    linkCookies: string
  }
}

export const dnaTranslations: Record<Language, DnaTranslations> = {
  en: {
    nav: {
      services: "Services",
      industries: "Industries",
      solutions: "Solutions",
      whyUs: "Why Us",
      bookFreeCall: "Book a Free Call",
    },
    hero: {
      titleLine1: "Innovation is in",
      titleLine2: "our",
      subtitle:
        "AI consulting, automation, digital commerce and cybersecurity — engineered into the genome of your business so it scales faster, runs leaner, and stays secure.",
      ctaPrimary: "Book a Free Strategy Call",
      ctaSecondary: "Explore the strands ↓",
      geneTicker1: "AI & AUTOMATION",
      geneTicker2: "TALENT & IT",
      geneTicker3: "COMMERCE",
      geneTicker4: "GUARD / CYBER",
    },
    services: {
      eyebrow: "What we do",
      title: "Four strands. One genome for growth.",
      subtitle:
        "Every engagement maps to one of four core strands — combined, sequenced, and expressed around your business goals.",
      gene1Title: "AI Consulting & Automation",
      gene1Description:
        "Intelligent automation and AI solutions that streamline operations, reduce manual work, and free your team to focus on what matters most — growing the business.",
      gene2Title: "IT Consulting & Sub-Contracting",
      gene2Description:
        "Expert IT talent and consulting on demand. From infrastructure planning to technical implementation, we provide the expertise you need, exactly when you need it.",
      gene3Title: "E-commerce & Digital Sales Enablement",
      gene3Description:
        "Build, launch, and scale your online store with ease. Seamless shopping experiences that turn visitors into loyal customers and drive revenue growth.",
      gene4Title: "Cybersecurity & Cloud Transformation",
      gene4Description:
        "DFIR, ransomware containment, and forensic investigation — powered by cyberxdefend.com. Migrate to modern cloud infrastructure safely, with enterprise-grade security built in.",
    },
    industries: {
      eyebrow: "Industries we serve",
      title: "Proven expertise across multiple sectors.",
      subtitle:
        "We understand your industry's challenges and deliver solutions that work in the real world — not just on slides.",
      retailTitle: "Retail & E-Commerce",
      retailDesc: "Digital storefronts and inventory management.",
      healthcareTitle: "Healthcare",
      healthcareDesc: "Patient management and compliance solutions.",
      financeTitle: "Finance & Banking",
      financeDesc: "Secure payment systems and data analytics.",
      manufacturingTitle: "Manufacturing",
      manufacturingDesc: "Supply chain optimization and automation.",
      technologyTitle: "Technology",
      technologyDesc: "Scalable tech infrastructure from day one.",
      professionalTitle: "Professional Services",
      professionalDesc: "Client management and workflow automation.",
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Products and platforms we build.",
      subtitle:
        "Our portfolio of practical solutions for data, security, blockchain, and intelligent automation — each one a gene expressed from the same engineering DNA.",
      cyberxdefend: "DFIR platform for ransomware containment and forensic investigation.",
      shopmuse: "AI-powered storefront builder that turns product catalogs into high-converting shops.",
      chainfoundry: "One Rust toolkit to decode, transport, and index data across 7 blockchain families.",
      multimind: "Open-source SDK for building multi-agent LLM workflows in Python.",
      dbabridge: "Hybrid Java+Rust migration tool to move SQL, NoSQL, and vector databases without downtime.",
      visit: "visit →",
    },
    whyUs: {
      eyebrow: "Why choose us",
      title: "Partner with confidence.",
      subtitle: "We focus on delivering real business value — not just technology.",
      benefit1Title: "Business-First Approach",
      benefit1Description:
        "We speak your language, not tech jargon. Solutions are designed around your business goals and deliver measurable ROI.",
      benefit2Title: "End-to-End Support",
      benefit2Description:
        "From strategy to implementation and beyond, we're with you every step. Training, documentation, and ongoing support included.",
      benefit3Title: "Transparent Pricing",
      benefit3Description:
        "No surprises, no hidden fees. Clear project scopes, fixed pricing options, and regular progress updates keep you in control.",
    },
    cta: {
      title: "Let's transform your business with AI.",
      subtitle:
        "Ready to reduce costs, increase efficiency, and drive growth? Book your free strategy call today.",
      button: "Book Your Free Strategy Call",
      perk1: "FREE CONSULTATION",
      perk2: "NO LONG-TERM CONTRACTS",
      perk3: "RESULTS-DRIVEN",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's start your transformation.",
      subtitle:
        "Tell us about your business goals and we'll show you how we can help. We reply within 24 hours.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Your message",
      messagePlaceholder: "What would you like to build or improve?",
      sendButton: "Send message",
      emailTitle: "Or email us directly",
      emailSubtitle:
        "Prefer email? Reach out to our team and we'll get back to you within one business day.",
    },
    footer: {
      tagline:
        "Your trusted partner for IT consulting, AI solutions, e-commerce, and cybersecurity. Making technology work for business.",
      quickLinks: "Quick links",
      services: "Services",
      getInTouch: "Get in touch",
      linkServices: "Services",
      linkIndustries: "Industries",
      linkSolutions: "Solutions",
      linkWhyUs: "Why Choose Us",
      linkContact: "Contact",
      service1: "AI Consulting & Automation",
      service2: "IT Consulting & Subcontracting",
      service3: "E-Commerce Development",
      service4: "Cybersecurity & Cloud",
      service5: "Data Analytics",
      copyright: "© {year} AI2INNOVATE. All rights reserved.",
      sequenceComplete: "Ai2INNOVATE SRL · AVENUE LOUISE 231, 1050 IXELLEs, Belgium",
      linkPrivacy: "Privacy Policy",
      linkCookies: "Cookies",
    },
  },
  fr: {
    nav: {
      services: "Services",
      industries: "Industries",
      solutions: "Solutions",
      whyUs: "Pourquoi nous",
      bookFreeCall: "Réserver un appel gratuit",
    },
    hero: {
      titleLine1: "L'innovation est dans",
      titleLine2: "notre",
      subtitle:
        "Conseil IA, automatisation, commerce digital et cybersécurité — intégrés au génome de votre entreprise pour qu'elle évolue plus vite, fonctionne plus efficacement et reste sécurisée.",
      ctaPrimary: "Réserver un appel stratégique gratuit",
      ctaSecondary: "Explorer les brins ↓",
      geneTicker1: "IA & AUTOMATISATION",
      geneTicker2: "TALENT & IT",
      geneTicker3: "COMMERCE",
      geneTicker4: "PROTECTION / CYBER",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "Quatre brins. Un génome pour la croissance.",
      subtitle:
        "Chaque mission correspond à l'un des quatre brins fondamentaux — combinés, séquencés et exprimés selon vos objectifs commerciaux.",
      gene1Title: "Conseil IA & Automatisation",
      gene1Description:
        "Automatisation intelligente et solutions IA qui rationalisent les opérations, réduisent le travail manuel et libèrent votre équipe pour se concentrer sur l'essentiel — faire croître l'entreprise.",
      gene2Title: "Conseil IT & Sous-traitance",
      gene2Description:
        "Talents IT experts et conseil à la demande. De la planification d'infrastructure à la mise en œuvre technique, nous fournissons l'expertise dont vous avez besoin, au moment où vous en avez besoin.",
      gene3Title: "E-commerce & Activation des ventes digitales",
      gene3Description:
        "Créez, lancez et développez votre boutique en ligne facilement. Des expériences d'achat fluides qui transforment les visiteurs en clients fidèles et stimulent la croissance du chiffre d'affaires.",
      gene4Title: "Cybersécurité & Transformation cloud",
      gene4Description:
        "DFIR, confinement des ransomwares et investigation forensique — propulsé par cyberxdefend.com. Migrez vers une infrastructure cloud moderne en toute sécurité, avec une sécurité de niveau entreprise intégrée.",
    },
    industries: {
      eyebrow: "Industries que nous servons",
      title: "Expertise éprouvée dans de multiples secteurs.",
      subtitle:
        "Nous comprenons les défis de votre secteur et livrons des solutions qui fonctionnent dans le monde réel — pas seulement sur les slides.",
      retailTitle: "Commerce de détail & E-commerce",
      retailDesc: "Vitrines digitales et gestion des stocks.",
      healthcareTitle: "Santé",
      healthcareDesc: "Gestion des patients et solutions de conformité.",
      financeTitle: "Finance & Banque",
      financeDesc: "Systèmes de paiement sécurisés et analytique de données.",
      manufacturingTitle: "Industrie manufacturière",
      manufacturingDesc: "Optimisation de la chaîne d'approvisionnement et automatisation.",
      technologyTitle: "Technologie",
      technologyDesc: "Infrastructure technologique évolutive dès le premier jour.",
      professionalTitle: "Services professionnels",
      professionalDesc: "Gestion client et automatisation des flux de travail.",
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Produits et plateformes que nous construisons.",
      subtitle:
        "Notre portefeuille de solutions pratiques pour les données, la sécurité, la blockchain et l'automatisation intelligente — chacune un gène exprimé à partir du même ADN d'ingénierie.",
      cyberxdefend: "Plateforme DFIR pour le confinement des ransomwares et les investigations forensiques.",
      shopmuse: "Créateur de vitrines IA qui transforme les catalogues produits en boutiques à forte conversion.",
      chainfoundry: "Boîte à outils Rust unique pour décoder, transporter et indexer des données sur 7 familles de blockchains.",
      multimind: "SDK open source pour créer des workflows LLM multi-agents en Python.",
      dbabridge: "Outil de migration hybride Java+Rust pour déplacer SQL, NoSQL et bases vectorielles sans interruption.",
      visit: "visiter →",
    },
    whyUs: {
      eyebrow: "Pourquoi nous choisir",
      title: "Partenaire en toute confiance.",
      subtitle: "Nous nous concentrons sur la création de valeur commerciale réelle — pas seulement de la technologie.",
      benefit1Title: "Approche axée sur les affaires",
      benefit1Description:
        "Nous parlons votre langue, pas du jargon technique. Les solutions sont conçues autour de vos objectifs commerciaux et offrent un ROI mesurable.",
      benefit2Title: "Support de bout en bout",
      benefit2Description:
        "De la stratégie à la mise en œuvre et au-delà, nous sommes avec vous à chaque étape. Formation, documentation et support continu inclus.",
      benefit3Title: "Tarification transparente",
      benefit3Description:
        "Pas de surprises, pas de frais cachés. Des périmètres de projet clairs, des options de tarification fixes et des mises à jour régulières vous gardent en contrôle.",
    },
    cta: {
      title: "Transformons votre entreprise avec l'IA.",
      subtitle:
        "Prêt à réduire les coûts, augmenter l'efficacité et stimuler la croissance ? Réservez votre appel stratégique gratuit aujourd'hui.",
      button: "Réserver votre appel stratégique gratuit",
      perk1: "CONSULTATION GRATUITE",
      perk2: "SANS CONTRAT LONG TERME",
      perk3: "ORIENTÉ RÉSULTATS",
    },
    contact: {
      eyebrow: "Contactez-nous",
      title: "Commençons votre transformation.",
      subtitle:
        "Parlez-nous de vos objectifs commerciaux et nous vous montrerons comment nous pouvons vous aider. Nous répondons sous 24 heures.",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Votre message",
      messagePlaceholder: "Que souhaitez-vous construire ou améliorer ?",
      sendButton: "Envoyer le message",
      emailTitle: "Ou écrivez-nous directement",
      emailSubtitle:
        "Vous préférez l'email ? Contactez notre équipe et nous vous répondrons sous un jour ouvrable.",
    },
    footer: {
      tagline:
        "Votre partenaire de confiance pour le conseil IT, les solutions IA, le e-commerce et la cybersécurité. Faire travailler la technologie pour l'entreprise.",
      quickLinks: "Liens rapides",
      services: "Services",
      getInTouch: "Nous contacter",
      linkServices: "Services",
      linkIndustries: "Industries",
      linkSolutions: "Solutions",
      linkWhyUs: "Pourquoi nous choisir",
      linkContact: "Contact",
      service1: "Conseil IA & Automatisation",
      service2: "Conseil IT & Sous-traitance",
      service3: "Développement E-commerce",
      service4: "Cybersécurité & Cloud",
      service5: "Analytique de données",
      copyright: "© {year} AI2INNOVATE. Tous droits réservés.",
      sequenceComplete: "Ai2INNOVATE SRL · AVENUE LOUISE 231, 1050 IXELLEs, Belgium",
      linkPrivacy: "Politique de confidentialité",
      linkCookies: "Cookies",
    },
  },
  de: {
    nav: {
      services: "Dienstleistungen",
      industries: "Branchen",
      solutions: "Lösungen",
      whyUs: "Warum wir",
      bookFreeCall: "Kostenloses Gespräch buchen",
    },
    hero: {
      titleLine1: "Innovation steckt in",
      titleLine2: "unserer",
      subtitle:
        "KI-Beratung, Automatisierung, digitaler Handel und Cybersicherheit — im Genom Ihres Unternehmens verankert, damit es schneller skaliert, effizienter läuft und sicher bleibt.",
      ctaPrimary: "Kostenloses Strategiegespräch buchen",
      ctaSecondary: "Die Stränge erkunden ↓",
      geneTicker1: "KI & AUTOMATISIERUNG",
      geneTicker2: "TALENT & IT",
      geneTicker3: "HANDEL",
      geneTicker4: "SCHUTZ / CYBER",
    },
    services: {
      eyebrow: "Was wir tun",
      title: "Vier Stränge. Ein Genom für Wachstum.",
      subtitle:
        "Jedes Projekt ordnet sich einem von vier Kernsträngen zu — kombiniert, sequenziert und um Ihre Geschäftsziele herum ausgedrückt.",
      gene1Title: "KI-Beratung & Automatisierung",
      gene1Description:
        "Intelligente Automatisierung und KI-Lösungen, die Abläufe rationalisieren, manuelle Arbeit reduzieren und Ihr Team entlasten, damit es sich auf das Wesentliche konzentrieren kann — das Wachstum des Unternehmens.",
      gene2Title: "IT-Beratung & Subunternehmen",
      gene2Description:
        "IT-Experten und Beratung auf Abruf. Von der Infrastrukturplanung bis zur technischen Umsetzung liefern wir die Expertise, die Sie brauchen — genau dann, wenn Sie sie brauchen.",
      gene3Title: "E-Commerce & Digitale Vertriebsunterstützung",
      gene3Description:
        "Bauen, starten und skalieren Sie Ihren Online-Shop mit Leichtigkeit. Nahtlose Einkaufserlebnisse, die Besucher in treue Kunden verwandeln und das Umsatzwachstum fördern.",
      gene4Title: "Cybersicherheit & Cloud-Transformation",
      gene4Description:
        "DFIR, Ransomware-Eindämmung und forensische Untersuchung — powered by cyberxdefend.com. Migrieren Sie sicher auf moderne Cloud-Infrastruktur mit integrierter Sicherheit auf Unternehmensniveau.",
    },
    industries: {
      eyebrow: "Branchen, die wir bedienen",
      title: "Bewährte Expertise in mehreren Sektoren.",
      subtitle:
        "Wir verstehen die Herausforderungen Ihrer Branche und liefern Lösungen, die in der Praxis funktionieren — nicht nur auf Folien.",
      retailTitle: "Einzelhandel & E-Commerce",
      retailDesc: "Digitale Storefronts und Bestandsverwaltung.",
      healthcareTitle: "Gesundheitswesen",
      healthcareDesc: "Patientenmanagement und Compliance-Lösungen.",
      financeTitle: "Finanzen & Banking",
      financeDesc: "Sichere Zahlungssysteme und Datenanalyse.",
      manufacturingTitle: "Fertigung",
      manufacturingDesc: "Lieferkettenoptimierung und Automatisierung.",
      technologyTitle: "Technologie",
      technologyDesc: "Skalierbare Tech-Infrastruktur vom ersten Tag an.",
      professionalTitle: "Professionelle Dienstleistungen",
      professionalDesc: "Kundenmanagement und Workflow-Automatisierung.",
    },
    solutions: {
      eyebrow: "Lösungen",
      title: "Produkte und Plattformen, die wir entwickeln.",
      subtitle:
        "Unser Portfolio praxisnaher Lösungen für Daten, Sicherheit, Blockchain und intelligente Automatisierung — jedes ein Gen, das aus derselben Engineering-DNA exprimiert wird.",
      cyberxdefend: "DFIR-Plattform für Ransomware-Eindämmung und forensische Untersuchungen.",
      shopmuse: "KI-gestützter Shop-Builder, der Produktkataloge in umsatzstarke Online-Shops verwandelt.",
      chainfoundry: "Ein Rust-Toolkit zum Dekodieren, Transportieren und Indizieren von Daten über 7 Blockchain-Familien.",
      multimind: "Open-Source-SDK zum Aufbau von Multi-Agent-LLM-Workflows in Python.",
      dbabridge: "Hybrides Java+Rust-Migrationstool für SQL-, NoSQL- und Vektordatenbanken ohne Ausfallzeit.",
      visit: "besuchen →",
    },
    whyUs: {
      eyebrow: "Warum uns wählen",
      title: "Partner mit Vertrauen.",
      subtitle: "Wir konzentrieren uns auf echten Geschäftswert — nicht nur auf Technologie.",
      benefit1Title: "Geschäftsorientierter Ansatz",
      benefit1Description:
        "Wir sprechen Ihre Sprache, kein Tech-Jargon. Lösungen werden um Ihre Geschäftsziele herum entwickelt und liefern messbaren ROI.",
      benefit2Title: "End-to-End-Unterstützung",
      benefit2Description:
        "Von der Strategie bis zur Umsetzung und darüber hinaus sind wir bei jedem Schritt an Ihrer Seite. Schulung, Dokumentation und laufender Support inklusive.",
      benefit3Title: "Transparente Preisgestaltung",
      benefit3Description:
        "Keine Überraschungen, keine versteckten Gebühren. Klare Projektumfänge, feste Preisoptionen und regelmäßige Fortschrittsupdates halten Sie in Kontrolle.",
    },
    cta: {
      title: "Lassen Sie uns Ihr Unternehmen mit KI transformieren.",
      subtitle:
        "Bereit, Kosten zu senken, Effizienz zu steigern und Wachstum voranzutreiben? Buchen Sie heute Ihr kostenloses Strategiegespräch.",
      button: "Ihr kostenloses Strategiegespräch buchen",
      perk1: "KOSTENLOSE BERATUNG",
      perk2: "KEINE LANGFRISTIGEN VERTRÄGE",
      perk3: "ERGEBNISORIENTIERT",
    },
    contact: {
      eyebrow: "Kontaktieren Sie uns",
      title: "Lassen Sie uns Ihre Transformation starten.",
      subtitle:
        "Erzählen Sie uns von Ihren Geschäftszielen und wir zeigen Ihnen, wie wir helfen können. Wir antworten innerhalb von 24 Stunden.",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Ihre Nachricht",
      messagePlaceholder: "Was möchten Sie bauen oder verbessern?",
      sendButton: "Nachricht senden",
      emailTitle: "Oder mailen Sie uns direkt",
      emailSubtitle:
        "Bevorzugen Sie E-Mail? Kontaktieren Sie unser Team und wir melden uns innerhalb eines Werktags.",
    },
    footer: {
      tagline:
        "Ihr vertrauenswürdiger Partner für IT-Beratung, KI-Lösungen, E-Commerce und Cybersicherheit. Technologie, die für Ihr Geschäft arbeitet.",
      quickLinks: "Schnelllinks",
      services: "Dienstleistungen",
      getInTouch: "Kontakt",
      linkServices: "Dienstleistungen",
      linkIndustries: "Branchen",
      linkSolutions: "Lösungen",
      linkWhyUs: "Warum uns wählen",
      linkContact: "Kontakt",
      service1: "KI-Beratung & Automatisierung",
      service2: "IT-Beratung & Subunternehmen",
      service3: "E-Commerce-Entwicklung",
      service4: "Cybersicherheit & Cloud",
      service5: "Datenanalyse",
      copyright: "© {year} AI2INNOVATE. Alle Rechte vorbehalten.",
      sequenceComplete: "Ai2INNOVATE SRL · AVENUE LOUISE 231, 1050 IXELLEs, Belgium",
      linkPrivacy: "Datenschutz",
      linkCookies: "Cookies",
    },
  },
  nl: {
    nav: {
      services: "Diensten",
      industries: "Sectoren",
      solutions: "Oplossingen",
      whyUs: "Waarom wij",
      bookFreeCall: "Boek een gratis gesprek",
    },
    hero: {
      titleLine1: "Innovatie zit in",
      titleLine2: "ons",
      subtitle:
        "AI-advies, automatisering, digitale handel en cybersecurity — ingebouwd in het genoom van uw bedrijf zodat het sneller schaalt, efficiënter draait en veilig blijft.",
      ctaPrimary: "Boek een gratis strategiegesprek",
      ctaSecondary: "Ontdek de strengen ↓",
      geneTicker1: "AI & AUTOMATISERING",
      geneTicker2: "TALENT & IT",
      geneTicker3: "COMMERCE",
      geneTicker4: "BESCHERMING / CYBER",
    },
    services: {
      eyebrow: "Wat wij doen",
      title: "Vier strengen. Eén genoom voor groei.",
      subtitle:
        "Elke opdracht past bij een van de vier kernstrengen — gecombineerd, gesekwenceerd en uitgedrukt rond uw bedrijfsdoelen.",
      gene1Title: "AI-advies & Automatisering",
      gene1Description:
        "Intelligente automatisering en AI-oplossingen die operaties stroomlijnen, handmatig werk verminderen en uw team vrijmaken om zich te richten op wat het belangrijkst is — het bedrijf laten groeien.",
      gene2Title: "IT-advies & Onderaanneming",
      gene2Description:
        "Expert IT-talent en advies op aanvraag. Van infrastructuurplanning tot technische implementatie leveren wij de expertise die u nodig heeft, precies wanneer u die nodig heeft.",
      gene3Title: "E-commerce & Digitale verkoopactivering",
      gene3Description:
        "Bouw, lanceer en schaal uw online winkel met gemak. Naadloze winkelervaringen die bezoekers omzetten in loyale klanten en omzetgroei stimuleren.",
      gene4Title: "Cybersecurity & Cloudtransformatie",
      gene4Description:
        "DFIR, ransomware-inperking en forensisch onderzoek — aangedreven door cyberxdefend.com. Migreer veilig naar moderne cloudinfrastructuur met ingebouwde beveiliging op ondernemingsniveau.",
    },
    industries: {
      eyebrow: "Sectoren die wij bedienen",
      title: "Bewezen expertise in meerdere sectoren.",
      subtitle:
        "We begrijpen de uitdagingen van uw sector en leveren oplossingen die werken in de echte wereld — niet alleen op slides.",
      retailTitle: "Detailhandel & E-commerce",
      retailDesc: "Digitale winkels en voorraadbeheer.",
      healthcareTitle: "Gezondheidszorg",
      healthcareDesc: "Patiëntbeheer en compliance-oplossingen.",
      financeTitle: "Financiën & Banking",
      financeDesc: "Veilige betaalsystemen en data-analyse.",
      manufacturingTitle: "Productie",
      manufacturingDesc: "Supply chain-optimalisatie en automatisering.",
      technologyTitle: "Technologie",
      technologyDesc: "Schaalbare tech-infrastructuur vanaf dag één.",
      professionalTitle: "Professionele diensten",
      professionalDesc: "Klantbeheer en workflow-automatisering.",
    },
    solutions: {
      eyebrow: "Oplossingen",
      title: "Producten en platformen die wij bouwen.",
      subtitle:
        "Ons portfolio van praktische oplossingen voor data, security, blockchain en intelligente automatisering — elk een gen uitgedrukt vanuit hetzelfde engineering-DNA.",
      cyberxdefend: "DFIR-platform voor ransomware-inperking en forensisch onderzoek.",
      shopmuse: "AI-gestuurde winkelbouwer die productcatalogi omzet in webshops met hoge conversie.",
      chainfoundry: "Eén Rust-toolkit om data te decoderen, transporteren en indexeren over 7 blockchain-families.",
      multimind: "Open-source SDK voor multi-agent LLM-workflows in Python.",
      dbabridge: "Hybride Java+Rust-migratietool om SQL-, NoSQL- en vectordatabases zonder downtime te verplaatsen.",
      visit: "bezoeken →",
    },
    whyUs: {
      eyebrow: "Waarom ons kiezen",
      title: "Partner met vertrouwen.",
      subtitle: "We richten ons op het leveren van echte bedrijfswaarde — niet alleen technologie.",
      benefit1Title: "Bedrijfsgerichte aanpak",
      benefit1Description:
        "We spreken uw taal, geen tech-jargon. Oplossingen zijn ontworpen rond uw bedrijfsdoelen en leveren meetbare ROI.",
      benefit2Title: "End-to-end ondersteuning",
      benefit2Description:
        "Van strategie tot implementatie en verder zijn we bij elke stap aan uw zijde. Training, documentatie en doorlopende ondersteuning inbegrepen.",
      benefit3Title: "Transparante prijsstelling",
      benefit3Description:
        "Geen verrassingen, geen verborgen kosten. Duidelijke projectomvang, vaste prijsopties en regelmatige voortgangsupdates houden u in controle.",
    },
    cta: {
      title: "Laten we uw bedrijf transformeren met AI.",
      subtitle:
        "Klaar om kosten te verlagen, efficiëntie te verhogen en groei te stimuleren? Boek vandaag uw gratis strategiegesprek.",
      button: "Boek uw gratis strategiegesprek",
      perk1: "GRATIS CONSULT",
      perk2: "GEEN LANGETERMIJNCONTRACTEN",
      perk3: "RESULTAATGERICHT",
    },
    contact: {
      eyebrow: "Neem contact op",
      title: "Laten we uw transformatie starten.",
      subtitle:
        "Vertel ons over uw bedrijfsdoelen en we laten zien hoe we kunnen helpen. We reageren binnen 24 uur.",
      nameLabel: "Naam",
      emailLabel: "E-mail",
      messageLabel: "Uw bericht",
      messagePlaceholder: "Wat wilt u bouwen of verbeteren?",
      sendButton: "Bericht verzenden",
      emailTitle: "Of mail ons direct",
      emailSubtitle:
        "Geeft u de voorkeur aan e-mail? Neem contact op met ons team en we nemen binnen één werkdag contact met u op.",
    },
    footer: {
      tagline:
        "Uw betrouwbare partner voor IT-advies, AI-oplossingen, e-commerce en cybersecurity. Technologie die werkt voor uw bedrijf.",
      quickLinks: "Snelle links",
      services: "Diensten",
      getInTouch: "Contact",
      linkServices: "Diensten",
      linkIndustries: "Sectoren",
      linkSolutions: "Oplossingen",
      linkWhyUs: "Waarom ons kiezen",
      linkContact: "Contact",
      service1: "AI-advies & Automatisering",
      service2: "IT-advies & Onderaanneming",
      service3: "E-commerce-ontwikkeling",
      service4: "Cybersecurity & Cloud",
      service5: "Data-analyse",
      copyright: "© {year} AI2INNOVATE. Alle rechten voorbehouden.",
      sequenceComplete: "Ai2INNOVATE SRL · AVENUE LOUISE 231, 1050 IXELLEs, Belgium",
      linkPrivacy: "Privacybeleid",
      linkCookies: "Cookies",
    },
  },
  sk: {
    nav: {
      services: "Služby",
      industries: "Odvetvia",
      solutions: "Riešenia",
      whyUs: "Prečo my",
      bookFreeCall: "Rezervovať bezplatný hovor",
    },
    hero: {
      titleLine1: "Inovácia je v",
      titleLine2: "našej",
      subtitle:
        "AI poradenstvo, automatizácia, digitálny obchod a kybernetická bezpečnosť — zakomponované do genómu vášho podnikania, aby rástlo rýchlejšie, fungovalo efektívnejšie a zostalo bezpečné.",
      ctaPrimary: "Rezervovať bezplatný strategický hovor",
      ctaSecondary: "Preskúmať pramene ↓",
      geneTicker1: "AI & AUTOMATIZÁCIA",
      geneTicker2: "TALENT & IT",
      geneTicker3: "OBCHOD",
      geneTicker4: "OCHRANA / CYBER",
    },
    services: {
      eyebrow: "Čo robíme",
      title: "Štyri pramene. Jeden genóm pre rast.",
      subtitle:
        "Každá spolupráca sa mapuje na jeden zo štyroch základných prameňov — kombinovaných, sekvenovaných a vyjadrených podľa vašich obchodných cieľov.",
      gene1Title: "AI poradenstvo & Automatizácia",
      gene1Description:
        "Inteligentná automatizácia a AI riešenia, ktoré zefektívňujú operácie, znižujú manuálnu prácu a uvoľňujú váš tím, aby sa mohol sústrediť na to najdôležitejšie — rast podnikania.",
      gene2Title: "IT poradenstvo & Subdodávky",
      gene2Description:
        "Expertné IT talenty a poradenstvo na požiadanie. Od plánovania infraštruktúry po technickú implementáciu poskytujeme odbornosť, ktorú potrebujete, presne keď ju potrebujete.",
      gene3Title: "E-commerce & Aktivácia digitálneho predaja",
      gene3Description:
        "Vytvorte, spustite a škálujte svoj online obchod s ľahkosťou. Bezproblémové nákupné zážitky, ktoré menia návštevníkov na verných zákazníkov a podporujú rast príjmov.",
      gene4Title: "Kybernetická bezpečnosť & Cloud transformácia",
      gene4Description:
        "DFIR, zvládnutie ransomvéru a forenzné vyšetrovanie — poháňané cyberxdefend.com. Migrujte na modernú cloudovú infraštruktúru bezpečne, s integrovanou bezpečnosťou podnikovej úrovne.",
    },
    industries: {
      eyebrow: "Odvetvia, ktoré obsluhujeme",
      title: "Overená expertíza v mnohých sektoroch.",
      subtitle:
        "Rozumieme výzvam vášho odvetvia a dodávame riešenia, ktoré fungujú v reálnom svete — nielen na slidoch.",
      retailTitle: "Maloobchod & E-commerce",
      retailDesc: "Digitálne obchody a správa zásob.",
      healthcareTitle: "Zdravotníctvo",
      healthcareDesc: "Správa pacientov a compliance riešenia.",
      financeTitle: "Financie & Bankovníctvo",
      financeDesc: "Bezpečné platobné systémy a dátová analytika.",
      manufacturingTitle: "Výroba",
      manufacturingDesc: "Optimalizácia dodávateľského reťazca a automatizácia.",
      technologyTitle: "Technológie",
      technologyDesc: "Škálovateľná technologická infraštruktúra od prvého dňa.",
      professionalTitle: "Profesionálne služby",
      professionalDesc: "Správa klientov a automatizácia workflow.",
    },
    solutions: {
      eyebrow: "Riešenia",
      title: "Produkty a platformy, ktoré vytvárame.",
      subtitle:
        "Náš portfólio praktických riešení pre dáta, bezpečnosť, blockchain a inteligentnú automatizáciu — každé je gén vyjadrený z rovnakého inžinierskeho DNA.",
      cyberxdefend: "DFIR platforma na zadržanie ransomvéru a forenzné vyšetrovanie.",
      shopmuse: "AI tvorca e-shopov, ktorý mení produktové katalógy na obchody s vysokou konverziou.",
      chainfoundry: "Jedna Rust sada nástrojov na dekódovanie, prenos a indexovanie dát naprieč 7 rodinami blockchainov.",
      multimind: "Open-source SDK na tvorbu multi-agent LLM workflowov v Pythone.",
      dbabridge: "Hybridný migračný nástroj Java+Rust na presun SQL, NoSQL a vektorových databáz bez výpadku.",
      visit: "navštíviť →",
    },
    whyUs: {
      eyebrow: "Prečo nás vybrať",
      title: "Partner s dôverou.",
      subtitle: "Zameriavame sa na poskytovanie reálnej obchodnej hodnoty — nielen technológie.",
      benefit1Title: "Prístup zameraný na podnikanie",
      benefit1Description:
        "Hovoríme vaším jazykom, nie technickým žargónom. Riešenia sú navrhnuté podľa vašich obchodných cieľov a poskytujú merateľný ROI.",
      benefit2Title: "Komplexná podpora",
      benefit2Description:
        "Od stratégie po implementáciu a ďalej sme s vami pri každom kroku. Školenie, dokumentácia a priebežná podpora sú zahrnuté.",
      benefit3Title: "Transparentné ceny",
      benefit3Description:
        "Žiadne prekvapenia, žiadne skryté poplatky. Jasné rozsahy projektu, možnosti fixných cien a pravidelné aktualizácie vás udržia v kontrole.",
    },
    cta: {
      title: "Transformujme vaše podnikanie s AI.",
      subtitle:
        "Ste pripravení znížiť náklady, zvýšiť efektivitu a podporiť rast? Rezervujte si dnes svoj bezplatný strategický hovor.",
      button: "Rezervovať bezplatný strategický hovor",
      perk1: "BEZPLATNÁ KONZULTÁCIA",
      perk2: "BEZ DLHODOBÝCH ZMLÚV",
      perk3: "ZAMERANÉ NA VÝSLEDKY",
    },
    contact: {
      eyebrow: "Kontaktujte nás",
      title: "Začnime vašu transformáciu.",
      subtitle:
        "Povedzte nám o vašich obchodných cieľoch a ukážeme vám, ako môžeme pomôcť. Odpovedáme do 24 hodín.",
      nameLabel: "Meno",
      emailLabel: "Email",
      messageLabel: "Vaša správa",
      messagePlaceholder: "Čo by ste chceli vytvoriť alebo zlepšiť?",
      sendButton: "Odoslať správu",
      emailTitle: "Alebo nám napíšte priamo",
      emailSubtitle:
        "Uprednostňujete email? Kontaktujte náš tím a ozveme sa vám do jedného pracovného dňa.",
    },
    footer: {
      tagline:
        "Váš dôveryhodný partner pre IT poradenstvo, AI riešenia, e-commerce a kybernetickú bezpečnosť. Technológia, ktorá pracuje pre váš biznis.",
      quickLinks: "Rýchle odkazy",
      services: "Služby",
      getInTouch: "Kontakt",
      linkServices: "Služby",
      linkIndustries: "Odvetvia",
      linkSolutions: "Riešenia",
      linkWhyUs: "Prečo nás vybrať",
      linkContact: "Kontakt",
      service1: "AI poradenstvo & Automatizácia",
      service2: "IT poradenstvo & Subdodávky",
      service3: "E-commerce vývoj",
      service4: "Kybernetická bezpečnosť & Cloud",
      service5: "Dátová analytika",
      copyright: "© {year} AI2INNOVATE. Všetky práva vyhradené.",
      sequenceComplete: "Ai2INNOVATE SRL · AVENUE LOUISE 231, 1050 IXELLEs, Belgium",
      linkPrivacy: "Ochrana súkromia",
      linkCookies: "Cookies",
    },
  },
}

export function formatDnaYear(text: string, year = new Date().getFullYear()) {
  return text.replaceAll("{year}", String(year))
}
