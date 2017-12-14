import * as React from "react";
import { Header, Container, Segment, Icon, Menu } from "semantic-ui-react";
import Link from "gatsby-link";

export default ({ data }) => {
  const post = data.manual.edges;
  const category = data.category.group;
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
        <div style={{ padding: "20px", minHeight: "50vh"}}>
          <Segment vertical>
            <Header as="h2">
              <Icon name="info circle" />
              <Header.Content>
                About
              </Header.Content>
            </Header>
          </Segment>
          <Segment vertical>
            <p>
              This starter was created by @fabien0102.
            </p>
            <p>
              For any question, I'm on <a href="https://discord.gg/2bz8EzW" target="blank">discord #reactiflux/gatsby</a>
            </p>
            <p>
              For any issues, any PR are welcoming
              <a href="https://github.com/fabien0102/gatsby-starter/issues" target="blank"> on this repository</a>
            </p>
          </Segment>
        </div>
      </Container>
    </div>
  );
};

export const pageQuery = graphql`
  query aboutmanualsQuery{
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
