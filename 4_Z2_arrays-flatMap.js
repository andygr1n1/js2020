const techs =['react mst', 'angular', 'vue', 'node js']
console.log(techs.map(tech => tech.split(' ')).flat())
console.log(techs.flatMap(tech => tech.split(' ')))