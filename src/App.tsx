import {
  Icon,
  Loader,
  Button,
  Checkbox,
  ActionButton,
  SwitchButton,
  Badge,
  Avatar,
  Divider,
  Card,
  CardHeader,
  CardHeaderImage,
  CardHeaderContent,
  CardContentImage,
  CardFooter,
} from "@/components";

function App() {
  return (
    <div>
      <h1>¡Tu Librería de Componentes!</h1>
      <Icon group="actions" name="add" onClick={() => console.log("Icon clicked")} />
      <Divider kind="horizontal" />
      <Loader size="small" />
      <Loader size="medium" />
      <Loader size="large" />
      <Divider kind="horizontal" contrast="high" />
      <Badge text="1" variant="coconut" testId="badge-coconut" />
      <Badge text="2" variant="blackberry" testId="badge-blackberry" />
      <Badge text="3" variant="cherry" testId="badge-cherry" />
      <Badge text="4" variant="apricot" testId="badge-apricot" />
      <Divider kind="horizontal" contrast="low" />
      <Avatar initials="JG" imageUrl="http://some.avatar/url" color="light" shape="circle" />
      <Avatar initials="JG" imageUrl="http://some.avatar/url" color="dark" shape="circle" size="medium" />
      <Avatar initials="JG" imageUrl="http://some.avatar/url" color="dark" size="medium" />
      <Divider kind="horizontal" contrast="medium" />
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
      <Divider kind="horizontal" contrast="high" />
      <ActionButton
        label="Acción"
        onClick={() => console.log("¡Acción ejecutada!")}
        kind="standard"
        iconStart={<Icon group="actions" name="add" />}
        iconEnd={<Icon group="arrows" name="chevron-down-outlined" />}
        loading={false}
      />
      <Divider kind="horizontal" contrast="high" />
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
      <Divider kind="horizontal" contrast="high" />
      <Checkbox label="Default checkbox" value={true} onChange={() => {}} />
      <Checkbox label="Default checkbox" value={false} onChange={() => {}} />
      <Divider kind="horizontal" contrast="high" />
      {/* Ejemplo de uso de Card y sus subcomponentes */}
      <Card className="customCardClass">
        <CardHeader className="customHeaderClass">
          <CardHeaderImage src="https://picsum.photos/id/237/200/300" className="customHeaderImageClass" />
          <CardHeaderContent className="customHeaderContentClass">Lorem ipsum dolor sit amet.</CardHeaderContent>
        </CardHeader>
        <CardContentImage className="customContentImageClass" src="https://picsum.photos/id/1084/536/354" />
        <CardFooter className="customFooterClass">Footer content</CardFooter>
      </Card>

      {/* Aquí empezarás a importar y probar tus componentes */}
    </div>
  );
}

export default App;
