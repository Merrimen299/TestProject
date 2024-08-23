import {FC, useState} from "react";
import {Col, Row} from "react-bootstrap";
import * as React from "react";
import BoardSection from "./BoardSection";
import TaskModal from "./TaskModal";
import {instanse} from "../axios/axios.api";
import {useLoaderData} from "react-router-dom"
import {ITask} from "../types/types";
import Task from "./Task";

export const taskAction = async ({request}) =>{
    switch (request.method){
        case "POST": {
            const formData = await request.formData()
            const task = {
                title: formData.get('title'),
                text: formData.get('text')
            }
            await instanse.post('task', task)
            return null
        }
        case "PATCH": {
            const formData = await request.formData()
            const task = {
                id: formData.get('id'),
                title: formData.get('title'),
                text: formData.get('text'),
                status: formData.get('status')
            }
            await instanse.patch(`task/${task.id}`, task)

            return null
        }
        case "DELETE":{
            const formData = await request.formData()
            const taskId = formData.get('id')
            await instanse.delete(`task/${taskId}`)
            return null
        }
    }
}

export const taskLoader = async () =>{
    const {data} = await instanse.get<ITask[]>('/task')
    return data
}

const Board: FC = () => {

    const [activeTask, setActiveTask] = useState(null)

    const tasks = useLoaderData() as ITask[]

    const sections = [
        {title : 'Not set', color: 'secondary'},
        {title : 'Easy', color: 'success'},
        {title : 'Medium', color: 'warning'},
        {title : 'Hard', color: 'danger'},
    ]
    return(
        <div>
            <Row  className="m-3 pb-2 border-bottom">
                <Col>
                    <TaskModal title={'Add New Task'} variant={'primary'} button={'New Task'} type="POST" id={1}/>
                </Col>
                <Col>
                    <h2>Dashboard {activeTask}</h2>
                </Col>
            </Row>
            <Row>
                {sections.map((item) => {return(
                    <BoardSection title={item.title} color={item.color} tasks={tasks.filter((task) => {return task.status == item.title})}/>
                )})}
            </Row>
        </div>
    )
}
export default Board