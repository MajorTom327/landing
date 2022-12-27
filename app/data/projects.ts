import andromedaAsset from '../assets/andromeda.png';
import basemintAsset from '../assets/basemint.png';
import deadsafeAsset from '../assets/deadsafe.png';

export type Project = {
  key: string;
  title: string;
  techs: string[];
  url?: string;
  repo?: string;
  image?: string;
  description?: string[];
}

export const projects: Project[] = [
  {
    key: 'bellz',
    title: 'projects.bellz.title',
    techs: ['skills.react', 'skills.node', 'skills.remix'],
    description: [
      'projects.bellz.description.0',
      'projects.bellz.description.1',
      'projects.bellz.description.2'
    ]
  },
  {
    key: "deadsafe",
    title: "projects.deadsafe.title",
    techs: ["skills.react", "skills.node", "skills.remix", 'skills.web3'],
    image: deadsafeAsset,
    url: "https://the-deadsafe.com",
    description: [
      "projects.deadsafe.description.0",
      "projects.deadsafe.description.1",
    ],
  },
  {
    key: 'basemint',
    title: 'projects.basemint.title',
    techs: ['skills.react', 'skills.web3'],
    url: 'https://majortom327.github.io/basemint/',
    repo: "https://github.com/MajorTom327/basemint",
    image: basemintAsset,
    description: [
      'projects.basemint.description.0',
      'projects.basemint.description.1'
    ]
  },
  {
    key: 'andromeda',
    title: 'projects.andromeda.title',
    techs: ['skills.react', 'skills.node', 'skills.meteor'],
    // url: 'https://andromeda.styx-sys.com',
    image: andromedaAsset,
    description: [
      'projects.andromeda.description.0',
      'projects.andromeda.description.1'
    ]
  },
  {
    key: 'styx',
    title: 'projects.styx.title',
    techs: ['skills.php', 'skills.mysql'],
    description: [
      'projects.styx.description.0',
    ]
  }
]

export default projects;
