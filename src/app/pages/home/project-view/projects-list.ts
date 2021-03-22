import { Designs, Projects, Button } from './project-view.component';

/* Local Serving img */

export const _PROJECTS_LIST: Projects[]  = [
    { 
      ProjectTitle: 'Pieshares.com',
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
      ProjectTitle: 'Animet.tk',
      CompanyName: 'Personal',
      ImageSrc: [
        { path: '../../../../assets/image/animet_2.jpg', alt: 'anime thubnail 1' },
        { path: '../../../../assets/image/animet_1.jpg', alt: 'anime thubnail 2' },

      ],
      ImageSrc_mobile: '',
      ProjectDesc: 'Watch anime online in high quality for free. Watch anime subbed, anime dubbed online free. Update daily, fast streaming, no ads, no registration',
      ProjectLink: { Link: 'https://www.animet.tk/', ButtonStatus: false },
      ProjectGithub: { Link: 'https://github.com/asadbek064/animet', ButtonStatus: true }
    },
    
    {
        ProjectTitle: 'Nox video call',
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
        ProjectDesc: 'Nox is a real-time communication app for the web. It uses WebRTC technology to create a real-time, peer-to-peer connection between two devices.',
        ProjectLink: { Link: 'https://nox-videochat-ng.web.app/', ButtonStatus: false },
        ProjectGithub: { Link: 'https://github.com/asadbek064/nox-WebRTC-videocalls', ButtonStatus: false },
    },

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
      DesignLink: { Link: 'https://f000.backblazeb2.com/file/public-data/MMS_EXPRESS_HIRING_FULL_AD-01.png', ButtonStatus: false,  BtnName: 'VIEW'},
    },
    {
      DesignTitle: 'Prototyping and App Design',
      CompanyName: 'Personal',
      ImageSrc: [
        { path: '../../../../assets/image/ebusiness-cards-1.jpg', alt: 'eBusiness card design'},
        { path: '../../../../assets/image/ebusiness-cards-2.jpg', alt: 'eBusiness card design'},
        { path: '../../../../assets/image/ebusiness-cards-3.jpg', alt: 'eBusiness card design'},
        { path: '../../../../assets/image/ebusiness-cards-4.jpg', alt: 'eBusiness card design'},
        { path: '../../../../assets/image/ebusiness-cards-5.jpg', alt: 'eBusiness card design'},
      
      ],
      ImageSrc_mobile: '',
      DesignDesc: 'App layout Design and Low Fidelity Prototype created with figma and photoshop',
      DesignLink: { Link: 'https://www.figma.com/file/mV9QR57nN7dFRAO8w4x9aI/eBusiness-Cards?node-id=0%3A1', ButtonStatus: false, BtnName: 'OPEN FIGMA'},
    },
  ]