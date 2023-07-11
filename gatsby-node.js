const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop') || stage.startsWith('build')) {
    actions.setWebpackConfig({
      plugins: [new NodePolyfillPlugin()]
    });
  }
};

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for practice areas
  const practiceAreasResult = await graphql(`
    query PracticeAreasQuery {
      allContentfulPracticeArea(sort: {title: ASC}) {
        nodes {
          title
          text {
            raw
          }
          image {
            url
            title
          }
        }
      }
    }
  `);

  if (practiceAreasResult.errors) {
    throw practiceAreasResult.errors;
  }

  const practiceAreas = practiceAreasResult.data.allContentfulPracticeArea.nodes;

  practiceAreas.forEach((practiceArea) => {
    const cleanedTitle = practiceArea.title.replace(/\?/g, "");
    const slug = cleanedTitle.replace(/\s+/g, "-").toLowerCase();
    createPage({
      path: `/practice-areas/${slug}`,
      component: path.resolve("./src/templates/practiceArea.js"),
      context: {
        title: practiceArea.title,
        text: practiceArea.text.raw,
        imageUrl: practiceArea.image.url,
        imageTitle: practiceArea.image.title,
        slug: slug,
        practiceAreas: practiceAreasResult.data.allContentfulPracticeArea.nodes,
      },
    });
  });

  // Query for blogs
  const blogsResult = await graphql(`
    query BlogsQuery {
      allContentfulBlog {
        nodes {
          title
          image {
            file {
              url
            }
          }
          content {
            raw
          }
          publishDate
        }
      }
    }
  `);

  if (blogsResult.errors) {
    throw blogsResult.errors;
  }

  const blogs = blogsResult.data.allContentfulBlog.nodes;

  blogs.forEach((blog) => {
    const cleanedTitle = blog.title.replace(/\?/g, "");
    const slug = cleanedTitle.replace(/\s+/g, "-").toLowerCase();
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve("./src/templates/blogTemplate.js"),
      context: {
        title: blog.title,
        content: blog.content.raw,
        imageUrl: blog.image && blog.image.file ? blog.image.file.url : null,
        publishDate: blog.publishDate,
        slug: slug,
      },
    });
  });

  // Query for news
  const newsResult = await graphql(`
    query NewsQuery {
      allContentfulNews(sort: {date: DESC}) {
        nodes {
          author
          body {
            raw
          }
          date
          id
          image {
            file {
              url
            }
          }
          headline
          source
        }
      }
    }
  `);

  if (newsResult.errors) {
    throw newsResult.errors;
  }

  const newsItems = newsResult.data.allContentfulNews.nodes;

  newsItems.forEach((newsItem) => {
    const cleanedHeadline = newsItem.headline.replace(/\?&/g, "");
    const slug = cleanedHeadline.replace(/\s+/g, "-").toLowerCase();
    createPage({
      path: `/news/${slug}`,
      component: path.resolve("./src/templates/newsTemplate.js"),
      context: {
        id: newsItem.id,
        author: newsItem.author,
        body: newsItem.body.raw,
        date: newsItem.date,
        imageUrl: newsItem.image.file.url,
        headline: newsItem.headline,
        slug: slug,
        source: newsItem.source,
      },
    });
  });


  // Query for Attorneys
  const attorneyResult = await graphql(`
    query AttorneyQuery {
      allContentfulAttorneys(sort: {position: DESC}) {
        nodes {
          about {
            raw
          }
          affiliations {
            raw
          }
          appointments {
            raw
          }
          cases {
            raw
          }
          charities {
            raw
          }
          education {
            raw
          }
          email
          extension
          honorsAwards {
            raw
          }
          image {
            resize(format: WEBP, width: 353) {
              src
            }
          }
          name
          practiceAreas {
            title
          }
        }
      }
      }
  `);

  if (attorneyResult.errors) {
    throw attorneyResult.errors;
  }

  const attorneyItems = attorneyResult.data.allContentfulAttorneys.nodes;

    attorneyItems.forEach((attorneyItem) => {
      const cleanedName = attorneyItem.name ? attorneyItem.name.replace(/\?&/g, "") : "";
      const slug = cleanedName.replace(/\s+/g, "-").toLowerCase();
      createPage({
        path: `/attorneys/${slug}`,
        component: path.resolve("./src/templates/attorneysTemplate.js"),
        context: {
          name: attorneyItem.name || "",
          about: attorneyItem.about ? attorneyItem.about.raw : "",
          education: attorneyItem.education ? attorneyItem.education.raw : "",
          affiliations: attorneyItem.affiliations ? attorneyItem.affiliations.raw : "",
          appointments: attorneyItem.appointments ? attorneyItem.appointments.raw : "",
          cases: attorneyItem.cases ? attorneyItem.cases.raw : "",
          charities: attorneyItem.charities ? attorneyItem.charities.raw : "",
          honors: attorneyItem.honorsAwards ? attorneyItem.honorsAwards.raw : "",
          imageUrl: attorneyItem.image.resize.src,
          practiceAreas: attorneyItem.practiceAreas ? attorneyItem.practiceAreas.map(area => area.title) : [],
          slug: slug,
          email: attorneyItem.email || "",
          extension: attorneyItem.extension || "",
        },
      });
    });

};