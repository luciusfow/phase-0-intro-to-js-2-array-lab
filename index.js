// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
    return cats
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}
function appendCat(){
     const cats2 = [...cats, "Broom"]
    return cats2
}
function prependCat(){
    const cats3 = ["Arnold", ...cats]
    return cats3
}
function removeLastCat(){
const copyCats = cats.slice(0,-1)
return copyCats
}
function removeFirstCat(){
    const copyCats2 = cats.slice(1)
    return copyCats2
}