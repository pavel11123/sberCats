// //lazy load
// const lazyLoadImage = () => {
//   const images = document.querySelectorAll(".card__img img");
//   console.log(images);
//   const optionsLazyLoad = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.1,
//   };

//   function handleImg(myImg, observerLazyLoad) {
//     myImg.forEach((myImgSingle) => {
//       console.log(myImgSingle.intersectionRatio);
//       if (myImgSingle.intersectionRatio > 0) {
//         loadImage(myImgSingle.target);
//       }
//     });
//   }

//   function loadImage(image) {
//     image.src = image.getAttribute("data");
//     console.log(image.getAttribute("data"));
//   }

//   const observerLazyLoad = new IntersectionObserver(handleImg, optionsLazyLoad);

//   images.forEach((img) => {
//     observerLazyLoad.observe(img);
//     console.log(img);
//   });
// };
// lazyLoadImage();
