window.addEventListener("load", function() {  
  $('.check.all').on('change', function(){
    $('.check').prop('checked', $(this).prop('checked'));
  });
  $(document).ready(function(){
  $(document).on('click', '.page-box .btn.number', function(){
    $('.page-box .btn.number').removeClass('on');
    $(this).addClass('on');
    return false;
  })
  $(".select-title").click(function(){
    $(".select-option").toggle("active")
  })
})
});