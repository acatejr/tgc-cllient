import { render } from "solid-js/web"
import { Router, Route } from "@solidjs/router"
import { lazy } from "solid-js";

import App from './App'

const Home = lazy(() => import("./pages/Home"))
const Members = lazy(() => import("./pages/Members"))
const Points = lazy(() => import("./pages/Points"))
const Winnings = lazy(() => import("./pages/Winnings"))
const NotFound = lazy(() => import("./pages/NotFound"))
const root = document.getElementById("root")

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/members" component={Members} />
      <Route path="/points" component={Points} />
      <Route path="/winnings" component={Winnings} />
      <Route path="*paramName" component={NotFound} />
    </Router>
  ),
  root
)