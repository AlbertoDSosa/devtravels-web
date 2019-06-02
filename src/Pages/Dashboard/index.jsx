// Dashboard Component

import React from 'react';
import './dashboard.scss';
import { connect } from 'react-redux';
import TravelItem from './TravelItem'
import {getDashboardTravels} from '../../Request/travel'


class  Dashboard extends React.Component {

    state = {
        travels: [],
        token: this.props.auth.token
    }
    componentDidMount () {
        getDashboardTravels(this.state.token)
        .then(res => {
            this.setState({
                travels: res
            })
        })
        .catch(err => console.err)
    }

    render() {
        
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <h2>Bienvenido a el área de adminitración</h2>
                    <small>Desde aquí podrás crear viajes o gestionar los ya existentes</small>
                </div>
                <div className="dashboard-travelList">
                    <div className="dashboard-travelListHeader">
                        <div>ID</div>
                        <div>Viaje</div>
                        <div>Fechas</div>
                        <div>Descripción</div>
                        <div>Precio</div>
                        <div>Oferta</div>
                        <div>Imagen</div>
                        <div className="dasboard-actions">Activado</div>
                        <div className="dasboard-actions">Editar</div>
                        <div className="dasboard-actions">Eliminar</div>
                    </div>
                    {
                        this.state.travels.map(travel => {
                            return <TravelItem {...travel} key={travel._id} />   
                        })
                    }
                    
                </div>
                <button>AÑADIR</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

export default connect(mapStateToProps)(Dashboard);
