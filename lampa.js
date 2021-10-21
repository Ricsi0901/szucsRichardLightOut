class Lampa {
    constructor(elem,i) {
        this.elem = elem;
        this.allapot = false;
        this.id=i;
        this.setSzin();
        this.elem.on("click",() =>{     
        this.setAllapot();
        this.lampaFelkapcsol();
        })



    }
    setAllapot(){
        this.allapot=!this.allapot;
        this.setSzin();
    }
    setSzin() {
        if (this.allapot) {
            this.elem.css("background-color", "blue");
        } else {
            this.elem.css("background-color", "green");
        }
    }
    lampaFelkapcsol(){
        let esemeny=new CustomEvent("lampaFelkapcsolEsemeny",{detail:this.id});
        window.dispatchEvent(esemeny);

    }
    
   
}