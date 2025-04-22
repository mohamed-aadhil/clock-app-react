import React, { useEffect, useState } from 'react';

export default function TimeZoneSelector({ selectedZone, onZoneChange }) {
  const [timeZones, setTimeZones] = useState([]);

  useEffect(() => {
    if (typeof Intl.supportedValuesOf === 'function') {
      const zones = Intl.supportedValuesOf('timeZone');
      setTimeZones(zones);
    } else {
      // Fallback if Intl.supportedValuesOf is not supported
      setTimeZones([
        'America/New_York', 'Europe/London', 'Asia/Kolkata',
        'Asia/Tokyo', 'Australia/Sydney', 'Europe/Berlin'
      ]);
    }
  }, []);

  return (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor="timezone">Select Time Zone: </label>
      <select
        id="timezone"
        value={selectedZone}
        onChange={(e) => onZoneChange(e.target.value)}
      >
        {timeZones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  );
}
