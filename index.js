let bulbImg=document.getElementById("bulb")
let catImg=document.getElementById("cat")
let switchStatus=document.getElementById("switch-status")
let onButton=document.getElementById("btn-on")
let offButton=document.getElementById("btn-off")

offButton.onclick=function(){
    bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatus.textContent="switched OFF"
    offButton.style.background="red"
    offButton.style.color="white"
    onButton.style.background=" rgba(128, 128, 128, 0.713)"
    onButton.style.color="black"
}
onButton.onclick=function(){
    bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatus.textContent="switched ON"
    onButton.style.background="green"
    onButton.style.color="white"
    offButton.style.background=" rgba(128, 128, 128, 0.713)"
    offButton.style.color="black"
}
