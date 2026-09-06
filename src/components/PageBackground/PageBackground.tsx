import type { ReactNode } from "react";

import HeroScene from "../3D/HeroScene";

type PageBackgroundProps = {
  children: ReactNode;
};

function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="relative isolate min-h-dvh overflow-x-hidden bg-ink text-[#f5f1ea]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <HeroScene />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default PageBackground;
