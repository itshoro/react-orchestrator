import { useState } from "react";
import type {
  OrchestratorController,
  ValidStates,
} from "../components/Orchestrator/Orchestrator";

const useOrchestrator = <TSteps extends ValidStates>(
  steps: TSteps,
  initialState: TSteps[number]
) => {
  const [state, setState] = useState(initialState);

  return {
    state,
    setState,
    initialState,
    availableStates: steps,
  } as const satisfies OrchestratorController<TSteps>;
};

export default useOrchestrator;
