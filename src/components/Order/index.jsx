import "./style.css";
import { OrderItem } from "../OrderItem";

export const Order = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <OrderItem name={item.name} img={item.image} />
      ))}
    </div>
  );
};
