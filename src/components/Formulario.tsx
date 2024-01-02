import { Form as F, Row, Col } from "react-bootstrap";

function Form() {
    return (
        <>
            <F>
                <Row>
                    <Col md={6}>
                        <F.Group className="mb-3">
                            <F.Label htmlFor="name">
                                Drink Names
                            </F.Label>

                            <F.Control
                                id="name"
                                type="text"
                                placeholder="Ex: Drinks, Cocktails"
                                name="name"
                            ></F.Control>
                        </F.Group>
                    </Col>
                    <Col md={6}>
                    <F.Group className="mb-3">
                            <F.Label htmlFor="category">
                                Categories
                            </F.Label>

                            <F.Select id='category' name='category'>
                            <option>-- Select --</option>

                            </F.Select>
                        </F.Group>
                    </Col>
                </Row>
            </F>
        </>
    );
}

export default Form;
