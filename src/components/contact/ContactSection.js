import ContactForm from "./ContactForm";
import ButtonLight from "../UI/ButtonLight";
import H3Header from "../UI/H3Header";
import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import EmailOptions from "../UI/EmailOptions";

const ContactSection = props => {
    return (<div class='bg-black pb-32'>
        <section id='section-contact'>
            <SectionHeader text={'Book a Strategy Call'} headerGradientStyle={'header-contact'} />
            <div class="flex flex-col gap-10 max-w-2xl mx-auto px-2">
                <H3Header class='text-white mt-32'>
                Let’s audit your current ads or map out your winning campaign—free for first-time clients.

                </H3Header>
                <p class='text-6xl text-center'>📣</p>
                <div data-theme="mytheme" class='flex flex-wrap-reverse justify-around'>
                    {/* <ButtonLight class='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>work@damiandemasi.com</ButtonLight> */}
                    <div class="dropdown dropdown-hover">
                        <a href='mailto:pauljhon.buna20@gmail.com' target='_blank' rel="noreferrer" class="btn btn-primary mb-1 w-full z-1 relative lg:btn-md">pauljhon.buna20@gmail.com</a>
                        <EmailOptions />
                    </div>
                    <ButtonLight class='w-max btn-md sm:mb-0' goTo='https://calendly.com/pauljhon-buna20/30min' target='_blank' rel="noreferrer">Book an Appointment</ButtonLight>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>);
};

export default ContactSection;