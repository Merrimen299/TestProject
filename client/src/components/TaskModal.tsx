import {FC, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as React from "react";
import {Form} from "react-router-dom";

interface ITaskModal{
    title: string
    variant: string
    button: string
    type: 'POST' | 'PATCH'
    id?: number
}

const TaskModal: FC<ITaskModal> = ({title, variant, button, type, id}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant={variant} onClick={handleShow}>
                {button}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        method={type}
                        action="/task">
                        <div className="mb-3">
                            <label className={"form-label"}>Title</label>
                            <input className={"form-control"}
                                name="title"
                                type="text"
                                placeholder="Task title"
                                autoFocus
                            />
                            <input style={{display: "none"}} name="id" value={id}/>

                        </div>
                        <div className="mb-3">
                            <label className={"form-label"}>Text</label>
                            <textarea className={"form-control"} rows={3} placeholder="Some text..." name="text"/>
                        </div>
                        {type === 'PATCH' ? (<div className="mb-3">
                            <span>Status</span>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="status" value="Easy"/>
                                <label className="form-check-label">
                                    Easy
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="status" value="Medium"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Medium
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="status" value="Hard"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Hard
                                </label>
                            </div>
                        </div>) : ('')}
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="success" type="submit" className="ms-3">
                            {type === 'POST' ? "Add" : "Save changes"}
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default TaskModal;