import { render } from "@czechitas/render";
import { Header } from "../components/Header/header";
import { Banner } from "../components/Banner/banner";
import { Menu } from "../components/Menu/menu";
import { Gallery } from "../components/Gallery/gallery";
import { Contact } from "../components/Contact/contact";
import { Footer } from "../components/Footer/footer";
import "../global.css";
import "./index.css";

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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

/*document.querySelector(".rollout-nav").addEventListener("click",()=>{
  const tlacitko = document.querySelector(".rollout-nav");
  tlacitko.classList.toggle("nav-closed");
})*/
