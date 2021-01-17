import { Designs, Projects, Button } from './project-view.component';

export const _PROJECTS_LIST: Projects[]  = [
    { 
      ProjectTitle: 'PieShares.com',
      CompanyName: 'PieShares, Inc',
      ImageSrc: [
        { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/pshares_1.png', alt: 'pshares thubmnail 1' },
        { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/pshares_2.png', alt: 'pshares thubmnail 2' },
        { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/pshares_3.png', alt: 'pshares thubmnail 3' },
        { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/pshares_4.png', alt: 'pshares thubmnail 4' },
      ],
      ImageSrc_mobile: 'https://f000.backblazeb2.com/file/public-data/akarimov/pshares_mobile.png',
      ProjectDesc: 'Web based marketplace that brings Nonprofits, Businesses and Shoppers together',
      ProjectLink: { Link: 'https://www.pieshares.com/', ButtonStatus: false },
      ProjectGithub: { Link: '', ButtonStatus: true }
    },

    {
        ProjectTitle: 'Nov video call',
        CompanyName: 'Personal',
        ImageSrc: [
            { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/nox/nox-desktop-1.jpg', alt: 'nox thumbnail 1'},
            { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/nox/nox-desktop-2.jpg', alt: 'nox thumbnail 2'},
            { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/nox/nox-desktop-3.jpg', alt: 'nox thumbnail 3'},
            { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/nox/nox-mobile-1.jpg', alt: 'nox  mobile thumbnail 1'},
            { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/nox/nox-mobile-2.jpg', alt: 'nox  mobile thumbnail 2'},
            { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/nox/nox-mobile-3.jpg', alt: 'nox  mobile thumbnail 3'},
        ],
        ImageSrc_mobile: 'https://f000.backblazeb2.com/file/public-data/akarimov/nox/vivet_400x400.png',
        ProjectDesc: 'Nox is a real-time communication app for the web. It uses WebRTC technology to create a real-time, peer-to-peer, media exchange connection between two devices.',
        ProjectLink: { Link: 'https://nox-videochat-ng.web.app/', ButtonStatus: false },
        ProjectGithub: { Link: 'https://github.com/asadbek064/nox-WebRTC-videocalls', ButtonStatus: false },
    },

    { 
      ProjectTitle: 'Animet.tk',
      CompanyName: 'Personal',
      ImageSrc: [
        { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/animet_2.png', alt: 'anime thubnail 1' },
        { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/animet_1.png', alt: 'anime thubnail 2' },

      ],
      ImageSrc_mobile: 'https://f000.backblazeb2.com/file/public-data/akarimov/animet_mobile_1.png',
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
        { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/mms_express_ad.jpg', alt: 'mms express project banner ad design'},
        { path: 'https://f000.backblazeb2.com/file/public-data/akarimov/mms_express_logo.png', alt: 'mms express project logo design'},
      ],
      ImageSrc_mobile: 'https://f000.backblazeb2.com/file/public-data/akarimov/mms_express_ad.jpg',
      DesignDesc: 'Created logo and advert for mms trucking company using adobe illustrator and photoshop.',
      DesignLink: { Link: 'https://f000.backblazeb2.com/file/public-data/MMS_EXPRESS_HIRING_FULL_AD-01.png', ButtonStatus: false},
    },
  ]