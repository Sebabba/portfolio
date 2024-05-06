import Image from "next/image";
import blog_homepage from "@/images/blog_homepage.png";
import blog_detail from "@/images/blog_detail.png";

const Blog = () => {
  return (
    <>
      <div className="project-intro-container">
        <div className="project-title">
          <h1>EOLO Blog</h1>
        </div>
        <div className="project-image">
          <Image src={blog_homepage} />
        </div>
      </div>
      <div className="project-content-container">
        <p>
          The Blog section of EOLO's website, an important Italian internet provider. The Blog section was created for SEO purposes to promote EOLO's products through articles.
          Everything was developed using the Magnolia CMS, a content management system based on Content repository API for Java, which allows developers to generate templates enabling clients to create articles autonomously, with also the possibility of adding structured data to improve SEO.
          The articles are well-indexed, thanks to particular attention to SEO.
        </p>
        <p>
          Much of it is editorial, which allows the client to be autonomous in creating, editing, or deleting articles without the need to contact developers. Additionally, it's also manageable which articles to highlight, even on the homepage.
        </p>
        <div className="project-image">
          <Image src={blog_detail} />
        </div>
      </div>
    </>
  )
}

export default Blog;