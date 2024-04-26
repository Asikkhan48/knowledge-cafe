import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, reading_time, posted_data, author_img, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture of The Title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt={`Author picture`} />
                    <div className='ml-5'>
                        <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_data}</p>
                    </div>
                </div>

                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={()=> handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-700'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-3xl'>Title:{title}</h1>
            <p>
                {
                    hashtags.map( (hashtag, idx) => <span key={idx}> <a href="">#{hashtag}</a> </span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time)}
            className='text-pink-500 font-bold underline'>Make as Read</button>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;