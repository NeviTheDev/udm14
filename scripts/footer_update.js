function UpdateFooter(){
    const date = new Date
    const year = date.getFullYear
    document.getElementById("footer").innerHTML = `© ${year} Nevorix, All Rights Reserved`
}