import React,{Component} from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SeachBox';
import './App.css'
import Scroll from '../components/Scroll';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }
    render(){
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!robots.length){
            return <div className='tc'>
                <h1>Loading data</h1>
            </div>
        }else{
            return(
                <div className='tc'>
                    <h1>Roboguys</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={ filterRobots } />
                    </Scroll>
                </div>
                );
        }
    }
}
export default App