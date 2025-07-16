// TODO: Mejorar la validación para mostrar un mensaje cuando esta en mode DEVELOPMENT
const useControlledValidation = ({ value, acceptNull }) => value !== undefined && (acceptNull || value !== null);

export default useControlledValidation;
