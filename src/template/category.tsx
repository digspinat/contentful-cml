import * as React from "react";
import { Container, Segment, Header, Icon, Grid, Divider, Image, Menu, Input, List } from "semantic-ui-react";
import Link from "gatsby-link";
import {InstantSearch, SearchBox, Hits, RefinementList} from 'react-instantsearch/dom';

function Searchcomp({hit, index}) {
  return (
    <Grid.Column mobile={16} tablet={8} computer={1}>
      <Link to={`manual/` + hit.manualSku} >
        <Image src={hit.manualImgixUrlProduct} width="310px" height="401px" />
        <Header as="h3" icon textAlign="center">{hit.manualTitle}</Header>
      </Link>
    </Grid.Column>
  );
}

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
          <div>
            <Grid>
              <InstantSearch appId="YZO8M6AZ6J" apiKey="74516bbcef74ec917e2acbcd0df2df0f" indexName="contentful-cml">
                <SearchBox />
                <RefinementList
                  attributeName="partialAlgoliaMake"
                  limitMax={20}
                  limitMin={10}
                  operator="or"
                  showMore={false}
                  defaultRefinement={[data.category.make]}
                  withSearchBox={false}
                />
                <br />
                <Hits hitComponent={Searchcomp} />
                <br />
              </InstantSearch>
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
