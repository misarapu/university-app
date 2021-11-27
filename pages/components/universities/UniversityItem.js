function UniversityItem(props) {
  var webpageKey = 1;
  return (
    <li className="list-group-item">
      <div className="float-start">
        {props.name}, {props.country}
      </div>
      <div className="float-end">
        {props.webpages.map((p) => (
          <a
            key={webpageKey++}
            href={p}
            className="link-primary px-2"
            target="_blank"
          >
            {"Link #" + webpageKey}
          </a>
        ))}
      </div>
    </li>
  );
}

export default UniversityItem;
