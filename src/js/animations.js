const animationItems = document.querySelectorAll('._animation-element');

if (animationItems.length > 0) {
   window.addEventListener('scroll', scrollAnimation);
   function scrollAnimation() {
      for (let i = 0; i < animationItems.length; i++) {
         const animationItem = animationItems[i];
         const animationItemHeight = animationItem.offsetHeight;
         const animationItemOffset = offset(animationItem).top;
         const animationItemStart = 4;

         let animationItemPoint = window.innerHeight - animationItemHeight / animationItemStart;
         if (animationItemHeight > window.innerHeight) {
            animationItemPoint = window.innerHeight - window.innerHeight / animationItemStart;
         }
         if ((window.pageXOffset > animationItemOffset - animationItemPoint) && window.pageXOffset < (animationItemOffset + animationItemHeight)) {
            animationItem.classList.add('_active-animation');
         } else {
            animationItem.classList.remove('_active-animation');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   scrollAnimation();
}