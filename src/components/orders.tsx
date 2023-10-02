import './orders.css'

type OrderItemProps = {
  id: string;
  name: string;
  imgUrl: string;
  quantity: number;
  cost: number;
};

const inventoryItemsMock: OrderItemProps[] = [
  {
    id: "1",
    imgUrl:
      "https://univela-morocco.com/wp-content/uploads/2018/02/closeup-view-fresh-navel-orange-isolated_572148031-1600x1171.jpg",
    name: "Апельсины",
    quantity: 15,
    cost: 1500,
  },
  {
    id: "1",
    imgUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG",
    name: "Лук репчатый",
    quantity: 150,
    cost: 24020,
  },
];

const OrderItem = ({ id, imgUrl, name, quantity, cost }: OrderItemProps) => {
  return (
    <div className='item-card'>
      <img src={imgUrl} alt={name} />
      <h1>{name}</h1>
      <div>Количество: {quantity}</div>
      <div>цена: {cost} руб.</div>
      <button>Перейти к заказу</button>
    </div>
  );
};


export const Orders = () => {
  return (
    <div className="orders">
    <div className="orders-title">Заказы <button>+ Добавить заказ</button></div>
    <div className="orders-items">
      {inventoryItemsMock.map((item) => {
        return <OrderItem key={item.id} {...item} />;
      })}
    </div>
  </div>
  );
};
