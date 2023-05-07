import { Box } from "@chakra-ui/react";
import { Layout } from "../layout/layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import { DogsContainer } from "../pet-components/Dogs/DogsContainer/DogsContainer";
import { CatsContainer } from "../pet-components/Cats/CatsContainer/CatsContainer";
import { BirdsContainer } from "../pet-components/Birds/BirdsContainer/BirdsContainer";

export const ToggleColorMode = () => {
  return (
    <Layout>
      <Box>
        <Routes>
          <Route path="/*" element={<Navigate to="/dogs" />} />
          <Route path="/cats" element={<CatsContainer />} />
          <Route path="/dogs" element={<DogsContainer />} />
          <Route path="/birds" element={<BirdsContainer />} />
        </Routes>
      </Box>
    </Layout>
  );
};
