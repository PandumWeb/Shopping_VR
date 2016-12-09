  // shirt

   document.querySelector('#red').addEventListener('click', function () {
    var lol = document.getElementById("lol"); 

  lol.setAttribute('collada-model', '#shirt');
  console.log('I was clicked!');
});

      document.querySelector('#grey').addEventListener('click', function () {
        var lol = document.getElementById("lol"); 

  lol.setAttribute('collada-model', '#shirt-grey');
  console.log('I was clicked!');
});