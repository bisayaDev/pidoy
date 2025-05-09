import ProjectRight from '../projects/ProjectRight';
import ProjectLeft from '../projects/ProjectLeft';
import SectionHeader from '../UI/SectionHeader';
import ParagraphLight from '../UI/ParagraphLight';
import H4Header from '../UI/H4Header';
import H3Header from '../UI/H3Header';
// import CodeLibraryItem from './components/projects/CodeLibraryItem';

const ProjectsSection = props => {
    return (
        <div class='bg-black'>
            <section id="section-projects">
                <SectionHeader text={'🚀 What I Bring to the Table'} headerGradientStyle={'header-projects'} />
                <ProjectRight
                    projectTitle={'🎯 Google Ads That Actually Work'}
                    bgImage={'bg-virus'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://colo-codes.github.io/mini-projects/covid-19-dashboard-app/'}
                    buttonDescription={'https://blog.damiandemasi.com/my-second-vanilla-javascript-project-using-apis-promises-classes-error-handling-and-more'}
                    buttonGitHub={'https://github.com/Colo-Codes/mini-projects/tree/main/covid-19-dashboard-app'}>
                    <ParagraphLight>
                        <p>Anyone can launch ads. I engineer high-converting funnels using Google Ads—smart targeting, persuasive copy, and real-time optimization that makes every click count.
                        </p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>
                            <ul>
                                <li>
                                    ✅ Google Ads Manager mastery
                                </li>
                                <li>
                                    ✅ Mobile-first, conversion-led campaigns
                                </li>
                                <li>
                                    ✅ Budget-smart scaling (no wasted spend)
                                </li>
                            </ul>
                        </p>
                    </ParagraphLight>

                    <H3Header>
                        🧠 Keyword Strategy That Drives Revenue
                    </H3Header>
                    <ParagraphLight>
                        <p>I don’t chase volume—I chase value. Using deep-dive keyword research, I uncover the hidden gems your competitors overlook. The result? Higher CTRs, lower CPCs, and more qualified leads.
                        </p>
                    </ParagraphLight>

                    <H3Header>
                        💸 Google Ad Grants Expert for Nonprofits
                    </H3Header>
                    <ParagraphLight>
                        <p>If you're a nonprofit sitting on that untapped $10,000/month Google Grant, I’ll turn it into impact. I’ve helped missions grow, events fill up, and donations roll in—without spending a dime out of pocket.</p>
                    </ParagraphLight>
                </ProjectRight>
                
                <ProjectLeft
                    projectTitle={' '}
                    bgImage={'bg-to-do'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://colo-codes.github.io/mini-projects/todo-app/'}
                    buttonDescription={'https://blog.damiandemasi.com/my-first-vanilla-javascript-project-making-a-simple-to-do-app'}
                    buttonGitHub={'https://github.com/Colo-Codes/mini-projects/tree/main/todo-app'}>
                    <SectionHeader text={'Results, Not Just Reports'} headerGradientStyle={'header-blog-posts'} class={'mt-24 lg:mt-20'} />
                    <ParagraphLight>
                        <p>
                            I’m performance-obsessed. You’ll get more than just dashboards—you’ll get insights and action. Every campaign I run is backed by:
                        </p>
                        <ul>
                            <li>
                                ✅ A/B split testing
                            </li>
                            <li>
                                ✅ Conversion rate optimization
                            </li>
                            <li>
                                ✅ Data-driven scaling strategies
                            </li>
                        </ul>
                    </ParagraphLight>
                
                </ProjectLeft>
            </section>
            {/* <section id="section-code-library">
          <SectionHeader text={'Code Library'} headerGradientStyle={'header-projects'} class={'mt-52'} />
          <div class='flex flex-wrap md:flex-nowrap gap-10 max-w-5xl m-auto mt-32 px-2'>
            <div>
              <CodeLibraryItem codeLibraryTitle={'5 use cases of the useState ReactJS hook'} goTo={'#'}>
                <ParagraphLight><p>useState is a Hook that needs to be called inside a function component to add some local state to it.React will preserve this state between component re-renders.</p></ParagraphLight>
                <ParagraphLight><p>There are many use cases for the useState hook, but in this article, I will focus on the following five: </p></ParagraphLight>
                <ParagraphLight>
                  <ul class='list-disc ml-4'>
                    <li>State management</li>
                    <li>Conditional rendering</li>
                    <li>Toggle flags (true/false)</li>
                    <li>Counter</li>
                    <li>Get API data and store it in state</li>
                  </ul>
                </ParagraphLight>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'JavaScript array methods'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'CSS Flex and Grid'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
          </div>
        </section> */}
        </div>
    );
};

export default ProjectsSection;