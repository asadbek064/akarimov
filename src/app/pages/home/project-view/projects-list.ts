import { Designs, Projects, Button } from './project-view.component';

/* Local Serving img */

export const _PROJECTS_LIST: Projects[]  = [
    { 
      ProjectTitle: 'PieShares.com',
      CompanyName: 'PieShares, Inc',
      ImageSrc: [
        { path: '../../../../assets/image/pshares_1.jpg', alt: 'pshares thubmnail 1' },
        { path: '../../../../assets/image/pshares_2.jpg', alt: 'pshares thubmnail 2' },
        { path: '../../../../assets/image/pshares_3.jpg', alt: 'pshares thubmnail 3' },
        { path: '../../../../assets/image/pshares_4.jpg', alt: 'pshares thubmnail 4' },
      ],
      ImageSrc_mobile: '',
      ProjectDesc: 'Web based marketplace that brings Nonprofits, Businesses and Shoppers together',
      ProjectLink: { Link: 'https://www.pieshares.com/', ButtonStatus: false },
      ProjectGithub: { Link: '', ButtonStatus: true }
    },

    {
        ProjectTitle: 'Nov video call',
        CompanyName: 'Personal',
        ImageSrc: [
            { path: '../../../../assets/image/nox-desktop-1.jpg', alt: 'nox thumbnail 1'},
            { path: '../../../../assets/image/nox-desktop-2.jpg', alt: 'nox thumbnail 2'},
            { path: '../../../../assets/image/nox-desktop-3.jpg', alt: 'nox thumbnail 3'},
            { path: '../../../../assets/image/nox-mobile-1.jpg', alt: 'nox  mobile thumbnail 1'},
            { path: '../../../../assets/image/nox-mobile-2.jpg', alt: 'nox  mobile thumbnail 2'},
            { path: '../../../../assets/image/nox-mobile-3.jpg', alt: 'nox  mobile thumbnail 3'},
        ],
        ImageSrc_mobile: '',
        ProjectDesc: 'Nox is a real-time communication app for the web. It uses WebRTC technology to create a real-time, peer-to-peer, media exchange connection between two devices.',
        ProjectLink: { Link: 'https://nox-videochat-ng.web.app/', ButtonStatus: false },
        ProjectGithub: { Link: 'https://github.com/asadbek064/nox-WebRTC-videocalls', ButtonStatus: false },
    },

    { 
      ProjectTitle: 'Animet.tk',
      CompanyName: 'Personal',
      ImageSrc: [
        { path: '../../../../assets/image/animet_2.jpg', alt: 'anime thubnail 1' },
        { path: '../../../../assets/image/animet_1.jpg', alt: 'anime thubnail 2' },

      ],
      ImageSrc_mobile: '',
      ProjectDesc: 'Animet, is an anime cataloging application website. The site provides its users with a like system to find and score anime.',
      ProjectLink: { Link: 'https://www.animet.tk/', ButtonStatus: false },
      ProjectGithub: { Link: 'https://github.com/asadbek064/animet', ButtonStatus: false }
    }
  ];

export const  _DESIGNS_LIST: Designs[] = [
    {
      DesignTitle: 'Logo Design / Ad Design',
      CompanyName: 'MMS EXPRESS',
      ImageSrc: [
        { path: '../../../../assets/image/mms_express_ad.jpg', alt: 'mms express project banner ad design'},
        { path: '../../../../assets/image/mms_express_logo.jpg', alt: 'mms express project logo design'},
      ],
      ImageSrc_mobile: '',
      DesignDesc: 'Created logo and advert for mms trucking company using adobe illustrator and photoshop.',
      DesignLink: { Link: 'https://f000.backblazeb2.com/file/public-data/MMS_EXPRESS_HIRING_FULL_AD-01.png', ButtonStatus: false},
    },
  ]

  /*  CDN Img Hosting */
/* export const _PROJECTS_LIST: Projects[]  = [
    { 
      ProjectTitle: 'PieShares.com',
      CompanyName: 'PieShares, Inc',
      ImageSrc: [
        { path: '../../../../assets/image/pshares_1.png', alt: 'pshares thubmnail 1' },
        { path: '../../../../assets/image/pshares_2.png', alt: 'pshares thubmnail 2' },
        { path: '../../../../assets/image/pshares_3.png', alt: 'pshares thubmnail 3' },
        { path: '../../../../assets/image/pshares_4.png', alt: 'pshares thubmnail 4' },
      ],
      ImageSrc_mobile: '../../../../assets/image/pshares_mobile.png',
      ProjectDesc: 'Web based marketplace that brings Nonprofits, Businesses and Shoppers together',
      ProjectLink: { Link: 'https://www.pieshares.com/', ButtonStatus: false },
      ProjectGithub: { Link: '', ButtonStatus: true }
    },

    {
        ProjectTitle: 'Nov video call',
        CompanyName: 'Personal',
        ImageSrc: [
            { path: '../../../../assets/image/nox/nox-desktop-1.jpg', alt: 'nox thumbnail 1'},
            { path: '../../../../assets/image/nox/nox-desktop-2.jpg', alt: 'nox thumbnail 2'},
            { path: '../../../../assets/image/nox/nox-desktop-3.jpg', alt: 'nox thumbnail 3'},
            { path: '../../../../assets/image/nox/nox-mobile-1.jpg', alt: 'nox  mobile thumbnail 1'},
            { path: '../../../../assets/image/nox/nox-mobile-2.jpg', alt: 'nox  mobile thumbnail 2'},
            { path: '../../../../assets/image/nox/nox-mobile-3.jpg', alt: 'nox  mobile thumbnail 3'},
        ],
        ImageSrc_mobile: '../../../../assets/image/nox/vivet_400x400.png',
        ProjectDesc: 'Nox is a real-time communication app for the web. It uses WebRTC technology to create a real-time, peer-to-peer, media exchange connection between two devices.',
        ProjectLink: { Link: 'https://nox-videochat-ng.web.app/', ButtonStatus: false },
        ProjectGithub: { Link: 'https://github.com/asadbek064/nox-WebRTC-videocalls', ButtonStatus: false },
    },

    { 
      ProjectTitle: 'Animet.tk',
      CompanyName: 'Personal',
      ImageSrc: [
        { path: '../../../../assets/image/animet_2.png', alt: 'anime thubnail 1' },
        { path: '../../../../assets/image/animet_1.png', alt: 'anime thubnail 2' },

      ],
      ImageSrc_mobile: '../../../../assets/image/animet_mobile_1.png',
      ProjectDesc: 'Animet, is an anime cataloging application website. The site provides its users with a like system to find and score anime.',
      ProjectLink: { Link: 'https://www.animet.tk/', ButtonStatus: false },
      ProjectGithub: { Link: 'https://github.com/asadbek064/animet', ButtonStatus: false }
    }
  ];

export const  _DESIGNS_LIST: Designs[] = [
    {
      DesignTitle: 'Logo Design / Ad Design',
      CompanyName: 'MMS EXPRESS',
      ImageSrc: [
        { path: '../../../../assets/image/mms_express_ad.jpg', alt: 'mms express project banner ad design'},
        { path: '../../../../assets/image/mms_express_logo.png', alt: 'mms express project logo design'},
      ],
      ImageSrc_mobile: '../../../../assets/image/mms_express_ad.jpg',
      DesignDesc: 'Created logo and advert for mms trucking company using adobe illustrator and photoshop.',
      DesignLink: { Link: 'https://f000.backblazeb2.com/file/public-data/MMS_EXPRESS_HIRING_FULL_AD-01.png', ButtonStatus: false},
    },
  ] */