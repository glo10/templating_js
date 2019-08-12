$(document).ready(function() {
  let patternRegex = new RegExp('{{ (.*) }}', 'g')
  let container = $('#container')
  let containerContent = container.html()
  let data = {
    title: 'Titre de niveau 1',
    paragraph: 'ceci est un paragraphe',
    span: 'hello world',
    hello: 'null',
    world:'thank',

  }

  while ((content = patternRegex.exec(containerContent)) != null) {
    let key = content[0]
    let value = content[1]
    if(data[key] == 'undefined' || !data[value] ){
      containerContent = containerContent.replace(key, '')
      console.error(' data error:',`No key ${key} in data or his value is null`)
    }
    containerContent = containerContent.replace(key, data[value])
  }
  container.html(containerContent)
})
