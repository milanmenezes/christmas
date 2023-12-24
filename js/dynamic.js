var messages = ["May this Christmas season bring you closer to all those that you treasure in your heart. Have a Merry Christmas and a Happy New year!",
"May the joy of the holiday season fill your heart with warmth and bring you closer to cherished moments. Wishing you a Merry Christmas and a Happy New Year!",
"May this festive season draw you nearer to the ones you hold dear. Have a joyful Christmas and a prosperous New Year!",
"May the spirit of Christmas draw you closer to the people who matter most. Wishing you a Merry Christmas and a Happy New Year filled with love and laughter!",
"May the bonds of love and friendship grow stronger this Christmas. Have a Merry Christmas and a Happy New Year filled with precious moments and shared joy!",
"May this holiday season bring you closer to the ones who make your heart glow. Wishing you a Merry Christmas and a New Year filled with love, laughter, and lasting memories!"
];
document.getElementById("message").innerHTML = messages[Math.floor(Math.random() * messages.length)];
var queryString = _.chain( location.search.slice( 1 ).split( /&/g ) ).map( function ( item ) { if ( item ) return item.split( /=/ ).map( function ( str ) { return decodeURIComponent( str ); } ); } ).compact().object().value();
console.log(queryString);

var name;
if(queryString.name){
	name=queryString.name;
}
if(queryString.n){
  name=queryString.n;
}

if(name){
  name=name.replace("-"," ");
  name=titleCase(name);
  document.getElementById("name").innerHTML=name+"!";
  document.title="Merry Christmas "+name+"!";
  document.getElementsByTagName('meta')["description"].content = "Merry Christmas "+name+"!";
}
if(queryString.from){
  document.getElementById("from").innerHTML=queryString.from;
}

document.addEventListener("click",()=>{    
  document.getElementById('music').play();
  document.removeEventListener('click', this);})

function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}