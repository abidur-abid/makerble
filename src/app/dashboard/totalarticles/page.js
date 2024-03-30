'use client'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import SectionTitle from "@/app/shared components/SectionTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";




const TotalArticles = async() => {

    const router = useRouter();

    const getPosts = async () => {
        try {
          const res = await fetch("http://localhost:3000/api/post", {
            cache: "no-store",
          });
      
          if (!res.ok) {
           toast.error("Failed to fetch articles")
          }
      
          return res.json();
        } catch (error) {
          console.log("Error loading posts: ", error);
        }
      };

      const {posts} = await getPosts();

      const handleRemovePost = async (id) => {
        const confirmed = confirm("Are you sure?");
    
        if (confirmed) {
          const res = await fetch(`http://localhost:3000/api/post?id=${id}`, {
            method: "DELETE",
          });
          
          if (res.ok) {
            router.refresh();
          }
        }
      };

    return (
        <section>
            <div className="lg:-mt-20">
            <SectionTitle title={'All Articles'}/>
            </div>
            {    posts.map((ar,index) =>
            <div key={ar._id} className="mb-16">
            <div className='contactForm -mt-10   border-4 border-headerFooterColor rounded px-10 py-4'>
                <div className='flex justify-center gap-1 '>
                    <p className='text-lg'>{index + 1}</p>
                    <p className='text-lg'>{ar.topicName}</p>
                   
                </div>
                <div className='flex justify-center gap-5'>
                    <button onClick={()=>handleRemovePost(ar._id)}><Link href={''} className="hover:font-bold text-xl"><MdDelete /></Link></button>
                    <Link href={`/dashboard/totalarticles/${ar._id}`} className="hover:font-bold text-xl"><FaEdit /></Link>
                    
                </div>
            </div>

          
          </div> )
          }
        </section>
    );
};

export default TotalArticles;