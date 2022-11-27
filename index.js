const count = () => {
  const text = document.getElementById('text-box').value
  document.getElementById(
    'results',
  ).innerText = `O texto que você digitou tem ${text.length} palavras`
}
