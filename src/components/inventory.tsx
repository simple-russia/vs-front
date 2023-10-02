import "./inventory.css";

type InventoryItemProps = {
  id: string;
  name: string;
  imgUrl: string;
  quantity: number;
};

const InventoryItem = ({ id, imgUrl, name, quantity }: InventoryItemProps) => {
  return (
    <div className="item-card">
      <img src={imgUrl} alt={name} />
      <h1>{name}</h1>
      <div>Количество: {quantity}</div>
      <button>Перейти к товару</button>
    </div>
  );
};

const inventoryItemsMock: InventoryItemProps[] = [
  {
    id: "4321",
    imgUrl: "https://ros-test.info/images/article/5d3eee44c3e1b.jpg",
    name: "Картофель",
    quantity: 4310,
  },
  {
    id: "432",
    imgUrl:
      "https://univela-morocco.com/wp-content/uploads/2018/02/closeup-view-fresh-navel-orange-isolated_572148031-1600x1171.jpg",
    name: "Апельсины",
    quantity: 10500,
  },
  {
    id: "432a",
    imgUrl:
      "https://m.dom-eda.com/uploads/images/catalog/item/c6ebcf64ba/e87b941b85_500.jpg",
    name: "Помидоры",
    quantity: 3033,
  },
  {
    id: "4f32",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG",
    name: "Лук репчатый",
    quantity: 102,
  },
];

export const Inventory = () => {
  return (
    <div className="inventory">
      <div className="inventory-title">
        Инвентарть <button>+ Добавить продукты</button>
      </div>
      <div className="inventory-items">
        {inventoryItemsMock.map((item) => {
          return <InventoryItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
