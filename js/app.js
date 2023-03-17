$(function(){


let funcObj = {
  f_0: function () {
      // console.log('0')
      const tl = gsap.timeline({duration:1})
      tl.to('.sec00 .l_top',{
        width:'100%'
      })
      tl.to('.sec00 .l_right',{
        height:'70%'
      })
      tl.to('.sec00 .fw1',{
        opacity:1,
        x:10
      })
      tl.to('.sec00 .l_bottom',{
        width:'100%'
      })
      tl.to('.sec00 .l_left',{
        height:'83%'
      })
      tl.to('.sec00 .fw2',{
        opacity:1,
        Y:50
      })
      
      tl.to('.sec00 .tit_wrap',{
       backgroundColor:'#E1F46C'
      })
      
      tl.to('.sec00 .tit',{
        opacity:1,
        y:10,
        stagger:.3
      })
      tl.to('.sec00 .tit_name',{
        opacity:1,
        y:10,
        stagger:.3
      })
      tl.to('.sec00 .sub_tit>*',{
        opacity:1,
        y:10,
        stagger:.3
      }) 
      tl.to('.sec00 .star_1',{
        opacity: 1,
        rotationX:180
    }) 
      tl.to('.sec00 .star_2',{
        opacity: 1,
        rotationX:180
    }) 
    },
    f_1: function () {
    // console.log('0')

    const tl = gsap.timeline()
    tl.to('.sec01 .box',{
        width:'100%'
    })
    tl.to('.sec01 .heart',{
        opacity:1,
        y:10,
        stagger:.3
    })
    tl.to('.s1_ani',{
        opacity:1,
        x:10,
        stagger:.3
    })
    tl.to('.pr_ani',{
        backgroundColor:'#B43AFE',
        stagger:.3
    })

  },
  f_2: function () {
    // console.log('2')
    const tl = gsap.timeline({duration:1})
    tl.to('.sec07 .box_7',{
      height:'100%'
    })
    tl.to('.sec07 .tit_wrap>*',{
      opacity:1,
      x:10,
      stagger:.3
    }) 
  },
  f_3: function () {
    // console.log('2')
    const tl = gsap.timeline({duration:1})
    tl.to('.sec02 .box',{
      width:'54%'
    })
    tl.to('.s2_ani',{
      opacity:1,
      stagger:.2,
      x:20
    })
  },
  f_4: function () {
      // console.log('3')
    const tl = gsap.timeline({duration:1})

      tl.to('.sec03 .tit_wrap>*',{
        opacity:1,
        stagger:.2,
        x:20
      })
      tl.to('.sec03 .mock_wrap>*',{
        opacity:1,
        stagger:.2,
        x:20
      })
  },
  f_5: function () {
      console.log('4')
      const tl = gsap.timeline()

      tl.to('.sec04 .tit_wrap>.sb1', {
          opacity: 1 ,
          x: 20
      })
      tl.to('.sec04 .bottom_tit>*', {
        opacity: 1 ,
        y: 20 ,
        stagger:.1,
    })
      tl.to('.sec04 .icon_next', {
      opacity: 1 ,
      X:60,
      stagger:.1,
    })
  },
  f_6: function () {
    console.log('5')
    const tl = gsap.timeline()

    tl.to('.sec05 .tit_wrap>*', {
        stagger: .3,
        x: 30,
        opacity: 1
    })
  },
  f_7: function () {
      console.log('6')
      const tl = gsap.timeline()

      tl.to('.sec06 .img_wrap>*', {
        stagger: .3,
        y: 30,
        opacity: 1
    })
    tl.to('.sec06 .tit_wrap>*', {
      stagger: .3,
      x: 20,
      opacity: 1
  })
    tl.to('.sec06 .line_01', {
      width:'23%'
})
    tl.to('.sec06 .line_02', {
    width:'40%'
})

  },
}

funcObj['f_0']()
const menu = document.querySelectorAll('.sideNav a')
const pages = new Pageable("#container", {
  // orientation: "horizontal",
  animation: 1000,
  events: {
    wheel: true, // enable / disable mousewheel scrolling
    mouse: true, // enable / disable mouse drag scrolling
    touch: true, // enable / disable touch / swipe scrolling
    keydown: true, // enable / disable keyboard navigation
  },
  onFinish: function (data) {

    setTimeout(function () {

      funcObj['f_' + data.index]()
    }, 100)
    menu.forEach(function (btn, i) {
      btn.classList.remove('active')
      if (data.index == i) {
        btn.classList.add('active')

      }
    })


  },
  // onInit: function (data) {

  //   if(data.index!=0){

  //     let one = once(function() {
  //       funcObj['f_' + data.index]()
  //     });

  //     one()
  //   }


  //   menu.forEach(function (btn, i) {
  //     btn.classList.remove('active')
  //     if (data.index == i) {
  //       btn.classList.add('active')

  //     }
  //   })


  // },
  easing: function(currentTime, startPos, endPos, interval) {
    // the easing function used for the scroll animation
    return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
},
});




var swiper = new Swiper(".s4_slide", {
  loop:true
});




})
