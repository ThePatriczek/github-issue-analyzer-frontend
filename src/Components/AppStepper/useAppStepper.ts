import { StepButtonProps, StepperProps } from "@mui/material";
import { useRouter } from "next/dist/client/router";

export const useAppStepper = (props?: StepperProps) => {
  const { pathname, push, query } = useRouter();
  const activeStep = activeSteps[pathname];
  const owner = query.owner;
  const repo = query.repo;

  const onStepButtonClick = (index: number) => (_) => {
    if (index === 0)
      return push({
        pathname: "/",
      }).catch(console.error);

    if (index === 1)
      return push({
        pathname: "/[owner]",
        query: {
          owner: query.owner,
        },
      }).catch(console.error);

    if (index === 2)
      return push({
        pathname: "/[owner]/[repo]",
        query,
      }).catch(console.error);
  };

  const steps = [
    owner ? `Owner: ${owner}` : "Choose an owner",
    repo ? `Repository: ${repo}` : "Select the repository",
    "Write an issue",
  ];

  return { ...props, steps, onStepButtonClick, activeStep };
};

const activeSteps: Record<string, number> = {
  "/": 0,
  "/[owner]": 1,
  "/[owner]/[repo]": 2,
};
