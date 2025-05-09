import iconLinkedIn from '../../assets/img/icon-linkedin.webp';
import iconFacebook from '../../assets/img/icon-facebook.png';
import iconTwitter from '../../assets/img/icon-twitter.webp';
import iconGitHub from '../../assets/img/icon-github.webp';
import iconReact from '../../assets/img/icon-react.svg';
import iconTailwind from '../../assets/img/icon-tailwind.svg';
import locationPin from '../../assets/img/locationPin.webp';
import IconBlack from "./IconBlack";
import NavbarFooter from "./NavbarFooter";
import resume from '../../assets/pdf/Paul Jhon Buna.pdf';
import EmailOptions from './EmailOptions';


const Footer = props => {
    return (
        <footer class='flex flex-wrap justify-evenly gap-5 lg:gap-10 max-w-5xl m-auto mt-32'>
            <NavbarFooter />
            <div class='text-left hero-content items-start'>
                <div class='max-w-2xl'>
                    <p class='mb-5'><span><img src={locationPin} class='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Canaway, Tibanga, Iligan City, Philippines</p>
                    <h1 class='mb-5  font-bold font-poppins'>
                        <span class='block text-md lg:text-xl'>Paul Jhon Buna,</span><span class='text-3xl lg:text-5xl subpixel-antialiased'>Google Ads<br />Specialist</span>
                    </h1>
                    <a href={resume} target='_blank' rel="noreferrer" class='btn mr-10 btn-md mb-5 sm:mb-0'>Get my Resume</a>
                    <div class="dropdown dropdown-hover">
                        <a href='mailto:pauljhon.buna20@gmail.com' target='_blank' rel="noreferrer" class="btn btn-outline btn-md">pauljhon.buna20@gmail.com</a>
                        <EmailOptions />
                    </div>
                    <div class="mt-14 flex justify-between">
                    <IconBlack icon={iconLinkedIn} goTo='https://www.linkedin.com/in/vapauljhonbuna/' ariaLabel='LinkedIn'>LinkedIn</IconBlack>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;