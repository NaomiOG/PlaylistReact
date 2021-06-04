import logo from './logo.svg';
import './App.css';
import List from "./List";
import Menu from "./Menu";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            songs:[
                {id:0, rating:3, title:'Santa Claus llegó a la ciudad', artist:'Luis Miguel',link:'https://www.youtube.com/watch?v=SwTs9k2ww1k', image:'cancion01.jpg'},
                {id:1, rating:5, title:'Lo dudo', artist:'José José',link:'https://www.youtube.com/watch?v=lRvfemZJJU4', image:'cancion02.jpg'},
                {id:2, rating:4, title:'Somebody Else', artist:'The 1975',link:'https://www.youtube.com/watch?v=Bimd2nZirT4', image:'cancion03.jpg'},
                {id:3, rating:5, title:'Head first', artist:'Christian French',link:'https://www.youtube.com/watch?v=WwH3Cngujng', image:'cancion04.jpg'},
                {id:4, rating:4, title:'Too Good At Goodbyes', artist:'Sam Smith',link:'https://www.youtube.com/watch?v=J_ub7Etch2U', image:'cancion05.jpg'},
            ],
            copySongs:[]
        };
    }

    componentDidMount() {
        /*mandar llamar a initSongs ya que servirá para poder rellenar los libros la copia exacta*/
        this.initSongs();
    }
    initSongs=()=>{
        this.setState((state,props)=>({
            copySongs:[...state.songs]
        }));
    }

    onAdd=(item)=> {
        let temp = [...this.state.songs];
        const id = temp[temp.length - 1].id+1;
        item['id'] = id;
        temp.push(item);
        this.setState({songs: [...temp]});
        this.initSongs();
    }

    onSearch=(query)=>{
        /*requiere un query*/
        if(query === ''){
            this.initSongs();
        }else{

            const temp = [...this.state.songs];
            var res = [];
            temp.forEach(item =>{
                const aux1=query.substr(0,4);
                const aux2=item.title.toLowerCase().substr(0,4)
                if(aux1===aux2){
                    res.push(item);
                }

            });

            this.setState({copySongs: [...res]});
        }
    }
    onUpdateRating=(item)=>{
        var temp = [...this.state.songs];
        const index = temp.findIndex(x => x.id === item.id);
        temp[index].title = item.title;
        temp[index].artist = item.artist;
        temp[index].link = item.link;
        temp[index].image = item.image;
        temp[index].rating = item.rating;

        this.setState({songs: [...temp]});
        this.initSongs();
    }
    onRemove=(id)=>{
        var temp=[...this.state.songs];
        const res=temp.filter(item=>item.id != id);
        this.setState({songs: [...res]});
        this.initSongs();
    }

    render() {
        return (
            <div className="App">
                <Menu title="My Playlist" onadd={this.onAdd} onsearch={this.onSearch}/>
                <List items={this.state.copySongs} onupdaterating={this.onUpdateRating} onremove={this.onRemove}/>
            </div>
        );
    }
}

export default App;
