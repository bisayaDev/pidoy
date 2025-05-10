import ButtonDark from '../UI/ButtonDark';
import H3Header from '../UI/H3Header';

const BlogPostIntro = props => {
    return (
        <div class="mt-10 flex flex-wrap-reverse md:flex-nowrap gap-6 max-w-5xl mx-auto px-2">
            <div class="w-2/6 justify-self-end mx-auto">
                <div class={`${props.bgImage} bg-contain bg-no-repeat opacity-10 w-40 md:w-52 h-40 md:h-52 z-0 absolute -ml-5`}></div>
            </div>
            <div class="w-full">
                <H3Header>
                    {props.blogTitle}
                </H3Header>
                {props.children}
            </div>
        </div >
    );
};

export default BlogPostIntro;