import BookMarkes from "./BookMarkes/BookMarkes";
import SpentTime from "./SpentTime/SpentTime";

const Bookmark = ({bookmark}) => {
    return (
        <div>
            <div>
                <SpentTime></SpentTime>
            </div>
            <div className="bg-black/[0.05] rounded justify-center py-[16px] mt-6">
                <h2 className="px-[30px] font-bold exo-2 py-2">Bookmarked Blogs: {bookmark.length}</h2>
                <div className="px-[30px] ">
                    {
                        bookmark.map(bookmark=><BookMarkes bookmark={bookmark}></BookMarkes>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmark;