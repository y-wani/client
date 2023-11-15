// ZoneList.js
import React from 'react';

const dummyZones = [
  { zoneNumber: 1, zoneName: 'A', availableSpots: 20, rate: 10 },
  { zoneNumber: 2, zoneName: 'B', availableSpots: 15, rate: 12 },
  // Add more dummy data as needed
];

const ZoneList = ({ zones }) => {
  return (
    <div>
      <h2>Available Zones</h2>
      {/* Display a list of available zones with their information */}
      <ul>
        {dummyZones.map((zone) => (
          <li key={zone.zoneNumber}>
            {zone.zoneName} - Available spots: {zone.availableSpots} - Rate: ${zone.rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZoneList;
