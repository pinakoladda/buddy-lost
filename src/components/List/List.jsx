import "./index.css";

export const List = (props) => {
  return <ul {...props} className={`list ${props.className}`} />;
};
