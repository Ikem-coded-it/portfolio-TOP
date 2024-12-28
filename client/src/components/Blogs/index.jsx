import { Section } from "../styles/ProjectsSection.Styled";
import { FlexColumn, FlexRow } from "../styles/Container.Styled";
import { Image } from "../styles/Image.Styled";
import "./styles.css"

const blogs = [
    {
        link: "https://dev.to/ikemcodedit/handling-auth-in-react-apps-using-nanostores-and-context-api-35kg",
        title: "Handling Auth In React Apps Using Nanostores and Context API",
        src: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkqr9jcb63izz2m89h6ns.jpg"
    }
]

export default function BlogSection() {
    return(
        <Section>
            <div className="title-description-container">
                <h2>My Blogs</h2>
                <p>
                Sharing insights on web and mobile development, tech trends, and practical tips for building innovative, user-focused applications.
                </p>
            </div>

            <FlexColumn gap="20px" width="100%">
                {
                    blogs.map(blog => (
                        <BlogCard
                        key={blog?.title}
                        {...blog}
                        />
                    ))
                }
            </FlexColumn>
        </Section>
    )
}

function BlogCard({title, link, src}) {
    return(
        <FlexRow
        gap="10px"
        align="flex-start"
        >
            <Image
            height="100px"
            width="100px"
            src={src}
            />

            <FlexColumn>
                <a className="blog-title" href={link}>
                    {title}
                </a>
                <p className="blog-time">5 mins read.</p>
            </FlexColumn>
        </FlexRow>
    )
}