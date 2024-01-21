import Button from "./Button";
function ItemList({ items }) {
  const id = Date.now().toString(36);
  let dynamicItemFun = (item) => {
    return (
      <li key={id} className="list-group-item ">
        {item}
        <Button></Button>
      </li>
    );
  };

  let dynamicItem = items.map(dynamicItemFun);
  return <ul className="list-group w-75">{dynamicItem}</ul>;
}

export default ItemList;
