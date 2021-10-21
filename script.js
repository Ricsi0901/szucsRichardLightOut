$(function(){
    const szuloElem=$("article");
    const sablonElem=$(".lampa");
    const lampatomb=[];
    for (let i = 0; i < 9; i++) {
        const ujElem=sablonElem.clone().appendTo(szuloElem);
        const lamp=new Lampa(ujElem,i);
        lampatomb.push(lamp);
        
    }
sablonElem.remove();
console.log(lampatomb);
//Feliratkozás az eseméynre
$(window).on("lampaFelkapcsolEsemeny",(esemeny)=>{
    console.log(esemeny.detail);
    let elemId=esemeny.detail;
    if(elemId%3!==0){
    lampatomb[elemId-1].setAllapot();
    }
    if (elemId%3!==2) {
        lampatomb[elemId+1].setAllapot();
    }if (elemId>=3) {
        lampatomb[elemId-3].setAllapot();
    }
    if (elemId<=5) {
        lampatomb[elemId+3].setAllapot();
    }
    
    
    


})
});