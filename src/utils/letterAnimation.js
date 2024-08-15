var words = document.getElementsByClassName('word')
var wordArray = []
var currentWord = 0

words[currentWord].style.opacity = 1
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i])
}

function changeWord() {
  var cw = wordArray[currentWord]
  var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1]
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i)
  }

  for (var i1 = 0; i1 < nw.length; i1++) {
    nw[i1].className = 'letter behind'
    nw[0].parentElement.style.opacity = 1
    animateLetterIn(nw, i1)
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = 'letter out'
  }, i * 80)
}

function animateLetterIn(nw, i) {
  setTimeout(
    function () {
      nw[i].className = 'letter in'
    },
    340 + i * 80
  )
}

function splitLetters(word) {
  var content = word.innerHTML
  word.innerHTML = ''
  var letters = []
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span')
    letter.className = 'letter'
    letter.innerHTML = content.charAt(i)
    word.appendChild(letter)
    letters.push(letter)
  }

  wordArray.push(letters)
}

changeWord()
setInterval(changeWord, 4000)
