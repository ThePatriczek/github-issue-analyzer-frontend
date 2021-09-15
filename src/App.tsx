import {
  Box,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { IssueForm } from "./Components/IssueForm";
const queryClient = new QueryClient();

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "light" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box
          display={"flex"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <IssueForm />
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
