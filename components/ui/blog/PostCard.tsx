import Image from "next/image"
import Link from "next/link";
import { PostData } from "../../../types/Post";

export const PostCard = ( {data: {title, date, category, cover}, slug }: PostData ) => {
    return (
        <div className=" max-w-xs bg-gray-900 rounded-md ">
            <div className="text-center">
                <Image 
                    className="rounded-t-md" 
                    src={`/img/posts/${cover}`} 
                    loading="lazy" 
                    width={456} 
                    height={250}  
                    alt="" />
            </div>
            <div className="py-2 px-4">
                <div className="flex text-sm justify-between">
                <p className="text-green-ddev"  style={{ fontFamily: "'DotGothic16'" }}>{category}</p>
                <time className=" text-orange-ddev text-xs"  style={{ fontFamily: "'DotGothic16'" }}>{date}</time>
            </div>

            <div className="pt-4 pb-2">
                <Link href={`/blog/${slug}`}>
                    <a><h3 className=" text-xl hover:text-white transition duration-500 ease-in-out">{title}</h3></a>    
                </Link>
            </div>
        </div>
      </div>
    )
}

export default PostCard;