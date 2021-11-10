import {useRouter} from "next/dist/client/router";

export const useRepositoryPage = () => {
    const {query, push} = useRouter();
    const {owner, repo} = query;
    const onSimilarRepositoriesClick = () =>
        push(`/${owner}/${repo}/similar`).catch(console.error);

    return {onSimilarRepositoriesClick};
}