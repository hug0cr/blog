import { useEffect, useState } from "react";

import { Card } from 'react-bootstrap';

function Blog() {

    // Sorting articles

    let [sortArticles, setSortArticles] = useState(true);

    function handleArticlesSorting() {
        setSortArticles(!sortArticles);
        console.log(sortArticles);
        if (sortArticles) {
            posts.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
        } else {
            posts.sort((a, b) => {
                return a.id - b.id;
            });
        }
        postsState();
    }

    // Articles get request and display
    const cookingPictures = [
        'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/175753/pexels-photo-175753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/1040685/pexels-photo-1040685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ];

    let [posts, setPosts] = useState(null);

    useEffect(() => {
        if (posts === null) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    return res.text();
                })
                .then((json) => {
                    return setPosts(JSON.parse(json))
                });
        }
    });

    const postsState = () => {
        if (posts === null) {
            return (
                <p>LOADING...</p>
            )
        } else {
            return (
                posts.map((post, index) => {
                    return (
                        <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-around">
                            <Card className="my-2" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={cookingPictures[Math.floor(Math.random() * cookingPictures.length)]} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.body}</Card.Text>
                                    <Card.Link href="#">Lire la suite</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            )
        }
    }

    // Page rendering

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-3">
                    <h1>Blog</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-end m-2 px-5">
                    <div className="col-3">
                        <select className="form-select form-select-sm" name='articles' id="articles-select" onChange={() => { handleArticlesSorting() }}>
                            <option value='Date'>Date</option>
                            <option value='Alphabétique'>Alphabétique</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                {postsState()}
            </div>
        </div>
    );
}

export default Blog;