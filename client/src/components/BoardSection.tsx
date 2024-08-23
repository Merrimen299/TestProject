import {FC, useState} from "react";
import {Badge, Col} from "react-bootstrap";
import Task from "./Task";
import {ITask} from "../types/types";
import * as React from "react";

interface IBoardSection {
    title: string
    color: string
    tasks: ITask[]
}

const BoardSection: FC<IBoardSection> = ({title, color, tasks, setActiveTask}) => {
    return(
        <Col sm="3" lg="3" bg={color}>
            <h4>
                <Badge bg={color} className="mt-2 mb-2">{title}</Badge>
            </h4>
            {tasks.map((item, index) => {
                return(
                    <div key={index}>
                        <Task  id={item.id} title={item.title} status={item.status} text={item.text} />
                    </div>
                )
            })}
        </Col>
    )
}
export default BoardSection