import {
  BottomNavigation,
  Container,
  createTheme,
  Link,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import type { AppProps } from "next/app";
import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import { AppStepper } from "../src/Components/AppStepper";
import GithubIcon from "@mui/icons-material/Github";

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

        <Container fixed>
          <AppStepper />
          <Component {...pageProps} />
        </Container>
        <BottomNavigation
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        >
          <Link
            color="inherit"
            href={"https://github.com/ThePatriczek/github-issue-analyzer"}
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </BottomNavigation>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
