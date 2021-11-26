function UniversityItem(props) {
  var webpageKey = 0;
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.country}</p>
      {props.webpages.map((p) => (
        <a key={webpageKey++} href={p} target="_blank">
          {"Home " + webpageKey}
        </a>
      ))}
    </li>
  );
}

export default UniversityItem;
