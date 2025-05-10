const SectionHeader = props => {

    const h2Classes = `${props.headerGradientStyle} text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-center w-full md:w-max subpixel-antialiased mx-auto p-2 pt-20`;

    return (
        <div class={`text-secondary ${props.class}`}>
            <h2 class={h2Classes}>
                {props.text}
            </h2>
        </div>
    );
};

export default SectionHeader;