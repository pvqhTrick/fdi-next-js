export interface SwiperSlide {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface SwiperSectionProps {
  className?: string;
  slides: SwiperSlide[];
}

//  <script id="swiper-template" type="text/x-handlebars-template">
//                 <div className="swiper serviceSwiper">
//                   <div className="swiper-wrapper">
//                     {{#each slides}}
//                     <div className="swiper-slide">
//                       <div className="item">
//                         <div className="img">
//                           <img src="{{image}}" alt="Slide" className="gsap zoom" />
//                         </div>
//                         <div className="con">
//                           <div className="title">{{title}}<br>{{subTitle}}</div>
//                         </div>
//                       </div>
//                     </div>
//                     {{/each}}
//                   </div>

//                   </div>
//                   <div className="swiper-pagination"></div>
//                 </div>
//               </script>

//               <script>
//                 const handlebarsSwiper = document.getElementById("handlebars-swiper");
//                 const source = document.getElementById("swiper-template").innerHTML;
//                 const template = Handlebars.compile(source);

//                 const data = {
//                   slides: [
//                     {
//                       title: "Lorem",
//                       subTitle: "ipsum dolor",
//                       image: "/assets/images/service-2.png",
//                     },
//                     {
//                       title: "Lorem",
//                       subTitle: "ipsum dolor 2",
//                       image: "/assets/images/service-3.png",
//                     },
//                     {
//                       title: "Lorem",
//                       subTitle: "ipsum dolor 3 ",
//                       image: "/assets/images/service-2.png",
//                     },
//                     {
//                       title: "Lorem",
//                       subTitle: "ipsum dolor4 ",
//                       image: "/assets/images/service-3.png",
//                     },
//                   ],
//                 };

//                 handlebarsSwiper.innerHTML = template(data);

//                 // init Swiper
