import Accordion from "./Accordion";
import data from "./data";

const App = () => {
  return (
    <>
    <h1 className="text-center text-3xl lg:m-3 m-auto">React Accordion Component</h1>
    <div className="lg:ml-[25%] m-auto">
      
      {data.map((info) => {
        return <Accordion key={info.id} {...info} />;
      })}
    </div>
    </>
  );
};
export default App;
