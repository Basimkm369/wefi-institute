import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  textClassName?: string;
};

const BrandLogo = ({ className, textClassName }: BrandLogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary-foreground"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            rx="1"
            fill="currentColor"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            rx="1"
            fill="currentColor"
          />
          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            rx="1"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className={cn("text-xl font-bold", textClassName)}>
        WEFI-institute
      </span>
    </div>
  );
};

export default BrandLogo;
