import "./products.css";

type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
};

const items: ProductItemProps[] = [
  {
    id: "4321",
    imgUrl:
      "https://ros-test.info/images/article/5d3eee44c3e1b.jpg",
    name: 'Картофель',
    price: 30.2,
  },
  {
    id: "432",
    imgUrl:
      "https://univela-morocco.com/wp-content/uploads/2018/02/closeup-view-fresh-navel-orange-isolated_572148031-1600x1171.jpg",
    name: 'Апельсины',
    price: 150,
  },
  {
    id: "432a",
    imgUrl:
      "https://m.dom-eda.com/uploads/images/catalog/item/c6ebcf64ba/e87b941b85_500.jpg",
    name: 'Помидоры',
    price: 120.2,
  },
  {
    id: "4f32",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG",
    name: 'Лук репчатый',
    price: 25.40,
  },
];

const ProductItem = (props: ProductItemProps) => {
  return (
    <div className="product-item">
      <img src={props.imgUrl} />
      <div className="name">{props.name}</div>
      <div className="price">{props.price} руб. / шт.</div>

      <button className="product-delete">Delete</button>
      <button className="product-edit">Edit</button>
    </div>
  );
};

export const Products = () => {
  return <div className="products">
    <div className="products-title">Все продукты <button>+ Добавить продукт</button></div>
    <div className="product-table">
      {items.map(item => {
        return <ProductItem key={item.id} {...item} />
      })}
    </div>
  </div>;
};
