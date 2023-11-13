const containerE1 = document.querySelector('.container');

for(let index = 0; index < 56; index++) {
    const colorContainerE1 = document.createElement('div');
    colorContainerE1.classList.add('color-container');

    const colorcodeE1 = document.createElement('span');
    colorcodeE1.classList.add('color-code');
    colorContainerE1.appendChild(colorcodeE1);

    const copyButtonE1 = document.createElement('button');
    copyButtonE1.innerText = 'Copy';
    colorContainerE1.appendChild(copyButtonE1);

    containerE1.appendChild(colorContainerE1);
    // console.log(containerE1);
}
function randomColor() {
    const chars = ".0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = '';
    
    for(let index = 0; index < colorCodeLength; index++) {
        
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
        // console.log(colorCode);
    }
    return colorCode;
}
const colorContainerE1s = document.querySelectorAll('.color-container');
generateColors();
function generateColors() {
    
    for(let i = 0; i<colorContainerE1s.length; i++){
        const colorContainerE1 = colorContainerE1s[i];
        const newColorCode = randomColor();
        const colorCodeE1 = colorContainerE1.querySelector('.color-code');
        colorContainerE1.style.backgroundColor = '#' + newColorCode;
        colorCodeE1.innerText = '#' + newColorCode;
    }
}

colorContainerE1s.forEach((colorContainerE1) => {
    const copyButtonE1 = colorContainerE1.querySelector('button');
    const colorCodeE1 = colorContainerE1.querySelector('.color-code');

    copyButtonE1.addEventListener('click',() => {
        const colorCode = colorCodeE1.innerText;
        copytoClipBoard(colorCode);
    });
});

function copytoClipBoard(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
        alert('copied to Clipboard : ' +text);
    })
    .catch((error) => {
        console.log('Failed to copy to Clipboard', error);
    })
}