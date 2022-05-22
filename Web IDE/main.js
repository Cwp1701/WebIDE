var url = null

const editor = ace.edit('editor')
editor.setTheme('ace/theme/dracula')
editor.getSession().setMode('ace/mode/html')

function createURL(html) {
  var blob = new Blob([html], { type: 'text/html' })
  return URL.createObjectURL(blob)
}

function removeURL(url) {
  URL.revokeObjectURL(url)
}

function getIframe() {
  var iframe = document.getElementById('iframe')
  return iframe
}

function setIframeUrl(url) {
  var iframe = getIframe()
  iframe.src = url
}

function getEditorCode() {
  return editor.getValue()
}

function buttonclick() 
{
  var code = getEditorCode()
  removeURL(url)
  url = createURL(code)
  setIframeUrl(url)
}