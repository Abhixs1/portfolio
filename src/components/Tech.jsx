import React from "react";

import { SectionWrapper } from "../hoc";
import TechGrid from "./TechGrid";

const Tech = () => {
  return <TechGrid />;
};

export default SectionWrapper(Tech, "");
