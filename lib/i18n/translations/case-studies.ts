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
      id: "ransomware-containment",
      slug: "ransomware-containment",
      title: "Ransomware Containment & Recovery",
      industry: "Financial Services",
      outcome: "Contained double-extortion attack in under 12 hours—zero ransom paid",
      description:
        "Deployed the CyberXDefend 7-step forensic playbook to isolate, eradicate, and recover from a ransomware incident while preserving chain-of-custody evidence.",
      metric: "<12 hrs",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "A mid-market Belgian financial services firm detected encrypted file shares and a double-extortion ransom note on a Monday morning. They called us within 90 minutes. Our DFIR team took over incident command, contained lateral movement, and rebuilt critical systems from clean backups—without paying the ransom.",
      challenge:
        "The attacker had already exfiltrated data and encrypted three file servers when we were engaged. The client faced a 72-hour GDPR notification window, customers demanding answers, and pressure from the attacker threatening to publish stolen data. Every hour of delay compounded regulatory, reputational, and operational risk.",
      solution:
        "We executed our 7-step ransomware forensic playbook: (1) scoped the compromise, (2) isolated infected hosts while preserving volatile memory for analysis, (3) identified the initial access vector (a phished admin credential), (4) eradicated persistence mechanisms, (5) validated clean backups, (6) rebuilt production in an air-gapped recovery environment, and (7) delivered a defensible post-mortem for regulators.",
      results: [
        "Containment achieved in under 12 hours from first call",
        "Zero ransom paid—all systems restored from verified backups",
        "GDPR 72-hour notification filed on time with full evidence package",
        "Forensic timeline accepted by the Belgian Data Protection Authority",
      ],
      technologies: [
        "EDR & Memory Forensics",
        "Chain-of-Custody Evidence Handling",
        "Backup Integrity Validation",
        "Air-Gapped Recovery Environment",
        "GDPR Breach Notification Framework",
      ],
      timeline: "14-day engagement (12 hr containment + recovery + post-mortem)",
      clientType: "Mid-Market Financial Services (Belgium, 400 employees)",
    },
    {
      id: "gdpr-breach-response",
      slug: "gdpr-breach-response",
      title: "GDPR 72-Hour Breach Response",
      industry: "E-Commerce",
      outcome: "Met GDPR 72-hour deadline, avoided €475K+ fine exposure",
      description:
        "Separated investigation from decision-making so leadership could notify regulators confidently within the GDPR window—without guessing.",
      metric: "72 hrs",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "An EU consumer e-commerce platform discovered unauthorized access to a customer database on a Friday evening. With a 72-hour GDPR clock already ticking and no incident response framework in place, leadership feared a Booking.com-style fine. We stood up a parallel investigation and decision track so they could notify the regulator on time and defensibly.",
      challenge:
        "The breach landed on a weekend, the internal IT team was overwhelmed, and leadership was paralyzed by incomplete information. Notifying too early risked misstating scope; notifying too late risked a fine like the €475,000 penalty Booking.com received. The company needed both forensic clarity and a defensible paper trail—fast.",
      solution:
        "We split the response into two streams: a DFIR stream determined scope, data categories, and affected subjects, while a compliance stream drafted notifications, logged decisions, and engaged legal counsel. We delivered a structured breach package—timeline, evidence list, mitigations, and residual risk—within 68 hours.",
      results: [
        "Regulator notification submitted 4 hours before the 72-hour deadline",
        "Zero fines or sanctions issued—notification deemed complete and timely",
        "Customer communications aligned with legal and forensic findings",
        "Incident response runbook handed over for future readiness",
      ],
      technologies: [
        "DFIR Triage & Scoping",
        "Decision Log & Chain-of-Custody",
        "GDPR Article 33/34 Templates",
        "Legal-Forensic Liaison Framework",
        "Customer Communications Playbook",
      ],
      timeline: "72-hour response + 3-week remediation and runbook handover",
      clientType: "EU Consumer E-Commerce (2M+ customer records)",
    },
    {
      id: "nis2-forensic-readiness",
      slug: "nis2-forensic-readiness",
      title: "NIS2 Compliance & Forensic Readiness",
      industry: "Critical Infrastructure",
      outcome: "Full NIS2 readiness and a defensible incident post-mortem framework",
      description:
        "Implemented the 12 NIS2 required security controls and built a post-mortem framework that protects leadership during regulatory review.",
      metric: "100%",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "A Belgian mid-market operator of essential services faced the April 2026 NIS2 compliance deadline with no formal incident response program and gaps across 9 of the 12 required controls. We delivered a readiness roadmap, closed the control gaps, and embedded a forensic post-mortem process that documents timeline, decisions, gaps, and regulatory exposure on every incident.",
      challenge:
        "NIS2 shifts accountability to leadership and demands evidence—not just policies. The client had fragmented logging, no tabletop exercises, no chain-of-custody procedures, and no defensible way to reconstruct an incident timeline for regulators. A single audit or breach would expose them to personal liability for directors.",
      solution:
        "We ran a gap assessment against the 12 NIS2 controls, prioritized by risk and effort, then implemented: centralized logging and SIEM tuning, an incident response playbook with 24/7 retainer, quarterly tabletop exercises, supply-chain security reviews, and a standardized post-mortem template that captures timeline, decisions, gaps, and regulator-facing exposure.",
      results: [
        "All 12 NIS2 controls operational ahead of the April 2026 deadline",
        "Mean time to detect reduced from 14 days to under 8 hours",
        "First tabletop exercise surfaced 3 critical playbook gaps—now closed",
        "Director-level sign-off package delivered for regulatory inspections",
      ],
      technologies: [
        "SIEM & Centralized Logging",
        "24/7 DFIR Retainer",
        "Tabletop Exercise Framework",
        "NIS2 Control Mapping",
        "Forensic Post-Mortem Template",
      ],
      timeline: "5-month NIS2 readiness program",
      clientType: "Essential Services Operator (Belgium, NIS2-registered)",
    },
  ],
  fr: [
    {
      id: "ransomware-containment",
      slug: "confinement-ransomware",
      title: "Confinement et Récupération Ransomware",
      industry: "Services Financiers",
      outcome: "Attaque à double extorsion contenue en moins de 12 heures—aucune rançon payée",
      description:
        "Déploiement du playbook forensique en 7 étapes de CyberXDefend pour isoler, éradiquer et récupérer d'un incident ransomware tout en préservant la chaîne de preuves.",
      metric: "<12 h",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "Une entreprise belge de services financiers de taille moyenne a détecté un lundi matin des partages de fichiers chiffrés et une note de rançon à double extorsion. Ils nous ont appelés en 90 minutes. Notre équipe DFIR a pris le commandement de l'incident, contenu le mouvement latéral et reconstruit les systèmes critiques à partir de sauvegardes saines—sans payer la rançon.",
      challenge:
        "L'attaquant avait déjà exfiltré des données et chiffré trois serveurs de fichiers. Le client faisait face à un délai de notification RGPD de 72 heures, des clients exigeant des réponses et la pression de l'attaquant menaçant de publier les données volées.",
      solution:
        "Nous avons exécuté notre playbook forensique ransomware en 7 étapes : (1) cadrage de la compromission, (2) isolation des hôtes infectés avec préservation mémoire, (3) identification du vecteur d'accès initial (identifiants admin phishés), (4) éradication de la persistance, (5) validation des sauvegardes saines, (6) reconstruction en environnement isolé, et (7) post-mortem défendable pour les régulateurs.",
      results: [
        "Confinement atteint en moins de 12 heures après le premier appel",
        "Aucune rançon payée—tous les systèmes restaurés",
        "Notification RGPD de 72 heures déposée à temps avec dossier complet",
        "Chronologie forensique acceptée par l'Autorité belge de protection des données",
      ],
      technologies: [
        "EDR et Forensique Mémoire",
        "Gestion de la Chaîne de Preuves",
        "Validation d'Intégrité des Sauvegardes",
        "Environnement de Récupération Isolé",
        "Cadre de Notification RGPD",
      ],
      timeline: "Engagement de 14 jours (confinement 12 h + récupération + post-mortem)",
      clientType: "Services Financiers Mi-Marché (Belgique, 400 employés)",
    },
    {
      id: "gdpr-breach-response",
      slug: "reponse-violation-rgpd",
      title: "Réponse Violation RGPD 72 Heures",
      industry: "E-Commerce",
      outcome: "Délai RGPD de 72 heures respecté, exposition à amende de 475K€ évitée",
      description:
        "Séparation de l'investigation et de la prise de décision pour permettre une notification des régulateurs en toute confiance dans la fenêtre RGPD.",
      metric: "72 h",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "Une plateforme e-commerce européenne a découvert un accès non autorisé à une base de données clients un vendredi soir. Avec un chronomètre RGPD de 72 heures déjà en marche et aucun cadre de réponse aux incidents, la direction craignait une amende de style Booking.com. Nous avons mis en place deux flux parallèles pour notifier le régulateur à temps et de manière défendable.",
      challenge:
        "La violation est survenue un week-end, l'équipe IT interne était débordée et la direction était paralysée par des informations incomplètes. Notifier trop tôt risquait de mal décrire le périmètre ; notifier trop tard risquait une amende comme les 475 000€ reçus par Booking.com.",
      solution:
        "Nous avons divisé la réponse en deux flux : un flux DFIR pour déterminer le périmètre et les sujets concernés, et un flux conformité pour rédiger les notifications, journaliser les décisions et engager le conseil juridique. Nous avons livré un dossier structuré de violation en 68 heures.",
      results: [
        "Notification au régulateur soumise 4 heures avant l'échéance de 72 heures",
        "Aucune amende ni sanction émise—notification jugée complète et en temps voulu",
        "Communications clients alignées avec les conclusions juridiques et forensiques",
        "Runbook de réponse aux incidents remis pour préparation future",
      ],
      technologies: [
        "Triage et Cadrage DFIR",
        "Journal de Décisions et Chaîne de Preuves",
        "Modèles RGPD Article 33/34",
        "Cadre de Liaison Juridique-Forensique",
        "Playbook Communications Clients",
      ],
      timeline: "Réponse 72 h + remédiation et transfert runbook sur 3 semaines",
      clientType: "E-Commerce Consommateur UE (2M+ dossiers clients)",
    },
    {
      id: "nis2-forensic-readiness",
      slug: "preparation-nis2-forensique",
      title: "Conformité NIS2 et Préparation Forensique",
      industry: "Infrastructure Critique",
      outcome: "Préparation NIS2 complète et cadre de post-mortem défendable",
      description:
        "Mise en œuvre des 12 contrôles de sécurité NIS2 requis et construction d'un cadre de post-mortem protégeant la direction lors des examens réglementaires.",
      metric: "100%",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "Un opérateur belge de services essentiels de taille moyenne faisait face à l'échéance de conformité NIS2 d'avril 2026 sans programme formel de réponse aux incidents et avec des lacunes sur 9 des 12 contrôles requis. Nous avons livré une feuille de route, comblé les lacunes et intégré un processus de post-mortem forensique.",
      challenge:
        "NIS2 déplace la responsabilité vers la direction et exige des preuves—pas seulement des politiques. Le client avait une journalisation fragmentée, aucun exercice tabletop, aucune procédure de chaîne de preuves et aucun moyen défendable de reconstruire une chronologie d'incident pour les régulateurs.",
      solution:
        "Nous avons évalué les écarts par rapport aux 12 contrôles NIS2, priorisé par risque et effort, puis mis en œuvre : journalisation centralisée et SIEM, playbook de réponse aux incidents avec astreinte 24/7, exercices tabletop trimestriels, revues de sécurité de la supply chain et modèle de post-mortem standardisé.",
      results: [
        "Les 12 contrôles NIS2 opérationnels avant l'échéance d'avril 2026",
        "Temps moyen de détection réduit de 14 jours à moins de 8 heures",
        "Premier exercice tabletop a révélé 3 lacunes critiques—maintenant comblées",
        "Dossier de validation au niveau directeur livré pour les inspections",
      ],
      technologies: [
        "SIEM et Journalisation Centralisée",
        "Astreinte DFIR 24/7",
        "Cadre d'Exercice Tabletop",
        "Mapping des Contrôles NIS2",
        "Modèle de Post-Mortem Forensique",
      ],
      timeline: "Programme de préparation NIS2 sur 5 mois",
      clientType: "Opérateur de Services Essentiels (Belgique, NIS2-enregistré)",
    },
  ],
  de: [
    {
      id: "ransomware-containment",
      slug: "ransomware-eindaemmung",
      title: "Ransomware-Eindämmung und Wiederherstellung",
      industry: "Finanzdienstleistungen",
      outcome: "Double-Extortion-Angriff in unter 12 Stunden eingedämmt—kein Lösegeld gezahlt",
      description:
        "Einsatz des 7-Schritte-Forensik-Playbooks von CyberXDefend zur Isolierung, Beseitigung und Wiederherstellung nach einem Ransomware-Vorfall.",
      metric: "<12 Std.",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "Ein mittelständisches belgisches Finanzdienstleistungsunternehmen entdeckte an einem Montagmorgen verschlüsselte Dateifreigaben und eine Double-Extortion-Lösegeldforderung. Sie riefen uns innerhalb von 90 Minuten an. Unser DFIR-Team übernahm die Leitung des Vorfalls und stellte kritische Systeme aus sauberen Backups wieder her—ohne Lösegeld zu zahlen.",
      challenge:
        "Der Angreifer hatte bereits Daten exfiltriert und drei Dateiserver verschlüsselt. Der Kunde stand unter einem 72-Stunden-DSGVO-Meldefenster und dem Druck des Angreifers, der drohte, gestohlene Daten zu veröffentlichen.",
      solution:
        "Wir führten unser 7-Schritte-Ransomware-Forensik-Playbook aus: (1) Umfang der Kompromittierung, (2) Isolierung infizierter Hosts mit Speicherforensik, (3) Identifizierung des initialen Zugriffsvektors (gephishte Admin-Credentials), (4) Beseitigung der Persistenz, (5) Validierung sauberer Backups, (6) Wiederaufbau in isolierter Umgebung, (7) verteidigungsfähiges Post-Mortem.",
      results: [
        "Eindämmung innerhalb von 12 Stunden nach Erstanruf",
        "Kein Lösegeld gezahlt—alle Systeme aus verifizierten Backups wiederhergestellt",
        "DSGVO-72-Stunden-Meldung rechtzeitig mit vollständigem Beweismittelpaket eingereicht",
        "Forensische Zeitleiste von der belgischen Datenschutzbehörde akzeptiert",
      ],
      technologies: [
        "EDR und Speicher-Forensik",
        "Chain-of-Custody-Beweishandhabung",
        "Backup-Integritätsvalidierung",
        "Air-Gapped-Wiederherstellungsumgebung",
        "DSGVO-Meldungsrahmen",
      ],
      timeline: "14-Tage-Einsatz (12 Std. Eindämmung + Wiederherstellung + Post-Mortem)",
      clientType: "Mittelständische Finanzdienstleistungen (Belgien, 400 Mitarbeiter)",
    },
    {
      id: "gdpr-breach-response",
      slug: "dsgvo-vorfallsreaktion",
      title: "DSGVO 72-Stunden-Vorfallsreaktion",
      industry: "E-Commerce",
      outcome: "DSGVO-72-Stunden-Frist eingehalten, 475K€+ Bußgeld-Risiko vermieden",
      description:
        "Trennung von Untersuchung und Entscheidungsfindung, damit die Führung Aufsichtsbehörden innerhalb der DSGVO-Frist informieren konnte.",
      metric: "72 Std.",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "Eine EU-Verbraucher-E-Commerce-Plattform entdeckte an einem Freitagabend unbefugten Zugriff auf eine Kundendatenbank. Mit einer bereits laufenden 72-Stunden-DSGVO-Uhr und ohne Vorfallsreaktionsrahmen fürchtete die Führung ein Bußgeld wie bei Booking.com.",
      challenge:
        "Der Vorfall ereignete sich an einem Wochenende, das interne IT-Team war überfordert und die Führung war durch unvollständige Informationen gelähmt. Zu frühe Meldung riskierte falsche Angaben; zu späte Meldung riskierte ein Bußgeld wie die 475.000€, die Booking.com erhielt.",
      solution:
        "Wir teilten die Reaktion in zwei Stränge: ein DFIR-Strang bestimmte Umfang und betroffene Subjekte, während ein Compliance-Strang Meldungen entwarf, Entscheidungen protokollierte und Rechtsberatung einbezog. Wir lieferten ein strukturiertes Vorfallspaket innerhalb von 68 Stunden.",
      results: [
        "Behördenmeldung 4 Stunden vor Ablauf der 72-Stunden-Frist eingereicht",
        "Keine Bußgelder oder Sanktionen verhängt",
        "Kundenkommunikation mit rechtlichen und forensischen Erkenntnissen abgestimmt",
        "Incident-Response-Runbook für zukünftige Bereitschaft übergeben",
      ],
      technologies: [
        "DFIR-Triage und Umfangsbestimmung",
        "Entscheidungsprotokoll und Chain-of-Custody",
        "DSGVO-Artikel-33/34-Vorlagen",
        "Rechts-Forensik-Verbindungsrahmen",
        "Kundenkommunikations-Playbook",
      ],
      timeline: "72-Stunden-Reaktion + 3-wöchige Abhilfe und Runbook-Übergabe",
      clientType: "EU-Verbraucher-E-Commerce (2M+ Kundendatensätze)",
    },
    {
      id: "nis2-forensic-readiness",
      slug: "nis2-forensische-bereitschaft",
      title: "NIS2-Compliance und Forensische Bereitschaft",
      industry: "Kritische Infrastruktur",
      outcome: "Vollständige NIS2-Bereitschaft und verteidigungsfähiger Post-Mortem-Rahmen",
      description:
        "Implementierung der 12 erforderlichen NIS2-Sicherheitskontrollen und Aufbau eines Post-Mortem-Rahmens zum Schutz der Führung.",
      metric: "100%",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "Ein belgischer mittelständischer Betreiber wesentlicher Dienste stand vor der NIS2-Compliance-Frist im April 2026 ohne formales Incident-Response-Programm und mit Lücken in 9 der 12 erforderlichen Kontrollen. Wir lieferten eine Roadmap, schlossen die Lücken und integrierten einen forensischen Post-Mortem-Prozess.",
      challenge:
        "NIS2 verlagert die Verantwortlichkeit auf die Führung und verlangt Nachweise—nicht nur Richtlinien. Der Kunde hatte fragmentiertes Logging, keine Tabletop-Übungen und keine verteidigungsfähige Möglichkeit, eine Vorfallszeitleiste für Regulierungsbehörden zu rekonstruieren.",
      solution:
        "Wir führten eine Gap-Bewertung gegen die 12 NIS2-Kontrollen durch, priorisiert nach Risiko und Aufwand, und implementierten: zentralisiertes Logging und SIEM, Incident-Response-Playbook mit 24/7-Retainer, vierteljährliche Tabletop-Übungen, Supply-Chain-Sicherheitsüberprüfungen und standardisierte Post-Mortem-Vorlage.",
      results: [
        "Alle 12 NIS2-Kontrollen vor der Frist im April 2026 operativ",
        "Mittlere Erkennungszeit von 14 Tagen auf unter 8 Stunden reduziert",
        "Erste Tabletop-Übung deckte 3 kritische Playbook-Lücken auf—nun geschlossen",
        "Paket auf Direktorenebene für behördliche Inspektionen geliefert",
      ],
      technologies: [
        "SIEM und Zentralisiertes Logging",
        "24/7-DFIR-Retainer",
        "Tabletop-Übungsrahmen",
        "NIS2-Kontrollen-Mapping",
        "Forensische Post-Mortem-Vorlage",
      ],
      timeline: "5-monatiges NIS2-Bereitschaftsprogramm",
      clientType: "Betreiber wesentlicher Dienste (Belgien, NIS2-registriert)",
    },
  ],
  nl: [
    {
      id: "ransomware-containment",
      slug: "ransomware-beheersing",
      title: "Ransomware-Beheersing en Herstel",
      industry: "Financiële Diensten",
      outcome: "Double-extortion aanval beheerst in minder dan 12 uur—geen losgeld betaald",
      description:
        "Inzet van het 7-stappen forensisch playbook van CyberXDefend om een ransomware-incident te isoleren, te elimineren en te herstellen.",
      metric: "<12 uur",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "Een middelgroot Belgisch financieel dienstverlener detecteerde op een maandagochtend versleutelde bestandsshares en een double-extortion losgeldbrief. Ze belden ons binnen 90 minuten. Ons DFIR-team nam de incidentleiding over en herbouwde kritieke systemen vanuit schone backups—zonder losgeld te betalen.",
      challenge:
        "De aanvaller had al data geëxfiltreerd en drie bestandsservers versleuteld. De klant stond voor een AVG-meldingsvenster van 72 uur en druk van de aanvaller die dreigde gestolen data te publiceren.",
      solution:
        "We voerden ons 7-stappen ransomware forensisch playbook uit: (1) scope van de compromittering, (2) isolatie van geïnfecteerde hosts met geheugenforensiek, (3) identificatie van het initiële toegangsvector (gephishte admin-credentials), (4) eliminatie van persistentie, (5) validatie van schone backups, (6) herbouw in geïsoleerde omgeving, (7) verdedigbaar post-mortem.",
      results: [
        "Beheersing bereikt binnen 12 uur na eerste oproep",
        "Geen losgeld betaald—alle systemen hersteld vanuit geverifieerde backups",
        "AVG 72-uurs melding op tijd ingediend met volledig bewijspakket",
        "Forensische tijdlijn geaccepteerd door de Belgische Gegevensbeschermingsautoriteit",
      ],
      technologies: [
        "EDR en Geheugenforensiek",
        "Chain-of-Custody Bewijsbehandeling",
        "Backup-Integriteitsvalidatie",
        "Air-Gapped Herstelomgeving",
        "AVG-Meldingskader",
      ],
      timeline: "14-daagse opdracht (12 uur beheersing + herstel + post-mortem)",
      clientType: "Middelgrote Financiële Diensten (België, 400 medewerkers)",
    },
    {
      id: "gdpr-breach-response",
      slug: "avg-inbreukrespons",
      title: "AVG 72-Uurs Inbreukrespons",
      industry: "E-Commerce",
      outcome: "AVG-deadline van 72 uur gehaald, boete-exposure van €475K+ vermeden",
      description:
        "Scheiding van onderzoek en besluitvorming zodat het leiderschap toezichthouders vol vertrouwen binnen het AVG-venster kon informeren.",
      metric: "72 uur",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "Een EU consumenten e-commerce platform ontdekte ongeautoriseerde toegang tot een klantendatabase op een vrijdagavond. Met een 72-uurs AVG-klok die al tikte en geen incident response kader, vreesde het leiderschap een Booking.com-achtige boete.",
      challenge:
        "De inbreuk vond plaats in het weekend, het interne IT-team was overweldigd en het leiderschap was verlamd door onvolledige informatie. Te vroeg melden riskeerde het verkeerd aangeven van de scope; te laat melden riskeerde een boete zoals de €475.000 die Booking.com ontving.",
      solution:
        "We splitsten de respons in twee stromen: een DFIR-stroom bepaalde scope en betrokken subjecten, terwijl een compliance-stroom meldingen opstelde, beslissingen registreerde en juridisch advies inschakelde. We leverden een gestructureerd inbreukpakket binnen 68 uur.",
      results: [
        "Toezichthoudermelding ingediend 4 uur voor de 72-uurs deadline",
        "Geen boetes of sancties opgelegd",
        "Klantencommunicatie afgestemd op juridische en forensische bevindingen",
        "Incident response runbook overgedragen voor toekomstige paraatheid",
      ],
      technologies: [
        "DFIR Triage en Scoping",
        "Besluitenlog en Chain-of-Custody",
        "AVG Artikel 33/34 Sjablonen",
        "Juridisch-Forensisch Liaisonkader",
        "Klantencommunicatie Playbook",
      ],
      timeline: "72-uurs respons + 3-weekse remediatie en runbook-overdracht",
      clientType: "EU Consumenten E-Commerce (2M+ klantrecords)",
    },
    {
      id: "nis2-forensic-readiness",
      slug: "nis2-forensische-paraatheid",
      title: "NIS2-Compliance en Forensische Paraatheid",
      industry: "Kritieke Infrastructuur",
      outcome: "Volledige NIS2-paraatheid en een verdedigbaar post-mortem kader",
      description:
        "Implementatie van de 12 vereiste NIS2-beveiligingscontroles en opbouw van een post-mortem kader dat het leiderschap beschermt.",
      metric: "100%",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "Een Belgische middelgrote operator van essentiële diensten stond voor de NIS2-compliance deadline van april 2026 zonder formeel incident response programma en met hiaten in 9 van de 12 vereiste controles. We leverden een routekaart, dichtten de hiaten en integreerden een forensisch post-mortem proces.",
      challenge:
        "NIS2 verschuift verantwoordelijkheid naar het leiderschap en eist bewijs—niet alleen beleid. De klant had gefragmenteerde logging, geen tabletop-oefeningen en geen verdedigbare manier om een incidenttijdlijn voor toezichthouders te reconstrueren.",
      solution:
        "We voerden een gap-assessment uit tegen de 12 NIS2-controles, geprioriteerd op risico en inspanning, en implementeerden: gecentraliseerde logging en SIEM, incident response playbook met 24/7-retainer, kwartaal-tabletop-oefeningen, supply-chain beveiligingsreviews en gestandaardiseerde post-mortem sjabloon.",
      results: [
        "Alle 12 NIS2-controles operationeel voor de deadline van april 2026",
        "Gemiddelde detectietijd teruggebracht van 14 dagen naar onder 8 uur",
        "Eerste tabletop-oefening onthulde 3 kritieke playbook-hiaten—nu gedicht",
        "Directieniveau validatiepakket geleverd voor regelgevende inspecties",
      ],
      technologies: [
        "SIEM en Gecentraliseerde Logging",
        "24/7 DFIR-Retainer",
        "Tabletop-Oefeningenkader",
        "NIS2 Controle-Mapping",
        "Forensisch Post-Mortem Sjabloon",
      ],
      timeline: "5-maandse NIS2-paraatheidsprogramma",
      clientType: "Operator van Essentiële Diensten (België, NIS2-geregistreerd)",
    },
  ],
  sk: [
    {
      id: "ransomware-containment",
      slug: "zvladnutie-ransomveru",
      title: "Zvládnutie a Obnova po Ransomvéri",
      industry: "Finančné Služby",
      outcome: "Dvojitý vydieračský útok zvládnutý za menej ako 12 hodín—žiadne výkupné",
      description:
        "Nasadenie 7-krokového forenzného playbooku CyberXDefend na izoláciu, eradikáciu a obnovu po ransomvérovom incidente.",
      metric: "<12 h",
      image: "/healthcare-cloud-security-dashboard.jpg",
      fullDescription:
        "Stredne veľká belgická firma finančných služieb detegovala v pondelok ráno šifrované súborové zdieľania a dvojitú vydieračskú žiadosť. Zavolali nám do 90 minút. Náš DFIR tím prevzal velenie incidentu a obnovil kritické systémy zo zdravých záloh—bez zaplatenia výkupného.",
      challenge:
        "Útočník už exfiltroval údaje a zašifroval tri súborové servery. Klient čelil 72-hodinovému oknu GDPR notifikácie a tlaku útočníka hroziaceho zverejnením ukradnutých údajov.",
      solution:
        "Vykonali sme náš 7-krokový ransomvérový forenzný playbook: (1) rozsah kompromitácie, (2) izolácia infikovaných hostiteľov s pamäťovou forenzikou, (3) identifikácia vektora prvotného prístupu (phishing admin credentials), (4) eradikácia perzistencie, (5) validácia zdravých záloh, (6) obnova v izolovanom prostredí, (7) obhájiteľný post-mortem.",
      results: [
        "Zvládnutie dosiahnuté do 12 hodín od prvého hovoru",
        "Žiadne výkupné—všetky systémy obnovené z overených záloh",
        "72-hodinová GDPR notifikácia podaná včas s kompletným dôkazovým balíkom",
        "Forenzná časová os akceptovaná belgickým úradom na ochranu údajov",
      ],
      technologies: [
        "EDR a Pamäťová Forenzika",
        "Chain-of-Custody Správa Dôkazov",
        "Validácia Integrity Záloh",
        "Izolované Prostredie Obnovy",
        "Rámec GDPR Notifikácií",
      ],
      timeline: "14-dňová zákazka (12 h zvládnutie + obnova + post-mortem)",
      clientType: "Stredne Veľké Finančné Služby (Belgicko, 400 zamestnancov)",
    },
    {
      id: "gdpr-breach-response",
      slug: "gdpr-reakcia-na-porusenie",
      title: "GDPR 72-Hodinová Reakcia na Porušenie",
      industry: "E-Commerce",
      outcome: "72-hodinová lehota GDPR dodržaná, expozícia pokute 475K€+ odvrátená",
      description:
        "Oddelenie vyšetrovania od rozhodovania umožnilo vedeniu informovať regulátorov s istotou v rámci GDPR okna.",
      metric: "72 h",
      image: "/modern-ecommerce-dashboard.png",
      fullDescription:
        "Európska spotrebiteľská e-commerce platforma objavila v piatok večer neoprávnený prístup k databáze zákazníkov. So 72-hodinovými GDPR hodinami už tikajúcimi a bez rámca reakcie na incidenty sa vedenie obávalo pokuty v štýle Booking.com.",
      challenge:
        "Porušenie nastalo cez víkend, interný IT tím bol zavalený a vedenie bolo paralyzované neúplnými informáciami. Prílišné skoré hlásenie riskovalo nesprávne určenie rozsahu; neskoré hlásenie riskovalo pokutu ako 475 000€, ktoré dostal Booking.com.",
      solution:
        "Rozdelili sme reakciu na dva prúdy: DFIR prúd určil rozsah a dotknutých subjektov, zatiaľ čo compliance prúd navrhoval notifikácie, zaznamenával rozhodnutia a zapájal právneho poradcu. Dodali sme štruktúrovaný balík porušenia do 68 hodín.",
      results: [
        "Notifikácia regulátorovi podaná 4 hodiny pred 72-hodinovou lehotou",
        "Žiadne pokuty ani sankcie",
        "Komunikácia so zákazníkmi zladená s právnymi a forenznými zisteniami",
        "Runbook reakcie na incidenty odovzdaný pre budúcu pripravenosť",
      ],
      technologies: [
        "DFIR Triáž a Rozsah",
        "Denník Rozhodnutí a Chain-of-Custody",
        "Šablóny GDPR Článok 33/34",
        "Rámec Právno-Forenzného Spojenia",
        "Playbook Komunikácie so Zákazníkmi",
      ],
      timeline: "72-hodinová reakcia + 3-týždňová náprava a odovzdanie runbooku",
      clientType: "EÚ Spotrebiteľský E-Commerce (2M+ záznamov zákazníkov)",
    },
    {
      id: "nis2-forensic-readiness",
      slug: "nis2-forenzna-pripravenost",
      title: "NIS2 Compliance a Forenzná Pripravenosť",
      industry: "Kritická Infraštruktúra",
      outcome: "Plná pripravenosť NIS2 a obhájiteľný rámec post-mortem",
      description:
        "Implementácia 12 požadovaných bezpečnostných kontrol NIS2 a vybudovanie post-mortem rámca, ktorý chráni vedenie.",
      metric: "100%",
      image: "/manufacturing-automation-dashboard.jpg",
      fullDescription:
        "Belgický stredne veľký operátor esenciálnych služieb čelil termínu compliance NIS2 v apríli 2026 bez formálneho programu reakcie na incidenty a s medzerami v 9 z 12 požadovaných kontrol. Dodali sme mapu, uzavreli medzery a integrovali forenzný post-mortem proces.",
      challenge:
        "NIS2 presúva zodpovednosť na vedenie a vyžaduje dôkazy—nielen politiky. Klient mal fragmentované logovanie, žiadne stolové cvičenia a žiadny obhájiteľný spôsob rekonštrukcie časovej osi incidentu pre regulátorov.",
      solution:
        "Vykonali sme gap assessment oproti 12 kontrolám NIS2, prioritizovaný podľa rizika a úsilia, a implementovali: centralizované logovanie a SIEM, playbook reakcie na incidenty s 24/7 retainerom, štvrťročné stolové cvičenia, bezpečnostné revízie dodávateľského reťazca a štandardizovanú šablónu post-mortem.",
      results: [
        "Všetkých 12 kontrol NIS2 v prevádzke pred termínom apríl 2026",
        "Priemerný čas detekcie znížený zo 14 dní na menej ako 8 hodín",
        "Prvé stolové cvičenie odhalilo 3 kritické medzery v playbooku—teraz uzavreté",
        "Balík na úrovni riaditeľov dodaný pre regulačné inšpekcie",
      ],
      technologies: [
        "SIEM a Centralizované Logovanie",
        "24/7 DFIR Retainer",
        "Rámec Stolových Cvičení",
        "Mapovanie Kontrol NIS2",
        "Šablóna Forenzného Post-Mortem",
      ],
      timeline: "5-mesačný program pripravenosti NIS2",
      clientType: "Operátor Esenciálnych Služieb (Belgicko, NIS2-registrovaný)",
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
