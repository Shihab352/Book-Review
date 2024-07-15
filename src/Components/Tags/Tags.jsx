import PropTypes from 'prop-types'; 

const Tags = ({tag}) => {
    return (
        <div className='bg-slate-200 p-2 rounded-full mb-2'>
            <p className='work-sans-medium text-[#23BE0A] '># {tag} </p>
           
        </div>
    );
};
Tags.propTypes = {
    tag : PropTypes.string
}
export default Tags;