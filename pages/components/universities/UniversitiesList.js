import UniversityItem from "./UniversityItem";

function UniversitiesList(props) {
  var uniKey = 0;
  return (
    <ul className="list-group">
      {props.universities
        .sort((a,b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
        .map((uni) => (
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
