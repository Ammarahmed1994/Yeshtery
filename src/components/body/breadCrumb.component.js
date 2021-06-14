import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class BreadCrumb extends Component {
  render() {
    return (
      <div >
        <Breadcrumb className="bread">
          <Breadcrumb.Item active >Men</Breadcrumb.Item>
          <Breadcrumb.Item active > CLothing </Breadcrumb.Item>
          <Breadcrumb.Item active >Tops</Breadcrumb.Item>
          <Breadcrumb.Item active >Adidas</Breadcrumb.Item>
          <Breadcrumb.Item className="underlined">Adidas Black T-Shirt</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadCrumb;