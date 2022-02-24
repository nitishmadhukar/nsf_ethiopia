import React from 'react';
import { defaultData } from './defaultData';
import './App.css';
import { Container, CircularProgress, Card, CardHeader, CardContent, CardActions, Button, Typography, List, ListItem, ListItemText, FormControl, InputLabel, Input, FormHelperText, Slider, Grid } from '@mui/material';
import { Box } from '@mui/system';

class ResultCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {results: [], wind: [10, 50], rainfall: [20, 70], postal_codes: ""}
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

    handleSubmit = (e) => {
        e.preventDefault()
        //TODO: Need to do an API call to the backend to fetch the results
        let postal_codes_list = this.state.postal_codes.split(",").map((pc) => pc.trim())

        let results = this.state.results.filter((result) => {
            return (
                postal_codes_list.includes(result["Postal Code"].toString()) &&
                (result["Wind"] >= this.state.wind[0] && result["Wind"] <= this.state.wind[1]) &&
                (result["Rainfall"] >= this.state.rainfall[0] && result["Rainfall"] <= this.state.rainfall[1])
            )
        })
        this.setState({
            results: results
        })
    }

    handleFormInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <Box>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="postal_codes">Postal Codes</InputLabel>
                            <Input id="postal_codes" aria-describedby="postal_codes" name="postal_codes" onChange={this.handleFormInput} />
                            <FormHelperText id="postal_codes">Provide a list of postal codes separated by comma (,)</FormHelperText>
                        </FormControl>
                        <br /><br />

                        <InputLabel htmlFor="wind" id="wind">Wind</InputLabel>
                        <Slider value={this.state.wind} onChange={this.handleFormInput} valueLabelDisplay="auto" name="wind" />
                        <br /><br />

                        <InputLabel htmlFor="rainfall" id="rainfall">Rainfall</InputLabel>
                        <Slider value={this.state.rainfall} onChange={this.handleFormInput} valueLabelDisplay="auto" name="rainfall" />
                        <br /><br />
                        <Button variant="contained" color="success" type="submit">Search</Button>
                    </form>
                </Box>
                <hr />
                {this.state.results.length === 0 ? <CircularProgress /> :
                   this.state.results.map((item) => {
                       return(
                           <React.Fragment key={item["Id"]}>
                                <Card raised={true}>
                                    <CardHeader
                                        title={item["Locality, Sub-locality, Area"]}
                                        subheader={`Zone: ${item["Zone"]}, Postal Code: ${item["Postal Code"]}`}
                                    >
                                    </CardHeader>
                                    <CardContent>
                                        <Typography variant="body" paragraph={true} align="left" gutterBottom>
                                            <List>
                                                <ListItem><ListItemText><strong>Wind: </strong>{item["Wind"]}</ListItemText></ListItem>
                                                <ListItem><ListItemText><strong>Rainfall: </strong>{item["Rainfall"]}</ListItemText></ListItem>
                                            </List>
                                        </Typography>
                                        <CardActions>
                                            <Button variant="contained" color="info">Explore</Button>
                                        </CardActions>
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
