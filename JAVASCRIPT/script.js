document.getElementById("pocetna").addEventListener("click",()=>{
    window.location.href = "../HTML/index.html";
});

document.getElementById("autor").addEventListener("click",()=>{
    window.location.href = "../HTML/Autor.html";
});

document.getElementById("uputstvo").addEventListener("click",()=>{
    window.location.href = "../HTML/Uputstvo.html";
});

function AboutCountry(id){
    if(id=="Srbija")
        {
            window.alert("Srbija\nSrbija je zemlja u jugoistočnoj Evropi sa glavnim gradom Beogradom, površinom od 88.361 km² i populacijom od oko 7 miliona stanovnika.")
        }

    if(id=="Madjarska")
        {
            window.alert("Madjarska\nMađarska je zemlja u srednjoj Evropi sa glavnim gradom Budimpeštom, površinom od 93.030 km² i populacijom od oko 9,6 miliona stanovnika.")
        }

    if(id=="Rumunija")
        {
            window.alert("Rumunija\nRumunija je zemlja u jugoistočnoj Evropi sa glavnim gradom Bukureštom, površinom od 238.397 km² i populacijom od oko 19,3 miliona stanovnika.")
        }
        
    if(id=="Bugarska")
        {
            window.alert("Bugarska\nBugarska je zemlja u jugoistočnoj Evropi sa glavnim gradom Sofijom, površinom od 110.994 km² i populacijom od oko 6,9 miliona stanovnika.")
        }

    if(id=="Makedonija")
        {
            window.alert("Makedonija\nSeverna Makedonija je zemlja u jugoistočnoj Evropi sa glavnim gradom Skopljem, površinom od 25.713 km² i populacijom od oko 2,1 miliona stanovnika.")
        }

    if(id=="CrnaGora")
        {
            window.alert("Crna Gora\nCrna Gora je zemlja u jugoistočnoj Evropi sa glavnim gradom Podgoricom, površinom od 13.812 km² i populacijom od oko 620.000 stanovnika.")
        }

    if(id=="Albanija")
        {
            window.alert("Albanija\nAlbanija je zemlja u jugoistočnoj Evropi sa glavnim gradom Tiranom, površinom od 28.748 km² i populacijom od oko 2,8 miliona stanovnika")
        }

    if(id=="BIH")
        {
            window.alert("Bosna i hercegovina\nBosna i Hercegovina je zemlja u jugoistočnoj Evropi sa glavnim gradom Sarajevom, površinom od 51.197 km² i populacijom od oko 3,3 miliona stanovnika.")
        }

    if(id=="Hrvatska")
        {
            window.alert("Hrvatska\nHrvatska je zemlja u jugoistočnoj Evropi sa glavnim gradom Zagrebom, površinom od 56.594 km² i populacijom od oko 4 miliona stanovnika")
        }
}

var audio1 = new Audio('../AUDIO/madjHimna.mp3');
function MadjHimna()
{
    audio1.play();
}
function MadjHimna1()
{
    audio1.pause();
}

var audio2 = new Audio('../AUDIO/rumHimna.mp3');
function RumHimna()
{
    audio2.play();
}
function RumHimna1()
{
    audio2.pause();
}

var audio3 = new Audio('../AUDIO/hrvHimna.mp3');
function HrvHimna()
{
    audio3.play();
}
function HrvHimna1()
{
    audio3.pause();
}

var audio4 = new Audio('../AUDIO/bihHimna.mp3');
function BihHimna()
{
    audio4.play();
}
function BihHimna1()
{
    audio4.pause();
}

var audio5 = new Audio('../AUDIO/srbHimna.mp3');
function SrbHimna()
{
    audio5.play();
}
function SrbHimna1()
{
    audio5.pause();
}

var audio6 = new Audio('../AUDIO/cgHimna.mp3');
function CgHimna()
{
    audio6.play();
}
function CgHimna1()
{
    audio6.pause();
}

var audio7 = new Audio('../AUDIO/bugHimna.mp3');
function BulHimna()
{
    audio7.play();
}
function BulHimna1()
{
    audio7.pause();
}

var audio8 = new Audio('../AUDIO/albHimna.mp3');
function AlbHimna()
{
    audio8.play();
}
function AlbHimna1()
{
    audio8.pause();
}

var audio9 = new Audio('../AUDIO/makHimna.mp3');
function MakHimna()
{
    audio9.play();
}
function MakHimna1()
{
    audio9.pause();
}