import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";

export type Repository = {
  owner: string;
  name: string;
  description: string;
  language: string;
  stars: number;
};

export const useOwnerPage = () => {
  const { query, isReady, push } = useRouter();
  const owner = query.owner;
  const { data } = useQuery<Repository[]>(
    "repositories",
    async () =>
      (
        await fetch(`http://localhost:8080/user/getRepositories/${owner}`)
      ).json(),
    { enabled: isReady && !!owner }
  );

  const repositories = data;

  const onCardClick = (repo: string) => () =>
    push({ pathname: `/[owner]/[repo]`, query: { ...query, repo } });

  return { repositories, onCardClick };
};
