import { createApp } from "vue";
import App from "./App.vue";
import router from "@/scripts/router";

// font awsome
import "@/scripts/fa_icons.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Base components
import BaseButton from "@/components/UI/BaseButton";
import BaseContainer from "@/components/UI/BaseContainer";
import BaseText from "@/components/UI/BaseText";
import BaseHeading from "@/components/UI/BaseHeading";
import BasePopup from "@/components/UI/BasePopup";
import BaseOverlay from "@/components/UI/BaseOverlay";

const app = createApp(App);

app
  .component("BaseButton", BaseButton)
  .component("BaseContainer", BaseContainer)
  .component("BaseText", BaseText)
  .component("BaseHeading", BaseHeading)
  .component("BasePopup", BasePopup)
  .component("BaseOverlay", BaseOverlay)
  .component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.mount("#app");
