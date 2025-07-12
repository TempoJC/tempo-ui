import { Icon, Loader, Button, Checkbox } from "./components";

function App() {
  return (
    <div>
      <h1>¡Tu Librería de Componentes!</h1>
      <Icon group="actions" name="add" onClick={() => console.log("Icon clicked")} />
      <Loader size="small" />
      <Loader size="medium" />
      <Loader size="large" />
      <Button
        label={"Botón"}
        onClick={() => {
          console.log("¡Botón presionado!");
        }}
        kind="primary"
      />
      <Button
        label={"Botón"}
        onClick={() => {
          console.log("¡Botón presionado!");
        }}
        kind="primary"
        loading={true}
      />
      <Checkbox label="Default checkbox" value={true} onChange={() => {}} />
      <Checkbox label="Default checkbox" value={false} onChange={() => {}} />
      {/* Aquí empezarás a importar y probar tus componentes */}
    </div>
  );
}

export default App;
