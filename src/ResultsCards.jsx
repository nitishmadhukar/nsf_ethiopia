import React from 'react';
import { defaultData } from './defaultData';
import './App.css';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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

    handleSubmit = () => {
        alert('Submitted Form')
    }

    render() {
        return (
            <Container>
                {/* <Form onSubmit={this.handleSubmit} inline>
                    <FormGroup>
                            <Label for="postal_code" className='justify-content-lg-left'><strong>Postal Code</strong></Label>
                            <Input id="postal_code" name="postal_code" placeholder="List of postal codes separated by semi-colon(;)" type="text" />
                    </FormGroup>
                    <FormGroup>
                            <Label for="wind"><strong>Wind</strong></Label>
                            <Input id="wind" name="wind" type="range" />
                    </FormGroup>
                    <FormGroup>
                            <Label for="rainfall"><strong>Rainfall</strong></Label>
                            <Input id="rainfall" name="rainfall" type="range" />
                    </FormGroup>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}><Input type="submit" value="Submit" className='btn btn-success'></Input></Col>
                        <Col md={3}></Col>
                    </Row>
                </Form> */}
                <hr />
                {this.state.results.length === 0 ? <CircularProgress /> :
                   this.state.results.map((item) => {
                       return(
                           <React.Fragment>
                                <Card raised={true}  key={item["Id"]}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>{item["Locality, Sub-locality, Area"]}</Typography>
                                        <Typography variant="body" paragraph={true} align="justify" gutterBottom>
                                            <strong>Zone:</strong> {item["Zone"]}, <strong>Postal Code:</strong> {item["Postal Code"]}
                                        </Typography>
                                        <Typography variant="body" paragraph={true} align="left" gutterBottom>
                                            <List>
                                                <ListItem><ListItemText><strong>Wind: </strong>{item["Wind"]}</ListItemText></ListItem>
                                                <ListItem><ListItemText><strong>Rainfall: </strong>{item["Rainfall"]}</ListItemText></ListItem>
                                            </List>
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <br />
                            </React.Fragment>
                       )
                    })
                }
            </Container>
        );
    }
}

export default ResultCards;
