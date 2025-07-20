
import { CiBookmarkPlus } from "react-icons/ci";
const Cards = ({blog, handleBookmark,handleMark}) => {
    const {coverImg,authorPhoto,authorName,postedDate,readingTime,blogTitle,hashtags}=blog
    return (
        <div>
            <div>
                <img className="h-[450px] w-full object-cover rounded-2xl" src={coverImg} alt="" />
            </div>
            <div className="mt-[34px]">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div>
                            <img className="h-[50px] w-[50px] rounded-full" src={authorPhoto} alt="" />
                        </div>
                        <div>
                            <h2 className="text-[24px] font-bold exo-2 mb-0">{authorName}</h2>
                            <p className="exo-2 font-semibold opacity-[0.5] mt-0">{postedDate}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="exo-2 font-semibold opacity-[0.5] mt-0">{readingTime} min read</p>
                        <div onClick={()=>handleBookmark(blog)}><CiBookmarkPlus className="h-[60px]" /></div>

                    </div>
                </div>

                <div>
                    <h2 className="exo-2 font-bold text-[40px]">{blogTitle}</h2>
                    <p className="font-medium opacity-[0.5]">{hashtags.map(hash=><span>{hash} </span>)}</p>
                    <button className="text-blue-400 underline font-semibold hover:text-cyan-400" onClick={()=>handleMark(readingTime ,blog.id)}>Mark as read</button>
                </div>

            </div>
            <hr className="opacity-[0.1] mt-5" />

        </div>
    );
};

export default Cards;