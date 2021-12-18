alert('A beállítások az oldal frissítésével vagy bezárásával TÖRLŐDNEK!')

// Menu megjelenitese/eltuntetese //
function openEditButton() {
    
    document.getElementById('szerkesztés_gomb').style.display = 'none'
    document.getElementById('bezaras_gomb').style.display = 'block'
    document.querySelector('aside').style.display = 'block'

}
function closeEdit(){

    document.getElementById('bezaras_gomb').style.display = 'none'
    document.getElementById('szerkesztés_gomb').style.display = 'block'
    document.querySelector('aside').style.display = 'none'
} 
//===================================================================================//

// SZERKESZTES //


// Fejlec formazas //

function feljlecCimGomb(){

    
    var input = document.getElementById('fejlecCim').value
    var doboz = document.getElementById('fejlecCimDoboz')
    document.querySelector('header h1').remove()
    var ujCim = document.createElement('h1')
    doboz.appendChild(ujCim).innerHTML = input
    
}
//----------------------------------------------------------------------------//

function fejlecFeketeBetu(){

    document.querySelector('header').style.color = 'black'
}
function fejlecFeherBetu(){

    document.querySelector('header').style.color = 'white'
}
function fejlecKekBetu(){

    document.querySelector('header').style.color = 'blue'
}
function fejlecZoldBetu(){

    document.querySelector('header').style.color = 'green'
}
function fejlecPirosBetu(){

    document.querySelector('header').style.color = 'red'
}
//---------------------------------------------------------------------------//

function fejlecFeherHatter(){

    document.querySelector('header').style.background = 'white'
}
function fejlecSzurkeHatter(){

    document.querySelector('header').style.background = '#404040'
}
function fejlecZoldHatter(){

    document.querySelector('header').style.background = '#70db70'
}
function fejlecKekHatter(){

    document.querySelector('header').style.background = '#33cccc'
}
//=================================================================================//

// Tartalom formazas //



function tartalomTartalmaGomb(){

    var inputszoveg  = document.getElementById('tartalomDobozSzerkeszto').value
    var doboz = document.getElementById('szoveg')
    document.querySelector('main section p').remove()
    var ujszoveg = document.createElement('p')
    doboz.appendChild(ujszoveg).innerHTML = inputszoveg
   
}
//-----------------------------------------------------------------------------------------//

function tartalomFeketeBetu(){

    document.querySelector('section').style.color= 'black'

}
function tartalomFeherBetu(){

    document.querySelector('section').style.color= 'white'
    
}
function tartalomKekBetu (){

    document.querySelector('section').style.color= 'blue'
    
}
function tartalomPirosBetu() {

    document.querySelector('section').style.color= 'red'
    
}
function tartalomZoldBetu() {

    document.querySelector('section').style.color= 'green'
    
}
//---------------------------------------------------------------------------------//

function TartalomFeherSzovegHatter(){

    document.querySelector('main section').style.background = 'white'
}
function TartalomSzurkeSzovegHatter(){

    document.querySelector('main section').style.background = '#404040'
}
function TartalomKekSzovegHatter(){

    document.querySelector('main section').style.background = '#33cccc'
}
function TartalomZoldSzovegHatter(){

    document.querySelector('main section').style.background = '#70db70'
}
//-----------------------------------------------------------------------------------------//

function TartalomFeherHatter(){

    document.querySelector('main').style.background = 'white'
}
function TartalomSzurkeHatter(){

    document.querySelector('main').style.background = '#404040'
}
function TartalomKekHatter(){

    document.querySelector('main').style.background = '#33cccc'
}
function TartalomZoldHatter(){

    document.querySelector('main').style.background = '#70db70'
}
