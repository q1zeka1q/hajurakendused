
let x = 10
//         0   1   2      3
let arr =['a', 1, true, undefined];


let arr2=[
    ['a','b'],
    [1, [true, false]],
];

console.log(arr2[1][1][0]);






let json = {
    name: 'John',
    type:{
        color: 'red',
        width: 10,
        caunt: {
            type: 1
        },
        sum: function(x, y){
            return x + y;
        },
        calc2: ()=>'10',
    },
};

console.log(typeof json);

console.log(json.name);
console.log(json.type.color);
console.log(json.type.sum(5, 15));
console.log(json.type.calc2());

json.name = 'Mike';
console.log(json.name);

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}



let newArr = Object.entries(json);
console.log(newArr[1].type);

let arrValues = Object.values(json);
console.log("value:", arrValues[1].color);

let subQuery = Object.values(arrValues[1]);
console.log(subQuery[1]);

let arrKeys = Object.keys(json);
console.log(arrKeys[1]);


Object.entries(json).forEach((item)=>{
    console.log(item[0]);
});


let json2 =[
    {
        name: ["John","Doe",'Smith'],
        type:{
            color: 'red',
            width: 10,
            caunt: {
                type: 1
            },
            sum: function(x, y){
                return x + y;
            },
            calc2: ()=>'10',
        },
    },   
        {
        name: ["John2","Doe2",'Smith2'],
        type:{
            color: 'red',
            width: 10,
            caunt: {
                type: 1
            },
            sum: function(x, y){
                return x + y;
            },
            calc2: ()=>'10',
        },
    }   
    
];

json2.forEach(item=>{
    console.log(item.name);
});

console.log(typeof json2);


console.log (JSON.stringify(json2));
console.log (JSON.parse(JSON.stringify(json2)));

let tJson = '[{"name":["John","Doe","Smith"],"type":{"color":"red","width":10,"caunt":{"type":1}}},{"name":["John2","Doe2","Smith2"],"type":{"color":"red","width":10,"caunt":{"type":1}}}]'
console.log (JSON.parse(tJson));



//----------------------------------    CLASS WORK    ---------------------------------------------------//

//----------------------------------    Harjutused: Massivid, Array    ---------------------------------------------------//

//----------------------------------    1. Harjutus: Massiivi Modifitseerimine ja Lõikamine (push, pop, slice) ---------------------------------------------------//

let linnad = ['Tallinn', 'Tartu', 'Narva', 'Pärnu', 'Kuressaare'];
linnad.push('Kuressaare');
console.log(linnad);

let lastItem = linnad.pop();
console.log('Eemaldatud linn:', lastItem);
console.log(linnad);

let customItem = linnad.slice(1, 2);
console.log('-----', customItem);

//----------------------------------    2. Harjutus: Massiivi Otsimine (indexOf ja includes) ---------------------------------------------------//
const varvid = ["punane", "roheline", "sinine", "kollane", "roheline"];

let kasMustOn = varvid.includes("must");
console.log(kasMustOn);

let roheliseAsukoht = varvid.indexOf("roheline");
console.log(roheliseAsukoht);

let valgeAsukoht = varvid.indexOf("valge");
console.log(valgeAsukoht);

let viimaneRoheline = varvid.lastIndexOf("roheline");
console.log(viimaneRoheline);
//----------------------------------   3. Harjutus: Massiivi Liitmine ja Jagamine (join ja split) ---------------------------------------------------//

const ostukorv = ["piim", "leib", "juust", "munad"];
const toodeteKoodidStr = "A10-B25-C30-D45";

let ostunimekiri = ostukorv.join(", ");
console.log(ostunimekiri);

let koodideMassiiv = toodeteKoodidStr.split("-");
console.log(koodideMassiiv);

let csvFormat = ostukorv.join(",");
console.log(csvFormat);
//----------------------------------   4. Harjutus: Massiivi Kontrollijad (some ja every) ---------------------------------------------------//

const temperatuurid = [5, 12, 18, 2, 7, 10, 20];

let kasKülmetab = temperatuurid.some(temp => temp < 0);
console.log(kasKülmetab);

let kasJääbAlla20 = temperatuurid.every(temp => temp >= 20);
console.log(kasJääbAlla20);


const kasjaabsuurkui0 = temp => temp >= 0
let kasOnPäevaneTemperatuur = temperatuurid.every(kasjaabsuurkui0);
console.log(kasOnPäevaneTemperatuur);

//----------------------------------   5. Harjutus: Massiivi Keeruline Kombineerimine(concat ja spread operaator) ---------------------------------------------------//

const juurviljad = ["porgand", "kartul"];
const puuviljad = ["õun", "pirn", "banaan"];
const marjad = ["maasikas", "mustikas"];

let koikTooted_concat = juurviljad.concat(puuviljad);
console.log(koikTooted_concat);

let koikTooted_spread = [...juurviljad, ...puuviljad, ...marjad];
console.log(koikTooted_spread);

let segatud = ["Sega-Sega",...juurviljad, 100, ...puuviljad];
console.log(segatud);


const kasutajaProfiil = {
    Nimi: "Jane Doe",
    vanus: 28,
    isOnline: true,
    tervitusmeetod: () => "Tere tulemast tagasi!",
    tervitusmeetod: function() {
        return `Tere tulemast tagasi, ${this.Nimi}!`;
    },
};

const kasutajaProfiilFinished = {
    Nimi: kasutajaProfiil.Nimi,
    vanus: kasutajaProfiil.vanus,
    isOnline: kasutajaProfiil.isOnline,
    tervitusmeetod: kasutajaProfiil.tervitusmeetod1(),
    tervitusmeetod: kasutajaProfiil.tervitusmeetod2(),
};

console.log(JSON.stringify(kasutajaProfiil));
console.log(JSON.stringify(kasutajaProfiilFinished));


function customParse(data) {

    const cloneData = {...data}

    console.log(cloneData);

        Object.keys(data).  forEach(item => {
            console.log(key);

            if(typeof data[key] == 'function'){

                let _fn = data[key].bind(kasutajaProfiil);
                cloneData[key] = _fn();

            }else{
            cloneData[key] = data[key];
            }
        })
}
customParse(kasutajaProfiil);


console.log(JSON.stringify(kasutajaProfiil));
console.log(JSON.stringify(kasutajaProfiilFinished));
