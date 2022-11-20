import React, { useRef } from 'react'
import { Button, Col, Form, Stack, Row } from 'react-bootstrap'
import CreatableReactSelect from "react-select/creatable"

const NoteForm = () => {
    const titleRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLTextAreaElement>(null);
    return (
        <Form>
            <Stack gap={4} >
                <Row>
                    <Col>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId='tags'>
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect isMulti />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId='body'>
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" ref={bodyRef} required rows={12} />
                </Form.Group>
                <Stack direction="horizontal" gap={2} className="justify-content-end">
                    <Button type="submit" variant="primary">Save Note</Button>
                    <Button type="button" variant="outline-danger">Cancel</Button>
                </Stack>
            </Stack>
        </Form>
    )
}

export default NoteForm