import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  return (
    <div className="vh-100">
      <div className="container p-5">
        <h2 className="text-center">
          TODO <span className="text-warning">LIST</span>
        </h2>
        <Form />
        <List />
      </div>
    </div>
  );
};

export default App;
