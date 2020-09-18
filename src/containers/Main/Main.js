import React,{Component} from 'react';
import Summary from '../Summary/Summary';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Achievements from '../Achievements/Achievements';
import Footer from '../../components/footer/footer';
import Contact from '../Contact/Contact';
import Aux from '../../hoc/auxillary';

class Main extends Component {
render() {
    return (
 <Aux>
    <Summary />
    <Skills />
    <Projects />
    <Experience />
    <Achievements />
    <Contact />
    <Footer />
 </Aux>
    )
    }
}

export default Main;