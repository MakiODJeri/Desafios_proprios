// JSON
const exampleObj = {
    cpu: '6800u',
    memory: [16,'gigabyte'],
    storage: [512,'gigabyte']
} 
const exampleJSON = JSON.stringify(exampleObj)//Obj to JSON
console.log(exampleJSON)
const exampleStr = JSON.parse(exampleJSON)//JSON to Obj
console.log(exampleStr)