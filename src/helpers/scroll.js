export const Scroll = () =>  {
       const windowHeight = "innerHeight" in window 
           ? 
               window.innerHeight
           : 
               document.documentElement.offsetHeight;
       const body = document.body;
       const html = document.documentElement;
       const docHeight = Math.max(body.scrollHeight,
                body.offsetHeight, 
                html.clientHeight,  
                html.scrollHeight, 
                html.offsetHeight);
       const windowBottom = Math.ceil(windowHeight + window.pageYOffset);
       if (windowBottom >= docHeight) {
            return 1;
       //   alert('scroll at bottom')
       } else if (windowBottom === windowHeight) {
            return -1;
           // alert('scroll at top')
       }  else {
           return null;
           // console.log('scroll not at bottom, neither at top', windowBottom, docHeight)
       }
      
   }