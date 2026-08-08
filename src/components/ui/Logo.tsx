import Image from "next/image";
import clsx from "clsx";

export function Logo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Zoom Clicks"
      width={1124}
      height={904}
      priority={priority}
      className={clsx("select-none mix-blend-lighten", className)}
    />
  );
}
