import "./style.css";

export const OrderItem = ({ name, img }) => {
  return (
    <div className="order-item">
      <img src={`http://localhost:4000${img}`} className="order-item__image" />
      <div className="order-item__name">{name}</div>
    </div>
  );
};
