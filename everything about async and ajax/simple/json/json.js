const anything = {
    "name" : "nstrn",
    "age" : 23,
    "profile" : {
        "work" : true,
        "job" : false
    },
    "skills" : [{
        "lang" : "javascript",
        "frameworks" : [ "react.js", "react.native"]
    }]
}

anything.profile.job = "true"

console.log(anything)
console.log(anything.name)
console.log(anything.age)
console.log(anything["name"])
console.log(anything["age"])
console.log(anything.profile.work)
console.log(anything.profile.job)

const string = JSON.stringify(anything)
console.log(string)

const object = JSON.parse(string)
console.log(object)

for(let i in anything.skills){
    for(let j in anything.skills[i].frameworks){
        console.log(anything.skills[i].frameworks[j])
    }
}