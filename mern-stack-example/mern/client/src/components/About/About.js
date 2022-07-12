import React from 'react'
import '../../assets/css/sample.css'
export default function About() {
  return (
    <section class="ftco-about ftco-counter img ftco-section" id="about-section">
    <div class="container">
        <div class="row d-flex">
            <div class="col-md-6 col-lg-5 d-flex">
                <div class="img-about img d-flex align-items-stretch">
                    <div class="overlay"></div>
                    <div class="img d-flex align-self-stretch align-items-center"
                       >
                         {/* style="background-image:url(images/xabout-1.jpg.pagespeed.ic.3ivhvCmeJ5.webp)" */}
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-7 pl-lg-5 py-5">
                <div class="row justify-content-start pb-3">
                    <div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                        <span class="subheading">Welcome</span>
                        <h2 class="mb-4" style= {{ fontSize: "34px", textTransform: "capitalize" }}>About Me</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary
                            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
                            your mouth.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="media block-6 services d-block ftco-animate fadeInUp ftco-animated">
                            <div class="icon"><span class="flaticon-analysis"></span></div>
                            <div class="media-body">
                                <h3 class="heading mb-3">Web Design</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="media block-6 services d-block ftco-animate fadeInUp ftco-animated">
                            <div class="icon"><span class="flaticon-analysis"></span></div>
                            <div class="media-body">
                                <h3 class="heading mb-3">Web Application</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
                    <div class="text p-4 pr-5 bg-primary">
                        <p class="mb-0">
                            <span class="number" data-number="200">200</span>
                            <span>Finished Projects</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
