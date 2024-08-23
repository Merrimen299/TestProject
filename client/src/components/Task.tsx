import {FC, useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import {Form} from "react-router-dom";
import TaskModal from "./TaskModal";

interface ITask{
    id: number
    title: string
    text: string | null
    status: string
}

const Task: FC<ITask> = ({id,title, text, status, setActiveTask}) => {

    const [taskId, setTaskId] = useState(id | 0)

    return(
        <Card style={{ width: '18rem' }} className="mb-1">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Status: {status}</Card.Subtitle>
                <Card.Text>
                    {text}
                </Card.Text>
                <Row>
                    <Col>
                        <TaskModal title={'Edit Task'} variant={'link'} button={'Edit'} type={'PATCH'} id={taskId}/>
                    </Col>
                    <Col>
                        <Form method="delete" action="../task">
                            <input style={{display: "none"}} value={id} name="id"/>
                            <Button type="submit" variant="danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash3" viewBox="0 0 16 16">
                                    <path
                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default Task