var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

Array.prototype.forEach.call(document.querySelectorAll('.key li'), function(li) {
  li.addEventListener('mouseenter', function() {
    document.body.classList.add('hover-' + this.className);
  });
  li.addEventListener('mouseleave', function() {
    document.body.classList.remove('hover-' + this.className);
  });
});
