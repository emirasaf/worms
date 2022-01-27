var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "assets/sun.svg";
        document.getElementById("mockup-png").src='assets/mobile.png';
        document.getElementById("logo").src="assets/worms-logo.svg";
    }else{
        icon.src = "assets/moon.svg";
        document.getElementById("mockup-png").src='assets/mobile-dark.png';
        document.getElementById("logo").src="assets/worms-logo-dark.svg";

    }
}