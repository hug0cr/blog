import {
    Routes,
    Route
} from 'react-router-dom';
import PostsList from './PostsList';
import PostItem from './PostItem';


function Blog() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-12 text-center my-3">
                <h1>Blog</h1>
            </div>
        </div>
        <Routes>
            <Route path='' element={<PostsList />} />
            <Route path='post/:id' element={<PostItem />} />
        </Routes>
    </div>
    )
    
}

export default Blog;