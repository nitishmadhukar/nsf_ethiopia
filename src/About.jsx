import { Container, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import './App.css';

function About() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Team Farming - Natural Sequence Farming</Typography>
            <Divider />
            <Card raised={true}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Who Is Tarwyn Park?</Typography>
                    <Typography variant="body" paragraph={true} align="justify" gutterBottom>
                        Tarwyn Park Training is, in their own words, “the home of Natural Sequence Farming”. 
                        They provide training courses and resources for farmers to implement NSF to rehydrate and regenerate eroded land. 
                        They have operated in Australia but are looking to expand and implement NSF abroad, and with the help of partner Bart Colen, 
                        have their sights set on Ethiopia. The challenge they face is in finding patches of land that will make good candidates for NSF.
                    </Typography>
                </CardContent>
            </Card>
            <br />

            <Card raised={true}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>What is our project?</Typography>
                    <Typography variant="body" paragraph={true} align="justify" gutterBottom>
                        Before evangelizing NSF abroad, the org needs to find regions or plots of land that meet the environmental factors required 
                        to make the regeneration process work, such as proximity to running water. 
                        We will help create a tool that considers these factors to help identify candidate regions for NSF. 
                        In addition to being useful for Tarwyn Park and farmers, our end product will help show potential investors the legitimacy 
                        of their efforts to expand internationally and the resources they’ve got to do so.
                        <br />
                        We will develop a web-based application that can display a variety of environmental data in a simple and 
                        intuitive way to help Tarwyn Park and other farmers identify land where NSF can be implemented. 
                        The user will be able to toggle which metrics they want to consider, and move sliders to give relative 
                        weights to each of those factors. For each patch of land, the weighted metrics will produce a score which 
                        represents the suitability for Natural Sequence Farming. 
                    </Typography>
                </CardContent>
            </Card>
            <br />

            <Card raised={true}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>How will we elicit feedback?</Typography>
                    <Typography variant="body" paragraph={true} align="justify" gutterBottom>
                        We plan on meeting with Bart regularly to show our progress and ask for feedback relating to aesthetics of the website 
                        as well as accuracy of the information presented. Additionally, we’ll ask farmers and non-technical members of our 
                        partner organization to test-run the app at various points of the development cycle. 
                        It is imperative that we create an app that is easy to use and requires little to no training. 
                    </Typography>
                </CardContent>
            </Card>
            <br />

            <Card raised={true}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>What is the plan for development?</Typography>
                    <Typography variant="body" paragraph={true} align="justify" gutterBottom>
                        The development phase includes gathering data and relevant metrics for each patch of land (first iteration will only include rainfall and wind patterns), 
                        setting up a database that houses the metric data, implementing weighting and scoring functions, 
                        and designing a clean and simple UI. The evaluation phase includes creating and executing tests that evaluate the 
                        functional capabilities of the app, with focus on the suitability score calculation. 
                        The deployment phase includes setting up Github actions to deploy our code to both frontend and backend hosts. 
                        <br />
                        We’ll be using Flask as our web framework and a MySQL database to store relevant metrics for each square kilometer of Ethiopia. 
                        This information will be retrieved mainly through APIs. We will use Github for version control and deployment.
                    </Typography>
                </CardContent>
            </Card>
            <br />

            <Card raised={true}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Who Are We?</Typography>
                    <Typography variant="body" paragraph={true} align="justify" gutterBottom>
                        <List>
                            <ListItem><ListItemText>Joshua Ke: Developer, Tester, UI Designer</ListItemText></ListItem>
                            <ListItem><ListItemText>Jordan Kohn: Architect, Developer</ListItemText></ListItem>
                            <ListItem><ListItemText>Mike Peacock: Project Manager, Developr, Tester</ListItemText></ListItem>
                            <ListItem><ListItemText>Nitish Vantha: UI Designer, Developer, Tester</ListItemText></ListItem>
                        </List>
                    </Typography>
                </CardContent>
            </Card>
            <br />
        </Container>
    );
}
  
  export default About;
