function UpdateFooter(){
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("footer").innerHTML = `© ${year} Nevorix, All Rights Reserved`
}