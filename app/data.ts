export type Language = 'TR' | 'EN';

export const translations = {
  TR: {
    brandSubtitle: "KONTROL MERKEZİ",
    homeTitle: "Ne yapmak istersiniz?",
    back: "Geri",
    madeBy: "Made by Cenk Yaman",
    
    // Ana Sayfa Kartları
    servicesTitle: "Hizmetlerimiz",
    servicesDesc: "Size hangi alanda yardımcı olabiliriz?",
    
    joinTitle: "Ekibimize Katılın!",
    joinDesc: "Sen yoksan bir kişi eksiğiz!",
    
    aboutTitle: "Vega Media Kimdir?",
    aboutDesc: "Kuruluş hikayemizi öğrenin ve bizi tanıyın!",
    
    teamTitle: "Ailemiz",
    teamDesc: "Değerli ekip dostlarımızı tanıyın!",
    
    driveTitle: "Drive Bağlantıları",
    driveDesc: "Yaptığımız işleri görün.",
    
    eventsTitle: "Etkinlikler",
    eventsDesc: "Geçmişte Katıldığımız Etkinliklere bir göz atın.",
    
    partnersTitle: "Gelecek Partnerlerimizi Tanıyın",
    partnersDesc: "Gelecekteki işbirliklerimizi görün.",
    
    blogTitle: "Blog",
    blogDesc: "Yeni güncellemelerimizi görün.",
    
    contactTitle: "İletişim",
    contactDesc: "Bize Ulaşın.",

    // Ekibimize Katılın Sayfası
    joinMainText: "Vega Media Ailemizde sen yoksan bir kişi eksiğiz!",
    joinSubText: "Forma başvurmanız yeterlidir. Biz sizinle en yakın kısa sürede iletişime geçeceğiz!",
    joinBtn: "Başvuru Formu İçin Tıkla",

    // İletişim Detayları
    instagramLabel: "Instagram",
    emailLabel: "E-posta",
    phone1Name: "Cenk Yaman",
    phone2Name: "Nisa Damar",
    phonePlaceholder: "[Telefon numarası daha sonra eklenecek]",
    emailPlaceholder: "[E-posta adresi daha sonra eklenecek]",

    // Blog Detay
    readMore: "Devamını Oku →",
    visitDrive: "Drive'a Git →",
    viewInstagram: "Instagram'da Gör →",
  },
  EN: {
    brandSubtitle: "CONTROL CENTER",
    homeTitle: "What would you like to do?",
    back: "Back",
    madeBy: "Made by Cenk Yaman",
    
    servicesTitle: "Our Services",
    servicesDesc: "How can we help you?",
    
    joinTitle: "Join Our Team!",
    joinDesc: "We are missing one person without you!",
    
    aboutTitle: "Who is Vega Media?",
    aboutDesc: "Learn our founding story and get to know us!",
    
    teamTitle: "Our Family",
    teamDesc: "Meet our valuable team friends!",
    
    driveTitle: "Drive Links",
    driveDesc: "Take a look at our works.",
    
    eventsTitle: "Events",
    eventsDesc: "Take a look at the events we attended in the past.",
    
    partnersTitle: "Meet Our Future Partners",
    partnersDesc: "See our future collaborations.",
    
    blogTitle: "Blog",
    blogDesc: "Check out our latest updates.",
    
    contactTitle: "Contact",
    contactDesc: "Get in touch with us.",

    joinMainText: "We are missing one person in the Vega Media family without you!",
    joinSubText: "Just fill out the form. We will contact you as soon as possible!",
    joinBtn: "Click for Application Form",

    instagramLabel: "Instagram",
    emailLabel: "Email",
    phone1Name: "Cenk Yaman",
    phone2Name: "Nisa Damar",
    phonePlaceholder: "[Phone number will be added later]",
    emailPlaceholder: "[Email address will be added later]",

    readMore: "Read More →",
    visitDrive: "Go to Drive →",
    viewInstagram: "View on Instagram →",
  }
};

export const servicesData = [
  { id: 'press', title: 'Press', descTR: 'Fotoğrafçılık, Medyacılık Hizmeti.', descEN: 'Photography and Media Services.' },
  { id: 'editing', title: 'Editörlük', descTR: 'Fotoğraflarınızı veya Videolarınızı Editleme Hizmeti', descEN: 'Photo or Video Editing Services' },
  { id: 'software', title: 'Yazılım', descTR: 'Website ve uygulama geliştirme hizmeti', descEN: 'Website and application development service' },
  { id: 'soon', title: 'Yakında Eklenecektir', descTR: 'Yakında birçok hizmetimiz sizinle olacaktır.', descEN: 'Many services will be with you soon.' }
];

export const aboutData = {
  TR: "Vega Media, medya, fotoğraf, video, editörlük ve teknoloji alanlarında üretim yapmak amacıyla kurulmuş genç ve yaratıcı bir ekip...",
  EN: "Vega Media is a young and creative team established to produce in the fields of media, photography, video, editing and technology..."
};

export const teamCategoriesData = [
  { id: 'management', titleTR: 'Yönetim Ekibimiz', titleEN: 'Management Team', descTR: 'Değerli Yönetim Ekibimizle Tanışın!', descEN: 'Meet our valuable management team!' },
  { id: 'press', titleTR: 'Basın & Fotoğraf', titleEN: 'Press & Photography', descTR: 'Değerli basın ekibimizle tanışın!', descEN: 'Meet our valuable press team!' },
  { id: 'software', titleTR: 'Yazılım', titleEN: 'Software', descTR: 'Değerli yazılım ekibimizle tanışın!', descEN: 'Meet our valuable software team!' }
];

export const driveLinksData = [
  { id: '1', name: 'A Etkinliği', descTR: 'Çalışmalarımızı görüntüle', descEN: 'View our works', link: 'https://drive.google.com' }
];

export const eventsData = [
  { 
    id: '1', 
    title: 'Örnek Etkinlik 1', 
    date: 'Kasım 2026', 
    descTR: 'Harika bir çalıştay ve etkinlik deneyimi.', 
    descEN: 'A great workshop and event experience.', 
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
    instagramUrl: 'https://instagram.com/vegamediatr'
  }
];

export const partnersData = [
  { 
    id: '1', 
    name: 'Partner Firma', 
    descTR: 'Gelecekteki vizyoner iş ortaklığımız.', 
    descEN: 'Our future visionary partnership.', 
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop',
    instagramUrl: 'https://instagram.com/vegamediatr'
  }
];

export const blogData = [
  { 
    id: '1', 
    titleTR: 'Vega Media Yeni Döneme Hazır!', 
    titleEN: 'Vega Media is Ready for the New Era!',
    date: '10 Eylül 2026', 
    descTR: 'Yepyeni projeler ve teknolojik altyapımızla büyüyoruz.', 
    descEN: 'We are growing with brand new projects and our technological infrastructure.',
    contentTR: 'Vega Media olarak bu dönem çok daha güçlü projelerle karşınızdayız. Yazılım ekibimiz, basın ekibimiz ve yönetim kadromuzla sınırları zorlamaya devam ediyoruz.',
    contentEN: 'As Vega Media, we are here with much stronger projects this term. We continue to push boundaries with our software team, press team and management staff.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop'
  }
];