// Armazena Tema selecionado

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('estilo')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log("Evento clicado:", mode)
        setTheme(mode)
    })
}

function setTheme(mode) {

    if (mode == 'estilo') {
        document.getElementById('theme-style').href = 'estilo.css';
    }

    if (mode == 'light') {
        document.getElementById('theme-style').href = 'light.css';
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode)

}

