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
  function openNav(currentNav) {
    document.getElementById(currentNav).style.width = "100%";
  }
  function closeNav(currentNav) {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById(currentNav).style.width = "0";
  }
  function backNav(currentNav) {
    document.getElementById(currentNav).style.width = "0";
  }
  
  const accordionItemHeaders2 = document.querySelectorAll(
    ".SidenavInvest-accordion"
  );
  const accordionItemDiv2 = document.querySelectorAll(
    ".SidenavInvest-row"
  );
  accordionItemHeaders2.forEach((accordionItemHeader2) => {
    accordionItemHeader2.addEventListener("click", (event) => {
      accordionItemHeader2.classList.toggle("active");
      accordionItemHeader2.firstElementChild.classList.toggle("active");
      const accordionItemBody2 = accordionItemHeader2.nextElementSibling;
      if (accordionItemHeader2.classList.contains("active")) {
        accordionItemBody2.style.maxHeight =
          accordionItemBody2.scrollHeight + "px";
      } else {
        accordionItemBody2.style.maxHeight = 0;
      }
    });
  });
  const QuestionHeaders = document.querySelectorAll(
    ".QuestionSec-infoDiv-toggel"
  );
  QuestionHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody2 = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody2.style.maxHeight =
          accordionItemBody2.scrollHeight + "px";
      } else {
        accordionItemBody2.style.maxHeight = 0;
      }
    });
  });
  const MegaMenuHeaders = document.querySelectorAll(
    ".topMenu__text"
  );
  MegaMenuHeaders.forEach((MegaMenuHeader) => {
    MegaMenuHeader.addEventListener("click", (event) => {
      MegaMenuHeader.classList.toggle("active");
      
    });
  });
  
  const Search_icon=document.getElementById('searchIcon');
  Search_icon.addEventListener("click",function(){
    document.getElementById('searchSection').classList.toggle("active");
    document.getElementById('searchIconclose').classList.toggle("active");
    document.getElementById('SearchDiv').classList.toggle("active");
  });

  const Search_iconClose=document.getElementById('searchIconclose');
  Search_iconClose.addEventListener("click",function(){
    document.getElementById('searchSection').classList.toggle("active");
    document.getElementById('searchIconclose').classList.toggle("active");
    document.getElementById('SearchDiv').classList.toggle("active");
  });

  var myModal = document.getElementById('myModal')
  var myInput = document.getElementById('myInput')
  
  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  })

  var changeLan=document.getElementById('changeLanguage');
  changeLan.addEventListener('click',function(){
    var element = document.getElementsByTagName("BODY")[0];
    element.setAttribute("dir", "ltr");
  });
