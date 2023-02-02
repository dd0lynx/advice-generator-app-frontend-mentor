const id = document.getElementById('id')
const advice = document.getElementById('advice')

const generateAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
    const slip = await response.json()

    console.log(slip.slip)
    id.innerText = slip.slip.id
    advice.innerText = '"' + slip.slip.advice + '"'
}

generateAdvice()