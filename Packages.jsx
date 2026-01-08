import { useEffect, useState } from 'react';
import apiData from './api/api';

function Packages(){
  const [packages, SetPackages] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    try{
      SetPackages(apiData);
    } catch(err) {
      SetError("Kunde inte hämta datan.");
    } finally {
      SetLoading(false);
    }
    }, []);
    
    if (loading) return <p>Laddar...</p>;
    if (error) return <p>{error}</p>;

  return (

    <div className="packages-container">
      { packages.map( parcel => (
        <div key={parcel.id} className={`package-card ${parcel.status}`}>
        <p>Status: {parcel.status}</p>
        <p>ETA: {parcel.eta}</p>
        <p>Parcel ID: {parcel.parcel_id}</p>
        <p>Sender: {parcel.sender}</p>
        <p className={parcel.verification_required ? 'verification-required' : ''}>Verification required: {parcel.verification_required ? 'Yes' : 'No'}</p>
        <p>Location: {parcel.location_name}</p>
        </div>
      ) ) }
      </div>
  );
}
export default Packages;