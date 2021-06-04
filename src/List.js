import React from 'react';
import Item from "./Item";
function List(props){
    return(
        <div className="list">
            {
                /*Ejecutar función de mapeo para el arreglo, map función para realizar un recorrido de los elementos de
                 un arreglo*/
                props.items.map(item =>
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        artist={item.artist}
                        link={item.link}
                        image={item.image}
                        rating={item.rating}
                        onupdaterating={props.onupdaterating}//manda llamar al evento del padre App.js
                        onremove={props.onremove}
                    />
                )
            }
        </div>
    );
}
export default List;