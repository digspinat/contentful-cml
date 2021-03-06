import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Image
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps, data) => {
  /*console.log(props.data)*/
  const post = props.data.manual.edges;
  const category = props.data.category.group;
  return (
    <div className="ui container" style={{ marginLeft: "0", marginRight: "0" }}>
      <Container style={{ marginLeft: "0", marginRight: "0" }}>
        <Segment vertical style={{ backgroundColor: "#e1e9ee" }}>
          <Menu size="large" secondary>
            {category.map(( category, index ) =>
              <div key={index}>
                <Menu.Item as={Link} name={category.fieldValue} to={category.fieldValue}  />
              </div>
            )}
          </Menu>
        </Segment>
        <div style={{ padding: "20px",minHeight: "50vh" }}>
          <Segment vertical>
            <Header as="h2">
              <Icon name="info circle" />
              <Header.Content>
                Manual
              </Header.Content>
            </Header>
          </Segment>
          <Segment vertical>
          <div>
            <Grid>
            {post.map(({ node }) =>
              <Grid.Column key={node.manualUrl} mobile={16} tablet={8} computer={5}>
                <Link to={`manual/` + node.manualUrl} >
                  <Image src={node.manualImgixUrlProduct} width="310px" height="401px" />
                  <Header as="h3" icon textAlign="center">{node.manualTitle}</Header>
                </Link>
              </Grid.Column>
            )}
            </Grid>
          </div>
          </Segment>
        </div>
      </Container>
    </div>
  );
}

  export const pageQuery = graphql`
    query homemanualsQuery{
      manual:allContentfulManual {
      edges {
        node {
          id
          manualTitle
          manualSku
          manualUrl
          manualCurrency
          manualDownloadId
          manualStatus
          manualImgixUrlProduct
          manualImgixUrlCategory
          manualDescription {
            id
            p_descId
            p_descr_text {
              id
              p_descr_text
            }
          }
          manualEngines {
            id
            eng_id
            eng_list {
              id
              eng_list
            }
          }
          manualToc {
            id
            toc_id
            toc_desc {
              id
              toc_desc
            }
          }
          manualCarSpecs {
            id
            cs_id
            cs_make
            cs_serie
            cs_sub_serie
            cs_platform
            cs_body_type
            cs_fuel_type
          }
          manualManSpecs {
            id
            ms_id
            ms_type
            ms_pages
            ms_filesize
            ms_format
            ms_anguage
          }
          manualSendowl {
            id
            so_id
            so_string {
              id
              so_string
            }
          }
          manualReview {
            id
            rev_id
            rev_rating_overall
            rev_list {
              id
              reviewListId
              reviewListName
              rev_l_description {
                id
                rev_l_description
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }

    category: allContentfulManual {
      group(field: make) {
        fieldValue
        totalCount
      }
    }
    }`;
