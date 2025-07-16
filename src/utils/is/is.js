const is = (Constructor, value) => (value != null && value.constructor === Constructor) || value instanceof Constructor;

export default is;
