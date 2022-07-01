import { 
  ListGroup, 
  Container, 
  Row, 
  Col 
} from 'react-bootstrap';
import { 
  AiFillSetting 
} from "react-icons/ai";
import { 
  BiUser 
} from "react-icons/bi";

import RenderData from "../components/RenderData"

function Profile() {

  return (
    <Container>
      <Row>
        <Col xs lg="2">
          <ListGroup variant="flush">
            <ListGroup.Item action href="#settings">
              <AiFillSetting/> Settings
            </ListGroup.Item>
            <ListGroup.Item action href="#personal_info">
              <BiUser/> Personal Info
            </ListGroup.Item>
            <ListGroup.Item action href="#security_data">
              <BiUser/> Security data
            </ListGroup.Item>
            <ListGroup.Item action onClick={()=>alert("clicked")}>
              API
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col>
          <RenderData />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile