import SectionTitle from "@/app/shared components/SectionTitle";
import Link from "next/link";
import articlebg from '../../../assets/articleBg.png'
import Image from "next/image";



const Articles = async() => {

    

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

    return (
       <section>
        <div className="lg:-mt-20 -mt-0">
        <SectionTitle title={'Articles'}/>
        </div>
         <div className="grid lg:grid-cols-3 justify-center items-center grid-cols-1  gap-5  mb-20">
           {
            posts.map((p, index) => <div className="card  bg-headerFooterColor shadow-xl image-full mx-auto " key={p._id}>
            <figure><Image src={articlebg} alt="Article Background" /></figure>
            <div className="card-body">
                <p className="text-xl font-bold text-headerFooterColor">{p.topicName}</p>
                <p className="text-md font-semibold text-headerFooterColor">Course Name: {p.courseName}.</p>
                <p className="text-md  text-headerFooterColor">Date: {p.date}</p>
                
                <div className="card-actions justify-end">
                <Link href={`/articles/${p._id}`}> <button className="button text-gray-600 hover:text-headerFooterColor">View Details</button></Link>
                </div>
            </div>
            </div>
            )
           }
           
        </div>
       </section>
    );
};

export default Articles;