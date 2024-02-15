import { useState } from "react";
import one from "../assets/one.jpeg";
import two from "../assets/two.jpeg";
import three from "../assets/three.jpeg";

export default function Home() {
    const [slide, setSlide] = useState(0);

    const images = [one, two, three];

    const handleSlideShowGo = () => {
        const position = (slide + 1) % images.length;
        setSlide(position);
    }

    const handleSlideShowBack = () => {
        const position = (slide - 1 + images.length) % images.length;
        setSlide(position);
    }

    return (
        <div className="container-sm">
            <div className="row mt-3">
                <div className="col text-center">
                    <p style={{ color: "#ffff", fontFamily: "Helvetica" }}>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</p>
                </div>
            </div>
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === slide ? 'active' : ''}`}>
                            <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                            <div className="row">
                                <div className="carousel-caption text-start text-center-sm col-lg-4">
                                    <div className="row ">
                                        <div className="col-12 mt-2">
                                            <h1><i>STAR WARS: THE PHANTOM MENACE</i> CELEBRATES 25 YEARS WITH RETURN TO THEATERS</h1>
                                        </div>
                                        <div className="col-12 mt-2">
                                            <h4 className="my-4">Episode i will mark a milestone on the big screen.</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className=" col-sm-6 mt-2">
                                            <p><a className="btn  btn-warning btn-block" href="#" role="button" style={{ borderRadius: "15rem", paddingLeft: "30px", paddingRight: "30px" }}>READ MORE</a></p>
                                        </div>
                                        <div className=" col-sm-6 mt-2 ">
                                            <p><a className="btn  btn-dark btn-block" href="#" role="button" style={{ borderRadius: "15rem", paddingLeft: "30px", paddingRight: "30px", border: "1px solid #fade4b", backgroundColor: "black" }}>INTERVIEW</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={handleSlideShowBack}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={handleSlideShowGo}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                </a>
            </div>
        </div>
    )
}