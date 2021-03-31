document.getElementById('start').addEventListener('click', async () => {
  const reps = +getReps()
  for (let i = 0; i < reps; i++) {
    document.getElementById('audio').play()
    await startTimer(getLength(), document.getElementById('counter'))
    console.log('rep')
  }
  document.getElementById('counter').innerHTML = 'Done'
})

function getLength() {
  return document.getElementById('time').value
}

function getReps() {
  return document.getElementById('reps').value
}

async function startTimer(length, element) {
  let count = 0
  async function oneSecond() {
    element.innerHTML = count
    count++
    await delay(1000)
    return new Promise(resolve => resolve())
  }
  while (count <= length) {
    await oneSecond()
  }
  return new Promise(resolve => resolve())
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

