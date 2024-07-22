import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/react-real-estate-main',
  },
  {
    id: 2,
    text: 'about',
    url: '/react-real-estate-main/about',
  },
  {
    id: 3,
    text: 'items',
    url: '/react-real-estate-main/items',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: '"Our mission is to deliver exceptional real estate services by providing superior market knowledge, innovative solutions, and a personalized approach to meet the diverse needs of our clients. We are dedicated to fostering a culture of trust, integrity, and community engagement, ensuring sustainable growth and value creation for our stakeholders."',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: '"To be the leading real estate company in our region, renowned for our commitment to customer satisfaction, innovation, and sustainable development, shaping the future of urban living."',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: '"The pattern of growth in real estate follows a cyclical pattern, often influenced by broader economic trends."',
  },
];
