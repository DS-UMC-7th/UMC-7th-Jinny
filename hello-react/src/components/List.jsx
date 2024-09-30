const List = ({ idx, tech }) => {
  console.log(idx, tech);

  return <li style={{ listStyle: "none" }}>{tech}</li>;
};

export default List;
