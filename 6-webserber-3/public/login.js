function onSubmit(event) {
  event.preventDefault()
  const form = document.getElementById('login-form');
  const elements = form.elements
  const username = elements['username'].value
  const password = elements['password'].value

  fetch('/auth/login', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'error', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ username, password }),
  })
    .then(r => {
      console.log(r)
    }, e => {
      console.log(e)
    })

  return false
}