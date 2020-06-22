import React, {Component} from 'react';
import App from '../App';
import '../App.css';

class list extends Component {
    constructor(props) {
        super(props);

        this.state = {
            estudantes: [
                {
                    nome: 'Breno',
                    polo: 'prazeres',
                    idade: 18
                },
                {
                    nome: 'Matheus', 
                    polo: 'prazeres',
                    idade: 23
                },
                {
                    nome: 'Kamile',
                    polo: 'prazeres',
                    idade: 16
                },
                {
                    nome: 'Jeziel',
                    polo: 'prazeres',
                    idade: 33
                },
                {
                    nome: 'Cícero',
                    polo: 'prazeres',
                    idade: 24
                },
                {
                    nome: 'Cassio',
                    polo: 'prazeres',
                    idade: 22
                },
                {
                    nome: 'Douglas',
                    polo: 'prazeres',
                    idade: 24
                },
                {
                    nome: 'Pricila',
                    polo: 'prazeres',
                    idade: 28
                }
            ]
        }
    }

    render() {
        return (
           <div>
               {this.state.estudantes.map((item, index) => {
                   return (
                       <div className='boxcard' key={index}>
                           <h1 className="Title">{item.nome}</h1>
                           <h2 className="TitleTwo">{item.polo}</h2>
                           <h2 className="TitleTree">{item.idade}</h2>
                       </div>
                   );
               })
            }
           </div>
        )
    }
}

export default list;