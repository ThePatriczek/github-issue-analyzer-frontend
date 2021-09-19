import { wrap } from "@atlasgroup/react-wrap";
import {
  Step,
  StepLabel,
  Stepper,
  StepperProps,
  StepButton,
} from "@mui/material";
import React, { FC } from "react";
import { ColorlibConnector, ColorlibStepIcon } from "./AppStepper";
import { useAppStepper } from "./useAppStepper";


const AppStepperView: FC<ReturnType<typeof useAppStepper>> = ({
  onStepButtonClick,
  steps,
  ...props
}) => (
  <Stepper
    sx={{ mt: 5, mb: 20 }}
    alternativeLabel
    connector={<ColorlibConnector />}
    {...props}
  >
    {steps.map((label, index) => (
      <Step key={label}>
        <StepButton onClick={onStepButtonClick(index)}>
          <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
        </StepButton>
      </Step>
    ))}
  </Stepper>
);

export const AppStepper = wrap(AppStepperView, useAppStepper);
