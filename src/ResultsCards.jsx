import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Spinner, List, Col, Row} from 'reactstrap';
import { defaultData } from './defaultData';
import './App.css';

class ResultCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {results: []}
    }

    componentDidMount() {
        // fetch("http://nsfethopia.pythonanywhere.com/api/v1/results")
        // .then((response) => response.json())
        // .then(results => {
        //     this.setState({ results: results });
        // });
        this.setState({
            results: defaultData
        })
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.results.length === 0 ? <Spinner /> :
                   this.state.results.map((item) => {
                       return(
                            <Row className="row justify-content-lg-left" key={item["Id"]}>
                                <Col md="3"></Col>
                                <Col md="6">
                                    <Card color="light">
                                    <CardBody>
                                        <CardTitle tag="h5">{item["Locality, Sub-locality, Area"]}</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                                            <strong>Zone:</strong> {item["Zone"]}, <strong>Postal Code:</strong> {item["Postal Code"]}
                                        </CardSubtitle>
                                        <CardText>
                                            <List type="unstyled">
                                                <li><strong>Wind: </strong>{item["Wind"]}</li>
                                                <li><strong>Rainfall: </strong>{item["Rainfall"]}</li>
                                            </List>
                                        </CardText>
                                        <Button className='button-green'>Explore</Button>
                                    </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3"></Col>
                            </Row>
                       )
                    })
                }
            </div>
        );
    }
}

export default ResultCards;
