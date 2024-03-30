
import Image from 'next/image';
import articleBg from '@/assets/articleBg.png';
import toast from 'react-hot-toast';

const SingleArticle = async({ params }) => {

  const { id } = params;
  const getPosts = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/post/${id}`, {
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

  const {post} = await getPosts();
  console.log(post);

  return (
    <section>
      <div className="lg:-mt-32">
        <Image src={articleBg} />
      </div>
      <div className="my-10">
        <h1 className="text-xl lg:text-2xl font-bold uppercase text-center">
          Course Name: { post ? post.courseName : 'Nothing Found CourseName'}
        </h1>
        <div className="my-5 lg:flex justify-center items-center gap-10 font-semibold lg:text-xl text-md text-center">
          <h1>Topic: {post ? post.topicName : 'Nothing Found Topic Name'}</h1>
          <h1>Date: {post ? post.date : 'Nothing Found Date'}</h1>
        </div>
        <h2 className="text-justify ">{post ? post.description : 'Nothing Found Description'}</h2>
      </div>
    </section>
  );
};

export default SingleArticle;
