
'use client'
import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import SectionTitle from '@/app/shared components/SectionTitle';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const TotalPatients = () => {
  // const router = useRouter();
  // const [patients, setPatients] = useState([]);

  // const fetchPatients = async () => {
  //   try {
  //     const res = await fetch(`${apiUrl}/api/post`, {
  //       cache: 'no-store',
  //     });

  //     if (!res.ok) {
  //       throw new Error('Failed to fetch patients');
  //     }

  //     const data = await res.json();
  //     setPatients(data);
  //   } catch (error) {
  //     console.error('Error loading patients: ', error);
  //     toast.error('Failed to fetch patients');
  //   }
  // };

  // useEffect(() => {
  //   fetchPatients();
  // }, [patients]); // Fetch data on component mount

  // const handleRemovePatient = async (id) => {
  //   const confirmed = confirm("Are you sure?");

  //   if (confirmed) {
  //     const res = await fetch(`${apiUrl}/api/post?id=${id}`, {
  //       method: "DELETE",
  //     });
      
  //     if (res.ok) {
  //       toast.success('Successfully Deleted Patient')
  //       router.refresh();
  //     }
  //   }
  // };


  // const patientsArray = patients?.patients;
  

  return (
    <section>
      <div className='flex justify-center items-center gap-5 mb-20 mt-20 lg:mt-0'>
                <Link href={'/receptionistportal'} className='button'>Register a patient</Link>
                <Link href={'/allpatient'} className='button'>All patient</Link>
      </div>
      {/* {patientsArray && patientsArray.map((ar, index) => ( */}
        <div key={'ar._id'} className="mb-16">
          <div className="contactForm -mt-10 border-4 border-headerFooterColor rounded px-10 py-4">
            <div className="flex justify-center gap-1">
              <p className="text-lg">{'1.'}</p>
              <p className="text-lg">{'Md. Abidur Rahman Abid'}</p>
            </div>
            <div className="flex justify-center gap-5">
              <button onClick={() => handleRemovePatient('ar._id')}>
                <Link href={''} className="hover:font-bold text-xl">
                  <MdDelete />
                </Link>
              </button>
              <Link href={`/allpatient/${'ar._id'}`} className="hover:font-bold text-xl">
                <FaEdit />
              </Link>
            </div>
          </div>
        </div>
      {/* ))} */}
    </section>
  );
};

export default TotalPatients;
