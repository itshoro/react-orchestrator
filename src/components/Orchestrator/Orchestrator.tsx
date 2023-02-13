import type { Dispatch, ReactElement, SetStateAction } from "react";

type ValidState = string | number;
type ValidStates = readonly ValidState[];

type OrchestratorController<TSteps extends ValidStates> = {
  state: TSteps[number];
  setState: Dispatch<SetStateAction<TSteps[number]>>;
  initialState: TSteps[number];
  availableStates: TSteps;
};

interface OrchestratorProps<TSteps extends ValidStates> {
  controller: Readonly<OrchestratorController<TSteps>>;
  steps: Record<TSteps[number], ReactElement | null>;
}

const Orchestrator = <TSteps extends ValidStates>({
  steps,
  controller,
}: OrchestratorProps<TSteps>) => {
  return steps !== undefined ? steps[controller.state] : null;
};

export default Orchestrator;
export type { OrchestratorController, ValidState, ValidStates };
