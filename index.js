var uppercase = 'HELLO!'
var lowercase = "hello!"

function shout(string) {
  return string.toUpperCase()

}
function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  string = string.toUpperCase
  console.log(string)
}

logShout('hello')
