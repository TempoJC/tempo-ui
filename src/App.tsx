import { Icon, Loader, Button, Checkbox, ActionButton } from "./components";

function App() {
  return (
    <div>
      <h1>¡Tu Librería de Componentes!</h1>
      <Icon group="actions" name="add" onClick={() => console.log("Icon clicked")} />
      <Loader size="small" />
      <Loader size="medium" />
      <Loader size="large" />
      <ActionButton
        label="Acción"
        onClick={() => console.log("¡Acción ejecutada!")}
        kind="standard"
        iconStart={<Icon group="actions" name="add" />}
        iconEnd={<Icon group="arrows" name="chevron-down-outlined" />}
        loading={false}
      />
      <Button
        label={"Botón"}
        onClick={() => {
          console.log("¡Botón presionado!");
        }}
        kind="primary"
        iconStart={<Icon group="actions" name="add" />}
        iconEnd={<Icon group="arrows" name="chevron-down-outlined" />}
        loading={false}
      />
      <Button
        label={"Botón"}
        onClick={() => {
          console.log("¡Botón presionado!");
        }}
        kind="primary"
        loading={true}
      />
      <Button
        label={"Botón"}
        onClick={() => {
          console.log("¡Botón presionado!");
        }}
        kind="danger"
        iconStart={<Icon group="actions" name="add" />}
        iconEnd={<Icon group="arrows" name="chevron-down-outlined" />}
        loading={false}
      />
      <Checkbox label="Default checkbox" value={true} onChange={() => {}} />
      <Checkbox label="Default checkbox" value={false} onChange={() => {}} />
      {/* Aquí empezarás a importar y probar tus componentes */}
    </div>
  );
}

export default App;
