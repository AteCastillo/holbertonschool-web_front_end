/**
 * @param {number} size
 * @param {string} weight
 * @param {string} transform
 * @param {string} background
 * @param {string} color
 */

 function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = font-weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}


function main() {
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);

    let paragraph = document.createElement("p");
    let parText = document.createTextNode("Welcome Holberton!");
    paragraph.appendChild(parText);

    let spookyButton = document.createElement("button");
    let spookyText = document.createTextNode("Spooky");
    spookyButton.appendChild(spookyText);
    spookyButton.onclick("spooky");

    let darkButton = document.createElement("button");
    let darkText = document.createTextNode("Dark mode");
    darkButton.appendChild(darkText);
    darkButton.onclick("darkMode");

    let screamButton = document.createElement("button");
    let screamText = document.createTextNode("Scream mode");
    darkButton.appendChild(screamButton);
    screamButton.onclick("screamMode")

    document.body.appendChild(paragraph);
    document.body.appendChild(spookyButton);
    document.body.appendChild(darkButton);
    document.body.appendChild(screamButton);
}
main();