
import PropTypes from 'prop-types';
const BookMarkes = ({bookmark}) => {
    return (
        <div className="flex py-[21px] rounded justify-center items-center bg-white px-1 my-3">
            <p className="exo-2 font-semibold">{bookmark.blogTitle}</p>
            
        </div>
    );
};
BookMarkes.propTypes={
    bookmark:PropTypes.object
}
export default BookMarkes;