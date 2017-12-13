import Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar, Button, Grid, Image, Header } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: false },
  { name: "About", path: "/about/", exact: true, icon: "info circle" }
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";

    return (
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />
        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {isHome ? null : <HeaderMenu
            Link={Link} pathname={pathname} items={menuItems}
          />}

          {/* Render children pages */}
          <div style={{ paddingBottom: 160 }}>
            {this.props.children()}
          </div>
          <Segment inverted style={{ position: "absolute", bottom: 0, width: "100%", marginTop: "10px" }}>
            <Container>
              <Segment vertical inverted>
                <Grid >
                  <Grid.Column mobile={16} tablet={8} computer={5}>
                      <Header as="h4" style={{ margin: "0", color: "white" }} icon textAlign="center">Footer Text-1</Header>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={5}>
                      <Header as="h4" icon style={{ margin: "0", color: "white" }} textAlign="center">Footer Text-1</Header>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={5}>
                      <Header as="h4" icon style={{ margin: "0", color: "white" }}  textAlign="center">Footer Text-1</Header>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
