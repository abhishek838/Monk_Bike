import React, { useState, useEffect } from 'react';
import api from '../services/api';

const BikeList = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await api.getAllBikes();
        setBikes(response.data);
      } catch (err) {
        setError('Failed to fetch bikes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {bikes.map(bike => (
        <div key={bike.id}>
          <h3>{bike.name}</h3>
          <p>{bike.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BikeList;