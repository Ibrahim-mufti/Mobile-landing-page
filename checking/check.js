function openCity(city){
   var tablinks = document.getElementsByClassName('tablinks')
   var tabcontent = document.getElementsByClassName('tabcontent')
   for(var i = 0; i < tabcontent.length; i++){
      tabcontent[i].style.display = 'none'
   }

   for (var i = 0; i < tablinks.length;i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
   }
   document.getElementById(city).style.display = "block"
   this.className+= ' active'
}