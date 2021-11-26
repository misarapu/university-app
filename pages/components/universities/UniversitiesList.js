import UniversityItem from "./UniversityItem";

function UniversitiesList(props) {
  var uniKey = 0;
  return (
    <div>
      <ul>
        {props.universities.map((uni) => (
          <UniversityItem key={uniKey++} name={uni.name} country={uni.country} webpages={uni.web_pages} />
        ))}
      </ul>
    </div>
  );
}

export default UniversitiesList;
