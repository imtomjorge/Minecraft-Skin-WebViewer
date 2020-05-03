// Minecraft Skin WebViewer - 2020 - Copyright 
// https://github.com/tjorge-scw/Minecraft-Skin-WebViewer

// View 1 - Basic head

const input1 = document.getElementById('user-1');
const imageteteBob1 = document.getElementById('img-1');

input1.addEventListener('keyup', function()
{
  imageteteBob1.setAttribute("src", 'https://minotar.net/avatar/' + input1.value + '/100');
});

// View 2 - Avatar with Helmet

const input2 = document.getElementById('user-2');
const imageteteBob2 = document.getElementById('img-2');

input2.addEventListener('keyup', function()
{
  imageteteBob2.setAttribute("src", 'https://minotar.net/helm/' + input2.value + '/100.png');
});


// View 3 - Isometric Head 
const input3 = document.getElementById('user-3');
const imageteteBob3 = document.getElementById('img-3');

input3.addEventListener('keyup', function()
{
  imageteteBob3.setAttribute("src", 'https://minotar.net/cube/' + input3.value + '/100.png');
});

// View 4 - Body

const input4 = document.getElementById('user-4');
const imageteteBob4 = document.getElementById('img-4');

input4.addEventListener('keyup', function()
{
  imageteteBob4.setAttribute("src", 'https://minotar.net/body/' + input4.value + '/100.png');
});

// View 5 - Body with armor

const input5 = document.getElementById('user-5');
const imageteteBob5 = document.getElementById('img-5');

input5.addEventListener('keyup', function()
{
  imageteteBob5.setAttribute("src", 'https://minotar.net/armor/body/' + input5.value + '/100.png');
});

// View 6 - Bust

const input6 = document.getElementById('user-6');
const imageteteBob6 = document.getElementById('img-6');

input6.addEventListener('keyup', function()
{
  imageteteBob6.setAttribute("src", 'https://minotar.net/bust/' + input6.value + '/100.png');
});

// View 7 - Skin

const input7 = document.getElementById('user-7');
const imageteteBob7 = document.getElementById('img-7');

input7.addEventListener('keyup', function()
{
  imageteteBob7.setAttribute("src", 'https://minotar.net/skin/' + input7.value);
});



