import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

import { handleSubmit } from "./js/formHandler";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("urlForm");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
});
