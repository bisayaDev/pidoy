import logo from '../../assets/img/mylogo.png';

const Navbar = props => {
    return (
        <div class='pt-2 fixed mx-auto w-full z-10 bg-gray-50 navbar hidden md:block'>
            <nav class='flex justify-between mx-auto max-w-5xl md:w-4/5 lg:w-3/4 '>
                <span class='hidden w-10 md:block md:ml-5 lg:mr-0'><a href='#section-home' aria-label='Logo'><img src={logo} alt='' class='inline' /></a></span>
                <ul class='flex  md:mr-2'>
                    <li><a href='#section-home' class='btn btn-ghost btn-md mx-1 sm:btn-sm lg:btn-md h-auto'>Home</a> </li>
                    <li><a href='#section-projects' class='btn btn-ghost btn-md mx-1 sm:btn-sm lg:btn-md h-auto'>Services</a> </li>
                    <li><a href='#section-blog-posts' class='btn btn-ghost btn-md mx-1 sm:btn-sm lg:btn-md h-auto'>What Sets Me Apart</a> </li>
                    <li><a href='#section-about' class='btn btn-ghost btn-md mx-1 sm:btn-sm lg:btn-md h-auto'>About</a> </li>
                    <li><a href='#section-contact' class='btn btn-ghost btn-md sm:btn-sm lg:btn-md h-auto'>Schedule a Call</a> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;