import React, { ReactNode } from "react";

import { Container } from "./styles";

const MainContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
