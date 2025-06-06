


//$(document).ready(function() {
 // $("img").hide();
//});
//https://assets.mixkit.co/videos/25036/25036-720.mp4
const $form = $("#form-container")
 $(document).ready(function(){
     $("#phone-input").mask("+7(999) 999-9999");
 });

function hideElement() {
  $form.animate({ opacity: 0 }, 1000, function() {
    $form.css('display', 'none');
    $('#call-form')[0].reset();
  });
}
function showElement() {
 
  $form.css({
    display: 'flex',
    opacity: 0
  });
  $form.animate({ opacity: 1 }, 1000);
}


 $("#exit").click(hideElement)
$("#call-btn").click(showElement);
$("#phone-icon-btn").click(showElement);
   
$(document).on('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      hideElement()
    }
  });


$(document).ready(function() {
  $('#call-form').on('submit', function(e) {
    e.preventDefault(); 


    var name = $('#name-input').val().trim();
    var phone = $('#phone-input').val().trim();
    var email = $('#email-input').val().trim();

    var isValid = true;
    var errors = [];

    if (name === '') {
      isValid = false;
      errors.push('Пожалуйста, введите ваше имя.');
    }

    if (phone === '') {
      isValid = false;
      errors.push('Пожалуйста, введите ваш телефон.');
    } 

    if (email === '') {
      isValid = false;
      errors.push('Пожалуйста, введите ваш email.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      errors.push('Некорректный формат email.');
    }

    if (isValid) {
      console.log({
        name: name,
        phone: phone,
        email: email
      });
    } else {
      alert('Ошибки при заполнении формы:', errors);
    }
  });
});


