export async function getUniversities(country, name) {
  const queryParams = [];
  if (country) queryParams.push("country=" + country);
  if (name) queryParams.push("name=" + name);
  if (queryParams.length == 0) return [];

  const response = await fetch(
    "http://universities.hipolabs.com/search?" + queryParams.join("&")
  );

  return await response.json();
}
