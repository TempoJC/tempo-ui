import { Icon, Loader, Button, Checkbox, ActionButton, SwitchButton } from "./components";

function App() {
  return (
    <div>
      <h1>¡Tu Librería de Componentes!</h1>
      <Icon group="actions" name="add" onClick={() => console.log("Icon clicked")} />
      <Loader size="small" />
      <Loader size="medium" />
      <Loader size="large" />
      <SwitchButton
        icon={<>Switch</>}
        selected={true}
        onClick={() => console.log("SwitchButton clicked")}
        onMouseDown={() => console.log("Mouse down on SwitchButton")}
        onMouseUp={() => console.log("Mouse up on SwitchButton")}
        onMouseEnter={() => console.log("Mouse entered SwitchButton")}
        onMouseLeave={() => console.log("Mouse left SwitchButton")}
        onTouchStart={() => console.log("Touch started on SwitchButton")}
        onTouchEnd={() => console.log("Touch ended on SwitchButton")}
        disabled={false}
        autoFocus={false}
        tabIndex={0}
      />
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
