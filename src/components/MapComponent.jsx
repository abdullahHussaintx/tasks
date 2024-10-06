import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const PersonMap = ({ persons }) => {
  const positions = persons.map((person) => [
    parseFloat(person.latitude),
    parseFloat(person.longitude),
  ]);

  console.log("All positions (including invalid):", positions);

  const validPositions = positions.filter(
    (pos) => !isNaN(pos[0]) && !isNaN(pos[1])
  );
  if (validPositions.length === 0) {
    return <div>Error: No valid coordinates to display.</div>;
  }

  const centerLat =
    validPositions.reduce((sum, pos) => sum + pos[0], 0) /
    validPositions.length;
  const centerLng =
    validPositions.reduce((sum, pos) => sum + pos[1], 0) /
    validPositions.length;
  const centerPosition = [centerLat, centerLng];

  return (
    <MapContainer
      center={centerPosition}
      zoom={6}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((position, index) => {
        if (isNaN(position[0]) || isNaN(position[1])) {
          return null; // Skip invalid positions
        }
        return (
          <Marker key={index} position={position}>
            <Popup>
              <div>
                <strong>
                  {persons[index].firstName} {persons[index].lastName}
                </strong>
                <br />
                Email: {persons[index].email}
                <br />
                Phone: {persons[index].phoneNumber}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default PersonMap;
