'use client'
import { useEffect, useState } from 'react';
import SectionTitle from "@/app/shared components/SectionTitle";
import Link from "next/link";
import articlebg from '../../../assets/articleBg.png'
import Image from "next/image";
import toast from 'react-hot-toast';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Articles = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`${apiUrl}/api/post`, {
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch articles");
                }

                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error("Error loading posts: ", error);
                toast.error("Failed to fetch articles");
            }
        };

        fetchPosts();
    }, []); // Fetch data on component mount

    return (
        <section>
            <div className="lg:-mt-20 -mt-0">
                <SectionTitle title={'Articles'}/>
            </div>
            <div className="grid lg:grid-cols-3 justify-center items-center grid-cols-1  gap-5  mb-20">
                {posts.map((p, index) => (
                    <div className="card bg-headerFooterColor shadow-xl image-full mx-auto" key={p._id}>
                        <figure><Image src={articlebg} alt="Article Background" /></figure>
                        <div className="card-body">
                            <p className="text-xl font-bold text-headerFooterColor">{p.topicName}</p>
                            <p className="text-md font-semibold text-headerFooterColor">Course Name: {p.courseName}.</p>
                            <p className="text-md text-headerFooterColor">Date: {p.date}</p>

                            <div className="card-actions justify-end">
                                <Link href={`/articles/${p._id}`}>
                                    <button className="button text-gray-600 hover:text-headerFooterColor">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Articles;
