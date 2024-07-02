import "./style.css";
import { Layer } from "../Layer/layer";

export const Drink = ({ id, name, ordered, image, layers }) => {
  const objednavka = ordered === true ? "Zrušit" : "Objednat";
  const tridaOrdered = ordered ? "order-btn order-btn--ordered" : "order-btn";
  return (
    <div className="drink" id={id}>
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => (
            <Layer color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className={tridaOrdered}>{objednavka}</button>
      </form>
    </div>
  );
};
