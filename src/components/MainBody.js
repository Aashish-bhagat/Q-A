import React, { useState, useEffect } from 'react'
import { Card , Container, Row, Button} from 'react-bootstrap'

function MainBody() {

    const questions = [{question : 'Who is the Father of India?',
                        options: ['Mahatama Gandhi', 'Rabindranath Tagore', 'Jwahar Lal Nehru', 'B.R. Ambedkar']},
                        {question : 'When is Childrens\' Day celebrated ?',
                        options: ['1st April', '14th February', '14th November', '13th January' ]},
                        {question : 'When is Valentines Day celebrated?',
                        options: ['1st April', '14th February', '14th November', '13th January']},
                        {question : 'Who is the current President of India?',
                        options: ['Narendra Modi', 'Ramnath Kovind', 'Amit Shah', 'Rajnath Singh']}
                    ]
    
    const answers = [
        'Mahatama Gandhi', '14th November', '14th February', 'Ramnath Kovind'
    ]

    const [chosen,setChosen] = useState(['','','',''])
    const [quesNum, setQuesNum] = useState(0)
    const [testCompleted, setTestCompleted] = useState(false)
    const [score, setScore] = useState(0)
    const [attempts, setAttempts] = useState(0)
    const [correct, setCorrect] = useState(0)

    const handleSubmit = () => {
        let a = 0
        let correc = 0
        let attemp = 0
        for(var i = 0; i < 4; i++){
            if(chosen[i] == answers[i]){
                a = a+25
                correc = correc + 1
            }
            if(chosen[i] != ''){
                attemp = attemp + 1
            }
        }
        setScore(a)
        setCorrect(correc)
        setAttempts(attemp)
        setTestCompleted(true)
    }
    
    if(testCompleted){
        return (
            <Card>
                <Card.Body>
                    <div>
                        <span className='fa fa-check-circle' style={{color: 'green', fontSize: 50}}></span>
                        <h3>Your Test Has been Successfully Submitted</h3>
                        <p>No. of Attempts : {attempts}</p>
                        <p>No. of Correct Answers: {correct}</p>
                        <p>
                        Your Score : {score} percent
                        </p>
                    </div>
                </Card.Body>
            </Card>
        )
    }
    else{
        return (
            <Container style={{margin: '50px auto' , height: '100%'}}>
                <div className='row'>
                    <div className='col-2 offset-1'>
                        <Card>
                            <Card.Header>Answers</Card.Header>
                            <Card.Body>
                                {
                                    chosen.map((val, index)=> {
                                        if(val != ''){
                                            return (<p>{index + 1}. {val}</p>)
                                        }
                                    })
                                }
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-7 offset-1'>
                        <Card>
                        <Card.Header style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            {
                                quesNum > 0 ? <span className='fa fa-arrow-circle-left' onClick={() => setQuesNum(quesNum - 1)}></span> : <div></div>
                            }
                                <h6 style={{display: 'inline'}}>Question</h6>
                            {
                                quesNum < 3 ? <span className='fa fa-arrow-circle-right' onClick={() => setQuesNum(quesNum + 1)}></span> : <div></div>
                            }
                            </Card.Header>
                        <Card.Body>
                            <h6>{questions[quesNum].question}</h6>
                            {
                                questions[quesNum].options.map(opt => {
    
                                    let ans = chosen
    
                                    return(
                                        <div key={opt}>
                                        <input type='radio' id={opt} value={opt} 
                                        checked={chosen[quesNum] == opt} onChange={(e)=>{ 
                                            ans[quesNum] = e.target.value
                                            setChosen(ans)
                                            console.log(chosen)
                                        }} />
                                        <label for={opt}>{opt}</label>
                                        </div>
                                    )
                                })
                            }
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                <Row style={{justifyContent: 'center', margin: 10}}>
                        <Button variant='success' onClick = {handleSubmit}>SUBMIT</Button>
                    </Row>
            </Container>
        )
    }
    
}

export default MainBody
