import TextInputForm from "./components/TextInputForm/TextInputForm";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Welcome to HangMan</h1>
      <TextInputFormContainer onSubmit={(value) => console.log("value coming from the hidden form is", value)}/>
    </div>
  );
}

export default App;