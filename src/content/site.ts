export const contact = {
  email: 'franck.martin@electricus.fr',
  phone: '+33 6 70 67 63 13',
  phoneHref: 'tel:+33670676313',
};

export const solutions = {
  enterprise: {
    name: 'Entreprises',
    href: '/entreprises/',
    heading: 'Une recharge simple et maîtrisée pour vos équipes.',
    description: 'Electricus supervise et exploite les bornes de votre parking professionnel. Adaptez les accès et les tarifs aux différents usages de votre site.',
    image: '/images/enterprise.webp',
    imageAlt: 'Véhicule en recharge sur le parking d’un immeuble de bureaux',
    width: 204,
    height: 275,
    benefits: [
      'Accès par profil pour les collaborateurs, véhicules de société et visiteurs',
      'Tarifs différenciés selon les usages',
      'Notes de frais automatisées pour la recharge à domicile',
    ],
    details: [
      { heading: 'Sur vos parkings professionnels', text: 'Confiez le suivi et l’exploitation de vos bornes à Electricus. Définissez les profils qui peuvent utiliser la recharge sur vos sites.' },
      { heading: 'Des tarifs adaptés à vos usagers', text: 'Appliquez des tarifs distincts pour vos véhicules de société, vos employés et vos visiteurs.' },
      { heading: 'Au domicile des collaborateurs', text: 'Automatisez les notes de frais liées à la recharge à domicile des véhicules de société.' },
    ],
  },
  hospitality: {
    name: 'Hôtellerie & tourisme',
    href: '/hotellerie-tourisme/',
    heading: 'Une recharge simple pour les voyageurs que vous accueillez.',
    description: 'Hôtels, campings, gîtes et résidences de tourisme peuvent proposer la recharge à leurs clients. Electricus prend en charge la supervision et l’exploitation des bornes.',
    image: '/images/hospitality.webp',
    imageAlt: 'Véhicule électrique raccordé à une borne devant un hôtel',
    width: 208,
    height: 275,
    benefits: [
      'Une recharge simple pour vos clients',
      'Un tarif adapté à votre établissement',
      'Supervision et suivi de l’utilisation',
    ],
    details: [
      { heading: 'Une recharge qui s’intègre au séjour', text: 'Proposez aux voyageurs de recharger leur véhicule pendant leur séjour dans votre hôtel, camping, gîte ou résidence.' },
      { heading: 'Une recharge au juste prix', text: 'Définissez un tarif de recharge adapté à votre activité et aux usages de vos clients.' },
      { heading: 'L’exploitation prise en charge', text: 'Electricus supervise vos bornes et suit leur utilisation pendant que vous vous consacrez à l’accueil de vos voyageurs.' },
    ],
  },
};

export type Solution = (typeof solutions)[keyof typeof solutions];

export const services = [
  { id: 'supervision', icon: 'chart-no-axes-combined', name: 'Supervision', summary: 'Pilotage et suivi de la disponibilité de vos bornes.', detail: 'Electricus prend en charge le suivi et l’exploitation de vos bornes de recharge sur vos sites professionnels ou touristiques.' },
  { id: 'acces', icon: 'users', name: 'Gestion des accès', summary: 'Des règles d’accès adaptées à chaque profil d’usager.', detail: 'Définissez qui peut utiliser vos bornes selon le site et le profil. Les règles peuvent distinguer les véhicules de société, les employés, les visiteurs ou les voyageurs.' },
  { id: 'tarification', icon: 'coins', name: 'Tarification', summary: 'Des tarifs différenciés selon les profils et les sites.', detail: 'Adaptez le prix de la recharge à vos différents usagers ou à votre établissement. Vous choisissez une tarification cohérente avec l’usage de vos bornes.' },
  { id: 'notes-de-frais', icon: 'receipt-text', name: 'Notes de frais', summary: 'Automatisation des notes de frais de recharge à domicile.', detail: 'Automatisez les notes de frais de vos collaborateurs lorsqu’ils rechargent leur véhicule de société à domicile.' },
] as const;
