function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var new_list = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < new_list.length; i++) {
    new_list[i].innerHTML = parseInt(new_list[i].innerHTML) + n
  }
}

function deepestChild() {
  var node = document.querySelector('div#grand-node')
  while (node.firstElementChild !== null) {
    node = node.firstElementChild
  }
  return node
}
