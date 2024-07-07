import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import "./order.css";
import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";
import { OrderItem } from "../components/OrderItem";
import { Order } from "../components/Order";

const response = await fetch(
  "http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image"
);
const json = await response.json();
const objednavka = json.data;
const prazdna = objednavka.length === 0;

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      <main className="order">
        <div className="container order__content">
          <h1>Vaše objednávka</h1>
          <p className="empty-order" hidden={!prazdna}>
            Zatím nemáte nic objednáno.
          </p>
          <div className="order__items" hidden={prazdna}>
            <Order items={objednavka} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
);
