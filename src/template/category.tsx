import * as React from "react";
import { Container, Segment, Header, Icon, Grid, Divider, Image, Menu, Input, List } from "semantic-ui-react";
import Link from "gatsby-link";
import {InstantSearch, SearchBox, Hits, RefinementList, Pagination, Panel} from 'react-instantsearch/dom';

function Searchcomp({hit, index}) {
  return (
    <article className="hit">
      <div className="product-picture-wrapper">
        <div className="product-picture">
          <Link to={`/manual/`+hit.manualUrl}><Image src={hit.manualImgixUrlProduct}  width="310px" height="401px"/></Link>
        </div>
      </div>
      <div className="product-desc-wrapper">
        <div className="product-name">
          <Link to={`/manual/`+hit.manualUrl}><Header as="h3">{hit.manualTitle}</Header></Link>
        </div>
      </div>
    </article>
  );
}

export default ({ data }) => {
  const Category = data.categoryitem.edges;
  /*console.log(Category);*/
  const allcategory = data.allcategory.group;
  return (
    <div className="ui container">
      <Container>
        <Segment vertical>
          <Menu size="large" secondary>
            {allcategory.map(( category, index ) =>
              <div key={index}>
                <Menu.Item as={Link} name={category.fieldValue} to={category.fieldValue}  />
              </div>
            )}
          </Menu>
        </Segment>
        <Segment vertical>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={8} computer={12}>
                <Header as="h2">
                  <Icon name="info circle" />
                  <Header.Content>
                    {data.category.make}
                  </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment vertical>
          <Grid>
            {Category.map(({ node }) =>
              <Grid.Column key={node.manualUrl} mobile={16} tablet={8} computer={5}>
                <Link to={`manual/` + node.manualUrl} >
                  <Image src={node.manualImgixUrlCategory} width="310px" height="401px" />
                  <Header as="h3" icon textAlign="center">{node.manualTitle}</Header>
                </Link>
              </Grid.Column>,
            )}
          </Grid>
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
        manualUrl
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
