let Adjectives = {
    0:"Crazy",
    1:"Amazing",
    2:"Fire"
}
let Shop_Name = {
    0:"Engine",
    1:"Foods",
    2:"Garments"
}
let Another_Word = {
    0:"Bros",
    1:"Limited",
    2:"Hub"
}

function random_1(max) {
    return Math.floor(Math.random() * max);
}
let a = random_1(3)
let b = random_1(3)
let c = random_1(3)

let adj;
let sh_name;
let an_word;


if (a==0) {
    adj = Adjectives[0]
}else if(a==1){
    adj = Adjectives[1]
}else{
    adj = Adjectives[2]
}

if (b==0) {
   sh_name = Shop_Name[0]
}else if(b==1){
   sh_name = Shop_Name[1]
}else{
   sh_name = Shop_Name[2]
}

if (c==0) {
   an_word = Another_Word[0]
}else if(c==1){
   an_word = Another_Word[1]
}else{
   an_word = Another_Word[2]
}

console.log(adj+" "+ sh_name +" "+ an_word)


