window.onload = function () {
    document.querySelector('.cont_modal').className = "cont_modal";
  }
  var c = 0;

  function open_close() {
    if (c % 2 == 0) {
      document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
      c++;
    } else {
      document.querySelector('.cont_modal').className = "cont_modal";
      c++;
    }
  }

  window.onload = function () {
    document.querySelector('.cont_modal').className = "cont_modal";
  }

  var ingredientsLink = document.getElementById('ingredients-link');
  var preparationLink = document.getElementById('preparation-link');
  var ingredientsContent = document.querySelector('.cont_info_preparation');
  var preparationContent = document.querySelector('.cont_info_preparation');

  ingredientsLink.addEventListener('click', function (event) {
    event.preventDefault();
    ingredientsContent.style.display = 'block';
    preparationContent.style.display = 'none';
  });

  preparationLink.addEventListener('click', function (event) {
    event.preventDefault();
    ingredientsContent.style.display = 'none';
    preparationContent.style.display = 'block';
  });
