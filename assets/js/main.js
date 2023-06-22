// const container = document.getElementById("box");

gsap.registerPlugin(ScrollTrigger);
  // gsap.to('.box', { ... })
  gsap.to(".title", { 
     scale:0.4,
     scrollTrigger: {
        trigger:".title",
        start:"30% center",
        end:"-20% top",
        // markers:true,
        scrub:.3,
        pin: true,
        
     }
    });

    ScrollTrigger.create({
  
        trigger: '.brand',
        start: '250% center',
        end: '250% top',
        pin: true,
        pinSpacing: false,
        markers:true
        
      })

    // gsap.to(".brand", { 
    //     scrollTrigger: {
    //        trigger:".brand",
    //        pin: true
    //     }
    //    });