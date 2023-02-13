import { useState } from "react";
import type {
  OrchestratorController,
  ValidState,
} from "../components/Orchestrator/Orchestrator";

const useOrchestrator = <TState extends ValidState>(
  states: readonly TState[],
  initialState: TState
) => {
  const [state, setState] = useState(initialState);

  return {
    state,
    setState,
    initialState,
    availableStates: states,
  } satisfies OrchestratorController<TState>;
};

export default useOrchestrator;
