import React from 'react'
import 
  { 
    Button, 
    Card, 
    Col, 
    Row 
  } from 'react-bootstrap';
import '../App.css';

export const CardEmployee = ({data, deleteFromList}) => {
  return (
    <div className='container'>
        <Card className='card_employes'>
            <Row className='container_product'>
                <Col>
                    <h3 className='title_employer'>{ data.name }</h3>
                    <p className='sub_employer'>Price: $ { data.price }</p>
                    <Button 
                      className='button_employes' 
                      onClick={ () => deleteFromList(data.id) } 
                      size="sm"
                      variant="info" 
                    >
                      Delete
                    </Button>
                </Col>
            </Row>
    </Card>
    </div>
  )
}
