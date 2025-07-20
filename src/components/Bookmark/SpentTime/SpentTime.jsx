
import PropTypes from 'prop-types';
const SpentTime = ({spent}) => {
    return (
        <div className="bg-blue-400/[0.4] rounded border border-blue-500 flex justify-center items-center py-[21px]">
           <p className="text-[#6047EC] font-bold exo-2">Spent time on read : {spent} min</p> 
        </div>
    );
};
SpentTime.propTypes={
    spent:PropTypes.number
}
export default SpentTime;