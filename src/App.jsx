import CR from "./component/CR";
import Datas from "./component/Datas";
import FormHandle from "./component/FormHandle";
import Fruits from "./component/Fruits";
import Hello from "./component/Hello";

function App() {
  const num= [23,45,67]
  const person={
    name:"Rahul",
    age:23,
    address:"Delhi",
    num:[23,45,67]
  }
  return (
    <>
      {/* <Hello person={person}  /> */}
      <FormHandle />
    </>
  );
}

export default App;
