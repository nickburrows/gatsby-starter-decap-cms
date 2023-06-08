import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const BlogRollTemplate = props => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="grid gap-12 grid-cols-2">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className="flex-none rounded-t rounded-b-none overflow-hidden shadow-lg"
            key={post.id}>
            <article
              className={`relative block p-5 border border-gray-200 rounded-lg shadow md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}>
              <header className="flex">
                {post?.frontmatter?.featuredimage && (
                  <div className="post-image mr-6">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                )}

                <div className="post-title">
                  <Link
                    className="font-bold underline hover:no-underline text-orange-700 hover:text-orange-800 text-2xl"
                    to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle text-xl block">
                    {post.frontmatter.date}
                  </span>
                </div>
              </header>
              <p className="block">
                {post.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
