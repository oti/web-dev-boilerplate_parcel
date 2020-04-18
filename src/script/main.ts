// for IE11
import "core-js/stable";
import "regenerator-runtime/runtime";

import { InView } from "./module/InView";

document.addEventListener("DOMContentLoaded", (event) => {
  const inView = new InView();
  inView.init();
});
