import React, { ReactNode } from "react";
import { LazyMotion, m } from "framer-motion";

const loadFeatures = () => import("@/lib/features").then((res) => res.default);

type Props = {
  children: ReactNode;
};

const variants = {
  hidden: { filter: "blur(3px)", opacity: 0, scale: 0.99 },
  enter: { filter: "blur(0px)", opacity: 1, scale: 1 },
  exit: { opacity: 0 },
};

const Layout = ({ children }: Props): JSX.Element => (
  <div>
    <LazyMotion features={loadFeatures}>
      <m.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ ease: "easeOut" }}
      >
        {children}
      </m.main>
    </LazyMotion>
  </div>
);

export default Layout;
