console.log('Funcionando')

let themeDots = document.getElementsByClassName("theme-dot")

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log("Evento clicado:", mode)
        setTheme(mode)
    }) 
}

function setTheme(mode {
    if(mode == 'light'){
        
    }
})