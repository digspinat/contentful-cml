import * as React from "react";
import { Container, Segment, Header, Icon, Grid, Divider, Image, Table, Message, Button } from "semantic-ui-react";
import markdownIt from "markdown-it";
import { PhotoSwipe } from "react-photoswipe";

class ManualCompo extends React.Component {
  constructor(){
    super();
    this.state = {
      isOpen: false,
      options: {
        closeOnScroll: false,
      },
    };
    this.handleClose = this.handleClose.bind(this);
    this.openPhotoSwipe = this.openPhotoSwipe.bind(this);
    this.getThumbnailContent = this.getThumbnailContent.bind(this);
  }
  handleClose(e){
    this.setState({
      isOpen: false,
      });
  }
  openPhotoSwipe(){
    this.setState({
      isOpen: true,
      });
  }
  getThumbnailContent(){
    return (
      <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg" width={120} height={90}/>
    );
  }
  render() {
    const manual = this.props.data;
    const photoitems = [
        {
          src: "http://lorempixel.com/1200/900/sports/1",
          w: 1200,
          h: 900,
          title: "Image 1",
        },
        {
          src: "http://lorempixel.com/1200/900/sports/2",
          w: 1200,
          h: 900,
          title: "Image 2",
        },
    ];
    return (
      <div className="ui container">
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
                  <Image src={manual.manualImgixUrlProduct} width="450px" height="582px" />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={7}>
                  <Header as="h3" style={{ color: "#0085da" }} icon >Currency: {manual.manualCurrency}</Header>
                  <button
                    className="snipcart-add-item"
                    data-item-id={manual.manualSku}
                    data-item-name={manual.manualTitle}
                    data-item-price={manual.manualSku}
                    data-item-url="https://contentful-cml.netlify.com/manual/103005"
                    data-item-description={manual.manualDescription.p_descr_text.childMarkdownRemark.html}
                    data-item-image={manual.manualImgixUrlProduct}>
                    &nbsp;
                  </button>
                  <Header as="h3" style={{ color: "#0085da" }} icon >Car Specification</Header>
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
                  <Header as="h3" style={{ color: "#0085da" }} icon >Manual Specification</Header>
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
                  <Header as="h3" style={{ color: "#0085da" }} icon >Manual Engine</Header>
                  <div dangerouslySetInnerHTML={ { __html: manual.manualEngines.eng_list.childMarkdownRemark.html } }></div>
                </Grid.Column>
              </Grid>
              <Header as="h3" style={{ color: "#0085da" }} icon >
                Description
              </Header>
              <div dangerouslySetInnerHTML={ { __html: manual.manualDescription.p_descr_text.childMarkdownRemark.html } }>
              </div>
              <div dangerouslySetInnerHTML={ { __html: manual.manualToc.toc_desc.childMarkdownRemark.html } }>
              </div><br />
              <Grid>
                <Grid.Column mobile={16} tablet={8} computer={7}>
                  <Header as="h3" style={{ color: "#0085da" }} icon >
                    Manual Preview
                  </Header>
                  <PhotoSwipe
                  id="my-photoswipe"
                  isOpen={this.state.isOpen}
                  items={manual.manualPreview.preview.data}
                  options={this.state.options}
                  thumbnailContent={this.getThumbnailContent}
                  onClose={this.handleClose}
                  className="pswp-gallery"
                  /><br />
                  <Button primary onClick={this.openPhotoSwipe} >See Preview</Button>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={7}>
                  <Header as="h3" style={{ color: "#0085da" }} icon >Manual Review</Header>
                  {manual.manualReview.rev_list.map((review) =>
                    <Message info key={review.id}>
                      <Message.Header>{review.reviewListName}</Message.Header>
                      <div dangerouslySetInnerHTML={ { __html: review.rev_l_description.childMarkdownRemark.html } }></div>
                    </Message>,
                    )}
                </Grid.Column>
              </Grid>
            </div>
            </Segment>
            <Segment textAlign="center" vertical>
            <button
              className="snipcart-add-item"
              data-item-id={manual.manualSku}
              data-item-name={manual.manualTitle}
              data-item-price={manual.manualSku}
              data-item-url="https://contentful-cml.netlify.com/manual/103005"
              data-item-description={manual.manualDescription.p_descr_text.childMarkdownRemark.html}
              data-item-image={manual.manualImgixUrlProduct}>
              &nbsp;
            </button>
            </Segment>
        </Container>
      </div>
    );
  }
}

export default ({ data }) => {
  const manual = data.contentfulManual;
  return (
    <div>
      <ManualCompo name="milan" data={manual} />
    </div>
  );
};

/*export default ({ data }) => {
  const manual = data.contentfulManual;
  const photoitems = [
      {
        src: 'http://lorempixel.com/1200/900/sports/1',
        w: 1200,
        h: 900,
        title: 'Image 1'
      },
      {
        src: 'http://lorempixel.com/1200/900/sports/2',
        w: 1200,
        h: 900,
        title: 'Image 2'
      },
      {
        src: 'http://lorempixel.com/1200/900/sports/3',
        w: 1200,
        h: 900,
        title: 'Image 3'
      }
    ]
  return (
    <div className="ui container">
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
              <Image src={manual.manualImgixUrlProduct} width="450px" height="582px" />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={7}>
              <Header as="h3" style={{ color: "#0085da" }} icon >Currency: {manual.manualCurrency}</Header>
              <div dangerouslySetInnerHTML={ { __html: manual.manualSendowl.so_string.childMarkdownRemark.html } }>
              </div>
              <Header as="h3" style={{ color: "#0085da" }} icon >Car Specification</Header>
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
              <Header as="h3" style={{ color: "#0085da" }} icon >Manual Specification</Header>
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
              <Header as="h3" style={{ color: "#0085da" }} icon >Manual Engine</Header>
              <div dangerouslySetInnerHTML={ { __html: manual.manualEngines.eng_list.childMarkdownRemark.html } }></div>
            </Grid.Column>
          </Grid>
          <Header as="h3" style={{ color: "#0085da" }} icon >
            Description
          </Header>
          <div dangerouslySetInnerHTML={ { __html: manual.manualDescription.p_descr_text.childMarkdownRemark.html } }>
          </div>
          <div dangerouslySetInnerHTML={ { __html: manual.manualToc.toc_desc.childMarkdownRemark.html } }>
          </div><br />
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={7}>
              <Header as="h3" style={{ color: "#0085da" }} icon >
                Manual Preview
              </Header>
              <div dangerouslySetInnerHTML={ { __html: manual.manualPreview.pr_list.childMarkdownRemark.html } }>
              </div><br />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={7}>
              <Header as="h3" style={{ color: "#0085da" }} icon >Manual Review</Header>
              {manual.manualReview.rev_list.map((review) =>
                <Message info key={review.id}>
                  <Message.Header>{review.reviewListName}</Message.Header>
                  <div dangerouslySetInnerHTML={ { __html: review.rev_l_description.childMarkdownRemark.html } }></div>
                </Message>,
                )}
            </Grid.Column>
          </Grid>
        </div>
        </Segment>
        <Segment textAlign="center" vertical>
          <div dangerouslySetInnerHTML={ { __html: manual.manualSendowl.so_string.childMarkdownRemark.html } }></div>
        </Segment>
      </Container>
    </div>
    );
};*/

  export const pageQuery = graphql`
    query manualQuery($slug: String!) {
      contentfulManual(manualSku: { eq: $slug }) {
        manualTitle
        manualSku
        manualCurrency
        manualDownloadId
        manualStatus
        manualImgixUrlProduct
    		manualImgixUrlCategory
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
        manualPreview {
          id
          preview {
            id
            data {
              h
              w
              src
              title
            }
          }
        }
        createdAt
        updatedAt
      }
    }`;
