import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./component/ItemList.jsx";
import Container from "./component/Container.jsx";
import Input from "./component/Input.jsx";

function App() {
  let [items, setItems] = useState([]);
  let handleOnDownKey  = (evt) =>{
    // console.log(evt)
    if(evt.key === 'Enter'){
      let newItems = [...items, evt.target.value];
      setItems(newItems)

      // console.log("items "+items)
      // console.log("newItems "+ newItems)
    }
  }
  return (
    <Container>
      <Input handleOnDownKey={handleOnDownKey}></Input>
      <ItemList items={items}></ItemList>
    </Container>
  );

}

export default App;
