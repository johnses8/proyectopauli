window.onload = ()=>{
    let loading = document.getElementById('lottiefiles');
    setTimeout (()=>{
        loading.style.display = 'none';
    },5000);

    let loadingindex = document.getElementById('pantalla_carga_home');
    setTimeout(()=>{
        loadingindex.style.visibility = 'visible';
    },5000);

    let loadinglogpage =document.getElementById('lottie-login');
    setTimeout(()=>{
        loadinglogpage.style.visibility = 'visible';
    })
}