import { TechLogo, TechLogoProps } from './PortfolioIcons';

// Maps a display label (e.g. "Next.js") used across Experience/Skills tags
// to its matching TechLogo, so the mapping lives in a single place instead
// of being duplicated per section.
const tagToLogoName: Record<string, TechLogoProps['name']> = {
  'Next.js': 'nextdotjs',
  'Nest.js': 'nestjs',
  TypeScript: 'typescript',
  MySQL: 'mysql',
  Git: 'git',
  Docker: 'docker',
  AWS: 'amazonaws',
};

export const getTechLogo = (tag: string) => {
  const name = tagToLogoName[tag];
  return name ? <TechLogo name={name} /> : undefined;
};
