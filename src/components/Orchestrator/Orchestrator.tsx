import type { Dispatch, ReactElement, SetStateAction } from "react";

type ValidState = string | number;

type OrchestratorController<TStep extends ValidState> = {
  state: TStep;
  setState: Dispatch<SetStateAction<TStep>>;
  initialState: TStep;
  availableStates: readonly TStep[];
};

interface OrchestratorProps<TStep extends ValidState> {
  controller: Readonly<OrchestratorController<TStep>>;
  states: Record<TStep, ReactElement | null>;
}

const Orchestrator = <TStep extends ValidState>({
  states,
  controller,
}: OrchestratorProps<TStep>) => {
  return states !== undefined ? states[controller.state] : null;
};

export default Orchestrator;
export type { OrchestratorController, ValidState };
