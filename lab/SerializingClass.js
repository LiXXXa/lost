class SerializeContent {


    serialize(arr) {
        console.log(arr)

        arr.sort((a, b) => a - b);
        let deltas = [arr[0]]; // Записываем первое число как есть
        for (let i = 1; i < arr.length; i++) {
            console.log(i, arr[i],  arr[i - 1])
            deltas.push(arr[i] - arr[i - 1]); // Записываем разницу между текущим и предыдущим числом
        }
        let serialized = '';
        let count = 1;
        console.log('deltas', deltas)

        for (let i = 1; i < deltas.length; i++) {
            // Если текущая дельта равна предыдущей
            if (deltas[i] === deltas[i - 1]) {
                count++; // Увеличиваем счетчик повторений
            } else {
                // Если текущая дельта отличается от предыдущей
                // Добавляем количество повторений и саму дельту в строку
                serialized += String.fromCharCode(count + 30); // Записываем количество повторений
                serialized += String.fromCharCode(deltas[i - 1] + 30); // Записываем саму дельту
                count = 1; // Сбрасываем счетчик повторений
            }
        }
        // Обработка последней серии
        serialized += String.fromCharCode(count + 30);
        serialized += String.fromCharCode(deltas[deltas.length - 1] + 30);
        console.log('serialized', serialized)
        return serialized;
    }

     deserialize(serialized) {
        let numbers = []; // Массив для хранения десериализованных чисел
        let count = 0; // Счетчик для восстановления чисел из дельт
        // Проход по строке сериализации
        for (let i = 0; i < serialized.length; i += 2) {
            // Получаем количество повторений и дельту из каждой пары символов
            let repeatCount = serialized.charCodeAt(i) - 30; // Получаем количество повторений
            let delta = serialized.charCodeAt(i + 1) - 30; // Получаем дельту
            // Восстанавливаем числа из дельт и добавляем их в массив
            for (let j = 0; j < repeatCount; j++) {
                count += delta;
                numbers.push(count);
            }
        }
        return numbers; // Возвращаем десериализованный массив чисел
    }
}