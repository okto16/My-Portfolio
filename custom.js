// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 630) {
//     $('.my-second-menu').fadeIn(100);
//   } else {
//     $('.my-second-menu').fadeOut(100);
//   }
// });

const submit_ = () => {
  let val = $('.getvalue').val();
  val = val.toLowerCase();
  if (val == 'aldi pradana' || val == 'aldipradana') {
    UIkit.modal('#modal-center').show();
  }else {
    $(`.alert-area`).html(`<div style="margin-top:10px" class="uk-alert-danger" uk-alert>
                            <a class="uk-alert-close" uk-close></a>
                            <p class="uk-text-bolder">Sorry that's not my name.</p>
                          </div>`)
    $('.getvalue').val('');
  }
}

$(window).bind("resize",function(){
    if($(this).width() <768){
    $('#div_custom').removeClass('uk-navbar-center')
    }
    else{
    $('#div_custom').addClass('uk-navbar-center')
    }
})

$(document).ready(function () {

  if($(this).width() <768){
  $('#div_custom').removeClass('uk-navbar-center')
  }
  else{
  $('#div_custom').addClass('uk-navbar-center')
  }

});

$(".togel.tblmenu").click(function () {
$(".menu").toggleClass("sh");
});

// UIkit.util.ready(function () {
//     var bar = document.getElementById('js-progressbar');
//     var animate = setInterval(function () {
//         bar.value += 10;
//         if (bar.value >= 55) {
//             clearInterval(animate);
//         }
//     }, 1000);
// });

if ('serviceWorker' in navigator) {
   console.log("Will the service worker register?");
   navigator.serviceWorker.register('service-worker.js')
     .then(function(reg){
       console.log("Yes, it did.");
     }).catch(function(err) {
       console.log("No it didn't. This happened: ", err)
     });
 }
