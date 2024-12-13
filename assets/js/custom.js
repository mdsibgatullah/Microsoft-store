// Home navbar style
const headerLeft = document.querySelectorAll('.header_left li');
// ACTIVE ALL FUNCTION
activeAll(headerLeft);
function activeAll(all){
    all.forEach(x => {
        x.addEventListener('click', function(){
        all.forEach(li=>li.classList.remove('active'));
        this.classList.add('active');
        });
    });
}


// ACTIVE REMOVE FUNCTION //
function overlayRemove(removeOverlay) {
    removeOverlay.classList.remove('active');
}
// overlay/active remove
const overlay = document.querySelector('.overlay');
function Overlay() {
    overlayRemove(overlay);
    overlayRemove(showMenu);
    overlayRemove(manageMenuIcon);
    overlayRemove(softwareList);
}
// ACTIVE ADD FUNCTION //
function addActive(menu){
    menu.classList.add('active');
    overlay.classList.add('active');
}
// Header
// User
const headerUserActive = document.querySelector('.header_user_active')
function headerUserIcon(){
    addActive(headerUserActive)
    overlay.addEventListener('click', function(){
        headerUserActive.classList.remove('active');
    })
}
const HelpActive = document.querySelector('.help_active')
function headerHelp() {
    HelpActive.classList.add('show');
    overlay.classList.add('active');
    overlay.addEventListener('click', function(){
        HelpActive.classList.remove('show');
    })
}

// Library
// filter list
const showMenu = document.querySelector('.filter_list');
function filterShow() {
    addActive(showMenu);
}
// manage menu add active
const manageMenuIcon = document.querySelector('.software_manage_list');
function manageMenu() {
    addActive(manageMenuIcon);
}
// filter add active
const softwareList = document.querySelector('.software_list');
function softwareMenuHead() {
    addActive(softwareList);
    overlay.classList.add('active');
}

// software_software => software_list
// ACTIVE ALL FUNCTION use
const softwareListActive  = document.querySelectorAll('.software_list li');
activeAll(softwareListActive);


const softwareActive = document.querySelectorAll('.software_contents .manage_menu');
softwareActive.forEach(x => {
    x.addEventListener('click', function(){
        overlay.classList.add('active');
        softwareActive.forEach(li=>li.classList.remove('active'));
    x.classList.add('active');
        document.querySelector('.overlay').addEventListener('click', function(){
            x.classList.remove('active');
        })
    });
});



// Software content
let softwareContents = document.querySelector('.software_contents');
let softwareGames = document.querySelector('.software_games');
let softwareTv = document.querySelector('.software_tv');
let softwareIncluded = document.querySelector('.software_included');
let softwareFilterShow = document.querySelector('.filter_show');
function softwareAllContent(){
    softwareContents.style.display = 'none';
    softwareGames.style.display = 'none';
    softwareTv.style.display = 'none';
    softwareIncluded.style.display = 'none';
    softwareFilterShow.style.display = 'block';
}
function softwareApp(){
    softwareAllContent()
    softwareContents.style.display = 'flex';
}
function softwareGame(){
    softwareAllContent()
    softwareGames.style.display = 'flex';
}
function softwareTV(){
    softwareAllContent()
    softwareTv.style.display = 'flex';
}
function softwareIncl(){
    softwareAllContent()
    softwareIncluded.style.display = 'flex';
    softwareFilterShow.style.display = 'none';
}
// software_software => software_list end
// setting 
const onOffBtn = document.querySelectorAll('.on_off_btn')
onOffBtn.forEach(x => {
        x.addEventListener('click', function(){
        this.classList.toggle('active');
        });
    });

    
// Home/Single app slider 
const homeSliderContents = document.querySelector('.home_cards');
const homeSliders = document.querySelectorAll('.home_cards .card')[0];
const homeSliderBtn = document.querySelectorAll('.home_NP');

firstCard = homeSliders.clientWidth;

homeSliderBtn.forEach(icon => {
    icon.addEventListener('click', () => {
        homeSliderContents.scrollLeft += icon.id == 'left' ? -firstCard : firstCard;
    });
});