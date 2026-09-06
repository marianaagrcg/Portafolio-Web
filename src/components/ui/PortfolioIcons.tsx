import { CalendarDays, Cloud, MapPin, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import {
  siDocker,
  siGit,
  siMysql,
  siNestjs,
  siNextdotjs,
  siTypescript,
} from 'simple-icons';

type IconProps = {
  className?: string;
};

const iconClass = 'portfolio-icon';

export const CalendarIcon = ({ className = iconClass }: IconProps) => (
  <CalendarDays className={className} strokeWidth={1.8} aria-hidden="true" />
);

export const MapPinIcon = ({ className = iconClass }: IconProps) => (
  <MapPin className={className} strokeWidth={1.8} aria-hidden="true" />
);

export const BriefcaseIcon = ({ className = iconClass }: IconProps) => (
  <BriefcaseBusiness className={className} strokeWidth={1.8} aria-hidden="true" />
);

export const GraduationIcon = ({ className = iconClass }: IconProps) => (
  <GraduationCap className={className} strokeWidth={1.8} aria-hidden="true" />
);

export type TechLogoProps = IconProps & {
  name: 'nextdotjs' | 'nestjs' | 'typescript' | 'mysql' | 'git' | 'docker' | 'amazonaws';
};

export const TechLogo = ({ name, className = iconClass }: TechLogoProps) => {
  const iconMap = {
    nextdotjs: siNextdotjs,
    nestjs: siNestjs,
    typescript: siTypescript,
    mysql: siMysql,
    git: siGit,
    docker: siDocker,
  } as const;

  if (name === 'amazonaws') {
    return <Cloud className={className} strokeWidth={1.8} aria-hidden="true" />;
  }

  const icon = iconMap[name];

  if (!icon) {
    return null;
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
};

type TechTokenProps = {
  name: string;
  icon?: React.ReactNode;
  className?: string;
};

export const TechToken = ({ name, icon, className = '' }: TechTokenProps) => (
  <span className={`tech-token ${className}`.trim()}>
    {icon}
    <span>{name}</span>
  </span>
);
