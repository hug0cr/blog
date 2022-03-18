import { useEffect, useState } from "react";

import { Card } from 'react-bootstrap';

function Blog() {
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
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-around">
                            <Card className="my-2" style={{ width: '18rem' }}>
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

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-3">
                    <h1>Blog</h1>
                </div>
            </div>
            <div className="row">
                {postsState()}
            </div>
        </div>
    );
}

export default Blog;