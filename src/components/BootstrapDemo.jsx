import { useState } from 'react'
import {
  Button,
  Card,
  Form,
  Alert,
  Badge,
  Spinner,
  ProgressBar,
  Accordion,
  Modal,
  Toast,
  ToastContainer,
  Dropdown,
  ButtonGroup,
  ListGroup,
  Row,
  Col,
  Container
} from 'react-bootstrap'

function BootstrapDemo() {
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [progress, setProgress] = useState(60)

  return (
    <Container>
      <h4 className="mb-4">Bootstrap Component Examples</h4>

      <Row className="g-3">
        {/* Buttons */}
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Buttons</Card.Title>
              <div className="d-flex flex-wrap gap-2 mb-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <Button variant="outline-primary">Outline</Button>
                <Button variant="warning" size="sm">Small</Button>
                <Button variant="info" size="lg">Large</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Forms */}
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Form Controls</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Select</Form.Label>
                  <Form.Select>
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </Form.Select>
                </Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Alerts & Badges */}
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Alerts & Badges</Card.Title>
              <Alert variant="success">Success alert with badge <Badge bg="success">New</Badge></Alert>
              <Alert variant="warning">Warning alert <Badge bg="warning">!</Badge></Alert>
              <div className="d-flex gap-2">
                <h5>Badges: <Badge bg="primary">Primary</Badge></h5>
                <h5><Badge bg="secondary">Secondary</Badge></h5>
                <h5><Badge bg="danger" pill>99+</Badge></h5>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Card Examples */}
        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card bg="dark" text="white">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Dark Card</Card.Title>
              <Card.Text>
                This is a dark variant card with custom styling.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card border="success">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Success Border</Card.Title>
              <Card.Text>Card with colored border</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </Col>

        {/* Progress & Spinners */}
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Progress Bars</Card.Title>
              <ProgressBar now={progress} label={`${progress}%`} className="mb-3" />
              <ProgressBar striped variant="success" now={40} className="mb-3" />
              <ProgressBar animated variant="warning" now={75} />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Spinners</Card.Title>
              <div className="d-flex gap-3">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" size="sm" />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Interactive Components */}
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Modals & Toasts</Card.Title>
              <ButtonGroup className="mb-3">
                <Button variant="primary" onClick={() => setShowModal(true)}>
                  Show Modal
                </Button>
                <Button variant="success" onClick={() => setShowToast(true)}>
                  Show Toast
                </Button>
              </ButtonGroup>

              <Dropdown>
                <Dropdown.Toggle variant="info">
                  Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card>
        </Col>

        {/* List Groups */}
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>List Groups</Card.Title>
              <ListGroup>
                <ListGroup.Item active>Active item</ListGroup.Item>
                <ListGroup.Item>Regular item</ListGroup.Item>
                <ListGroup.Item variant="success">Success item</ListGroup.Item>
                <ListGroup.Item variant="danger">Danger item</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Accordion */}
        <Col xs={12}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Bootstrap Accordion #1</Accordion.Header>
              <Accordion.Body>
                This is the first item's accordion body with Bootstrap styling.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Bootstrap Accordion #2</Accordion.Header>
              <Accordion.Body>
                This is the second item's accordion body. You can customize these
                with various Bootstrap utilities.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a Bootstrap modal component!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast */}
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Bootstrap Toast</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>This is a toast notification!</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  )
}

export default BootstrapDemo