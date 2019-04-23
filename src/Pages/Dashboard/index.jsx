// Dashboard Component

import React from 'react';
import './dashboard.scss';
import Icon from  '../../components/Icon';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <h2>Bienvenido a el área de adminitración</h2>
                <small>Desde aquí podrás crear viajes o gestionar los ya existentes</small>
                <table travels-table>
                    <tr>
                        <th>ID</th>
                        <th>Viaje</th>
                        <th>Fechas</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Activado</th>
                        <th>Eliminar</th>
                    </tr>
                    <tr>
                        <td>2983024</td>
                        <td>Madrid</td>
                        <td>16 feb 19</td>
                        <td>20€ de descuento</td>
                        <td>130€</td>
                        <td><Icon iconName="search" /></td>
                        <td><Icon iconName="checkmark" /></td>
                        <td><Icon iconName="bin" /></td>
                    </tr>
                </table>
                <button>Añadir</button>
            </div>
        );
    }
}

export default Dashboard;
