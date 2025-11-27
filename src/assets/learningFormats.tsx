import { type JSX } from 'react';
import dataLearningFormats from '../assets/db/formats.json';

import { 
  FiMonitor,
  FiUsers,
  FiClock,
  FiTool,
  FiBriefcase
} from 'react-icons/fi';
import type { TCard } from '../ui/card/card';

const getIconByTitle = (title: string): JSX.Element | undefined => {
  switch (title) {
    case 'Онлайн‑обучение':
      return <FiMonitor size={24} />;
    case 'Офлайн‑обучение':
      return <FiUsers size={24} />;
    case 'Интенсивы':
      return <FiClock size={24} />;
    case 'Воркшопы':
      return <FiTool size={24} />;
    case 'Корпоративные тренинги':
      return <FiBriefcase size={24} />;
    default:
      return undefined;
  }
};

const learningFormats: TCard[] = dataLearningFormats.map(item => ({
  title: item.title,
  text: item.text,
  icon: getIconByTitle(item.title),
  enableFlip: false
}));

export default learningFormats;