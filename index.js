

const myArray = [];
let tests = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
    Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1),
    Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1),
    Array.from({ length: 500 }, () => Math.floor(Math.random() * 300) + 1),
    Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1)
];
for (let i=1; i<= 1000; i++) {
    //generate random array of numbers. from 1 to 300
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(300);
    const myRandom  = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    myArray.push(myRandom)
}
console.log(myArray)


let serializer = new SerializeContent();
console.log('serializer', serializer)

// сериализация
let json = serializer.serialize(tests, null, 2);
console.log('JSON:');
console.log(json);

// десериализация
let color2 = serializer.deserialize(json);
console.log('Десериализованный цвет:');
console.log(color2);

