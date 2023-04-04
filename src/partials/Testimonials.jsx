import React from 'react';
import * as te from 'tw-elements';

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

function Testimonials() {
  return (
    //     <section>
    //       <div className="max-w-6xl mx-auto px-4 sm:px-6">
    //         <div className="py-12 md:py-20 border-t border-gray-800">

    //           {/* Section header */}
    //           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
    //             <h2 className="h2 mb-4">Testimonials</h2>
    //             {/* <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p> */}
    //           </div>

    //           {/* Testimonials */}
    //           <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

    //             {/* 1st testimonial */}
    //             <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
    //               <div>
    //                 <div className="relative inline-flex flex-col mb-4">
    //                   <img className="rounded-full" src={TestimonialImage01} width="48" height="48" alt="Testimonial 01" />
    //                     <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
    //                       <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
    //                     </svg>
    //                         </div>
    //                 </div>
    //                 <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
    //                 <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
    //                   <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
    //                 </div>
    //               </div>

    //               {/* 2nd testimonial */}
    //               <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
    //                 <div>
    //                   <div className="relative inline-flex flex-col mb-4">
    //                     <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" />
    //                       <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
    //                         <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
    //                       </svg>
    //                         </div>
    //                   </div>
    //                   <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
    //                   <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
    //                     <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
    //                   </div>
    //                 </div>

    //                 {/* 3rd testimonial */}
    //                 <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
    //                   <div>
    //                     <div className="relative inline-flex flex-col mb-4">
    //                       <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" />
    //                         <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
    //                           <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
    //                         </svg>
    //                         </div>
    //                     </div>
    //                     <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
    //                     <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
    //                       <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
    //                     </div>
    //                   </div>

    //                 </div>

    //               </div>
    //             </div>
    // </section>

    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-white text-center">

        <h2 className="h2 font-bold mb-12">Testimonials</h2>

        <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img className="rounded-full shadow-lg mb-6 mx-auto"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" alt="avatar" style={{ width: "150px" }} />
              <div className="flex flex-wrap justify-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                  <h5 className="text-lg font-bold mb-3">Maria Kate</h5>
                  <p className="font-medium text-gray-700 mb-4">Ecommerce developer</p>
                  <p className="text-gray-500 mb-6">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                      className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                      </path>
                    </svg>In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper
                    ligula sed lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum
                    magna. Proin gravida, justo et imperdiet tristique, turpis nisi viverra est, nec
                    posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium condimentum nulla.
                  </p>
                  <ul className="flex justify-center mb-0">
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                        </path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="carousel-item relative float-left w-full">
              <img className="rounded-full shadow-lg mb-6 mx-auto"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" alt="avatar" style={{ width: "150px" }} />
              <div className="flex flex-wrap justify-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                  <h5 className="text-lg font-bold mb-3">John Doe</h5>
                  <p className="font-medium text-gray-700 mb-4">Web Developer</p>
                  <p className="text-gray-500 mb-6">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                      className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                      </path>
                    </svg>
                    Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed
                    scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu
                    dui aliquam, faucibus metus quis, elementum nunc.
                  </p>
                  <ul className="flex justify-center mb-0">
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-alt"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512">
                        <path fill="currentColor"
                          d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z">
                        </path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img className="rounded-full shadow-lg mb-6 mx-auto"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt="avatar" style={{ width: "150px" }} />
              <div className="flex flex-wrap justify-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                  <h5 className="text-lg font-bold mb-3">Anna Deynah</h5>
                  <p className="font-medium text-gray-700 mb-4">UX Designer</p>
                  <p className="text-gray-500 mb-6">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                      className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                      </path>
                    </svg>Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet
                    rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc
                    ligula felis, sagittis eget nisi vitae.
                  </p>
                  <ul className="flex justify-center mb-0">
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                        className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
          {/* <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>

      </section>
    </div>
  );
}

export default Testimonials;
