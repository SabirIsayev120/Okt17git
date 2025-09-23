const text = prompt("Zəhmət olmasa , bir cümlə daxil edin.")
 if (text === null || text === "") {
    console.log(Mətn daxil edilmədi.);
    else {
        const index = text.indexOf(".")
        if (index !==  -1) {
            console.log(`ilk nöqtenin yeləşdiyi index: ${index}`);
            
        } else {
            console.log("index tapilmadı");
            
        }
    }
 }