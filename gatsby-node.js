const path = require('path');
const slash = require('slash');
const {kebabCase, uniq, get, compact, times} = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`)
// Don't forget to update hard code values into:
// - `templates/blog-page.tsx:23`
// - `pages/blog.tsx:26`
// - `pages/blog.tsx:121`
const POSTS_PER_PAGE = 10;
const cleanArray = arr => compact(uniq(arr));

// Add Gatsby's extract-graphql Babel plugin (we'll chain it with babel-loader)
const extractQueryPlugin = path.resolve(
  __dirname,
  `node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js`
);

// Temporary workaround to ensure Gatsby builds minified, production build of React.
// https://github.com/fabien0102/gatsby-starter/issues/39#issuecomment-343647558
exports.modifyWebpackConfig = ({config, stage}) => {
  if (stage === 'build-javascript') {
    config.loader('typescript', {
      test: /\.tsx?$/,
      loaders: [
        `babel-loader?${JSON.stringify({presets: ['babel-preset-env'], plugins: [extractQueryPlugin]})}`,
        'ts-loader'
      ]
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
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
          }
        }
      }
    `
).then(result => {
      // console.log(JSON.stringify(result, null, 4))
      const manualTemplate = path.resolve(`./src/template/manual.tsx`)
      result.data.allContentfulManual.edges.map(({ node }) => {
        // console.log(node.manualSku);
        createPage({
          path: `/manual/${node.manualSku}`,
          component: slash(manualTemplate),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.manualSku,
          },
        })
      })
      resolve()
    })
  })
}

// Create slugs for files.
// Slug will used for blog page path.
// exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
//   const {createNodeField} = boundActionCreators;
//   let slug;
//   switch (node.internal.type) {
//     case `MarkdownRemark`:
//       const fileNode = getNode(node.parent);
//       const [basePath, name] = fileNode.relativePath.split('/');
//       slug = `/${basePath}/${name}/`;
//       break;
//   }
//   if (slug) {
//     createNodeField({node, name: `slug`, value: slug});
//   }
// };
//
// // Implement the Gatsby API `createPages`.
// // This is called after the Gatsby bootstrap is finished
// // so you have access to any information necessary to
// // programatically create pages.
// exports.createPages = ({graphql, boundActionCreators}) => {
//   const {createPage} = boundActionCreators;
//
//   return new Promise((resolve, reject) => {
//     const templates = ['blogPost', 'tagsPage', 'blogPage']
//       .reduce((mem, templateName) => {
//         return Object.assign({}, mem,
//         {[templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`)});
//       }, {});
//
//     graphql(
//       `
//       {
//         posts: allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 tags
//               }
//             }
//           }
//         }
//       }
//     `
//     ).then(result => {
//       if (result.errors) {
//         return reject(result.errors);
//       }
//       const posts = result.data.posts.edges.map(p => p.node);
//
//       // Create blog pages
//       posts
//         .filter(post => post.fields.slug.startsWith('/blog/'))
//         .forEach(post => {
//           createPage({
//             path: post.fields.slug,
//             component: slash(templates.blogPost),
//             context: {
//               slug: post.fields.slug
//             }
//           });
//         });
//
//       // Create tags pages
//       posts
//         .reduce((mem, post) =>
//           cleanArray(mem.concat(get(post, 'frontmatter.tags')))
//         , [])
//         .forEach(tag => {
//           createPage({
//             path: `/blog/tags/${kebabCase(tag)}/`,
//             component: slash(templates.tagsPage),
//             context: {
//               tag
//             }
//           });
//         });
//
//       // Create blog pagination
//       const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
//       times(pageCount, index => {
//         createPage({
//           path: `/blog/page/${index + 1}/`,
//           component: slash(templates.blogPage),
//           context: {
//             skip: index * POSTS_PER_PAGE
//           }
//         });
//       });
//
//       resolve();
//     });
//   });
// };
