import type { Language } from "../types"

export interface HomeTranslations {
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    trust1: string
    trust2: string
    trust3: string
    trust4: string
  }
  services: {
    badge: string
    title: string
    subtitle: string
    service1Title: string
    service1Description: string
    service1Detail: string
    service1Tag: string
    service2Title: string
    service2Description: string
    service2Detail: string
    service2Tag: string
    service3Title: string
    service3Description: string
    service3DetailLeft: string
    service3DetailRight: string
    service3Tag: string
    service4Title: string
    service4Description: string
    service4DetailLeft: string
    service4DetailRight: string
    service4Tag: string
    service5Title: string
    service5Description: string
    service5Detail: string
    service5Tag: string
    service6Title: string
    service6Description: string
    service6Detail: string
    service6Tag: string
    service7Title: string
    service7Description: string
    service8Title: string
    service8Description: string
    service9Title: string
    service9Description: string
    service10Title: string
    service10Description: string
  }
  capabilityFlow: {
    label: string
    title: string
    subtitle: string
    step1Title: string
    step1Description: string
    step2Title: string
    step2Description: string
    step3Title: string
    step3Description: string
    step4Title: string
    step4Description: string
  }
  products: {
    label: string
    title: string
    subtitle: string
    multiMindTitle: string
    multiMindBadge: string
    multiMindDescription: string
    multiMindFeature1Title: string
    multiMindFeature1Desc: string
    multiMindFeature2Title: string
    multiMindFeature2Desc: string
    multiMindFeature3Title: string
    multiMindFeature3Desc: string
    multiMindFeature4Title: string
    multiMindFeature4Desc: string
    multiMindGitHub: string
    multiMindSupport: string
    cyberXDefendTitle: string
    cyberXDefendBadge: string
    cyberXDefendDescription: string
    cyberXDefendCaption: string
    twinMindTitle: string
    twinMindBadge: string
    twinMindDescription: string
    twinMindCaption: string
    dbaTitle: string
    dbaBadge: string
    dbaDescLeft: string
    dbaDescRight: string
    dbaCaption: string
  }
  industries: {
    badge: string
    title: string
    subtitle: string
    retail: string
    healthcare: string
    finance: string
    manufacturing: string
    technology: string
    professional: string
    energy: string
    logistics: string
    realEstate: string
    education: string
    government: string
    defence: string
  }
  whyUs: {
    badge: string
    title: string
    subtitle: string
    benefit1Title: string
    benefit1Description: string
    benefit2Title: string
    benefit2Description: string
    benefit3Title: string
    benefit3Description: string
    benefit4Title: string
    benefit4Description: string
    benefit5Title: string
    benefit5Description: string
    benefit6Title: string
    benefit6Description: string
    quoteText: string
    quoteAuthor: string
  }
  story: {
    label: string
    title: string
    para1: string
    para2: string
    timeline1Title: string
    timeline2Title: string
    timeline3Title: string
    timeline4Title: string
    timeline5Title: string
  }
  blog: {
    label: string
    title: string
    subtitle: string
    blog1Date: string
    blog1Title: string
    blog1Left: string
    blog1Takeaway1: string
    blog1Takeaway2: string
    blog1Takeaway3: string
    blog1Takeaway4: string
    blog1Tags: string
    blog2Date: string
    blog2Title: string
    blog2Content: string
    blog2Tags: string
    blog3Date: string
    blog3Title: string
    blog3Content: string
    blog3Tags: string
    blog4Date: string
    blog4Title: string
    blog4Content: string
    blog4Tags: string
    blog5Date: string
    blog5Title: string
    blog5Content: string
    blog5Tags: string
    blog6Date: string
    blog6Title: string
    blog6Left: string
    blog6TakeawayTitle: string
    blog6Takeaway1: string
    blog6Takeaway2: string
    blog6Takeaway3: string
    blog6Takeaway4: string
    blog6Tags: string
    blog7Date: string
    blog7Title: string
    blog7Left: string
    blog7RedFlag1: string
    blog7RedFlag2: string
    blog7RedFlag3: string
    blog7RedFlag4: string
    blog7RedFlag5: string
    blog7RedFlag6: string
    blog7RedFlag7: string
    blog7Tags: string
    blog8Date: string
    blog8Title: string
    blog8Content: string
    blog8Tags: string
    blog9Date: string
    blog9Title: string
    blog9Content: string
    blog9Tags: string
  }
  caseStudies: {
    badge: string
    title: string
    subtitle: string
    viewCaseStudy: string
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  contact: {
    badge: string
    title: string
    subtitle: string
    formTitle: string
    formSubtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    companyPlaceholder: string
    requirementPlaceholder: string
    sendButton: string
    emailTitle: string
    emailSubtitle: string
    auditTitle: string
    auditDescription: string
    auditBenefit1: string
    auditBenefit2: string
    auditBenefit3: string
    auditBenefit4: string
    auditBenefit5: string
    auditBenefit6: string
  }
}

export const homeTranslations: Record<Language, HomeTranslations> = {
  en: {
  hero: {
    badge: "AI-Powered Business Solutions",
    title: "AI-Powered Innovation",
    titleHighlight: "for Businesses",
    subtitle: "Consulting, Automation, Digital Commerce & Security  to scale your business faster",
    ctaPrimary: "Book a Free Strategy Call",
    ctaSecondary: "Explore Services",
    trust1: "Certified Professionals",
    trust2: "Proven Results",
    trust3: "No Hidden Costs",
    trust4: "Safe & Local AI Specialists",
  },
    services: {
      badge: "What We Do",
      title: "Our Services",
      subtitle: "Comprehensive technology solutions designed to accelerate your business growth",
      service1Title: "AI Consulting & Automation",
      service1Description:
        "Implement intelligent automation and AI solutions that streamline operations, reduce manual work, and help your team focus on what matters most—growing your business.",
      service2Title: "IT Consulting & Sub-Contracting",
      service2Description:
        "Access expert IT talent and consulting services on-demand. From infrastructure planning to technical implementation, we provide the expertise you need, when you need it.",
      service3Title: "E-commerce & Digital Sales Enablement",
      service3Description:
        "Build, launch, and scale your online store with ease. We create seamless shopping experiences that turn visitors into loyal customers and drive revenue growth.",
      service4Title: "Cybersecurity & Cloud Transformation",
      service4Description:
        "Defend your business with DFIR, ransomware containment, and forensic investigation—powered by cyberxdefend.com. Migrate to modern cloud infrastructure safely, with enterprise-grade security built in.",
    },
    industries: {
      badge: "Industries We Serve",
      title: "Proven Expertise Across Multiple Sectors",
      subtitle: "We understand your industry challenges and deliver solutions that work",
      retail: "Retail & E-Commerce",
      healthcare: "Healthcare",
      finance: "Finance & Banking",
      manufacturing: "Manufacturing",
      technology: "Technology",
      professional: "Professional Services",
    },
    whyUs: {
      badge: "Why Choose Us",
      title: "Partner with Confidence",
      subtitle: "We focus on delivering real business value, not just technology",
      benefit1Title: "Business-First Approach",
      benefit1Description:
        "We speak your language, not tech jargon. Our solutions are designed around your business goals and deliver measurable ROI.",
      benefit2Title: "End-to-End Support",
      benefit2Description:
        "From strategy to implementation and beyond, we're with you every step of the way. Training, documentation, and ongoing support included.",
      benefit3Title: "Transparent Pricing",
      benefit3Description:
        "No surprises, no hidden fees. Clear project scopes, fixed pricing options, and regular progress updates keep you in control.",
    },
    caseStudies: {
      badge: "Success Stories",
      title: "Real Results for Real Businesses",
      subtitle: "See how we've helped businesses like yours achieve measurable growth",
      viewCaseStudy: "View Full Case Study",
    },
    cta: {
      title: "Let's Transform Your Business with AI",
      subtitle: "Ready to reduce costs, increase efficiency, and drive growth? Book your free strategy call today.",
      button: "Book Your Free Strategy Call",
    },
    contact: {
      badge: "Get In Touch",
      title: "Let's Start Your Transformation",
      subtitle: "Tell us about your business goals and we'll show you how we can help",
      formTitle: "Send Us a Message",
      formSubtitle: "Fill out the form and we'll get back to you within 24 hours",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Email Address",
      companyPlaceholder: "Company Name",
      requirementPlaceholder: "Brief Requirement - What can we help you with?",
      sendButton: "Send Message",
      emailTitle: "Or Email Us Directly",
      emailSubtitle: "Prefer email? Reach out to our team directly",
      auditTitle: "Free AI Strategy Audit",
      auditDescription:
        "Get a complimentary 30-minute consultation to discover how AI and automation can transform your business operations.",
      auditBenefit1: "Identify automation opportunities",
      auditBenefit2: "Cost-benefit analysis",
      auditBenefit3: "Custom roadmap for your business",
    },
  },
  fr: {
    hero: {
      badge: "Solutions d'Affaires Alimentées par IA",
      title: "Innovation Alimentée par IA",
      titleHighlight: "pour les Entreprises",
      subtitle: "Conseil, Automatisation et Commerce Digital pour faire croître votre entreprise plus rapidement",
      ctaPrimary: "Réserver un Appel Stratégique Gratuit",
      ctaSecondary: "Explorer les Services",
      trust1: "Professionnels Certifiés",
      trust2: "Résultats Prouvés",
      trust3: "Sans Frais Cachés",
    },
    services: {
      badge: "Ce Que Nous Faisons",
      title: "Nos Services",
      subtitle: "Solutions technologiques complètes conçues pour accélérer la croissance de votre entreprise",
      service1Title: "Conseil et Automatisation IA",
      service1Description:
        "Implémentez des solutions d'automatisation intelligente et d'IA qui rationalisent les opérations, réduisent le travail manuel et aident votre équipe à se concentrer sur l'essentiel—développer votre entreprise.",
      service2Title: "Conseil IT et Sous-Traitance",
      service2Description:
        "Accédez à des talents IT experts et des services de conseil à la demande. De la planification d'infrastructure à la mise en œuvre technique, nous fournissons l'expertise dont vous avez besoin, quand vous en avez besoin.",
      service3Title: "E-commerce et Activation des Ventes Digitales",
      service3Description:
        "Construisez, lancez et développez votre boutique en ligne facilement. Nous créons des expériences d'achat fluides qui transforment les visiteurs en clients fidèles et stimulent la croissance du chiffre d'affaires.",
      service4Title: "Cybersécurité et Transformation Cloud",
      service4Description:
        "Défendez votre entreprise avec DFIR, confinement des ransomwares et investigation forensique—propulsé par cyberxdefend.com. Migrez vers une infrastructure cloud moderne en toute sécurité, avec une sécurité de niveau entreprise intégrée.",
    },
    industries: {
      badge: "Industries que Nous Servons",
      title: "Expertise Prouvée dans Plusieurs Secteurs",
      subtitle: "Nous comprenons les défis de votre industrie et fournissons des solutions qui fonctionnent",
      retail: "Commerce de Détail et E-Commerce",
      healthcare: "Santé",
      finance: "Finance et Banque",
      manufacturing: "Fabrication",
      technology: "Technologie",
      professional: "Services Professionnels",
    },
    whyUs: {
      badge: "Pourquoi Nous Choisir",
      title: "Partenaire de Confiance",
      subtitle: "Nous nous concentrons sur la création de valeur commerciale réelle, pas seulement de la technologie",
      benefit1Title: "Approche Axée sur les Affaires",
      benefit1Description:
        "Nous parlons votre langue, pas du jargon technique. Nos solutions sont conçues autour de vos objectifs commerciaux et offrent un ROI mesurable.",
      benefit2Title: "Support de Bout en Bout",
      benefit2Description:
        "De la stratégie à la mise en œuvre et au-delà, nous sommes avec vous à chaque étape. Formation, documentation et support continu inclus.",
      benefit3Title: "Tarification Transparente",
      benefit3Description:
        "Pas de surprises, pas de frais cachés. Portées de projet claires, options de tarification fixes et mises à jour régulières vous gardent en contrôle.",
    },
    caseStudies: {
      badge: "Histoires de Succès",
      title: "Résultats Réels pour Vraies Entreprises",
      subtitle: "Voyez comment nous avons aidé des entreprises comme la vôtre à réaliser une croissance mesurable",
      viewCaseStudy: "Voir l'Étude de Cas Complète",
    },
    cta: {
      title: "Transformons Votre Entreprise avec l'IA",
      subtitle:
        "Prêt à réduire les coûts, augmenter l'efficacité et stimuler la croissance? Réservez votre appel stratégique gratuit aujourd'hui.",
      button: "Réserver Votre Appel Stratégique Gratuit",
    },
    contact: {
      badge: "Contactez-Nous",
      title: "Commençons Votre Transformation",
      subtitle: "Parlez-nous de vos objectifs commerciaux et nous vous montrerons comment nous pouvons vous aider",
      formTitle: "Envoyez-Nous un Message",
      formSubtitle: "Remplissez le formulaire et nous vous répondrons dans les 24 heures",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "Adresse Email",
      companyPlaceholder: "Nom de l'Entreprise",
      requirementPlaceholder: "Brève Exigence - Comment pouvons-nous vous aider?",
      sendButton: "Envoyer le Message",
      emailTitle: "Ou Écrivez-Nous Directement",
      emailSubtitle: "Vous préférez l'email? Contactez directement notre équipe",
      auditTitle: "Audit Stratégique IA Gratuit",
      auditDescription:
        "Obtenez une consultation gratuite de 30 minutes pour découvrir comment l'IA et l'automatisation peuvent transformer vos opérations commerciales.",
      auditBenefit1: "Identifier les opportunités d'automatisation",
      auditBenefit2: "Analyse coûts-bénéfices",
      auditBenefit3: "Feuille de route personnalisée pour votre entreprise",
    },
  },
  de: {
    hero: {
      badge: "KI-gestützte Geschäftslösungen",
      title: "KI-gestützte Innovation",
      titleHighlight: "für Unternehmen",
      subtitle: "Beratung, Automatisierung und Digitaler Handel, um Ihr Geschäft schneller zu skalieren",
      ctaPrimary: "Kostenloses Strategiegespräch Buchen",
      ctaSecondary: "Services Erkunden",
      trust1: "Zertifizierte Fachleute",
      trust2: "Bewährte Ergebnisse",
      trust3: "Keine Versteckten Kosten",
    },
    services: {
      badge: "Was Wir Tun",
      title: "Unsere Dienstleistungen",
      subtitle: "Umfassende Technologielösungen zur Beschleunigung Ihres Geschäftswachstums",
      service1Title: "KI-Beratung & Automatisierung",
      service1Description:
        "Implementieren Sie intelligente Automatisierung und KI-Lösungen, die Abläufe rationalisieren, manuelle Arbeit reduzieren und Ihrem Team helfen, sich auf das Wesentliche zu konzentrieren—Ihr Geschäft zu vergrößern.",
      service2Title: "IT-Beratung & Subunternehmen",
      service2Description:
        "Zugang zu IT-Experten und Beratungsdiensten auf Abruf. Von der Infrastrukturplanung bis zur technischen Implementierung bieten wir die Expertise, die Sie benötigen, wann Sie sie benötigen.",
      service3Title: "E-Commerce & Digitale Vertriebsunterstützung",
      service3Description:
        "Bauen, starten und skalieren Sie Ihren Online-Shop mit Leichtigkeit. Wir schaffen nahtlose Einkaufserlebnisse, die Besucher in treue Kunden verwandeln und das Umsatzwachstum fördern.",
      service4Title: "Cybersicherheit & Cloud-Transformation",
      service4Description:
        "Verteidigen Sie Ihr Unternehmen mit DFIR, Ransomware-Eindämmung und forensischer Untersuchung—powered by cyberxdefend.com. Migrieren Sie sicher auf moderne Cloud-Infrastruktur mit integrierter Sicherheit auf Unternehmensniveau.",
    },
    industries: {
      badge: "Branchen, die Wir Bedienen",
      title: "Bewährte Expertise in Mehreren Sektoren",
      subtitle: "Wir verstehen Ihre Branchenherausforderungen und liefern Lösungen, die funktionieren",
      retail: "Einzelhandel & E-Commerce",
      healthcare: "Gesundheitswesen",
      finance: "Finanzen & Banking",
      manufacturing: "Fertigung",
      technology: "Technologie",
      professional: "Professionelle Dienstleistungen",
    },
    whyUs: {
      badge: "Warum Uns Wählen",
      title: "Partner mit Vertrauen",
      subtitle: "Wir konzentrieren uns auf die Lieferung von echtem Geschäftswert, nicht nur Technologie",
      benefit1Title: "Geschäftsorientierter Ansatz",
      benefit1Description:
        "Wir sprechen Ihre Sprache, kein Tech-Jargon. Unsere Lösungen sind um Ihre Geschäftsziele herum konzipiert und liefern messbaren ROI.",
      benefit2Title: "End-to-End-Unterstützung",
      benefit2Description:
        "Von der Strategie bis zur Implementierung und darüber hinaus sind wir bei jedem Schritt an Ihrer Seite. Schulung, Dokumentation und kontinuierliche Unterstützung inklusive.",
      benefit3Title: "Transparente Preisgestaltung",
      benefit3Description:
        "Keine Überraschungen, keine versteckten Gebühren. Klare Projektumfänge, feste Preisoptionen und regelmäßige Fortschrittsaktualisierungen halten Sie in Kontrolle.",
    },
    caseStudies: {
      badge: "Erfolgsgeschichten",
      title: "Echte Ergebnisse für Echte Unternehmen",
      subtitle: "Sehen Sie, wie wir Unternehmen wie Ihres geholfen haben, messbares Wachstum zu erzielen",
      viewCaseStudy: "Vollständige Fallstudie Ansehen",
    },
    cta: {
      title: "Lassen Sie Uns Ihr Geschäft mit KI Transformieren",
      subtitle:
        "Bereit, Kosten zu senken, Effizienz zu steigern und Wachstum voranzutreiben? Buchen Sie heute Ihr kostenloses Strategiegespräch.",
      button: "Ihr Kostenloses Strategiegespräch Buchen",
    },
    contact: {
      badge: "Kontaktieren Sie Uns",
      title: "Lassen Sie Uns Ihre Transformation Beginnen",
      subtitle: "Erzählen Sie uns von Ihren Geschäftszielen und wir zeigen Ihnen, wie wir helfen können",
      formTitle: "Senden Sie Uns eine Nachricht",
      formSubtitle: "Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "E-Mail-Adresse",
      companyPlaceholder: "Firmenname",
      requirementPlaceholder: "Kurze Anforderung - Wie können wir Ihnen helfen?",
      sendButton: "Nachricht Senden",
      emailTitle: "Oder Mailen Sie Uns Direkt",
      emailSubtitle: "Bevorzugen Sie E-Mail? Kontaktieren Sie unser Team direkt",
      auditTitle: "Kostenloser KI-Strategieaudit",
      auditDescription:
        "Erhalten Sie eine kostenlose 30-minütige Beratung, um herauszufinden, wie KI und Automatisierung Ihre Geschäftsabläufe transformieren können.",
      auditBenefit1: "Automatisierungsmöglichkeiten identifizieren",
      auditBenefit2: "Kosten-Nutzen-Analyse",
      auditBenefit3: "Individueller Fahrplan für Ihr Unternehmen",
    },
  },
  nl: {
    hero: {
      badge: "AI-Aangedreven Bedrijfsoplossingen",
      title: "AI-Aangedreven Innovatie",
      titleHighlight: "voor Bedrijven",
      subtitle: "Advies, Automatisering en Digitale Handel om uw bedrijf sneller te laten groeien",
      ctaPrimary: "Boek een Gratis Strategiegesprek",
      ctaSecondary: "Ontdek Diensten",
      trust1: "Gecertificeerde Professionals",
      trust2: "Bewezen Resultaten",
      trust3: "Geen Verborgen Kosten",
    },
    services: {
      badge: "Wat Wij Doen",
      title: "Onze Diensten",
      subtitle: "Uitgebreide technologieoplossingen ontworpen om uw bedrijfsgroei te versnellen",
      service1Title: "AI Advies & Automatisering",
      service1Description:
        "Implementeer intelligente automatisering en AI-oplossingen die operaties stroomlijnen, handmatig werk verminderen en uw team helpen zich te concentreren op wat het belangrijkst is—uw bedrijf laten groeien.",
      service2Title: "IT Advies & Onderaanneming",
      service2Description:
        "Toegang tot expert IT-talent en adviesdiensten op aanvraag. Van infrastructuurplanning tot technische implementatie, wij bieden de expertise die u nodig heeft, wanneer u het nodig heeft.",
      service3Title: "E-commerce & Digitale Verkoopactivering",
      service3Description:
        "Bouw, lanceer en schaal uw online winkel met gemak. We creëren naadloze winkelervaringen die bezoekers omzetten in loyale klanten en omzetgroei stimuleren.",
      service4Title: "Cybersecurity & Cloud Transformatie",
      service4Description:
        "Verdedig uw bedrijf met DFIR, ransomware-bestrijding en forensisch onderzoek—aangedreven door cyberxdefend.com. Migreer veilig naar moderne cloud-infrastructuur met ingebouwde beveiliging op ondernemingsniveau.",
    },
    industries: {
      badge: "Sectoren Die Wij Bedienen",
      title: "Bewezen Expertise in Meerdere Sectoren",
      subtitle: "We begrijpen uw branche-uitdagingen en leveren oplossingen die werken",
      retail: "Detailhandel & E-Commerce",
      healthcare: "Gezondheidszorg",
      finance: "Financiën & Banking",
      manufacturing: "Productie",
      technology: "Technologie",
      professional: "Professionele Diensten",
    },
    whyUs: {
      badge: "Waarom Ons Kiezen",
      title: "Partner met Vertrouwen",
      subtitle: "We richten ons op het leveren van echte bedrijfswaarde, niet alleen technologie",
      benefit1Title: "Bedrijfsgerichte Aanpak",
      benefit1Description:
        "We spreken uw taal, geen tech-jargon. Onze oplossingen zijn ontworpen rond uw bedrijfsdoelen en leveren meetbare ROI.",
      benefit2Title: "End-to-End Ondersteuning",
      benefit2Description:
        "Van strategie tot implementatie en verder, we zijn bij elke stap aan uw zijde. Training, documentatie en doorlopende ondersteuning inbegrepen.",
      benefit3Title: "Transparante Prijsstelling",
      benefit3Description:
        "Geen verrassingen, geen verborgen kosten. Duidelijke projectomvang, vaste prijsopties en regelmatige voortgangsupdates houden u in controle.",
    },
    caseStudies: {
      badge: "Succesverhalen",
      title: "Echte Resultaten voor Echte Bedrijven",
      subtitle: "Zie hoe we bedrijven zoals het uwe hebben geholpen meetbare groei te bereiken",
      viewCaseStudy: "Bekijk Volledige Casestudy",
    },
    cta: {
      title: "Laten We Uw Bedrijf Transformeren met AI",
      subtitle:
        "Klaar om kosten te verlagen, efficiëntie te verhogen en groei te stimuleren? Boek vandaag uw gratis strategiegesprek.",
      button: "Boek Uw Gratis Strategiegesprek",
    },
    contact: {
      badge: "Neem Contact Op",
      title: "Laten We Uw Transformatie Starten",
      subtitle: "Vertel ons over uw bedrijfsdoelen en we laten u zien hoe we kunnen helpen",
      formTitle: "Stuur Ons een Bericht",
      formSubtitle: "Vul het formulier in en we nemen binnen 24 uur contact met u op",
      namePlaceholder: "Uw Naam",
      emailPlaceholder: "E-mailadres",
      companyPlaceholder: "Bedrijfsnaam",
      requirementPlaceholder: "Korte Eis - Hoe kunnen we u helpen?",
      sendButton: "Bericht Verzenden",
      emailTitle: "Of Mail Ons Direct",
      emailSubtitle: "Geeft u de voorkeur aan e-mail? Neem rechtstreeks contact op met ons team",
      auditTitle: "Gratis AI Strategieaudit",
      auditDescription:
        "Ontvang een gratis 30-minuten consult om te ontdekken hoe AI en automatisering uw bedrijfsvoering kunnen transformeren.",
      auditBenefit1: "Automatiseringsmogelijkheden identificeren",
      auditBenefit2: "Kosten-batenanalyse",
      auditBenefit3: "Aangepast stappenplan voor uw bedrijf",
    },
  },
  sk: {
    hero: {
      badge: "AI Obchodné Riešenia",
      title: "AI Inovácie",
      titleHighlight: "pre Firmy",
      subtitle: "Poradenstvo, Automatizácia a Digitálny Obchod na rýchlejšie škálovanie vášho podnikania",
      ctaPrimary: "Rezervovať Bezplatný Strategický Hovor",
      ctaSecondary: "Preskúmať Služby",
      trust1: "Certifikovaní Profesionáli",
      trust2: "Dokázané Výsledky",
      trust3: "Žiadne Skryté Poplatky",
    },
    services: {
      badge: "Čo Robíme",
      title: "Naše Služby",
      subtitle: "Komplexné technologické riešenia navrhnuté na urýchlenie rastu vášho podnikania",
      service1Title: "AI Poradenstvo & Automatizácia",
      service1Description:
        "Implementujte inteligentnú automatizáciu a AI riešenia, ktoré zefektívňujú operácie, znižujú manuálnu prácu a pomáhajú vášmu týmu sústrediť sa na to najdôležitejšie—rast vášho podnikania.",
      service2Title: "IT Poradenstvo & Subdodávky",
      service2Description:
        "Prístup k expertným IT talentom a poradenským službám na požiadanie. Od plánovania infraštruktúry po technickú implementáciu poskytujeme odbornosť, ktorú potrebujete, keď ju potrebujete.",
      service3Title: "E-commerce & Aktivácia Digitálneho Predaja",
      service3Description:
        "Vytvorte, spustite a škálujte svoj online obchod s ľahkosťou. Vytvárame bezproblémové nákupné zážitky, ktoré menia návštevníkov na verných zákazníkov a podporujú rast príjmov.",
      service4Title: "Kybernetická Bezpečnosť & Cloud Transformácia",
      service4Description:
        "Chráňte svoje podnikanie pomocou DFIR, zvládnutia ransomvéru a forenzného vyšetrovania—poháňané cyberxdefend.com. Migrujte na modernú cloudovú infraštruktúru bezpečne, s integrovanou bezpečnosťou podnikovej úrovne.",
    },
    industries: {
      badge: "Odvetvia, Ktoré Obsluhujeme",
      title: "Dokázaná Expertíza v Mnohých Sektoroch",
      subtitle: "Rozumieme výzvam vášho odvetvia a poskytujeme riešenia, ktoré fungujú",
      retail: "Maloobchod & E-Commerce",
      healthcare: "Zdravotníctvo",
      finance: "Financie & Bankovníctvo",
      manufacturing: "Výroba",
      technology: "Technológie",
      professional: "Profesionálne Služby",
    },
    whyUs: {
      badge: "Prečo Nás Vybrať",
      title: "Partner s Dôverou",
      subtitle: "Zameriavame sa na poskytovanie reálnej obchodnej hodnoty, nielen technológie",
      benefit1Title: "Prístup Zameraný na Podnikanie",
      benefit1Description:
        "Hovoríme vašim jazykom, nie technickým žargónom. Naše riešenia sú navrhnuté podľa vašich obchodných cieľov a poskytujú merateľný ROI.",
      benefit2Title: "Komplexná Podpora",
      benefit2Description:
        "Od stratégie po implementáciu a ďalej sme s vami pri každom kroku. Školenie, dokumentácia a priebežná podpora sú zahrnuté.",
      benefit3Title: "Transparentné Ceny",
      benefit3Description:
        "Žiadne prekvapenia, žiadne skryté poplatky. Jasné rozsahy projektu, možnosti fixných cien a pravidelné aktualizácie vás udržia v kontrole.",
    },
    caseStudies: {
      badge: "Príbehy Úspechu",
      title: "Skutočné Výsledky pre Skutočné Firmy",
      subtitle: "Pozrite si, ako sme pomohli firmám ako je tá vaša dosiahnuť merateľný rast",
      viewCaseStudy: "Zobraziť Kompletnú Prípadovú Štúdiu",
    },
    cta: {
      title: "Transformujme Vaše Podnikanie s AI",
      subtitle:
        "Ste pripravení znížiť náklady, zvýšiť efektivitu a podporiť rast? Rezervujte si dnes svoj bezplatný strategický hovor.",
      button: "Rezervovať Bezplatný Strategický Hovor",
    },
    contact: {
      badge: "Kontaktujte Nás",
      title: "Začnime Vašu Transformáciu",
      subtitle: "Povedzte nám o vašich obchodných cieľoch a ukážeme vám, ako môžeme pomôcť",
      formTitle: "Pošlite Nám Správu",
      formSubtitle: "Vyplňte formulár a ozveme sa vám do 24 hodín",
      namePlaceholder: "Vaše Meno",
      emailPlaceholder: "Emailová Adresa",
      companyPlaceholder: "Názov Spoločnosti",
      requirementPlaceholder: "Stručná Požiadavka - Ako vám môžeme pomôcť?",
      sendButton: "Odoslať Správu",
      emailTitle: "Alebo Nám Napíšte Priamo",
      emailSubtitle: "Uprednostňujete email? Kontaktujte náš tím priamo",
      auditTitle: "Bezplatný AI Strategický Audit",
      auditDescription:
        "Získajte bezplatnú 30-minútovú konzultáciu a zistite, ako môže AI a automatizácia transformovať vaše obchodné operácie.",
      auditBenefit1: "Identifikácia príležitostí na automatizáciu",
      auditBenefit2: "Analýza nákladov a prínosov",
      auditBenefit3: "Vlastná mapa cesty pre vaše podnikanie",
    },
  },
}
