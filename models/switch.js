// shirt
var shirt = document.getElementById("shirt"); 

   document.querySelector('#red').addEventListener('click', function () {
  shirt.setAttribute('collada-model', 'shirt');
  console.log('I was clicked!');
});

      document.querySelector('#shoes').addEventListener('click', function () {
  shirt.setAttribute('collada-model', 'shirt-white');
  console.log('I was clicked!');
});