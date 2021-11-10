import {useRouter} from "next/dist/client/router";
import {useQuery} from "react-query";
import {Repository} from "../Owner/useOwnerPage";

export const useSimilarPage = () => {
    const { query, isReady, push } = useRouter();
    const owner = query.owner;
    const repo = query.repo;

    const { data } = useQuery<Repository[]>(
        "repositories",
        async () =>
            (
                await fetch(`http://localhost:8080/repository/similar/${owner}/${repo}`)
            ).json(),
        { enabled: isReady && !!owner }
    );

    const repositories = data;

    const onCardClick = (owner: string, repo: string) => () =>
        push({ pathname: `/[owner]/[repo]`, query: { owner, repo } });

    return { repositories, onCardClick };
}