import { Header } from "./components/Header.js";
import { Timeline } from "./components/Timeline.js";
import { InputSection } from "./components/InputSection.js";

function App() {
    const phone = document.createElement("div");
    phone.className = "phone-frame";

    phone.appendChild(Header());
    phone.appendChild(Timeline());
    phone.appendChild(InputSection());

    return phone;
}

const app = document.querySelector("#app");

app.appendChild(App());
