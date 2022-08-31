import Image from "next/image"

interface PostCardProps {
    title?: string,
    date?: string,
    category?: string
}

export const PostCard = ({title, date, category}: PostCardProps ) => {
    return (
        <div className=" max-w-xs bg-gray-900 rounded-md ">
            <div className="text-center">
                <Image className="rounded-t-md	" src={`/img/posts/utmgoogleanalytics.jpeg`} loading="lazy" width={456} height={250}  alt="" />
            </div>
            <div className="py-2 px-4">
                <div className="flex text-sm justify-between">
                <p className="text-green-ddev"  style={{ fontFamily: "'DotGothic16'" }}>Marketing</p>
                <p className=" text-orange-ddev text-xs"  style={{ fontFamily: "'DotGothic16'" }}>20 Sep, 2022</p>
            </div>

            <div className="pt-4 pb-2">
                <a  href="">
                    <h3 className=" text-xl hover:text-white transition duration-500 ease-in-out">Errores comunes al crear una campaña de Google Ads</h3>
                </a>
            </div>
        </div>
      </div>
    )
}

export default PostCard;