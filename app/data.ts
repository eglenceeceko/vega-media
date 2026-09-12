export type Language = 'TR' | 'EN';

export const translations = {
  TR: {
    brandSubtitle: "Ailesine Hoşgeldiniz.",
    homeTitle: "Ne yapmak istersiniz?",
    back: "Geri",
    madeBy: "Made by Cenk Yaman",
    
    // Ana Sayfa Kartları
    servicesTitle: "Hizmetlerimiz",
    servicesDesc: "Size hangi alanda yardımcı olabiliriz?",
    tagProduction: "Prodüksiyon",
    
    joinTitle: "Ekibimize Katılın!",
    joinDesc: "Sen yoksan bir kişi eksiğiz!",
    tagCareer: "Kariyer",
    
    aboutTitle: "Vega Media Kimdir?",
    aboutDesc: "Kuruluş hikayemizi öğrenin ve bizi tanıyın!",
    tagStory: "Hikayemiz",
    
    teamTitle: "Ailemiz",
    teamDesc: "Değerli ekip dostlarımızı tanıyın!",
    tagTeam: "Ekip",
    
    driveTitle: "Drive Bağlantıları",
    driveDesc: "Yaptığımız işleri görün.",
    tagArchive: "Arşiv",
    
    eventsTitle: "Etkinlikler",
    eventsDesc: "Geçmişte katıldığımız etkinliklere bir göz atın.",
    tagCalendar: "Takvim",
    
    partnersTitle: "Gelecek Partnerlerimizi Tanıyın",
    partnersDesc: "Gelecekteki işbirliklerimizi görün.",
    tagCollaboration: "İş Birliği",
    
    blogTitle: "Blog",
    blogDesc: "Yeni güncellemelerimizi görün.",
    tagPublications: "Yayınlar",
    
    contactTitle: "İletişim",
    contactDesc: "Bize Ulaşın.",
    tagActive: "7/24 Aktif",

    // Ekibimize Katılın Sayfası
    joinMainText: "Vega Media Ailemizde sen yoksan bir kişi eksiğiz!",
    joinSubText: "Forma başvurmanız yeterlidir. Biz sizinle en yakın kısa sürede iletişime geçeceğiz!",
    joinBtn: "Başvuru Formu İçin Tıkla",

    // İletişim Detayları
    instagramLabel: "Instagram",
    emailLabel: "E-posta",
    phone1Name: "Cenk Yaman",
    phone2Name: "Nisa Damar",
    phone1Value: "+90 (545) 390 34 30", // Cenk'in numarası
phone2Value: "+90 (555) 085 59 59", // Nisa'nın numarası
    emailPlaceholder: "[E-posta adresi daha sonra eklenecek]",

    // Blog Detay
    readMore: "Devamını Oku →",
    visitDrive: "Drive'a Git →",
    viewInstagram: "Instagram'da Gör →",
  },
  EN: {
    brandSubtitle: "OUR WELCOME",
    homeTitle: "What would you like to do?",
    back: "Back",
    madeBy: "Made by Cenk Yaman",
    
    servicesTitle: "Our Services",
    servicesDesc: "How can we help you?",
    tagProduction: "Production",
    
    joinTitle: "Join Our Team!",
    joinDesc: "We are missing one person without you!",
    tagCareer: "Career",
    
    aboutTitle: "Who is Vega Media?",
    aboutDesc: "Learn our founding story and get to know us!",
    tagStory: "Our Story",
    
    teamTitle: "Our Family",
    teamDesc: "Meet our valuable team friends!",
    tagTeam: "Team",
    
    driveTitle: "Drive Links",
    driveDesc: "Take a look at our works.",
    tagArchive: "Archive",
    
    eventsTitle: "Events",
    eventsDesc: "Take a look at the events we attended in the past.",
    tagCalendar: "Calendar",
    
    partnersTitle: "Meet Our Future Partners",
    partnersDesc: "See our future collaborations.",
    tagCollaboration: "Collaboration",
    
    blogTitle: "Blog",
    blogDesc: "Check out our latest updates.",
    tagPublications: "Publications",
    
    contactTitle: "Contact",
    contactDesc: "Get in touch with us.",
    tagActive: "24/7 Active",

    joinMainText: "We are missing one person in the Vega Media family without you!",
    joinSubText: "Just fill out the form. We will contact you as soon as possible!",
    joinBtn: "Click for Application Form",

    instagramLabel: "Instagram",
    emailLabel: "Email",
    phone1Name: "Cenk Yaman",
    phone2Name: "Nisa Damar",
        phone1Value: "+90 (545) 390 34 30", // Cenk'in numarası
phone2Value: "+90 (555) 085 59 59", // Nisa'nın numarası
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
  {
    id: 'yonetim',
    titleTR: 'Yönetim Ekibimiz',
    titleEN: 'Management Team',
    descTR: 'Değerli Yönetim Ekibimizle Tanışın!',
    descEN: 'Meet our valued Management Team!',
    members: [
      {
        id: 1,
        nameTR: 'Cenk Yaman',
        nameEN: 'Cenk Yaman',
        roleTR: 'Kurucu',
        roleEN: 'Founder',
        image: 'https://images.unsplash.com/...'
      },
      // Diğer yönetim üyeleri...
    ]
  },
  {
    id: 'basin',
    titleTR: 'Basın & Fotoğraf',
    titleEN: 'Press & Photography',
    descTR: 'Değerli basın ekibimizle tanışın!',
    descEN: 'Meet our valued press team!',
    members: [
      {
        id: 2,
        nameTR: 'Örnek Üye',
        nameEN: 'Sample Member',
        roleTR: 'Fotoğrafçı',
        roleEN: 'Photographer',
        image: 'https://images.unsplash.com/...'
      }
    ]
  },
  {
    id: 'yazilim',
    titleTR: 'Yazılım',
    titleEN: 'Software',
    descTR: 'Değerli yazılım ekibimizle tanışın!',
    descEN: 'Meet our valued software team!',
    members: [
      {
        id: 3,
        nameTR: 'Örnek Geliştirici',
        nameEN: 'Sample Developer',
        roleTR: 'Frontend Geliştirici',
        roleEN: 'Frontend Developer',
        image: 'https://images.unsplash.com/...'
      }
    ]
  }
];

export const driveLinksData = [
  { id: '1', nameTR: 'Çok Yakında...', nameEN: 'Coming Soon...', descTR: 'Bu alan şuanlık bakımdadır, yakın zamanda yazılım ekibimiz tarafından güncellenip hizmetinize sunulacaktır.', descEN: 'This section is currently under maintenance and will be updated and put into service by our software team soon.', link: 'https://instagram.com/vegamediatr' }
];

export const eventsData = [
  { 
    id: '1', 
    titleTR: 'Çok Yakında...',
    titleEN: 'Coming Soon...',
    dateTR: '11 Ekim 2026',
  dateEN: '11 October 2026',
    descTR: 'Bu alan şuanlık bakımdadır, yakın zamanda yazılım ekibimiz tarafından güncellenip hizmetinize sunulacaktır.', 
    descEN: 'This section is currently under maintenance and will be updated and put into service by our software team soon.', 
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    instagramUrl: 'https://instagram.com/vegamediatr'
  }
];

export const partnersData = [
  { 
    id: '1', 
    nameTR: 'Çok Yakında...',
    nameEN: 'Coming Soon...',
    descTR: 'Bu alan şuanlık bakımdadır, yakın zamanda yazılım ekibimiz tarafından güncellenip hizmetinize sunulacaktır.', 
    descEN: 'This section is currently under maintenance and will be updated and put into service by our software team soon.', 
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    instagramUrl: 'https://instagram.com/vegamediatr'
  }
];

export const blogData = [
  { 
    id: '1', 
    titleTR: 'Vega Media Yenilenen Yüzüyle Karşınızda!', 
    titleEN: 'Vega Media is Back with a Renewed Look!',
    dateTR: '10 Eylül 2026', 
    dateEN: '10 September 2026',
    descTR: 'Yepyeni projeler ve teknolojik altyapımızla büyüyoruz, gelişiyoruz, daha iyisi olmaya hazırlanıyoruz.', 
    descEN: 'Growing with brand new projects and technological infrastructure, we are evolving and preparing to become even better.',
contentTR: `Vega Media olarak, dijital dünyada ve etkinlik yönetiminde sınırları zorlamaya devam ediyoruz. Topluluğumuzu ve projelerimizi çok daha ileri bir seviyeye taşımak için uzun süredir sürdürdüğümüz yenilenme sürecini gururla tamamladık.

Gelişen teknolojiye ayak uydurmakla kalmıyor, trendleri bizzat belirliyoruz. Yenilenen web sitemiz ve modern altyapımızla artık projelerimize, etkinlik arşivlerimize ve içeriklerimize ulaşmak çok daha hızlı ve akıcı. Ziyaretçilerimize sunduğumuz bu taze arayüz, gelecekte atacağımız büyük adımların yalnızca bir başlangıcı.

Medya prodüksiyonundan sosyal medya yönetimine, unutulmaz çalıştaylardan büyük çaplı organizasyonlara kadar her adımda kaliteyi hedefliyoruz. Yeni dönemde hayata geçireceğimiz sürpriz projeler ve ortaklıklar için sabırsızlanıyoruz.

Bizi bu yolculukta yalnız bırakmayan tüm ailemize ve paydaşlarımıza teşekkür ederiz. 
Gelişmelerden haberdar olmak için takipte kalın!`,    
contentEN: `As Vega Media, we continue to push boundaries in the digital world and event management. We are proudly completing our long-running renewal process to take our community and projects to the next level.

We don't just keep up with developing technology; we set the trends ourselves. With our revamped website and modern infrastructure, accessing our projects, event archives, and content is now much faster and smoother. This fresh interface we offer our visitors is just the beginning of the major steps we will take in the future.

From media production to social media management, and from unforgettable workshops to large-scale organizations, we aim for quality at every step. We are excited about the surprise projects and partnerships we will bring to life in this new era.

Thank you to all our family members and stakeholders who haven't left us alone on this journey. 
Stay tuned to keep up with all the updates!`,    
image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  }
];