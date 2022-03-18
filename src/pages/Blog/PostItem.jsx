import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

function PostItem() {
    let [post, setPost] = useState(null);
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        if (post === null) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((res) => {
                    return res.text();
                })
                .then((json) => {
                    return setPost(JSON.parse(json))
                });
        }
    });

    const postState = () => {
        if (post !== null) {
            return (
                    <div style={{textAlign: "center"}}>
                        <h1>{post.title}</h1>
                        <div style={{display: "flex", justifyContent: "center"}}>
                        <img src="https://thumbs.dreamstime.com/z/fantasy-tree-house-deep-forest-104765716.jpg" style={{height: "500px", width: "1000px", borderRadius: "50%"}} />
                    </div>
                <div>
                <p>{post.body}</p>
                    <p>"Lorem ipsum dolor sit amet. Ut assumenda consequatur in nihil quibusdam et maiores debitis est soluta saepe sit quia velit et sunt voluptatem. Quo harum unde molestiae fuga eos aspernatur dignissimos. Ut corrupti ullam aut odio quasi et molestiae consequatur qui nihil possimus non illo velit 33 optio dicta. Ut ullam omnis est eius cumque est porro exercitationem est unde earum vel facere similique hic voluptas dolores et consequatur quia. Ea nihil dolores in maiores deserunt internos ipsam et galisum molestiae 33 ipsam rerum et minima minima qui quia rerum. Eum atque dolores nam deserunt iure et ipsa harum eos nemo dignissimos sed animi repudiandae ut autem enim rem illum quia. Et fuga eveniet et laboriosam aspernatur et quidem quae ea vero impedit et rerum reiciendis et minus minima. Et dolores beatae et dolorum nostrum et fugit enim non nihil voluptas vel dolorem accusamus."</p>
                    <p>"Lorem ipsum dolor sit amet. Ut assumenda consequatur in nihil quibusdam et maiores debitis est soluta saepe sit quia velit et sunt voluptatem. Quo harum unde molestiae fuga eos aspernatur dignissimos. Ut corrupti ullam aut odio quasi et molestiae consequatur qui nihil possimus non illo velit 33 optio dicta. Ut ullam omnis est eius cumque est porro exercitationem est unde earum vel facere similique hic voluptas dolores et consequatur quia. Ea nihil dolores in maiores deserunt internos ipsam et galisum molestiae 33 ipsam rerum et minima minima qui quia rerum. Eum atque dolores nam deserunt iure et ipsa harum eos nemo dignissimos sed animi repudiandae ut autem enim rem illum quia. Et fuga eveniet et laboriosam aspernatur et quidem quae ea vero impedit et rerum reiciendis et minus minima. Et dolores beatae et dolorum nostrum et fugit enim non nihil voluptas vel dolorem accusamus."</p>
                    <p>"Lorem ipsum dolor sit amet. Ut assumenda consequatur in nihil quibusdam et maiores debitis est soluta saepe sit quia velit et sunt voluptatem. Quo harum unde molestiae fuga eos aspernatur dignissimos. Ut corrupti ullam aut odio quasi et molestiae consequatur qui nihil possimus non illo velit 33 optio dicta. Ut ullam omnis est eius cumque est porro exercitationem est unde earum vel facere similique hic voluptas dolores et consequatur quia. Ea nihil dolores in maiores deserunt internos ipsam et galisum molestiae 33 ipsam rerum et minima minima qui quia rerum. Eum atque dolores nam deserunt iure et ipsa harum eos nemo dignissimos sed animi repudiandae ut autem enim rem illum quia. Et fuga eveniet et laboriosam aspernatur et quidem quae ea vero impedit et rerum reiciendis et minus minima. Et dolores beatae et dolorum nostrum et fugit enim non nihil voluptas vel dolorem accusamus."</p>
                    <p>"Lorem ipsum dolor sit amet. Ut assumenda consequatur in nihil quibusdam et maiores debitis est soluta saepe sit quia velit et sunt voluptatem. Quo harum unde molestiae fuga eos aspernatur dignissimos. Ut corrupti ullam aut odio quasi et molestiae consequatur qui nihil possimus non illo velit 33 optio dicta. Ut ullam omnis est eius cumque est porro exercitationem est unde earum vel facere similique hic voluptas dolores et consequatur quia. Ea nihil dolores in maiores deserunt internos ipsam et galisum molestiae 33 ipsam rerum et minima minima qui quia rerum. Eum atque dolores nam deserunt iure et ipsa harum eos nemo dignissimos sed animi repudiandae ut autem enim rem illum quia. Et fuga eveniet et laboriosam aspernatur et quidem quae ea vero impedit et rerum reiciendis et minus minima. Et dolores beatae et dolorum nostrum et fugit enim non nihil voluptas vel dolorem accusamus."</p>
                    <p>"Lorem ipsum dolor sit amet. Ut assumenda consequatur in nihil quibusdam et maiores debitis est soluta saepe sit quia velit et sunt voluptatem. Quo harum unde molestiae fuga eos aspernatur dignissimos. Ut corrupti ullam aut odio quasi et molestiae consequatur qui nihil possimus non illo velit 33 optio dicta. Ut ullam omnis est eius cumque est porro exercitationem est unde earum vel facere similique hic voluptas dolores et consequatur quia. Ea nihil dolores in maiores deserunt internos ipsam et galisum molestiae 33 ipsam rerum et minima minima qui quia rerum. Eum atque dolores nam deserunt iure et ipsa harum eos nemo dignissimos sed animi repudiandae ut autem enim rem illum quia. Et fuga eveniet et laboriosam aspernatur et quidem quae ea vero impedit et rerum reiciendis et minus minima. Et dolores beatae et dolorum nostrum et fugit enim non nihil voluptas vel dolorem accusamus."</p>
                    <p>"Lorem ipsum dolor sit amet. Ut assumenda consequatur in nihil quibusdam et maiores debitis est soluta saepe sit quia velit et sunt voluptatem. Quo harum unde molestiae fuga eos aspernatur dignissimos. Ut corrupti ullam aut odio quasi et molestiae consequatur qui nihil possimus non illo velit 33 optio dicta. Ut ullam omnis est eius cumque est porro exercitationem est unde earum vel facere similique hic voluptas dolores et consequatur quia. Ea nihil dolores in maiores deserunt internos ipsam et galisum molestiae 33 ipsam rerum et minima minima qui quia rerum. Eum atque dolores nam deserunt iure et ipsa harum eos nemo dignissimos sed animi repudiandae ut autem enim rem illum quia. Et fuga eveniet et laboriosam aspernatur et quidem quae ea vero impedit et rerum reiciendis et minus minima. Et dolores beatae et dolorum nostrum et fugit enim non nihil voluptas vel dolorem accusamus."</p>
                    <p>"Lorem ipsum dolor sit amet. Ut assumenda consequatur in nihil quibusdam et maiores debitis est soluta saepe sit quia velit et sunt voluptatem. Quo harum unde molestiae fuga eos aspernatur dignissimos. Ut corrupti ullam aut odio quasi et molestiae consequatur qui nihil possimus non illo velit 33 optio dicta. Ut ullam omnis est eius cumque est porro exercitationem est unde earum vel facere similique hic voluptas dolores et consequatur quia. Ea nihil dolores in maiores deserunt internos ipsam et galisum molestiae 33 ipsam rerum et minima minima qui quia rerum. Eum atque dolores nam deserunt iure et ipsa harum eos nemo dignissimos sed animi repudiandae ut autem enim rem illum quia. Et fuga eveniet et laboriosam aspernatur et quidem quae ea vero impedit et rerum reiciendis et minus minima. Et dolores beatae et dolorum nostrum et fugit enim non nihil voluptas vel dolorem accusamus."</p>
                    </div>
                </div>
            ) 
        }
        
    }

    return (
        <Container>
            <Row>
                <Col>
                {postState()}
                </Col>
            </Row>
        </Container>
    );
}

export default PostItem;