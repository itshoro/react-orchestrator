# react-orchestrator

React Orchestrator is a lightweight, fully typesafe code-based workflow orchestrator.

```tsx
const Workflow = () => {
  const controller = useOrchestrator(["start", "stop"], "start");
  return (
    <Orchestrator
      controller={controller}
      steps={{
        start: (
          <button
            onClick={() => {
              controller.setState("stop");
            }}
          >
            Advance to stop
          </button>
        ),
        stop: <>You've reached the end.</>,
      }}
    />
  );
};
```
