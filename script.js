const answers = [undefined,undefined,undefined,undefined,undefined,undefined,undefined]
let id = 0
document.querySelectorAll('.btn-container').forEach(btnContainer => {
    btnContainer.querySelectorAll('button').forEach(btn => {
        const current = id
        btn.onclick = () => {
            answers[current] = btn.getAttribute('c') === '1'
            if (isComplete()) changePage()
        }
    })
    id++
})

const isComplete = () => answers.reduce((a,b) => !!a&&!!b)
const calculatePoints = () => answers.reduce((a,b) => a+b)
function changePage() {
    const points = calculatePoints()
    console.log(answers)
    console.log(points)
    window.location = points === 7 ? './complete.html' : 'again.html'
}