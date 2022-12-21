const div = document.querySelector('.img-container')
for (let i = 1; i <= 12; i++) {
    const img = document.createElement('img')
    img.src = `./images/foto (${i}).jpeg`
    div.appendChild(img)
}