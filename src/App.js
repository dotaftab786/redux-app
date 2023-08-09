import User from "./cmp/User"
const App = ()=>{
  const data = {
    message:"Aftab Alam"
  }
  const design = (
    <>
      <h1>Redux</h1>
      <User />
    </>
  );
  return design;
}

export default App;
