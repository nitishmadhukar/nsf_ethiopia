import React from 'react';
import './App.css';

function About() {
    return (
        <React.Fragment>
        <div className="container-fluid">
        <div className="row justify-content-lg-center">
            <div className="col-lg-auto">
            <h1>Team Farming - Natural Sequence Farming</h1>
            </div>
        </div>

        <div className="row justify-content-lg-left">
            <div className="col-lg-auto">
            <h2>Who Is Tarwyn Park?</h2>
            <p>
                Tarwyn Park Training is, in their own words, “the home of Natural Sequence Farming”. 
                They provide training courses and resources for farmers to implement NSF to rehydrate and regenerate eroded land. 
                They have operated in Australia but are looking to expand and implement NSF abroad, and with the help of partner Bart Colen, 
                have their sights set on Ethiopia. The challenge they face is in finding patches of land that will make good candidates for NSF.

            </p>
            </div>
        </div>

        <div className="row justify-content-lg-left">
            <div className="col-lg-auto">
            <h2>What is our project?</h2>
            <p>
                Before evangelizing NSF abroad, the org needs to find regions or plots of land that meet the environmental factors required 
                to make the regeneration process work, such as proximity to running water. 
                We will help create a tool that considers these factors to help identify candidate regions for NSF. 
                In addition to being useful for Tarwyn Park and farmers, our end product will help show potential investors the legitimacy 
                of their efforts to expand internationally and the resources they’ve got to do so
            </p>
            <p>
                We will develop a web-based application that can display a variety of environmental data in a simple and 
                intuitive way to help Tarwyn Park and other farmers identify land where NSF can be implemented. 
                The user will be able to toggle which metrics they want to consider, and move sliders to give relative 
                weights to each of those factors. For each patch of land, the weighted metrics will produce a score which 
                represents the suitability for Natural Sequence Farming. 
            </p>
            </div>
        </div>

        <div className="row justify-content-lg-left">
            <div className="col-lg-auto">
            <h2>How will we elicit feedback?</h2>
            <p>
                We plan on meeting with Bart regularly to show our progress and ask for feedback relating to aesthetics of the website 
                as well as accuracy of the information presented. Additionally, we’ll ask farmers and non-technical members of our 
                partner organization to test-run the app at various points of the development cycle. 
                It is imperative that we create an app that is easy to use and requires little to no training.
            </p>
            </div>
        </div>

        <div className="row justify-content-lg-left">
            <div className="col-lg-auto">
            <h2>What is the plan for development?</h2>
            <p>
                The development phase includes gathering data and relevant metrics for each patch of land (first iteration will only include rainfall and wind patterns), 
                setting up a database that houses the metric data, implementing weighting and scoring functions, 
                and designing a clean and simple UI. The evaluation phase includes creating and executing tests that evaluate the 
                functional capabilities of the app, with focus on the suitability score calculation. 
                The deployment phase includes setting up Github actions to deploy our code to both frontend and backend hosts. 
            </p>
            <p>
                We’ll be using Flask as our web framework and a MySQL database to store relevant metrics for each square kilometer of Ethiopia. 
                This information will be retrieved mainly through APIs. We will use Github for version control and deployment.
            </p>
            </div>
        </div>

        <div className="row justify-content-lg-center">
            <div className="col-lg-auto">
            <h2>Who Are We?</h2>
            <ul>
                <li>Joshua Ke: Developer, Tester, UI Designer</li>
                <li>Jordan Kohn: Architect, Developer</li>
                <li>Mike Peacock: Project Manager, Developr, Tester</li>
                <li>Nitish Vantha: UI Designer, Developer, Tester</li>
            </ul>
            </div>
        </div>
        </div>
        </React.Fragment>
    );
}
  
  export default About;
