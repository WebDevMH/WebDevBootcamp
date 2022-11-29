const api_url = 'https://api.adviceslip.com/advice';

getAdvice();

async function getAdvice() {
  const response = await fetch(api_url);
  const data = await response.json();
  const advice = data.slip.advice;
  const id = data.slip.id;
  console.log(id);
  document.getElementById('id').textContent = 'ADVICE #' + id;
  document.getElementById('advice').textContent = advice;
}
