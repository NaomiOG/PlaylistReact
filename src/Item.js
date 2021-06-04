import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            title: '',
            artist:'',
            link:'',
            image: '',
            rating: 1,
            stars:[]

        }
    }
    /*Crear método que se ejecuta cuando éste componente se crea y se añade el DOM, ahí modificamos el estado con set state*/
    componentDidMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            artist: this.props.artist,
            link: this.props.link,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            stars: Array(parseInt(this.props.rating)).fill(0)/*Genera un arreglo con el num de elementos que tienen las estrellas y lo rellene con un 0*/
        });
    }
    onChangeRating=(e)=>{
        const rating = parseInt(e.target.value)
        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });

        this.props.onupdaterating({id: this.state.id, title: this.state.title, image: this.state.image, rating: rating});
    }
    onRemove=(e)=>{
        this.props.onremove(this.props.id);
    }

    render() {
        return (
            /*HTML para renderizar los elementos*/
            <div className="item">
                <div className="image"><img src={'img/' + this.state.image} width="100%"/></div>
                <div className="title">{this.state.title}</div>
                <div className="artist">{this.state.artist}</div>
                <a href={this.state.link}>Ver video</a>
                <div className="rating">
                    <p>
                        {
                            /*Mapea los espacios creados en el setState y por cada uno coloca una estrella*/
                            this.state.stars.map(x =>
                                <img src="img/star.png" width="32"/>
                            )
                        }

                    </p>
                    Calificación:
                    <select value={this.state.rating} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={this.onRemove}>Eliminar</button>
                </div>
            </div>
        );
    }
}

export default Item;