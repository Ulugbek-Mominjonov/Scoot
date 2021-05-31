function dropdown(index){
    changeIcon(index);
    toggleClass(index);
}
function toggleClass(index){
    var classname = index + "";
    var text = document.getElementsByClassName(classname);
    text[0].classList.toggle("open");
}
function changeIcon(index){
    var icon = index + "";
    document.getElementById(icon).classList.toggle("close-icon");
}

let navList = document.querySelector('.nav-list'),
    scotinBtn = document.querySelector('.nav-get-scotin'),
    toggleBtn = document.querySelector('.gamburger');

function createElements() {
    let toggleWrapper = document.createElement('div'),
        navigationWrapper = document.createElement('div'),
        cloneNavList = navList.cloneNode(true),
        cloneScootinBtn = scotinBtn.cloneNode(true);
    
    toggleWrapper.classList.add('toggler-wrapper')
    navigationWrapper.classList.add('navigation-wrapper')

    toggleWrapper.appendChild(navigationWrapper);
    document.querySelector('.site-header').appendChild(toggleWrapper);
    navigationWrapper.appendChild(cloneNavList);
    navigationWrapper.appendChild(cloneScootinBtn);

    cloneNavList.style.display = "flex";
    cloneScootinBtn.style.display = "block";
}
createElements()

if(toggleBtn){
    toggleBtn.addEventListener('click', () => {
        let toggleWrapper = document.querySelector('.toggler-wrapper'),
            siteHeader = document.querySelector('.site-header');

        siteHeader.classList.toggle('site-header--gamburger');
        toggleBtn.classList.toggle('close-btn');
        toggleWrapper.classList.toggle('toggler-wrapper-open');

    })
}