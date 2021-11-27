import UniversityItem from "./UniversityItem";

function UniversitiesList(props) {
  var uniKey = 0;
  return (
    <ul className="list-group">
      {props.universities.map((uni) => (
        <UniversityItem
          key={uniKey++}
          name={uni.name}
          country={uni.country}
          webpages={uni.web_pages}
        />
      ))}
    </ul>
  );
}

export default UniversitiesList;
