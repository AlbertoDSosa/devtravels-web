// Dashboard Component

import React from 'react';
import './dashboard.scss';
import Icon from  '../../components/Icon';

function Dashboard () {
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h2>Bienvenido a el área de adminitración</h2>
                <small>Desde aquí podrás crear viajes o gestionar los ya existentes</small>
            </div>
            <div className="dashboard-travelList">
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
                <div>2983024</div>
                <div>Madrid</div>
                <div>16 feb 19</div>
                <div>Pasa unos días inolvidables...</div>
                <div>130€</div>
                <div>20€ de descuento</div>
                <div><Icon iconName="eye" /></div>
                <div><Icon iconName="checkmark" /></div>
                <div><Icon iconName="pencil" /></div>
                <div><Icon iconName="bin" /></div>
            </div>
            <button>AÑADIR</button>
        </div>
    );
}

export default Dashboard;
