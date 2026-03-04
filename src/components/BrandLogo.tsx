import Image from 'next/image';
import { cn } from '@/lib/utils';

type BrandLogoProps = {
  className?: string;
  textClassName?: string;
};

const BrandLogo = ({ className, textClassName }: BrandLogoProps) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image
        src="/wefi.png"
        alt="WEFI logo"
        width={48}
        height={48}
        className="h-12 w-12 rounded-2xl object-cover"
      />
      <span className={cn('text-xl font-bold', textClassName)}>
        WEFI-Institute
      </span>
    </div>
  );
};

export default BrandLogo;
