import { render } from "solid-js/web";
import { Router, A } from "@solidjs/router";

const App = (props) => (
  <>
    <nav>
      <A href="/">Home</A>
      &nbsp;
      <A href="/members">Members</A>
      &nbsp;
      <A href="/points">Points</A>
      &nbsp;
      <A href="/winnings">Winnings</A>
    </nav>

    {props.children}
  </>
)

export default App
