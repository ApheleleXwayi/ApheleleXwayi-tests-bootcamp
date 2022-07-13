 //find most profitableday
function mostProfitableDay(salesData) {
    const grouped = salesData.reduce((group, data) => {
      const { day } = data;
      group[day] = group[day] ?? [];
      group[day].push(data);
      return group;
    }, {});
  
    const keys = Object.keys(grouped);
    let mostProfitableDay = "";
    let highestDailySale = 0;
    for (let i = 0; i < keys.length; i++) {
      const dailyTotal = grouped[keys[i]].reduce((a, b) => a + b.sales, 0);
      if (dailyTotal > highestDailySale) {
        highestDailySale = dailyTotal;
        mostProfitableDay = keys[i];
      }
    }
    return mostProfitableDay;
  };
  