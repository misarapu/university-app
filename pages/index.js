import { useState } from "react";
import UniversitiesList from "./components/universities/UniversitiesList";
import UniversitiesSearchForm from "./components/universities/UniversitiesSearchForm";
import { getUniversities as fetchUniversities } from "./api/university";
import { AlertDanger, AlertPrimary, AlertWarning } from "./components/ui/Alert";

function Home() {
  const [searchSuccess, setSearchSuccess] = useState(true);
  const [results, setResults] = useState();
  const [filter, setFilter] = useState({
    country: "",
    name: "",
  });
  
  const minSearchCharacters = 3;
  const isValidFilter =
    filter.name.length > minSearchCharacters || filter.country;
    
  const findUniversities = () => {
    fetchUniversities(filter.country, filter.name)
      .then((res) => {
        setSearchSuccess(true);
        setResults(res);
      })
      .catch(() => setSearchSuccess(false));
  };

  function getResultsDOM() {
    if (!isValidFilter) {
      let invalidMsg =
        "Select country or use more than " + minSearchCharacters + " character";
      return <AlertWarning message={invalidMsg} />;
    } else if (!searchSuccess) {
      return <AlertDanger message="Search failed" />;
    } else if (results) {
      if (results.length === 0) {
        return <AlertPrimary message="No results" />;
      } else {
        return <UniversitiesList universities={results} />;
      }
    }
  }

  return (
    <div className="container-fluid py-5 px-xl-5">
      <UniversitiesSearchForm
        onNameChange={(e) => {
          setFilter({ ...filter, ...{ name: e.target.value } });
        }}
        onCountryChange={(e) => {
          setFilter({ ...filter, ...{ country: e.target.value } });
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (isValidFilter) findUniversities();
        }}
      />
      <div className="row mt-4">
        <div className="col">{getResultsDOM()}</div>
      </div>
    </div>
  );
}

export default Home;
