import BlogPostIntro from '../blog_posts/BlogPostIntro';
import ParagraphDark from '../UI/ParagraphDark';
import H4Header from '../UI/H4Header';
import CodeInline from '../UI/CodeInline';
import SectionHeader from '../UI/SectionHeader';

const BlogSection = props => {
    return (
        <section id="section-blog-posts">
            <SectionHeader text={'Why High-Ticket Clients Work With Me'} headerGradientStyle={'header-blog-posts'} class={'mt-10 lg:mt-10'} />
            <BlogPostIntro
                blogTitle={''}
                bgImage={'bg-blog-post'}
                linkHashnode={''}
                linkDevto={''}>
                <ParagraphDark>
                    <p>
                        <ul>
                            <li>
                                <b>• I think like a CMO, not just a media buyer.</b>
                            </li>
                            <li>
                                <b>• I write ad copy that sells, not just looks good.</b>
                            </li>
                            <li>
                                <b>• I bring 10+ years of combined strategy and execution.</b>
                            </li>
                            <li>
                                <b>• I’ve worked with nonprofits, startups, agencies, and global brands.</b>
                            </li>
                            <li>
                                <b>• I’ve helped clients scale from $0 to $10K/month+ in sales.</b>
                            </li>
                        </ul>
                    </p>
                </ParagraphDark>
            </BlogPostIntro>
            <SectionHeader text={'Let’s Talk ROI'} headerGradientStyle={'header-blog-posts'} class={'mt-10 lg:mt-10'} />
            <BlogPostIntro
                blogTitle={''}
                bgImage={'bg-blog-post'}
                linkHashnode={'https://blog.damiandemasi.com/hammering-down-react-basics-with-a-paint-coat-of-material-ui'}
                linkDevto={'https://dev.to/colocodes/hammering-down-react-basics-with-a-paint-coat-of-material-ui-o0h'}>
                <ParagraphDark>
                    <p>
                    If you’re serious about scaling your business or nonprofit with Google Ads, I’m your partner. 
                    <br/>
                    <br/>
                    Whether you're looking for a one-time project or a long-term ads wingman...
                    <br/>
                    <br/>
                    I’ll help you build campaigns that pay for themselves—and then some.
                    </p>
                </ParagraphDark>
            </BlogPostIntro>
        </section>
    );
};

export default BlogSection;