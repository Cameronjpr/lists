document.getElementById('addItem').addEventListener('click', async function () {
  console.log('This is a popup!')

  const res = await fetch('https://lists-web.vercel.app/api/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: 'https://www.google.com',
    }),
  })

  const data = await res.json()

  console.log(data)
})
