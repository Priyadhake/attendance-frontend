import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Import the Axios helper file


const Dashboard = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      const token = localStorage.getItem('token'); // Get token from localStorage
      try {
        // API call to get attendance history
        const response = await api.get('/attendance/history', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAttendance(response.data); // Save the fetched data to state
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };

    fetchAttendance(); // Call the function when the component loads
  }, []); // Empty dependency array means this runs once after component mounts

  return (
    <div>
      <h2>Your Attendance History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Selfie</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.time}</td>
              <td>
                <img src={record.selfie} alt="Selfie" width={50} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
