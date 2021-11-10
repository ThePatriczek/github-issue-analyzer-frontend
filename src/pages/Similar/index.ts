import { wrap } from "@atlasgroup/react-wrap";
import { SimilarPageView} from "./Similar.view";
import { useSimilarPage } from "./useSimilarPage";

export const SimilarPage = wrap(SimilarPageView, useSimilarPage);