const tempload=()=>{
    let icon=document.getElementById('icon');
    icon.innerHTML="&#xf2cb";

    setTimeout(()=>{
        icon.innerHTML="&#xf2ca"; 
        icon.style.color="White";  
    },1000);
    setTimeout(()=>{
        icon.innerHTML="&#xf2c9";
        icon.style.color="Green";
    },2000);
    setTimeout(() => {
        icon.innerHTML="&#xf2c8";
        icon.style.color="yellow";
    },3000);
    setTimeout(()=>{
        icon.innerHTML="&#xf2c7";
        icon.style.color="red";
    },4000);
}

tempload();

setInterval(tempload,5000);