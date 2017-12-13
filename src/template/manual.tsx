import * as React from "react";
import { Container, Segment, Header, Icon, Grid, Divider, Image, Table, Message, Button, Rating, Menu } from "semantic-ui-react";
import markdownIt from "markdown-it";
import { PhotoSwipeGallery } from "react-photoswipe";
import Link from "gatsby-link";

class ManualCompo extends React.Component {
  constructor(){
    super();
    this.state = {
      isOpen: false,
      options: {
        closeOnScroll: false,
        fullsc: false
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
  getThumbnailContent(item){
    return (
      <img src={item.src} width={120} height={90}/>
    );
  }
  render() {
    const manual = this.props.data;
    const allcategory = this.props.category;
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
            <Menu size="large" secondary>
              {allcategory.map(( category, index ) =>
                <div key={index}>
                  <Menu.Item as={Link} name={category.fieldValue} to={category.fieldValue}  />
                </div>
              )}
            </Menu>
          </Segment>
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
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <button
                    className="snipcart-add-item"
                    data-item-id={manual.manualSku}
                    data-item-name={manual.manualTitle}
                    data-item-price={manual.manualSku}
                    data-item-url="https://contentful-cml.netlify.com/manual/103005"
                    data-item-description={manual.manualDescription.p_descr_text.childMarkdownRemark.html}
                    data-item-image={manual.manualImgixUrlProduct}>
                    &nbsp;
                  </button><br /><br />
                  <div style={{ marginLeft: "-21px" }} className="my-partial-addtocart" dangerouslySetInnerHTML={ { __html: manual.manualAddToCart.atc_list.childMarkdownRemark.html } }></div>

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
                <Grid.Column mobile={16} tablet={8} computer={8}>
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

              <Header as="h3" style={{ color: "#0085da" }} icon >Manual Engine</Header>
              <div className="has-engine" dangerouslySetInnerHTML={ { __html: manual.manualEngines.eng_list.childMarkdownRemark.html } }></div>

              <Header as="h3" style={{ color: "#0085da" }} icon >
                Description
              </Header>
              <div className="my-partial-addtocart" dangerouslySetInnerHTML={ { __html: manual.manualDescription.p_descr_text.childMarkdownRemark.html } }>
              </div>
              <div className="has-engine" dangerouslySetInnerHTML={ { __html: manual.manualToc.toc_desc.childMarkdownRemark.html } }>
              </div><br />
              <Grid>
                <Grid.Column mobile={16} tablet={8} computer={7}>
                  
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={7}>
                  <Header as="h3" style={{ color: "#0085da" }} icon >Manual Review</Header> <br />
                  <Header as="h5" style={{ color: "#0085da", margin: "0" }} icon >Rating:</Header> <Rating maxRating={5} defaultRating={manual.manualReview.rev_rating_overall} disabled icon='star' size='small' />
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
  const manual = data.manual;
  const category = data.mycategory.group;
  return (
    <div>
      <ManualCompo name="milan" data={manual} category={category}/>
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
      manual: contentfulManual(manualUrl: { eq: $slug }) {
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
        manualAddToCart {
          atc_list {
            childMarkdownRemark {
              html
            }
          }
        }
        createdAt
        updatedAt
      }
      mycategory: allContentfulManual {
        group(field: make) {
          fieldValue
          totalCount
        }
      }
    }`;
