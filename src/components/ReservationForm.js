// ReservationForm.js
import React, { useState } from 'react';
import '../App.css';
import { useNavigate, Link } from 'react-router-dom';


const ReservationForm = ({ availableZones, onReservationSubmit }) => {
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    selectedZone: null,
    selectedDate: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy data for available zones
    const dummyAvailableZones = [
      { zoneNumber: 1, zoneName: 'A', availableSpots: 20, rate: 10 },
      { zoneNumber: 2, zoneName: 'B', availableSpots: 15, rate: 12 },
      // Add more dummy data as needed
    ];

    // Pass the dummy data to the parent component for submission
    onReservationSubmit({
      ...formData,
      availableZones: dummyAvailableZones,
    });
  };

  return (
    <div className="reservation-form">
      <h2 className="form-title">Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="userName">
            User Name:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="form-input"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="form-input"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Dummy dropdown for available zones */}
        <div className="form-group">
          <label className="form-label" htmlFor="selectedZone">
            Select Zone:
          </label>
          <select
            id="selectedZone"
            name="selectedZone"
            className="form-input"
            value={formData.selectedZone}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select a zone</option>
            <option value="A">Zone A</option>
            <option value="B">Zone B</option>
            {/* Add more dummy options as needed */}
          </select>
        </div>

        {/* Dummy date picker */}
        <div className="form-group">
          <label className="form-label" htmlFor="selectedDate">
            Select Date:
          </label>
          <input
            type="date"
            id="selectedDate"
            name="selectedDate"
            className="form-input"
            value={formData.selectedDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="form-button">
          Submit Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
