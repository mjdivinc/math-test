import React from 'react';
import TaskBar from './TaskBar';
import { Card, Row, Col, Button } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HomeIcon from '@material-ui/icons/Home';

class HomeScreen extends React.Component {
    constructor() {
        super();

        var add = [];
        var sub = [];
        // [[question, [answers], correctAnswer]]
        for (let index = 0; index < 10; index++) {
            let first = Math.floor(Math.random() * 100);
            let second = Math.floor(Math.random() * 100);
            let question = "What is " + first + " + " + second + "?";
            let subQuestion = "What is " + first + " - " + second + "?";
            let addedAnswer = first + second;
            let subtractedAnswer = first - second;

            let addAnswers = new Set();
            let subAnswers = new Set();
            subAnswers.add(subtractedAnswer);
            addAnswers.add(addedAnswer);
            while (addAnswers.size < 4) {
                let num = Math.floor(Math.random() * 15);
                num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
                addAnswers.add(num + addedAnswer);
            }
            while (subAnswers.size < 4) {
                let num = Math.floor(Math.random() * 15);
                num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
                subAnswers.add(num + subtractedAnswer);
            }

            let addAnswerArray = Array.from(addAnswers);
            let subAnswerArray = Array.from(subAnswers);

            subAnswerArray = subAnswerArray.sort(function (a, b) { return a - b });
            addAnswerArray = addAnswerArray.sort(function (a, b) { return a - b });
            sub.push([subQuestion, [subAnswerArray], subtractedAnswer]);
            add.push([question, [addAnswerArray], addedAnswer]);
        }



        this.state = { addList: add, subList: sub};
        this.handleHome = this.handleHome.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
    }

    handleHome() {
        this.props.history.replace('/home');
    }

    handleAdd() {
        this.props.history.push({
            pathname: '/addition',
            state: { list: this.state.addList }
        });
    }

    handleSubtract() {
        this.props.history.push({
            pathname: '/subtraction',
            state: { list: this.state.subList }
        });
    }

    render() {
        return (<React.Fragment>
            <TaskBar />
            <div className='pl-5 pt-3'>
                <Button onClick={this.handleHome} variant="primary" style={{ fontSize: "20px" }} disabled> <HomeIcon className='mb-1' fontSize="medium" /> Home </Button>
            </div>
            <Row className='p-5'>
                <Col>
                    <Card style={{ borderWidth: "2px" }} className='p-3 text-center'>
                        <h1>Hello!</h1>
                        <p style={{ fontSize: "24px" }}>
                            Choose a topic to begin practicing!
                        </p>
                        <Row>
                            <Col className='text-center ml-5 mr-5'>
                                <Button onClick={this.handleAdd} className='mb-3' variant="primary" size="lg" block>
                                <AddIcon className='mb-1' fontSize="large" /> Addition 
                                </Button>
                            </Col>
                            <Col className='text-center ml-5 mr-5'>
                                <Button onClick={this.handleSubtract} className='mb-3' variant="primary" size="lg" block>
                                <RemoveIcon className='mb-1' fontSize="large" /> Subtraction
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>)
    }
}

export default HomeScreen;