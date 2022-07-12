import React from 'react'
import '../../assets/css/sample.css'
export default function Home() {
  return (
    <section id="home-section" class="hero">
    <div class="home-slider owl-carousel owl-loaded owl-drag">


        <div class="owl-stage-outer">
            <div class="owl-stage style1">
                <div class="owl-item cloned" style={{width: "1903px"}}>
                    <div class="slider-item ">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div class="one-third order-md-last img"
                                  >
                                      {/* style="background-image:url(images/xbg_1.jpg.pagespeed.ic.pYtmdQZC40.webp)" */}
                                    <div class="overlay"></div>
                                </div>
                                <div class="one-forth d-flex align-items-center ftco-animate fadeInUp ftco-animated"
                                    data-scrollax=" properties: { translateY: '70%' }">
                                    <a href="https://vimeo.com/45830194"
                                        class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                        <span class="ion-ios-play play"></span>
                                    </a>
                                    <div class="text">
                                        <span class="subheading">Hello</span>
                                        <h1 class="mb-4 mt-3">I'm <span>Praveen Kalyan</span></h1>
                                        <h2 class="mb-4">A Freelance Web Developer</h2>
                                        <p><a href="#" class="btn-custom">Hire me</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="owl-item cloned" style={{width: "1903px"}}>
                    <div class="slider-item">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row d-flex no-gutters slider-text align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div class="one-third order-md-last img"
                                   >
                                     {/* style="background-image:url(images/xbg_2.jpg.pagespeed.ic.9M3orhTyri.webp)" */}
                                    <div class="overlay"></div>
                                </div>
                                <div class="one-forth d-flex align-items-center ftco-animate fadeInUp ftco-animated"
                                    data-scrollax=" properties: { translateY: '70%' }">
                                    <a href="https://vimeo.com/45830194"
                                        class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                        <span class="ion-ios-play play"></span>
                                    </a>
                                    <div class="text">
                                        <h1 class="mb-4 mt-3">I'm a <span>web designer</span> from India</h1>
                                        <p><a href="#" class="btn-custom">Hire me</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="owl-item animated owl-animated-out fadeOut" style= {{ width: "1903px", left: "1903px" }}>
                    <div class="slider-item ">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div class="one-third order-md-last img"
                                  >
                                    {/*   style="background-image:url(images/xbg_1.jpg.pagespeed.ic.pYtmdQZC40.webp)"
                                    <div class="overlay"></div>
                                </div>
                                <div class="one-forth d-flex align-items-center ftco-animate fadeInUp ftco-animated style2"
                                    data-scrollax=" properties: { translateY: '70%' }"
                                    >
                                    <a href="https://vimeo.com/45830194"
                                        class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                        <span class="ion-ios-play play"></span>
                                    </a>
                                    <div class="text">
                                        <span class="subheading">Hello</span>
                                        <h1 class="mb-4 mt-3">I'm <span>Niko Bochser</span></h1>
                                        <h2 class="mb-4">A Freelance Web Developer</h2>
                                        <p><a href="#" class="btn-custom">Hire me</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div class="owl-item animated owl-animated-in fadeIn active" style= {{width: "1903px" }}>
                    <div class="slider-item">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row d-flex no-gutters slider-text align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div class="one-third order-md-last img"
                                  >
                                      {/* style="background-image:url(images/xbg_2.jpg.pagespeed.ic.9M3orhTyri.webp)"
                                    <div class="overlay"></div>
                                </div>
                                <div class="one-forth d-flex align-items-center ftco-animate fadeInUp ftco-animated"
                                    data-scrollax=" properties: { translateY: '70%' }"
                                    >
                                    <a href="https://vimeo.com/45830194"
                                        class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                        <span class="ion-ios-play play"></span>
                                    </a>
                                    <div class="text">
                                        <h1 class="mb-4 mt-3">I'm a <span>web designer</span> from Scotland</h1>
                                        <p><a href="#" class="btn-custom">Hire me</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div class="owl-item cloned" style={{width: "1903px" }}>
                    <div class="slider-item ">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div class="one-third order-md-last img"
                                   >
                                     {/* style="background-image:url(images/xbg_1.jpg.pagespeed.ic.pYtmdQZC40.webp)"
                                    <div class="overlay"></div>
                                </div>
                                <div class="one-forth d-flex align-items-center ftco-animate fadeInUp ftco-animated"
                                    data-scrollax=" properties: { translateY: '70%' }">
                                    <a href="https://vimeo.com/45830194"
                                        class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                        <span class="ion-ios-play play"></span>
                                    </a>
                                    <div class="text">
                                        <span class="subheading">Hello</span>
                                        <h1 class="mb-4 mt-3">I'm <span>Niko Bochser</span></h1>
                                        <h2 class="mb-4">A Freelance Web Developer</h2>
                                        <p><a href="#" class="btn-custom">Hire me</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div class="owl-item cloned" style={{width: "1903px"}}>
                    <div class="slider-item">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row d-flex no-gutters slider-text align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div class="one-third order-md-last img"
                                   >
                                     {/* style="background-image:url(images/xbg_2.jpg.pagespeed.ic.9M3orhTyri.webp)" 
                                    <div class="overlay"></div>
                                </div>
                                <div class="one-forth d-flex align-items-center ftco-animate fadeInUp ftco-animated"
                                    data-scrollax=" properties: { translateY: '70%' }">
                                    <a href="https://vimeo.com/45830194"
                                        class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                        <span class="ion-ios-play play"></span>
                                    </a>
                                    <div class="text">
                                        <h1 class="mb-4 mt-3">I'm a <span>web designer</span> from Scotland</h1>
                                        <p><a href="#" class="btn-custom">Hire me</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        <div class="owl-nav disabled"><button role="presentation" class="owl-prev"><span
                    class="ion-md-arrow-back"></span></button><button role="presentation" class="owl-next"><span
                    class="ion-chevron-right"></span></button></div>
        <div class="owl-dots"><button class="owl-dot"><span></span></button><button
                class="owl-dot active"><span></span></button></div>
    </div>
</section>
  )
}
