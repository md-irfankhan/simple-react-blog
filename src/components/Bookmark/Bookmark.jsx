import BookMarkes from "./BookMarkes/BookMarkes";
import SpentTime from "./SpentTime/SpentTime";
import PropTypes from 'prop-types';
const Bookmark = ({bookmark,spent}) => {
    return (
        <div>
            <div>
                <SpentTime spent={spent}></SpentTime>
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
Bookmark.propTypes={
    bookmark:PropTypes.object,
    spent:PropTypes.number
}

export default Bookmark;