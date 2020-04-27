import React from 'react';
import TaskBar from './TaskBar';
import { Card, Row, Col, Button } from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import RedoIcon from '@material-ui/icons/Redo';

const divStyle = {
    width: '33%'
};
const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };

class Sample extends React.Component {

    render() {
        return (<React.Fragment>
            <div id="1" style={divStyle}>

            </div>

            <div id="2" style={pStyle}>

            </div>

            <div id="3">

            </div>

        </React.Fragment>)
    }
}

export default Sample;