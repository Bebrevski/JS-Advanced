function attachEventsListeners() {
    let inputBtn = document.getElementById('convert');

    inputBtn.addEventListener('click', convert);

    function convert() {

        let distance = document.getElementById('inputDistance').value;
        let unitIn = document.getElementById('inputUnits').value;
        let result = document.getElementById('outputDistance');
        let unitOut = document.getElementById('outputUnits').value;

        let meter = 1;
        let millimeters = 1000;
        let centimeters = 100;
        let miles = 0.000621371192;
        let inches = 39.3700787;
        let kilometers = 0.001;
        let feet = 3.2808399;
        let yards = 1.0936133;

        switch (unitIn)
        {
            case "m": distance /= meter; break;
            case "mm": distance /= millimeters; break;
            case "cm": distance /= centimeters; break;
            case "mi": distance /= miles; break;
            case "in": distance /= inches; break;
            case "km": distance /= kilometers; break;
            case "ft": distance /= feet; break;
            case "yrd": distance /= yards; break;
        }

        switch (unitOut)
        {
            case "m": distance *= meter; break;
            case "mm": distance *= millimeters; break;
            case "cm": distance *= centimeters; break;
            case "mi": distance *= miles; break;
            case "in": distance *= inches; break;
            case "km": distance *= kilometers; break;
            case "ft": distance *= feet; break;
            case "yrd": distance *= yards; break;
        }

        result.value = distance.toFixed(3);
    }
}