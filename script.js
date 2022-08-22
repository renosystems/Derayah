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
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  const accordionItemHeaders2 = document.querySelectorAll(
    ".accordionn-item-headerr2"
  );
  accordionItemHeaders2.forEach((accordionItemHeader2) => {
    accordionItemHeader2.addEventListener("click", (event) => {
      accordionItemHeader2.classList.toggle("active");
      const accordionItemBody2 = accordionItemHeader2.nextElementSibling;
      if (accordionItemHeader2.classList.contains("active")) {
        accordionItemBody2.style.maxHeight =
          accordionItemBody2.scrollHeight + "px";
      } else {
        accordionItemBody2.style.maxHeight = 0;
      }
    });
  });
  
