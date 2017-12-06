import * as React from "react";
import { Container, Segment, Header, Icon, Grid, Divider, Image, Table, Message } from "semantic-ui-react";
import markdownIt from 'markdown-it'

export default ({ data }) => {
  const manual = data.contentfulManual
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            {manual.manualTitle}
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
      <div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <Image src='https://cmlp.imgix.net/Images/covers/cml/p/103003.jpg' width='450px' height='582px' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <Header as='h3' style={{ color: "#0085da" }} icon >Currency: {manual.manualCurrency}</Header>
            <div dangerouslySetInnerHTML={ { __html: manual.manualSendowl.so_string.childMarkdownRemark.html } }></div>
            <Header as='h3' style={{ color: "#0085da" }} icon >Car Specification</Header>
            <Table singleLine size="large" style={{ width: "100%" }}>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Make</Table.Cell>
                  <Table.Cell>{manual.manualCarSpecs.cs_make}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Series</Table.Cell>
                  <Table.Cell>{manual.manualCarSpecs.cs_serie}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Sub-series</Table.Cell>
                  <Table.Cell>{manual.manualCarSpecs.cs_sub_serie}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Platform</Table.Cell>
                  <Table.Cell>{manual.manualCarSpecs.cs_platform}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Bodytype</Table.Cell>
                  <Table.Cell>{manual.manualCarSpecs.cs_body_type}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Fueltype</Table.Cell>
                  <Table.Cell>{manual.manualCarSpecs.cs_fuel_type}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <Header as='h3' style={{ color: "#0085da" }} icon >Manual Specification</Header>
            <Table singleLine size="large" style={{ width: "100%" }}>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Manual Type:</Table.Cell>
                  <Table.Cell>{manual.manualManSpecs.ms_type}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Manual Pages:</Table.Cell>
                  <Table.Cell>{manual.manualManSpecs.ms_pages}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Manual File size:</Table.Cell>
                  <Table.Cell>{manual.manualManSpecs.ms_filesize}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>File format:</Table.Cell>
                  <Table.Cell>{manual.manualManSpecs.ms_format}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Manual File language:</Table.Cell>
                  <Table.Cell>{manual.manualManSpecs.ms_anguage}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <Header as='h3' style={{ color: "#0085da" }} icon >Manual Engine</Header>
            <div dangerouslySetInnerHTML={ { __html: manual.manualEngines.eng_list.childMarkdownRemark.html } }></div>
          </Grid.Column>
        </Grid>
        <Header as='h3' style={{ color: "#0085da" }} icon >Description</Header>
        <div dangerouslySetInnerHTML={ { __html: manual.manualDescription.p_descr_text.childMarkdownRemark.html } }></div>
        <div dangerouslySetInnerHTML={ { __html: manual.manualToc.toc_desc.childMarkdownRemark.html } }></div><br />
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <Header as='h3' style={{ color: "#0085da" }} icon >Manual Preview</Header>
            <div dangerouslySetInnerHTML={ { __html: manual.manualPreview.pr_list.childMarkdownRemark.html } }></div><br />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={7}>
            <Header as='h3' style={{ color: "#0085da" }} icon >Manual Review</Header>
            {manual.manualReview.rev_list.map((review) =>
              <Message info>
                <Message.Header>{review.reviewListName}</Message.Header>
                <div dangerouslySetInnerHTML={ { __html: review.rev_l_description.childMarkdownRemark.html } }></div>
              </Message>
              )}
          </Grid.Column>
        </Grid>
      </div>
      </Segment>
      <Segment textAlign="center" vertical>
        <div dangerouslySetInnerHTML={ { __html: manual.manualSendowl.so_string.childMarkdownRemark.html } }></div>
      </Segment>
    </Container>
    )
}

  export const pageQuery = graphql`
    query manualQuery($slug: String!) {
      contentfulManual(manualSku: { eq: $slug }) {
        manualTitle
        manualSku
        manualCurrency
        manualDownloadId
        manualStatus
        manualDescription {
          id
          p_descId
          p_descr_text {
            childMarkdownRemark {
              id
              html
            }
          }
        }
        manualEngines {
          id
          eng_id
          eng_list {
            childMarkdownRemark {
              html
            }
          }
        }
        manualToc {
          id
          toc_id
          toc_desc {
            childMarkdownRemark {
              html
            }
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
            childMarkdownRemark {
              html
            }
          }
        }
        manualPreview {
          id
          pr_id
          pr_list {
            childMarkdownRemark {
              html
            }
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
              childMarkdownRemark {
                html
              }
            }
          }
        }
        manualAlgolia {
          id
          partialAlgoliaMake
          partialAlgoliaSerie
          partialAlgoliaSubSerie
          partialAlgoliaPlatform
          partialAlgoliaYears
          partialAlgoliaFuelType
        }
        createdAt
        updatedAt
      }
    }`;
