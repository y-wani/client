// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import ZoneList from '../components/ZoneList';
import ReservationHistory from '../components/ReservationHistory';
import api from '../services/api';
import '../App.css';

const AdminDashboard = () => {
  const [selectedDateRange, setSelectedDateRange] = useState({ start: null, end: null });
  const [zonesData, setZonesData] = useState([]);
  const [reservationsData, setReservationsData] = useState([]);

  useEffect(() => {
    if (selectedDateRange.start && selectedDateRange.end) {
      // Dummy data for zones and reservations
      const dummyZones = [
        { zoneNumber: 1, zoneName: 'A', availableSpots: 20, rate: 10 },
        { zoneNumber: 2, zoneName: 'B', availableSpots: 15, rate: 12 },
        // Add more dummy data as needed
      ];

      const dummyReservations = [
        { userName: 'John Doe', selectedZone: 'A', selectedDate: '2023-10-20', confirmationNumber: 'ABC123' },
        { userName: 'Jane Smith', selectedZone: 'B', selectedDate: '2023-10-22', confirmationNumber: 'XYZ789' },
        // Add more dummy data as needed
      ];

      setZonesData(dummyZones);
      setReservationsData(dummyReservations);
    }
  }, [selectedDateRange]);

  return (
    <div className="container">
      <div className="header">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="page-title">Manage Parking Zones and Reservations</div>
      <div className="zone-list">
        <ZoneList zones={zonesData} />
      </div>
      <div className="reservation-history">
        <ReservationHistory reservations={reservationsData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
