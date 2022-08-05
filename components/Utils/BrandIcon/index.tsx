import * as icons from "simple-icons/icons";

const BrandIcon = ({ dimensions, icon, ...props }: BrandIconProps) => {
  const simIcon = icons[icon];
  return (
    <svg
      height={dimensions}
      width={dimensions}
      viewBox="0 0 24 24"
      aria-label={icon}
      role="img"
      {...props}
    >
      <title>{icon}</title>
      <path d={simIcon.path} />
    </svg>
  );
};

interface BrandIconProps {
  icon: keyof typeof icons;
  dimensions: number;
  className?: string;
}

export default BrandIcon;
