function solve(obj) {
    if (!obj.handsShaking){
      return obj;
    }else {
      obj.bloodAlcoholLevel += obj.weight * obj.experience * 0.1;
      obj.handsShaking = false;
      return obj;
    }
}

console.log(solve({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));