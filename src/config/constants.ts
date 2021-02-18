import { MenuItem } from '../sharedTypes/appTopMenu';
import { SidebarItem } from '../sharedTypes/sidebar';

export const topMenuItems: MenuItem[] = [
  {
    id: 1,
    icon: '/icons/dollar-sign.png',
  },
  {
    id: 2,
    icon: '/save.png',
  },
  {
    id: 3,
    icon: '/icons/bell.svg',
  },
  {
    id: 4,
    icon: '/LandingPage/carousel.png',
  },
];

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    name: 'dashboard',
  },
  {
    id: 2,
    name: 'explore',
  },
  {
    id: 3,
    name: 'rooms',
  },
  {
    id: 4,
    name: 'news',
  },
  {
    id: 5,
    name: 'contracts',
  },
  {
    id: 6,
    name: 'payments',
  },
];

type firebaseConfigType = {
  apiKey: string;
  authDomain: string;
  databaseURL?: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
};

export const firebaseConfig: firebaseConfigType = {
  apiKey: 'AIzaSyDloJQF5tnfgf5-T29eCN76pIkQmWx8n_s',
  authDomain: 'vofis-200b3.firebaseapp.com',
  projectId: 'vofis-200b3',
  storageBucket: 'vofis-200b3.appspot.com',
  messagingSenderId: '1076662213398',
  appId: '1:1076662213398:web:7ff3a91e2afc4043920e37',
};
