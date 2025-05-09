const NavbarFooter = props => {
    return (
        <nav>
            <ul class='flex flex-col'>
                <li><a href='#section-home' class='btn btn-ghost mb-2'>Home</a> </li>
                <li><a href='#section-projects' class='btn btn-ghost mb-2'>Services</a> </li>
                <li><a href='#section-blog-posts' class='btn btn-ghost mb-2'>WHAT SETS ME APART</a> </li>
                <li><a href='#section-about' class='btn btn-ghost mb-2'>About</a> </li>
                <li><a href='#section-contact' class='btn btn-ghost'>SCHEDULE A CALL</a> </li>
            </ul>
        </nav>
    );
};

export default NavbarFooter;