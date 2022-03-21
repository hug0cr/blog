import { Image, Container, Row } from 'react-bootstrap';

function Home() {
    return (
        <Container>
            <Row>
                <div className="col-12 text-center my-3">
                    <h1>Cuisine du monde</h1>
                </div>
                <div className="col-12 text-center mb-5">
                    <h2>le blog culinaire des gourmands</h2>
                </div>
                <Row className='my-2'>
                    <Image className='col-lg-6 col-12'
                        src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" style={{ width: '40rem' }}
                    />
                    <div className="col-lg-6 col-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat magnam sed commodi culpa quae assumenda voluptatum iure, repellendus ut autem illum omnis eveniet possimus nostrum deleniti nisi deserunt eos laboriosam aspernatur veritatis. Voluptatibus similique consequatur recusandae exercitationem inventore placeat est? Cum sunt quos perferendis blanditiis consequuntur dolorem consequatur dolore ratione impedit sequi! Iure perferendis repudiandae esse vel debitis error. Officiis est consectetur at facere nisi ratione. Facere commodi sunt rem eveniet reiciendis dicta harum. Molestias facere provident id cum dolores nulla totam voluptas odit pariatur quas explicabo quis ipsum vero rerum et amet accusantium qui odio, distinctio aperiam aliquam ad recusandae. Amet illum corporis voluptatum! Ducimus neque dolor magnam corrupti sunt fugit ipsam dicta laboriosam expedita consequatur, voluptatem delectus. Culpa!</p>
                    </div>
                </Row>
                <Row className='my-2'>
                    <Image className="col-lg-6 col-12"
                        src="https://images.pexels.com/photos/2122280/pexels-photo-2122280.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" style={{ width: '40rem' }}
                    />
                    <div className="col-lg-6 col-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat magnam sed commodi culpa quae assumenda voluptatum iure, repellendus ut autem illum omnis eveniet possimus nostrum deleniti nisi deserunt eos laboriosam aspernatur veritatis. Voluptatibus similique consequatur recusandae exercitationem inventore placeat est? Cum sunt quos perferendis blanditiis consequuntur dolorem consequatur dolore ratione impedit sequi! Iure perferendis repudiandae esse vel debitis error. Officiis est consectetur at facere nisi ratione. Facere commodi sunt rem eveniet reiciendis dicta harum. Molestias facere provident id cum dolores nulla totam voluptas odit pariatur quas explicabo quis ipsum vero rerum et amet accusantium qui odio, distinctio aperiam aliquam ad recusandae. Amet illum corporis voluptatum! Ducimus neque dolor magnam corrupti sunt fugit ipsam dicta laboriosam expedita consequatur, voluptatem delectus. Culpa!</p>
                    </div>
                </Row>
            </Row>
        </Container>
    );
}

export default Home;