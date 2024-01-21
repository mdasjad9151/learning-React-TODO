import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./component/ItemList.jsx";
import Container from "./component/Container.jsx";
import Input from "./component/Input.jsx";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItemClick = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Container>
      <Input handleAddItemClick={handleAddItemClick} />
      <ItemList items={items} />
    </Container>
  );
}

export default App;
