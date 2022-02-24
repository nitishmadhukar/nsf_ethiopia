// import React from 'react';
// import { defaultData } from './defaultData';
// import './App.css';

// class ResultCards extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {results: []}
//     }

//     componentDidMount() {
//         // fetch("http://nsfethopia.pythonanywhere.com/api/v1/results")
//         // .then((response) => response.json())
//         // .then(results => {
//         //     this.setState({ results: results });
//         // });
//         this.setState({
//             results: defaultData
//         })
//     }

//     handleSubmit = () => {
//         alert('Submitted Form')
//     }

//     render() {
//         return (
//             <div className="container-fluid">
//                 <Form onSubmit={this.handleSubmit} inline>
//                     <FormGroup>
//                             <Label for="postal_code" className='justify-content-lg-left'><strong>Postal Code</strong></Label>
//                             <Input id="postal_code" name="postal_code" placeholder="List of postal codes separated by semi-colon(;)" type="text" />
//                     </FormGroup>
//                     <FormGroup>
//                             <Label for="wind"><strong>Wind</strong></Label>
//                             <Input id="wind" name="wind" type="range" />
//                     </FormGroup>
//                     <FormGroup>
//                             <Label for="rainfall"><strong>Rainfall</strong></Label>
//                             <Input id="rainfall" name="rainfall" type="range" />
//                     </FormGroup>
//                     <Row>
//                         <Col md={3}></Col>
//                         <Col md={6}><Input type="submit" value="Submit" className='btn btn-success'></Input></Col>
//                         <Col md={3}></Col>
//                     </Row>
//                 </Form>
//                 <hr />
//                 {this.state.results.length === 0 ? <Spinner /> :
//                    this.state.results.map((item) => {
//                        return(
//                             <Row className="row justify-content-lg-left" key={item["Id"]}>
//                                 <Col md="3"></Col>
//                                 <Col md="6">
//                                     <Card color="light">
//                                     <CardBody>
//                                         <CardTitle tag="h5">{item["Locality, Sub-locality, Area"]}</CardTitle>
//                                         <CardSubtitle className="mb-2 text-muted" tag="h6">
//                                             <strong>Zone:</strong> {item["Zone"]}, <strong>Postal Code:</strong> {item["Postal Code"]}
//                                         </CardSubtitle>
//                                         <CardText>
//                                             <List type="unstyled">
//                                                 <li><strong>Wind: </strong>{item["Wind"]}</li>
//                                                 <li><strong>Rainfall: </strong>{item["Rainfall"]}</li>
//                                             </List>
//                                         </CardText>
//                                         <Button className='button-green'>Explore</Button>
//                                     </CardBody>
//                                     </Card>
//                                 </Col>
//                                 <Col md="3"></Col>
//                                 {' '}
//                             </Row>
//                        )
//                     })
//                 }
//             </div>
//         );
//     }
// }

// export default ResultCards;
