import Icon from "./components/Icons/Icon";

function App() {
  return (
    <div>
      <h1>¡Tu Librería de Componentes!</h1>
      <Icon group="actions" name="add" onClick={() => console.log("Icon clicked")} />
      {/* Aquí empezarás a importar y probar tus componentes */}
    </div>
  );
}

export default App;
