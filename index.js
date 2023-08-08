const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//get the total sum of the batteryBatches
const totalBatteries = batteryBatches.reduce((sum, value) =>{
    return sum + value;
})
