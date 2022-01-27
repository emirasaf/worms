var toggle = document.getElementById("seller")

toggle.onclick = function(){
    // document.getElementById("customer").style.fontWeight = "700";
    document.getElementById("customer").style.color = "rgba(0,0,0,0.6)"
    document.getElementById("seller").style.color = "var(--white-text-color)";
    // document.getElementById("seller").style.fontWeight = "800";
    document.getElementById("what-is-text").innerHTML = "With a Seller account; <br><br>You can create your marketplace at Worms. <br> Worms has a easy-to-use seller dashboard! You can add items to your shop or you can create discount coupons for your customers!";
}

var toggle2 = document.getElementById("customer")

toggle2.onclick = function(){
    // document.getElementById("seller").style.fontWeight = "700";
    document.getElementById("seller").style.color = "rgba(0,0,0,0.6)";
    document.getElementById("customer").style.color = "var(--white-text-color)";
    // document.getElementById("customer").style.fontWeight = "800";
    document.getElementById("what-is-text").innerHTML = "With a Customer account; <br><br>You can use your cryptocurrencyies for shopping. Also you get cashbacks for certain rates.In short, Worms is next generation of shopping experience! <br><br>Worms has a many benefits! Scroll to learn!";
}
