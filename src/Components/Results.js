import React from 'react';
import TaskBar from './TaskBar';
import { Card, Row, Col, Button } from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import RedoIcon from '@material-ui/icons/Redo';

class Results extends React.Component {

    constructor() {
        super();
        this.handleHome = this.handleHome.bind(this);
        this.handleRetake = this.handleRetake.bind(this);
    }

    handleHome() {
        this.props.history.replace('/home');
    }

    handleRetake() {
        this.props.history.goBack();
    }

    render() {
        return (<React.Fragment>
            <TaskBar />
            <div className='pl-5 pt-3'>
                <Button onClick={this.handleHome} variant="primary" style={{ fontSize: "20px" }}> <HomeIcon className='mb-1' fontSize="medium" /> Home </Button>
            </div>
            <Row className='p-5'>
                <Col>
                    <Card style={{ borderWidth: "2px" }} className='p-3 text-center'>
                        <h1>Finished. </h1>
                        <p style={{ fontSize: "24px" }}>
                            You got <b>{this.props.location.state.correct}</b>  out of 10 correct answers.
                        </p>
                        <Row>
                            <Col className='text-center ml-5 mr-5'>
                                <Button onClick={this.handleRetake} className='mb-3' variant="secondary" size="lg" block>
                                    <RedoIcon className=' mr-3' fontSize="large" />Retake Test (Same Questions)
                                </Button>
                            </Col>
                            <Col className='text-center ml-5 mr-5'>
                                <Button onClick={this.handleHome} className='mb-3' variant="primary" size="lg" block>
                                    <HomeIcon className='mb-1' fontSize="large" /> Return Home
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>)
    }
}

export default Results;