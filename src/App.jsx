import { useState } from 'react';
import Header from './components/Header';
import TimeZoneSelector from './components/TimeZoneSelector';
import LocalTime from './components/LocalTime';
import ForeignTime from './components/ForeignTime';

function App() {
  const [selectedZone, setSelectedZone] = useState('America/New_York');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Header />
      <LocalTime />
      <div style={{ marginTop: '20px' }}>
        <TimeZoneSelector selectedZone={selectedZone} onZoneChange={setSelectedZone} />
        <ForeignTime selectedZone={selectedZone} />
      </div>
    </div>
  );
}

export default App;
