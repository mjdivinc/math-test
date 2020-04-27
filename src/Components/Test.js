import React from 'react';
import TaskBar from './TaskBar';
import { Card, Row, Col, Button } from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';

class Test extends React.Component {
    constructor() {
        super();
        this.state = { progress: 1, correct: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }

    //{this.props.location.state.list}

    handleHome() {
        this.props.history.replace('/home');
    }

    handleClick(value) {
        if (value === this.props.location.state.list[this.state.progress - 1][2] && this.state.progress < 10) {
            console.log("correct");
            this.setState({ progress: this.state.progress + 1, correct: this.state.correct + 1 });

        }
        else if (this.state.progress < 10) {
            this.setState({ progress: this.state.progress + 1 });
        }
        else if (value === this.props.location.state.list[this.state.progress - 1][2]) {
            console.log("correct");
            console.log("push");
            this.setState({ correct: this.state.correct + 1 });
            this.props.history.push({
                pathname: '/results',
                state: { correct: this.state.correct }
            });
        }
        else {
            console.log("push");
            this.props.history.push({
                pathname: '/results',
                state: { correct: this.state.correct }
            });
        }
    }

    render() {
        var list = this.props.location.state.list[this.state.progress - 1];
        return (<React.Fragment>
            <TaskBar />
            <div className='pl-5 pt-3'>
                <Button onClick={this.handleHome} variant="primary" style={{ fontSize: "20px" }}> <HomeIcon className='mb-1' fontSize="medium" color="white" /> Home </Button>
            </div>
            <Row className='p-5'>

                <Col>
                    <Card style={{ borderWidth: "2px" }}  className='p-3 text-center'>
                        <h3 className='mb-4'>Question {this.state.progress} out of 10:</h3>
                        <p style={{ fontSize: "24px" }}>
                            {list[0]}
                        </p>
                        <Row>
                            <Col className='text-center ml-5 mr-5'>
                                <Row>
                                    <Col>
                                        <Button onClick={() => this.handleClick(list[1][0][0])} className='mb-3' variant="outline-primary" size="lg" block>
                                            A. {list[1][0][0]}
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick={() => this.handleClick(list[1][0][2])} className='mb-3' variant="outline-primary" size="lg" block>
                                            C. {list[1][0][2]}
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='text-center ml-5 mr-5'>
                                <Row>
                                    <Col>
                                        <Button onClick={() => this.handleClick(list[1][0][1])} className='mb-3' variant="outline-primary" size="lg" block>
                                            B. {list[1][0][1]}
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick={() => this.handleClick(list[1][0][3])} className='mb-3' variant="outline-primary" size="lg" block>
                                            D. {list[1][0][3]}
                                        </Button>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>)
    }
}

export default Test;