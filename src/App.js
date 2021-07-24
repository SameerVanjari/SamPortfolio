import './App.css';
import { Header } from './MyComponents/Header';
import { Portfolio } from './MyComponents/Portfolio';
import { Home } from './MyComponents/Home';
import {About} from './MyComponents/About';
import Footer from './MyComponents/Footer';
import './MyComponents/css/home.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {

  let projects = [
    {
      sno: 1,
      cardTitle: "Flappy bird Game",
      cardDesc: "Flappy bird Game made with Python and PyGame, a project to learn more about Pygame.",
      img: require("./portfolio/flappy.png").default,
      url: "https://github.com/SameerVanjari/PythonProjects/tree/main/Flappy_game"
    },
    {
      sno: 2,
      cardTitle: "Cricket Review System",
      cardDesc: "Same as the DRS in Cricket. Use of CV2, Tkinter Libraris. It was made by help of CodeWithHarry tutorial.",
      img: require("./portfolio/cricreview.png").default,
      url:"https://github.com/SameerVanjari/PythonProjects/tree/main/review%20system%20cricket"
    },
    {
      sno: 3,
      cardTitle: "AI project",
      cardDesc: "A self assistant program that can perfrom various tasks, such as search WIKI for info and open Youtube. Understandong APIs and working of browser actions.",
      img: require("./portfolio/AiProject.png").default,
      url:"https://github.com/SameerVanjari/PythonProjects/tree/main/AI_project"
    },
    {
      sno: 4,
      cardTitle: "Health Manager",
      cardDesc: "A program to monitor the Exercise and Food consumption of different individuals. This is done by keeping logs of what they eat and when and how much they exercise.",
      img: "https://source.unsplash.com/600x500/?food",
      url:"https://github.com/SameerVanjari/PythonProjects/tree/main/Health%20Manager"
    },
    {
      sno: 5,
      cardTitle: "News Reader",
      cardDesc: "This program helps you read the news headline from the top news headlines. This program uses NEWS API to gather the news and uses the windows inbuilt voice feature to read the news headlines.",
      img: "https://source.unsplash.com/600x500/?news,headlines",
      url:"https://github.com/SameerVanjari/PythonProjects/tree/main/readnews"
    },
    {
      sno: 6,
      cardTitle: "Healthy Programmer",
      cardDesc: "This program is designed keeping in mind the health of the programmer. This reminds the programmer to drink water, rest from work and have some exercise after a fixed amount of time.",
      img:  "https://source.unsplash.com/600x500/?healthy,programmer",
      url:"https://github.com/SameerVanjari/PythonProjects/tree/main/Healthy_programmer"
    }
  ]

  return (
   
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
          <Redirect to='/SamPortfolio'/>
          </Route>
          <Route exact path="/SamPortfolio">      
            <Home />
          </Route>
        
          <Route path="/about">
            <About projects={projects} />
          </Route>
          <Route path="/portfolio">
            <Portfolio projects={projects} />
          </Route>
        </Switch>
        <Footer />
      </Router>
  
  );
}

export default App;
