import React from 'react'
import 
  { 
    Button, 
    Card, 
    Col, 
    Row 
  } from 'react-bootstrap';
import '../App.css';

export const ProductList = ({ addToList, data }) => {
  return (
    <div className='container'>
        <Card className='card_employes'>
            <Row className='container_product'>
                <Col>
                    <h3 className='title_employer'>{ data.name }</h3>
                    <p className='sub_employer'>${ data.price }</p>
                    <Button 
                      className='button_employes' 
                      onClick={ () => addToList(data.id) }
                      size="sm" 
                      variant="info" 
                      >
                        Add
                      </Button>
                </Col>
            </Row>
        </Card>
    </div>
  )
}
