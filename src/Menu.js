import React from 'react';
import Search from "./Search.js";
import PanelAdd from "./PanelAdd.js";
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        /*Oculto cuando es falso, al dar click cambia a verdadero y se muestra*/
        this.state={newItemPanel:false};
    }
    app=()=>{
        /*Para que el this sea heredado de la clase*/
        this.setState({newItemPanel:true});
    }
    onCancel=()=>{
        /*Para que el this sea heredado de la clase*/
        this.setState({newItemPanel:false});
    }

    render() {
        return (
            <div className="container"> {/*contenedor padre*/}
                <div className="subcontainer">
                    <div className="logo">{/*logo*/}
                        {this.props.title /*mando llamar a un prop para colocar el nombre del sitio*/}
                    </div>
                    <div className="search">{/*barra de búsqueda*/}
                        <Search onsearch={this.props.onsearch}/>
                    </div>
                    <div className="actions">{/*botones*/}
                        <button onClick={this.app} className="button btn-blue">+ Añadir nueva canción</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)?
                        <PanelAdd onCancel={this.onCancel} onadd={this.props.onadd} />
                        : ''
                }

            </div>
        );
    }
}

export default Menu;