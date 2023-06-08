import React from "react";
import styled from "styled-components";

import Gallery from "./components/gallery/Gallery";
import Sidebar from "./components/sidebar/Sidebar";

const Container = styled.div`
  display: flex;
  background-color: #2e3035;
  height: 100vh;
  position: relative;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Gallery />
    </Container>
  );
};

export default App;
