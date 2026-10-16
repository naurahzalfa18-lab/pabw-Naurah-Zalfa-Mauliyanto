import { state } from "./state.js";
import { render } from "./dom.js";
import { pasangEvent } from "./events.js";

render(state);
pasangEvent();

