  const documentHTML=document;
  const inputs = documentHTML.querySelectorAll("input");
  const sendBtn = documentHTML.getElementById('sendBtn');
  //const sidebarCollapse = documentHTML.getElementById('sidebarCollapse');
  const icon = documentHTML.querySelector("#sidebarCollapse i");
  const smallData = documentHTML.querySelector('small');
  const myTextArea= documentHTML.getElementById('textArea');
  const remainCharText=documentHTML.getElementById('remainChar');
  const MAX_CHARS=100;
  let remaining = MAX_CHARS - myTextArea.value.length; 


 $(function() {
   // Sidebar toggle behavior
   $("#sidebarCollapse").click(function () {
     $("#sidebar, #content").toggleClass("active");
   });

   //sideUp toggle behavior
   $(".accordion").click(function (e) {
     e.preventDefault();
     var $this = $(this);

     if (!$this.hasClass(".activeAccordion")) {
       $(".panel").slideUp(1000);
       $(".accordion").removeClass(".activeAccordion");
     }

     $this.toggleClass(".activeAccordion");
     $this.next().slideToggle();
   });

   //Counter behavior
   counterDown();

   //Count Remaining Characters
   remainChar();
 });


/**************************************Functions***************************************************** */
function counterDown(){
  var countdown = new Date("April  17, 2023 18:00:00").getTime();
    var x = setInterval(function(){
      var now = new Date().getTime();
      var distance = countdown - now;
      if(distance < 0){
        clearInterval(x);
        console.log('hena');
        days=00;
        hours=00;
        minutes=00;
        seconds=00;
        documentHTML.getElementById('daysData').innerHTML=days + ' D';
        documentHTML.getElementById('hoursData').innerHTML=hours + ' H';
        documentHTML.getElementById('minutesData').innerHTML=minutes + ' M';
        documentHTML.getElementById('secondsData').innerHTML=seconds + ' S';
      }
      else{
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 *60) / 1000);
        //documentHTML.getElementById("timer").innerHTML = "D " + days + " H " +  hours + " M " + minutes + " S " + seconds;
        documentHTML.getElementById('daysData').innerHTML=days + ' D';
        documentHTML.getElementById('hoursData').innerHTML=hours + ' H';
        documentHTML.getElementById('minutesData').innerHTML=minutes + ' M';
        documentHTML.getElementById('secondsData').innerHTML=seconds + ' S';
    }},1000);
  
}

function remainChar(){
  myTextArea.addEventListener('input',function(){  
    remaining = MAX_CHARS - myTextArea.value.length;
    const color = remaining <= MAX_CHARS * 0.1 ? 'red': null;
    remainCharText.textContent=`${remaining} Characters Remaining`;
    remainCharText.style.color=color; 
    if(remaining <= -1){
    //alert('no');
    sendBtn.setAttribute("disabled", true);
  }
  else{
    sendBtn.removeAttribute('disabled')
  }
  })
};

function setForm(){
  inputs[0].value='';
  inputs[1].value='';
  inputs[2].value='';
  myTextArea.value='';
  remaining=MAX_CHARS;
  remainCharText.textContent=`${remaining} Characters Remaining`;
  remainCharText.style.color=null; 
}

//icon
function iconeToggle(element) {
  if (element.classList.contains("fa-bars")) {
    element.classList.replace("fa-bars", "fa-xmark");
    smallData.textContent='CLOSE';
  } else {
    element.classList?.replace("fa-xmark", "fa-bars");
    smallData.textContent='OPEN';
  }
}

/**************************************Event Listeners************************************************ */

sendBtn.addEventListener('click',function(e){
 e.preventDefault();
 setForm();
//  alert('msg sent');
});

documentHTML.addEventListener('DOMContentLoaded',function(){
  sendBtn.removeAttribute('disabled'); 
})

sidebarCollapse.addEventListener('click',function(){
  iconeToggle(icon);
})