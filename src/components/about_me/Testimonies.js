import reviewMagen from '../../assets/img/magen-hyatt.jpg';
import reviewPatrick from '../../assets/img/casey.jpg';
import reviewEthan from '../../assets/img/ethan.jpg';
import CardTestimony from "./CardTestimony";

const Testimonies = props => {
    return (
        <div class="flex flex-wrap gap-10 justify-evenly max-w-6xl mx-auto -mt-80 ">
            <CardTestimony image={reviewMagen} goTo='' personName='Magen Hyatt' jobPosition={
                <>
                    <p>Marketing Operations Director</p>
                </>
            }>
                
                <p>
                <b>"Our nonprofit finally made the most of our Google Ad Grant thanks to Paul."</b>
                <br />
                <br />
                    “We struggled for months trying to make use of our $10K grant. Paul came in, optimized everything, and boom—traffic, signups, and impact all took off. His mix of strategy and hands-on execution is rare. Highly recommend him if you're serious about results
                </p>
            </CardTestimony>
            <CardTestimony image={reviewPatrick} goTo='' personName='Patrick Casey' jobPosition={
                <>
                    <p>Amazon Store Owner</p>
                </>}>
                <p>
                <b>"$10K+/month in revenue from scratch. That says it all."</b>
                <br />
                <br />
                    “Paul helped us launch a brand-new product with zero audience and zero data. Thanks to his ad copy, keyword strategy, and constant performance tweaks, we hit five-figure months faster than we thought possible. 
                </p>
            </CardTestimony>
            <CardTestimony image={reviewEthan} goTo='' personName='Ethan Hu' jobPosition={
                <>
                    <p>RAFA Digital</p>
                </>}>
                <p>
                <b>“Paul isn’t just a Google Ads guy—he thinks like a CMO.”</b>
                <br />
                <br />
                “Working with Paul was like plugging a strategist straight into our team. He didn’t just run ads; he helped us align our messaging, audience targeting, and sales funnel. In just 60 days, we went from zero traction to consistent leads that actually convert. He’s the real deal.”
                </p>
            </CardTestimony>
        </div>
    );
};

export default Testimonies;