import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List,Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src={"//cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?1080290453015017671"} size ='medium' centered/>
        )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu" id="mid">
          <Grid container centered>
            <Dropdown item text="MEN">
            <Dropdown.Menu>
              <Dropdown.Item>Shirts</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>SEARCH</Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src={"//cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?1080290453015017671"} fluid-image/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (

          <Grid centered columns={"equal"} id="footer-background">
            <Grid.Column>
              <List>
                <List.Item>Navigation<hr/></List.Item>
                <List.Item>About Us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Location</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>Main Menu<hr/></List.Item>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>Connect<hr/></List.Item>
                <List.Item>Sign up for the latest updates</List.Item>
                <Input placeholder='Enter Email Address'/><button color="black">JOIN</button>

              </List>
            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
        </Grid>
    )
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