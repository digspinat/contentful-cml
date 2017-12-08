import * as React from "react";
import { Container, Segment, Header, Icon, Grid, Divider, Image, Menu } from "semantic-ui-react";
import Link from "gatsby-link";

export default ({ data }) => {
  const Category = data.categoryitem.edges;
  /*console.log(data);*/
  const allcategory = data.allcategory.group;
  return (
    <div className="ui container">
      <Container>
        <Segment vertical>
          <Menu size="large" secondary>
            {allcategory.map(( category, index ) =>
              <div key={index}>
                <Menu.Item as={Link} name={category.fieldValue} to={category.fieldValue}  />
              </div>,
            )}
          </Menu>
        </Segment>
        <Segment vertical>
          <Header as="h2">
            <Icon name="info circle" />
            <Header.Content>
              {data.category.make}
            </Header.Content>
          </Header>
        </Segment>
        <Segment vertical>
        <div>
          <Grid>
            {Category.map(({ node }) =>
              <Grid.Column key={node.manualSku} mobile={16} tablet={8} computer={4}>
                <Link to={`manual/` + node.manualSku} >
                  <Image src={node.manualImgixUrlCategory} width="310px" height="401px" />
                  <Header as="h3" icon textAlign="center">{node.manualTitle}</Header>
                </Link>
              </Grid.Column>,
            )}
          </Grid>
        </div>
        </Segment>
      </Container>
    </div>
    );
};

export const pageQuery = graphql`
  query categoryQuery($slug: String!) {
  categoryitem: allContentfulManual(filter: { make: {eq: $slug}}) {
    edges {
      node {
        id
        make
        manualTitle
        manualSku
        manualImgixUrlCategory
      }
    }
  }
  category: contentfulManual( make: {eq: $slug}) {
    make
  }

  allcategory: allContentfulManual {
    group(field: make) {
      fieldValue
      totalCount
    }
  }
}`;
