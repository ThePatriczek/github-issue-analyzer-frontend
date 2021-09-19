import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import type { AppProps } from "next/app";
import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container fixed sx={{ height: "100vh" }}>
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
              height: "100vh",
            }}
          >
            <Component {...pageProps} />
          </Box>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
