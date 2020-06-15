// ///////////////////
// START: TAB ANIMATION
// ///////////////////
var tabs = document.querySelectorAll('.tabs a');

for (var i = 0; i < tabs.length; i++) {
 tabs[i].addEventListener('click', function(e) {

   var li = this.parentNode
   var div = this.parentNode.parentNode.parentNode.parentNode.parentNode

   if (li.classList.contains('active')) {
    return false;
   }

   //On retire la class active sur l'onglet actif
   div.querySelector('.tabs .active').classList.remove('active');
   //On ajoute la classe active sur l'onglet actuel
   li.classList.add('active');

   //On retire la class active sur le contenu actif
   div.querySelector('.tabs-content .active').classList.remove('active');
   //On ajoute la class active sur le contenu correspondant au click
   div.querySelector(this.getAttribute('href')).classList.add('active');
 });
}
// ///////////////////
// END: TAB ANIMATION
// ///////////////////



//AFFICHER LE NOM DE L'ONGLET DANS LE TITRE EN HAUT DE PAGE
var $nav_li_active = document.querySelector('.nav-box li.active');
var $dashboard_header_title = document.querySelector('.dashboard-header-title');
var $dashboard_header = document.querySelector('.dashboard-header');
var $li_nav = document.querySelectorAll('.nav-box li');
var $nav_li_sport = document.querySelector('.nav-li-sport');
var $nav_li_poker = document.querySelector('.nav-li-poker');
for (let i = 0; i < $li_nav.length; i++) {
  $li_nav[i].addEventListener('click', function(){
  $dashboard_header_title.innerHTML = $li_nav[i].textContent;
  });
};
//AFFICHER LE NOM DE L'ONGLET DANS LE TITRE EN HAUT DE PAGE




// EFFET AFFICHER / CACHER UN CHART
var $tab_globalEnjeuxPbj_button = document.querySelector('.title-globaleEnjeuxPbj-container');
var $tab_globalEvolution_button = document.querySelector('.title-globaleEvolution-container');
var $tab_globalPrevisionEnjeuxPbj_button = document.querySelector('.title-globalePrevisionEnjeuxPbj-container');
var $tab_globalPrevisionEvo_button = document.querySelector('.title-globalePrevisionEvo-container');

var $tab_globalEnjeuxPbj_container = document.querySelector('.chart-global-enjeux-pbj');
var $tab_globalEvolution_container = document.querySelector('.chart-global-evolutionGlobale');
var $tab_globalPrevisionEnjeuxPbj_container = document.querySelector('.chart-prevision-enjeux-pbj');
var $tab_globalPrevisionEvo_container = document.querySelector('.chart-global-PrevisionEvoGlobale');

var $arrow_globaleEnjeuxPbj = document.querySelector('.arrow-globaleEnjeuxPbj');
var $arrow_globaleEvolution = document.querySelector('.arrow-globaleEvolution');
var $arrow_globalPrevisionEnjeuxPbj = document.querySelector('.arrow-globalePrevisionEnjeuxPbj');
var $arrow_globalPrevisionEvo = document.querySelector('.arrow-globalePrevisionEvo');


$tab_globalEnjeuxPbj_button.addEventListener('click', function(){
  $tab_globalEnjeuxPbj_container.classList.toggle("tab-chart-hidden");
  $arrow_globaleEnjeuxPbj.classList.toggle("arrow-desactive");
  $arrow_globaleEnjeuxPbj.classList.toggle("arrow-active");
});

$tab_globalEvolution_button.addEventListener('click', function(){
  $tab_globalEvolution_container.classList.toggle("tab-chart-hidden");
  $arrow_globaleEvolution.classList.toggle("arrow-desactive");
  $arrow_globaleEvolution.classList.toggle("arrow-active");
});

$tab_globalPrevisionEnjeuxPbj_button.addEventListener('click', function(){
  $tab_globalPrevisionEnjeuxPbj_container.classList.toggle("tab-chart-hidden");
  $arrow_globalPrevisionEnjeuxPbj.classList.toggle("arrow-desactive");
  $arrow_globalPrevisionEnjeuxPbj.classList.toggle("arrow-active");
});

$tab_globalPrevisionEvo_button.addEventListener('click', function(){
  $tab_globalPrevisionEvo_container.classList.toggle("tab-chart-hidden");
  $arrow_globalPrevisionEvo.classList.toggle("arrow-desactive");
  $arrow_globalPrevisionEvo.classList.toggle("arrow-active");
});
// EFFET AFFICHER / CACHER UN CHART
