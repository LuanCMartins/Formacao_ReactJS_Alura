import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

export class ListaDeNotas extends Component {
    

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            {//<div>{nota}</div>
                            }
                            <CardNota 
                            indice = {index}
                            apagarNota={this.props.apagarNota}
                            titulo={nota.titulo} 
                            texto={nota.texto}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;