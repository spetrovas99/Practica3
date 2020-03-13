import React,{Component} from 'react';
import './App.css';
import  data from "./Data.json"
import AllFilms from "./components/AllFilms.jsx"
import PeliInfo from './components/PeliInfo';
class App extends Component{
  state = {
    data: data, 
    peliInfo: null,
    likes: [[], [], [], [], [], [], []],
    mediaEstrellas: [0, 0, 0, 0, 0, 0, 0],
  }

  clickPeliHandler = (title) =>{
    const data = this.state.data.slice();
    const peliInfo = data.find(data => data.title === title);
    this.setState({peliInfo});
  }

  estrellasHandler = (n) => {
    let likes = this.state.likes.slice();
    let mediaEstrellas = this.state.mediaEstrellas.slice();

    likes[this.state.peliInfo.episode_id - 1].push(n);
    mediaEstrellas[this.state.peliInfo.episode_id - 1] = 0;

    likes[this.state.peliInfo.episode_id - 1].forEach(n => {
      mediaEstrellas[this.state.peliInfo.episode_id - 1] = n + mediaEstrellas[this.state.peliInfo.episode_id - 1];
    });
    mediaEstrellas[this.state.peliInfo.episode_id - 1]  = likes[this.state.peliInfo.episode_id - 1].length / mediaEstrellas[this.state.peliInfo.episode_id - 1];

    this.setState({likes, mediaEstrellas});
  }

  render(){
    if(this.state.peliInfo === null){
      return(
          <div className="App">
            <h1>STAR WARS</h1>
            <AllFilms data = {this.state.data} clickPeli = {this.clickPeliHandler}></AllFilms>     
          </div>
      );
    }else{
      return(
        <div className = "AppInfo">
           <AllFilms data = {this.state.data} clickPeli = {this.clickPeliHandler}></AllFilms>
          <PeliInfo peliSelect={this.state.peliInfo} estrella={this.estrellasHandler} mediaEstrellas={this.state.mediaEstrellas[this.state.peliInfo.episode_id - 1]} n={this.state.likes[this.state.peliInfo.episode_id - 1].length} ></PeliInfo>
        </div>
      );
    }
  }
}

export default App;