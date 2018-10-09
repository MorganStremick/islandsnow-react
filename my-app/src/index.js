import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, List, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="My Cart 0 " icon="shop">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    );
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?2590945415893160629" size="medium" centered/>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid container centered columns={2}>
              <Dropdown item text="Men" icon="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item>Tank Tops</Dropdown.Item>
                  <Dropdown.Item>Shirts</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="Women" icon="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item>Tank Tops</Dropdown.Item>
                  <Dropdown.Item>Shirts</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="Kids" icon="dropdown">

                <Dropdown.Menu>
                  <Dropdown.Item>Tank Tops</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="Brands" icon="dropdown"></Dropdown>
              <Menu.Item>Search</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?2590945415893160629"/>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div class="footer-background">
          <Grid container columns={3}>
            <Grid.Column>
              Navigation
              <hr/>
              <List>
                <List.Item>About us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Main Menu
              <hr/>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Connect
              <hr/>
              <List>
                <List.Item>Sign up for the latest updates</List.Item>
                <List.Item><Input placeholder="Enter email address" label={<Button color="black">Join</Button>} labelPosition="right"/></List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
