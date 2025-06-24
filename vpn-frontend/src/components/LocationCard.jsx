import "./LocationCard.css";
const flagUrls = {
  "New York, USA": "https://flagcdn.com/us.svg",
  "London, UK": "https://flagcdn.com/gb.svg",
  "Tokyo, Japan": "https://flagcdn.com/jp.svg",
  "Paris, France": "https://flagcdn.com/fr.svg",

};
export default function LocationCard({ location }) {
  const flag = flagUrls[location] ||"https://flagcdn.com/un.svg"; 
  return (
    <div className="location-card">
    <img src={flag} alt="Flag" className="flag" />
      <div className="location-info">
        <h4>your location</h4>
        <p>{location}</p>
      </div>
    </div>
  );
}