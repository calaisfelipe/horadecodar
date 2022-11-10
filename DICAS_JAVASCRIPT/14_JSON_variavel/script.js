var json = '{"nome":"Felipe","idade":30,"profissao":"programador"}';

console.log(json)
console.log(typeof json)


//JSON

var obj = JSON.parse(json)

console.log(obj)
console.log(typeof obj)

//OBJ para JSON

var jsonFromObj = JSON.stringify(obj)

console.log(jsonFromObj)