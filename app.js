console.log("Hello world");

//Csere programozás tétele

let a=3;
let b=4;
let c;

c=a;
a=b;
b=c;

console.log(a,b,c);

//1. Sorozatszámítás, összegzés tétele

let osszeg=0;
var x= [5,7,2,9,5,4];
for(let i=0;i<x.length;i++)
{
    osszeg= osszeg+x[i];
}
console.log("az osszeg értéke:"+osszeg);


//Eldöntés tétele

var i=0;
while(i <x.length && x[i] !==2) 
{
    i= i+1;
}

if (i< x.length) 
{
    let van= true;
    console.log("van benne 2-es");
}

//Lineáris keresés

var i=0;
while(i <x.length && x[i] !==2) 
{
    i= i+1;
}
let sorszam;

if (i< x.length) 
{
    let van= true;
    sorszam=1;
    console.log("Sorszam"+sorszam);
    console.log("van benne 2-es");
    
}

//Megszámlálás tétele

let db=0;
for(let i=0;i<x.length;i++)
    { if(x[i] %2 ==0)
    {db= db+1;}
    }
console.log("Ennyi páros szám van:" +db);

//Maximum kiválasztás

let max =0;
for(let i=1;i<x.length;i++)
    {if (x[i] > x[max])
    {
      max=i;
    }
    }
console.log("A legnagyobb elem:" +x[max]);

//6. buborékrendezés
// let x= [5,7,2,9,5,4];

for(let i=x.length;i> 1; i--)
{
    for (let j=0;j<i-1;j++)
    {
        if (x[j] > x[j+1] )
        {
           c= x[j];
            x[j]= x [j+1];
            x[j+1]=c;
        }     
    }
}
console.log(x);

//7. Minimum kiválasztásos rendezés

//Alap tömb
var m = [5,7,2,9,3];

for(let i=0;i<(m.length-1);i++)
    { let min= i;
      for(let j=(i+1);j<m.length;j++)
          {if (m[min] > x[j])
               {min=j;}
          }
          
          c=m[i];
           m[i]= m[min];
           m[min]=c;
    }
//Rendezett tömb
     console.log(m);

//Faktoriális

function fakt (n) {
    if(n===0){
        return 1;}
    else{
        return (n * fakt(n-1));
    }
}

console.log("4! = "+fakt(4));



