
'use client'
import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import SectionTitle from '@/app/shared components/SectionTitle';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const TotalArticles = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/post`, {
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error('Error loading posts: ', error);
      toast.error('Failed to fetch articles');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Fetch data on component mount

  const handleRemovePost = async (id) => {
    const confirmed = window.confirm('Are you sure?');

    if (confirmed) {
      try {
        const res = await fetch(`${apiUrl}/api/post?id=${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          router.reload();
        } else {
          toast.success('Successfully  deleted post');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        toast.error('Failed to delete post');
      }
    }
  };

  const postsArray = posts?.posts;
  

  return (
    <section>
      <div className="lg:-mt-20">
        <SectionTitle title={'All Articles'} />
      </div>
      {postsArray && postsArray.map((ar, index) => (
        <div key={ar._id} className="mb-16">
          <div className="contactForm -mt-10 border-4 border-headerFooterColor rounded px-10 py-4">
            <div className="flex justify-center gap-1">
              <p className="text-lg">{index + 1}</p>
              <p className="text-lg">{ar.topicName}</p>
            </div>
            <div className="flex justify-center gap-5">
              <button onClick={() => handleRemovePost(ar._id)}>
                <Link href={''} className="hover:font-bold text-xl">
                  <MdDelete />
                </Link>
              </button>
              <Link href={`/dashboard/totalarticles/${ar._id}`} className="hover:font-bold text-xl">
                <FaEdit />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TotalArticles;
