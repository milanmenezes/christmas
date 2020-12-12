var messages = ["May this Christmas season bring you closer to all those that you treasure in your heart. Have a Merry Christmas and a Happy New year!"]
document.getElementById("message").innerHTML = messages[0];
var queryString = _.chain( location.search.slice( 1 ).split( /&/g ) ).map( function ( item ) { if ( item ) return item.split( /=/ ).map( function ( str ) { return decodeURIComponent( str ); } ); } ).compact().object().value();
console.log(queryString);
if(queryString.name){
  document.getElementById("name").innerHTML=queryString.name+"!";
  document.title="Merry Christmas "+queryString.name+"!";
  document.getElementsByTagName('meta')["description"].content = "Merry Christmas "+queryString.name+"!";
}
if(queryString.from){
  document.getElementById("from").innerHTML=queryString.from;
}

document.addEventListener("click",()=>{    
  document.getElementById('music').play();
  document.removeEventListener('click', this);})