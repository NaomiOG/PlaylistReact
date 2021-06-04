import React from 'react';

class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            title: '',
            artist:'',
            link:'',
            image: '',
            rating: 1
        };
    }
    onSubmit=()=>{
        /*Obtenemos las variables del estado y las almacenamos en constantes*/
        const title=this.state.title;
        const artist=this.state.artist;
        const link=this.state.link;
        const image=this.state.image;
        const rating=this.state.rating;

        /*llamamos al prop onAdd que a su vez llama a una función y le pasamos el objeto con los valores de las variables*/
        this.props.onadd({title: title,artist: artist,link: link, image: image, rating:rating});
        this.props.onCancel();
    }
    onChangeTitle=(e)=>{
        this.setState({title: e.target.value});
    }
    onChangeArtist=(e)=>{
        this.setState({artist: e.target.value});
    }
    onChangeLink=(e)=>{
        this.setState({link: e.target.value});
    }
    onChangeImage=(e)=>{
        this.setState({image: e.target.value});
    }
    onChangeRating=(e)=>{
        const rating=parseInt(e.target.value)
        this.setState({rating: rating});
    }


    render() {
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Nombre de la cación</label><br/>
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input"/>
                        </p>
                        <p>
                            <label>Artista</label><br/>
                            <input onChange={this.onChangeArtist} type="text" name="title" className="input"/>
                        </p>
                        <p>
                            <label>Link</label><br/>
                            <input onChange={this.onChangeLink} type="text" name="title" className="input"/>
                        </p>

                        <p>
                            <label>Nombre de imagen</label><br/>
                            <input onChange={this.onChangeImage} type="text" name="image" className="input"/>
                        </p>

                        <p>
                            <label>Calificación</label><br/>
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar canción"/>
                        <button onClick={this.props.onCancel} className="button btn-normal">Cancelar</button>
                    </form>
                </div>
            </div>
        );

    }
}

export default Panel;