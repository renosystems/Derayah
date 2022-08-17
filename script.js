function openLeftSection(sectionName, elmnt) {

    var i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
  
    tablinks = document.getElementsByClassName("investFund-right-list");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');;
    }
  
    document.getElementById("fadedText").textContent=document.getElementById(sectionName).textContent;
    document.getElementById("fadedText").style.width='300px';
  
    elmnt.classList.toggle('active');
    document.getElementById("TitleText").textContent=elmnt.children[1].textContent;
    document.getElementById("TitleText").style.width='270px';
  }
  
