import React, { ReactNode } from "react";
import { motion } from "framer-motion";

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
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ ease: "easeOut" }}
    >
      {children}
    </motion.main>
  </div>
);

export default Layout;
