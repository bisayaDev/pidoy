import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import AboutMe from "./AboutMe";

const AboutSection = props => {
    return (
        <div class='bg-black pb-32'>
            <section id='section-about'>
                <SectionHeader text={'About Me'} headerGradientStyle={'header-about-me'} />
                <AboutMe projectTitle={`Hey! I’m Paul Jhon Buna—Google Ads Specialist by Day, Drummer by Sunday, Gamer by Night.`} bgImage={'bg-virus'} techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'React', 'Figma', 'Netlify', 'Linux']}>
                    <ParagraphLight>
                    Let’s be real: anyone can run ads. But not everyone brings strategy, energy, and personality to every click like I do.
                    </ParagraphLight>
                    <ParagraphLight>
                    By trade, I’m a results-driven Google Ads expert with a serious track record of helping businesses and nonprofits grow through high-converting campaigns.
                    </ParagraphLight>
                    <ParagraphLight>
                        I specialize in building ad strategies that actually make money—not just look good in a report.
                    </ParagraphLight>
                    <ParagraphLight>
                    But behind the keyboard, I’m also a church drummer, a basketball junkie, and a lifelong gamer.
                    </ParagraphLight>
                    <ParagraphLight>
                        Whether I’m locking in keywords or locking in a jump shot, I believe in showing up with full focus and passion—every single time.
                    </ParagraphLight>
                </AboutMe>
            </section>
        </div>
    );
};

export default AboutSection;