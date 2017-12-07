import * as React from "react";
import { Container, Segment, Header, Icon, Grid, Divider, Image } from "semantic-ui-react";
import Link from "gatsby-link"

export default ({ data }) => {
  const post = data.allContentfulManual.edges
  return (
    <div className='ui container'>
      <Container>
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
              <Grid.Column key={node.manualSku} mobile={16} tablet={8} computer={4}>
                <Link to={`manual/`+node.manualSku} >
                  <Image src='https://cmlp.imgix.net/Images/covers/cml/p/103003.jpg' width='310px' height='401px' />
                  <Header as='h3' icon textAlign='center'>{node.manualTitle}</Header>
                </Link>
              </Grid.Column>
            )}
          </Grid>
        </div>
        </Segment>
      </Container>
    </div>
    )
}
  export const pageQuery = graphql`
    query manualsQuery{
      allContentfulManual {
      edges {
        node {
          id
          manualTitle
          manualSku
          manualCurrency
          manualDownloadId
          manualStatus
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
          manualPreview {
            id
            pr_id
            pr_list {
              id
              pr_list
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
    }`;
