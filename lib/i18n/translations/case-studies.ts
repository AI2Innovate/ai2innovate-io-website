import type { Language } from "../types"

export interface CaseStudy {
  id: string
  slug: string
  title: string
  industry: string
  outcome: string
  description: string
  metric: string
  image: string
  fullDescription: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  timeline: string
  clientType: string
}

export const caseStudiesData: Record<Language, CaseStudy[]> = {
  en: [
    {
      id: "ecommerce-revenue-growth",
      slug: "ecommerce-revenue-growth",
      title: "E-commerce Revenue Growth",
      industry: "Retail",
      outcome: "250% increase in online sales within 6 months",
      description: "Helped a traditional retailer launch a modern e-commerce platform with AI-powered recommendations.",
      metric: "+250%",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "A traditional brick-and-mortar retailer wanted to expand their business online but lacked the technical expertise and infrastructure. They approached AI2INNOVATE to build a complete e-commerce solution that could compete with major online retailers.",
      challenge:
        "The client had zero online presence and needed to quickly establish a competitive e-commerce platform. They required product recommendations, inventory management, payment processing, and customer analytics—all integrated seamlessly.",
      solution:
        "We built a custom e-commerce platform using modern web technologies with AI-powered product recommendations. The system included real-time inventory tracking, secure payment processing, automated email marketing, and comprehensive analytics dashboards.",
      results: [
        "250% increase in revenue within first 6 months",
        "15,000+ new online customers acquired",
        "40% higher average order value through AI recommendations",
        "99.9% uptime with zero security breaches",
      ],
      technologies: [
        "Next.js",
        "AI Product Recommendations",
        "Stripe Payments",
        "Cloud Infrastructure",
        "Analytics Dashboard",
      ],
      timeline: "3 months development + 3 months optimization",
      clientType: "Mid-size Retail Chain",
    },
    {
      id: "manufacturing-automation",
      slug: "manufacturing-automation",
      title: "Automated Operations",
      industry: "Manufacturing",
      outcome: "40% reduction in manual processes",
      description: "Implemented AI automation to streamline inventory management and reduce operational costs.",
      metric: "40% Less",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "A manufacturing company was struggling with manual inventory tracking, leading to frequent stockouts, overstocking, and inefficient production planning. They needed an intelligent system to automate their operations.",
      challenge:
        "Manual processes were costing the company time and money. Inventory counts were inaccurate, production schedules were inefficient, and there was no real-time visibility into operations. The team spent hours on data entry and reporting.",
      solution:
        "We implemented an AI-powered operations management system that automated inventory tracking, predictive ordering, production scheduling, and real-time reporting. The system integrated with existing equipment and provided mobile access for floor managers.",
      results: [
        "40% reduction in manual data entry tasks",
        "$200,000 annual cost savings",
        "25% improvement in production efficiency",
        "90% reduction in stockout incidents",
      ],
      technologies: ["IoT Sensors", "AI Predictive Analytics", "Cloud Database", "Mobile App", "Real-time Dashboard"],
      timeline: "4 months implementation",
      clientType: "Manufacturing Plant (200 employees)",
    },
    {
      id: "healthcare-cloud-migration",
      slug: "healthcare-cloud-migration",
      title: "Cloud Migration Success",
      industry: "Healthcare",
      outcome: "100% data security compliance achieved",
      description: "Migrated critical patient data to secure cloud infrastructure with zero downtime.",
      metric: "100%",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "A healthcare provider needed to modernize their IT infrastructure by migrating from on-premise servers to secure cloud infrastructure. Patient data security and compliance were non-negotiable requirements.",
      challenge:
        "The healthcare provider was using outdated on-premise servers that were expensive to maintain and lacked modern security features. They needed to migrate sensitive patient data to the cloud while maintaining HIPAA compliance and ensuring zero downtime.",
      solution:
        "We executed a phased cloud migration strategy using enterprise-grade security protocols. We implemented encrypted data transfer, multi-factor authentication, automated backups, disaster recovery systems, and comprehensive audit logging—all while maintaining 100% uptime.",
      results: [
        "Zero downtime during migration",
        "100% HIPAA compliance achieved",
        "60% reduction in IT infrastructure costs",
        "99.99% system availability",
      ],
      technologies: [
        "AWS Cloud",
        "Data Encryption",
        "HIPAA Compliance Tools",
        "Backup & Recovery",
        "Security Monitoring",
      ],
      timeline: "6 months phased migration",
      clientType: "Healthcare Provider (Multi-location)",
    },
  ],
  fr: [
    {
      id: "ecommerce-revenue-growth",
      slug: "croissance-revenus-ecommerce",
      title: "Croissance des Revenus E-commerce",
      industry: "Commerce de Détail",
      outcome: "Augmentation de 250% des ventes en ligne en 6 mois",
      description:
        "Aidé un détaillant traditionnel à lancer une plateforme e-commerce moderne avec des recommandations alimentées par IA.",
      metric: "+250%",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "Un détaillant traditionnel souhaitait étendre son activité en ligne mais manquait d'expertise technique et d'infrastructure. Ils ont contacté AI2INNOVATE pour créer une solution e-commerce complète.",
      challenge:
        "Le client n'avait aucune présence en ligne et devait rapidement établir une plateforme e-commerce compétitive. Ils avaient besoin de recommandations de produits, de gestion des stocks, de traitement des paiements et d'analyses clients.",
      solution:
        "Nous avons construit une plateforme e-commerce personnalisée avec des recommandations de produits alimentées par IA. Le système incluait le suivi des stocks en temps réel, le traitement sécurisé des paiements et des tableaux de bord analytiques complets.",
      results: [
        "Augmentation de 250% du chiffre d'affaires en 6 mois",
        "15 000+ nouveaux clients en ligne acquis",
        "Valeur moyenne des commandes 40% plus élevée grâce à l'IA",
        "99,9% de disponibilité sans faille de sécurité",
      ],
      technologies: ["Next.js", "Recommandations IA", "Paiements Stripe", "Infrastructure Cloud", "Tableau de Bord"],
      timeline: "3 mois de développement + 3 mois d'optimisation",
      clientType: "Chaîne de Détail Moyenne",
    },
    {
      id: "manufacturing-automation",
      slug: "automatisation-fabrication",
      title: "Opérations Automatisées",
      industry: "Fabrication",
      outcome: "Réduction de 40% des processus manuels",
      description:
        "Mise en œuvre de l'automatisation IA pour rationaliser la gestion des stocks et réduire les coûts opérationnels.",
      metric: "40% Moins",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "Une entreprise de fabrication avait du mal avec le suivi manuel des stocks, entraînant des ruptures de stock fréquentes et une planification de production inefficace.",
      challenge:
        "Les processus manuels coûtaient du temps et de l'argent à l'entreprise. Les comptages de stocks étaient inexacts et il n'y avait aucune visibilité en temps réel sur les opérations.",
      solution:
        "Nous avons mis en œuvre un système de gestion des opérations alimenté par IA qui a automatisé le suivi des stocks, les commandes prédictives et les rapports en temps réel.",
      results: [
        "Réduction de 40% des tâches de saisie manuelle",
        "200 000€ d'économies annuelles",
        "Amélioration de 25% de l'efficacité de production",
        "Réduction de 90% des ruptures de stock",
      ],
      technologies: ["Capteurs IoT", "Analyses Prédictives IA", "Base de Données Cloud", "Application Mobile"],
      timeline: "4 mois de mise en œuvre",
      clientType: "Usine de Fabrication (200 employés)",
    },
    {
      id: "healthcare-cloud-migration",
      slug: "migration-cloud-sante",
      title: "Migration Cloud Réussie",
      industry: "Santé",
      outcome: "Conformité de sécurité des données à 100%",
      description:
        "Migration des données critiques des patients vers une infrastructure cloud sécurisée sans temps d'arrêt.",
      metric: "100%",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "Un fournisseur de soins de santé devait moderniser son infrastructure informatique en migrant des serveurs sur site vers une infrastructure cloud sécurisée.",
      challenge:
        "Le fournisseur utilisait des serveurs sur site obsolètes coûteux à maintenir. Ils devaient migrer des données sensibles vers le cloud tout en maintenant la conformité et en assurant un temps d'arrêt nul.",
      solution:
        "Nous avons exécuté une stratégie de migration cloud progressive avec des protocoles de sécurité de niveau entreprise, un chiffrement des données et une surveillance complète.",
      results: [
        "Zéro temps d'arrêt pendant la migration",
        "100% de conformité atteinte",
        "Réduction de 60% des coûts d'infrastructure informatique",
        "Disponibilité du système à 99,99%",
      ],
      technologies: ["AWS Cloud", "Chiffrement des Données", "Outils de Conformité", "Sauvegarde et Récupération"],
      timeline: "6 mois de migration progressive",
      clientType: "Fournisseur de Soins de Santé",
    },
  ],
  de: [
    {
      id: "ecommerce-revenue-growth",
      slug: "ecommerce-umsatzwachstum",
      title: "E-Commerce Umsatzwachstum",
      industry: "Einzelhandel",
      outcome: "250% Steigerung der Online-Verkäufe innerhalb von 6 Monaten",
      description:
        "Unterstützte einen traditionellen Einzelhändler beim Start einer modernen E-Commerce-Plattform mit KI-gestützten Empfehlungen.",
      metric: "+250%",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "Ein traditioneller stationärer Einzelhändler wollte sein Geschäft online erweitern, verfügte jedoch nicht über das technische Fachwissen und die Infrastruktur.",
      challenge:
        "Der Kunde hatte keine Online-Präsenz und musste schnell eine wettbewerbsfähige E-Commerce-Plattform aufbauen. Sie benötigten Produktempfehlungen, Bestandsverwaltung und Kundendatenanalyse.",
      solution:
        "Wir haben eine maßgeschneiderte E-Commerce-Plattform mit KI-gestützten Produktempfehlungen erstellt. Das System umfasste Echtzeit-Bestandsverfolgung, sichere Zahlungsabwicklung und umfassende Analyse-Dashboards.",
      results: [
        "250% Umsatzsteigerung in den ersten 6 Monaten",
        "15.000+ neue Online-Kunden gewonnen",
        "40% höherer durchschnittlicher Bestellwert durch KI",
        "99,9% Verfügbarkeit ohne Sicherheitsverletzungen",
      ],
      technologies: [
        "Next.js",
        "KI-Produktempfehlungen",
        "Stripe-Zahlungen",
        "Cloud-Infrastruktur",
        "Analyse-Dashboard",
      ],
      timeline: "3 Monate Entwicklung + 3 Monate Optimierung",
      clientType: "Mittelgroße Einzelhandelskette",
    },
    {
      id: "manufacturing-automation",
      slug: "fertigungsautomatisierung",
      title: "Automatisierte Abläufe",
      industry: "Fertigung",
      outcome: "40% Reduzierung manueller Prozesse",
      description:
        "Implementierung von KI-Automatisierung zur Optimierung der Bestandsverwaltung und Senkung der Betriebskosten.",
      metric: "40% Weniger",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "Ein Fertigungsunternehmen hatte Probleme mit der manuellen Bestandsverfolgung, was zu häufigen Fehlbeständen und ineffizienter Produktionsplanung führte.",
      challenge:
        "Manuelle Prozesse kosteten das Unternehmen Zeit und Geld. Bestandszählungen waren ungenau und es gab keine Echtzeittransparenz der Abläufe.",
      solution:
        "Wir haben ein KI-gestütztes Betriebsverwaltungssystem implementiert, das Bestandsverfolgung, prädiktive Bestellung und Echtzeit-Reporting automatisierte.",
      results: [
        "40% Reduzierung manueller Dateneingabeaufgaben",
        "200.000€ jährliche Kosteneinsparungen",
        "25% Verbesserung der Produktionseffizienz",
        "90% Reduzierung von Fehlbeständen",
      ],
      technologies: ["IoT-Sensoren", "KI-Prädiktive Analytik", "Cloud-Datenbank", "Mobile App", "Echtzeit-Dashboard"],
      timeline: "4 Monate Implementierung",
      clientType: "Fertigungswerk (200 Mitarbeiter)",
    },
    {
      id: "healthcare-cloud-migration",
      slug: "gesundheitswesen-cloud-migration",
      title: "Erfolgreiche Cloud-Migration",
      industry: "Gesundheitswesen",
      outcome: "100% Datensicherheits-Compliance erreicht",
      description: "Migration kritischer Patientendaten in sichere Cloud-Infrastruktur ohne Ausfallzeit.",
      metric: "100%",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "Ein Gesundheitsdienstleister musste seine IT-Infrastruktur modernisieren, indem er von lokalen Servern auf sichere Cloud-Infrastruktur migrierte.",
      challenge:
        "Der Anbieter verwendete veraltete lokale Server, die teuer zu warten waren. Sie mussten sensible Patientendaten in die Cloud migrieren und dabei Compliance-Anforderungen erfüllen.",
      solution:
        "Wir führten eine schrittweise Cloud-Migrationsstrategie mit Sicherheitsprotokollen auf Unternehmensniveau, Datenverschlüsselung und umfassender Überwachung durch.",
      results: [
        "Null Ausfallzeit während der Migration",
        "100% Compliance erreicht",
        "60% Reduzierung der IT-Infrastrukturkosten",
        "99,99% Systemverfügbarkeit",
      ],
      technologies: [
        "AWS Cloud",
        "Datenverschlüsselung",
        "Compliance-Tools",
        "Backup & Recovery",
        "Sicherheitsüberwachung",
      ],
      timeline: "6 Monate schrittweise Migration",
      clientType: "Gesundheitsdienstleister (Multi-Standort)",
    },
  ],
  nl: [
    {
      id: "ecommerce-revenue-growth",
      slug: "ecommerce-omzetgroei",
      title: "E-commerce Omzetgroei",
      industry: "Detailhandel",
      outcome: "250% toename in online verkopen binnen 6 maanden",
      description:
        "Hielp een traditionele detailhandelaar een modern e-commerce platform te lanceren met AI-aangedreven aanbevelingen.",
      metric: "+250%",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "Een traditionele fysieke detailhandelaar wilde hun bedrijf online uitbreiden maar miste de technische expertise en infrastructuur.",
      challenge:
        "De klant had geen online aanwezigheid en moest snel een concurrerend e-commerce platform opzetten. Ze hadden productaanbevelingen, voorraadbeheer en klantanalyses nodig.",
      solution:
        "We bouwden een aangepast e-commerce platform met AI-aangedreven productaanbevelingen. Het systeem omvatte realtime voorraadtracering, veilige betalingsverwerking en uitgebreide analytische dashboards.",
      results: [
        "250% omzetgroei binnen de eerste 6 maanden",
        "15.000+ nieuwe online klanten verworven",
        "40% hogere gemiddelde bestelwaarde door AI",
        "99,9% uptime zonder beveiligingsinbreuken",
      ],
      technologies: [
        "Next.js",
        "AI Productaanbevelingen",
        "Stripe Betalingen",
        "Cloud Infrastructuur",
        "Analytics Dashboard",
      ],
      timeline: "3 maanden ontwikkeling + 3 maanden optimalisatie",
      clientType: "Middelgrote Detailhandelsketen",
    },
    {
      id: "manufacturing-automation",
      slug: "productie-automatisering",
      title: "Geautomatiseerde Operaties",
      industry: "Productie",
      outcome: "40% reductie in handmatige processen",
      description:
        "Implementatie van AI-automatisering om voorraadbeheer te stroomlijnen en operationele kosten te verlagen.",
      metric: "40% Minder",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "Een productiebedrijf had moeite met handmatige voorraadtracering, wat leidde tot frequente voorraadtekorten en inefficiënte productieplanning.",
      challenge:
        "Handmatige processen kostten het bedrijf tijd en geld. Voorraadtellingen waren onnauwkeurig en er was geen realtime zichtbaarheid in de operaties.",
      solution:
        "We implementeerden een AI-aangedreven operationeel managementsysteem dat voorraadtracering, voorspellende bestellingen en realtime rapportage automatiseerde.",
      results: [
        "40% reductie in handmatige gegevensinvoertaken",
        "€200.000 jaarlijkse kostenbesparing",
        "25% verbetering in productie-efficiëntie",
        "90% reductie in voorraadtekorten",
      ],
      technologies: ["IoT Sensoren", "AI Voorspellende Analyse", "Cloud Database", "Mobiele App", "Realtime Dashboard"],
      timeline: "4 maanden implementatie",
      clientType: "Productiefabriek (200 medewerkers)",
    },
    {
      id: "healthcare-cloud-migration",
      slug: "gezondheidszorg-cloud-migratie",
      title: "Succesvolle Cloud Migratie",
      industry: "Gezondheidszorg",
      outcome: "100% databeveiligingscompliance bereikt",
      description: "Migratie van kritieke patiëntgegevens naar veilige cloud-infrastructuur met nul downtime.",
      metric: "100%",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "Een zorgverlener moest hun IT-infrastructuur moderniseren door te migreren van on-premise servers naar veilige cloud-infrastructuur.",
      challenge:
        "De zorgverlener gebruikte verouderde on-premise servers die duur waren om te onderhouden. Ze moesten gevoelige patiëntgegevens naar de cloud migreren met nul downtime.",
      solution:
        "We voerden een gefaseerde cloud-migratiestrategie uit met beveiligingsprotocollen op bedrijfsniveau, gegevensversleuteling en uitgebreide monitoring.",
      results: [
        "Nul downtime tijdens migratie",
        "100% compliance bereikt",
        "60% reductie in IT-infrastructuurkosten",
        "99,99% systeembeschikbaarheid",
      ],
      technologies: [
        "AWS Cloud",
        "Gegevensversleuteling",
        "Compliance Tools",
        "Backup & Recovery",
        "Beveiligingsmonitoring",
      ],
      timeline: "6 maanden gefaseerde migratie",
      clientType: "Zorgverlener (Multi-locatie)",
    },
  ],
  sk: [
    {
      id: "ecommerce-revenue-growth",
      slug: "rust-trzeb-ecommerce",
      title: "Rast Príjmov E-commerce",
      industry: "Maloobchod",
      outcome: "250% nárast online predaja za 6 mesiacov",
      description: "Pomohli tradičnému maloobchodníkovi spustiť modernú e-commerce platformu s AI odporúčaniami.",
      metric: "+250%",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "Tradičný kamenný maloobchodník chcel rozšíriť svoje podnikanie online, ale chýbali mu technické znalosti a infraštruktúra.",
      challenge:
        "Klient nemal žiadnu online prítomnosť a potreboval rýchlo vybudovať konkurencieschopnú e-commerce platformu. Potrebovali produktové odporúčania, správu zásob a zákaznícke analýzy.",
      solution:
        "Vybudovali sme vlastnú e-commerce platformu s AI produktovými odporúčaniami. Systém zahŕňal sledovanie zásob v reálnom čase, bezpečné spracovanie platieb a komplexné analytické panely.",
      results: [
        "250% nárast príjmov za prvých 6 mesiacov",
        "15 000+ nových online zákazníkov",
        "40% vyššia priemerná hodnota objednávky vďaka AI",
        "99,9% dostupnosť bez bezpečnostných porušení",
      ],
      technologies: [
        "Next.js",
        "AI Produktové Odporúčania",
        "Stripe Platby",
        "Cloudová Infraštruktúra",
        "Analytický Panel",
      ],
      timeline: "3 mesiace vývoja + 3 mesiace optimalizácie",
      clientType: "Stredne veľký Maloobchodný Reťazec",
    },
    {
      id: "manufacturing-automation",
      slug: "automatizacia-vyroby",
      title: "Automatizované Operácie",
      industry: "Výroba",
      outcome: "40% zníženie manuálnych procesov",
      description: "Implementácia AI automatizácie na zefektívnenie správy zásob a zníženie prevádzkových nákladov.",
      metric: "40% Menej",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "Výrobná spoločnosť mala problémy s manuálnym sledovaním zásob, čo viedlo k častým nedostatkom zásob a neefektívnemu plánovaniu výroby.",
      challenge:
        "Manuálne procesy stáli spoločnosť čas a peniaze. Počty zásob boli nepresné a nebola žiadna viditeľnosť operácií v reálnom čase.",
      solution:
        "Implementovali sme AI systém riadenia operácií, ktorý automatizoval sledovanie zásob, prediktívne objednávanie a reporting v reálnom čase.",
      results: [
        "40% zníženie úloh manuálneho zadávania údajov",
        "200 000€ ročných úspor nákladov",
        "25% zlepšenie efektívnosti výroby",
        "90% zníženie incidentov nedostatku zásob",
      ],
      technologies: [
        "IoT Senzory",
        "AI Prediktívna Analytika",
        "Cloudová Databáza",
        "Mobilná Aplikácia",
        "Dashboard v Reálnom Čase",
      ],
      timeline: "4 mesiace implementácie",
      clientType: "Výrobný Závod (200 zamestnancov)",
    },
    {
      id: "healthcare-cloud-migration",
      slug: "zdravotnictvo-cloud-migracia",
      title: "Úspešná Cloud Migrácia",
      industry: "Zdravotníctvo",
      outcome: "100% dosiahnutá zhoda zabezpečenia dát",
      description:
        "Migrácia kritických údajov pacientov do zabezpečenej cloudovej infraštruktúry s nulovou prestávkou.",
      metric: "100%",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "Poskytovateľ zdravotnej starostlivosti potreboval modernizovať svoju IT infraštruktúru migráciou z lokálnych serverov do zabezpečenej cloudovej infraštruktúry.",
      challenge:
        "Poskytovateľ používal zastarané lokálne servery, ktoré boli nákladné na údržbu. Potrebovali migrovať citlivé údaje pacientov do cloudu s nulovou prestávkou.",
      solution:
        "Vykonali sme postupnú stratégiu cloudovej migrácie s podnikovými bezpečnostnými protokolmi, šifrovaním údajov a komplexným monitorovaním.",
      results: [
        "Nulová prestávka počas migrácie",
        "100% dosiahnutá zhoda",
        "60% zníženie nákladov na IT infraštruktúru",
        "99,99% dostupnosť systému",
      ],
      technologies: [
        "AWS Cloud",
        "Šifrovanie Údajov",
        "Nástroje Zhody",
        "Zálohovanie & Obnova",
        "Bezpečnostné Monitorovanie",
      ],
      timeline: "6 mesiacov postupnej migrácie",
      clientType: "Poskytovateľ Zdravotnej Starostlivosti",
    },
  ],
}

export function getCaseStudies(language: Language): CaseStudy[] {
  return caseStudiesData[language] || caseStudiesData.en
}

export function getCaseStudyBySlug(slug: string, language: Language): CaseStudy | undefined {
  const studies = getCaseStudies(language)
  return studies.find((study) => study.slug === slug)
}
