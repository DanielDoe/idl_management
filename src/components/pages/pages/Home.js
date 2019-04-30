import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, Col, Row } from 'antd'

export const Home = () => {
  return (
    <div className='card-items'>
      <Card
        title='Welcome to Blablablablah!!!'
        extra={<a href='#'>More</a>}
        style={{ width: 400 }}
      >
        <div>
          <Row>
            <Col span={12}>
              <NavLink to='/Login'>
                <Button type='primary'>Proceed to Admin</Button>
              </NavLink>
            </Col>
            <Col span={12}>
              <NavLink to='/Register'>
                <Button type='primary'>Proceed to Register</Button>
              </NavLink>
            </Col>
          </Row>
          <Row style={{ marginTop: '1rem'}}>
            <Col span={6}/>
            <Col span={6}>
            <NavLink to='/Harry'>
            <Button type='primary'>Visit Fvck Boi Harry</Button>
          </NavLink>
            </Col>
            <Col span={6} />
          </Row>
        </div>
      </Card>
    </div>
  )
}
