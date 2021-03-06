import './Carousel.css';
import img_1 from '../../assets/images/img_1.png'
import { AboutUs } from '../aboutus/AboutUs';


export const Carousel = () => {
    return(
        <div>
            <section className="carousel container-fluid">
                <div className="row d-flex justify-content-center p-4">
                    <div className="carousel_image col-md-4 d-flex justify-content-end">
                        <img src={img_1} alt=""/>
                    </div>

                    <div className="carousel_message col-md-6 d-flex justify-content-center">
                        <div className="carousel_message_line my-3"></div>

                        <div className="carousel_message_text">
                            <h1> PROFICIENT  </h1>
                            <h2 style={{fontSize:'41px'}}> in </h2>

                    
                            <div className="carousel_message_text_list gap-2"> - Web Development</div>
                            <div className="carousel_message_text_list gap-2"> - ui/ux design</div>
                            <div className="carousel_message_text_list gap-2"> - IoT experienced</div>
                            <div className="carousel_message_text_list gap-2"> - Network installation</div>
                        </div>

                        <button id="about" className="mx-auto my-3 p-2"> About Me</button>
                    </div>
                </div>
            </section>

            <AboutUs/>
        </div>
    );
    
} 