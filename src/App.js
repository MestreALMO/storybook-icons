import { MyButton } from "./components/myButton";
import { Icon } from "./icons";
import { Cancel } from "./icons/partials/cancel";
import { DirectionSign } from "./icons/partials/directionSign";

function App() {
  return (
    <>
      <h1>DevALMO, YouTube Channel</h1>

      <MyButton color="#000" backgroundColor="#add8e6" text="button app" />
      <br />
      <br />
      <Icon height={"50px"} width={"50px"} viewBox={"0 0 50 50"}>
        <Cancel />
      </Icon>
      <Icon height={"50px"} width={"50px"} viewBox={"0 0 80 80"}>
        <DirectionSign />
      </Icon>
    </>
  );
}

export default App;
