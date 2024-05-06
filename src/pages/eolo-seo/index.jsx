import Image from "next/image";
import blog_seo from "@/images/blog_seo.png";

const eolo_seo = () => {
    return (
        <>
            <div className="project-intro-container">
                <div className="project-title">
                    <h1>EOLO SEO</h1>
                </div>
            </div>
            <div className="project-content-container">
                <p>
                    Search Engine Optimization (SEO) is essential for any website as it determines its visibility and ranking in
                    search engine results pages (SERPs) such as Google, Bing, and Yahoo. A good ranking in search results increases
                    the likelihood of the site being visited by users, leading to greater brand exposure, organic traffic,
                    and potentially more conversions.
                </p>
                <p>
                    Specifically, I have focused on improving the SEO for the website <a href="https://www.eolo.it/home/casa.html">eolo.it</a>, with a particular emphasis on
                    front-end optimizations aimed at enhancing product indexing.
                </p>
                <div className="project-image">
                    <Image src={blog_seo} />
                </div>
                <p>
                    To enhance the SEO of <a href="https://www.eolo.it/home/casa.html">eolo.it</a>, I implemented several strategies and optimizations:
                </p>
                <ol>
                    <li>On-Page Optimization: Optimized meta titles, meta descriptions, and heading tags to ensure they are concise,
                        descriptive, and contain target keywords.</li>
                    <li>Technical SEO: Addressed technical issues such as site speed optimization, mobile responsiveness, and fixing
                        broken links to improve user experience and search engine crawlability.</li>
                    <li>Structured Data Markup: Implemented structured data markup, such as Schema.org markup, to provide search
                        engines with additional context about the website's content, enhancing its visibility in rich snippets and
                        other SERP features.</li>
                    <li>Internal Linking: Optimized internal linking structure to ensure efficient navigation and distribute link
                        equity to important pages across the site.</li>
                    <li>Off-Page SEO: Engaged in off-page SEO activities such as building high-quality backlinks from reputable
                        websites to improve the website's authority and credibility.</li>
                    <li>Heading Optimization: Provided the client with the ability to modify headings throughout the website,
                        ensuring flexibility in optimizing heading tags (H1, H2, etc.) for target keywords and improving the
                        overall structure and readability of the content.</li>
                </ol>
            </div>
        </>
    )
}

export default eolo_seo;