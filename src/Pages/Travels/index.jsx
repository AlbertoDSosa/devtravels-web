// Travels Component

import React from 'react';
import './travels.scss';
import Travel from './Travel'
import { getTravels } from '../../Request/travel';

class Travels extends React.Component {
  state = {
    travels: []
  }
  componentDidMount(){
    getTravels().then(travels => {
      this.setState({
        travels
      });
    });
    
  }
  render() {
    const {travels} = this.state;
    return (
        <section className="travels-container" id="travels">
            {travels && travels.map(travel => <Travel travel={travel} key={travel._id} />)}
        </section>
    );
  }

}

export default Travels;