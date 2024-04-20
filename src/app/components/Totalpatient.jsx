
'use client'
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const TotalPatient = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/post`, {
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error('Failed to fetch patients');
      }

      const data = await res.json();
      setPatients(data);
    } catch (error) {
      console.error('Error loading patients: ', error);
      toast.error('Failed to fetch patients');
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [patients]); // Fetch data on component mount


  const patientsArray = patients?.patients;
  

  return (
    <section>
      
      {/* {patientsArray && patientsArray.map((ar, index) => ( */}
        <div key={'ar._id'} className="mb-16">
          <div className=" -mt-10 border-4 border-headerFooterColor rounded px-10 py-4">
            <div className="flex justify-center gap-10">
              <p className="text-lg">{'1'}.</p>
              <p className="text-lg">{'Md. Abidur Rahman Abid'}</p>
            </div>
          </div>
        </div>
      {/* ))} */}
    </section>
  );
};

export default TotalPatient;
