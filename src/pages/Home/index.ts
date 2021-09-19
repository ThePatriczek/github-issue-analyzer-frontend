import { wrap } from "@atlasgroup/react-wrap";
import { HomePageView } from "./Home.view";
import { useHomePage } from "./useHomePage";

export const HomePage = wrap(HomePageView, useHomePage);
