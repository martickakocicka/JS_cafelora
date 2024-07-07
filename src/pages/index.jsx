import { render } from "@czechitas/render";
import { Header } from "../components/Header/header";
import { Banner } from "../components/Banner/banner";
import { Menu } from "../components/Menu/menu";
import { Gallery } from "../components/Gallery/gallery";
import { Contact } from "../components/Contact/contact";
import { Footer } from "../components/Footer/footer";
import "../global.css";
import "./index.css";

const response = await fetch("http://localhost:4000/api/drinks");
const json = await response.json();
const napoje = json.data;
console.log(json);

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={napoje} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

document.querySelector(".nav-btn").addEventListener("click", () => {
  const tlacitko = document.querySelector(".rollout-nav");
  tlacitko.classList.toggle("nav-closed");
});

document.querySelector(".rollout-nav").addEventListener("click", () => {
  const tlacitko = document.querySelector(".rollout-nav");
  tlacitko.classList.toggle("nav-closed");
});

const forms = document.querySelectorAll(".drink__controls");
forms.forEach((form) => {
  form.addEventListener("click", async (e) => {
    console.log(form.dataset.id);
    const body = [{ op: "replace", path: "/ordered", value: true }];
    const response = await fetch(
      `http://localhost:4000/api/drinks/${form.dataset.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    console.log(response);
  });
});
