
$(function(){

  // graphic tab
  const tabMenu = $('.project_box ul.p_menu li')// pon
  const  tabContent = $('.p_box>li')//active
  
  tabMenu.click(function(e){
    e.preventDefault();
    
    let i = $(this).index()
    console.log($(this))

    tabMenu.removeClass('pon')
    tabMenu.eq(i).addClass('pon')
    tabContent.removeClass('active')
    tabContent.eq(i).addClass('active')
  })
})