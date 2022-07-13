// mostProfitableDepartment
// This function finds the most profitable
function mostProfitableDepartment (salesData) {
    const grouped = salesData.reduce((group, data) => {
      const { department } = data;
      group[department] = group[department] ?? [];
      group[department].push(data);
  
      return group;
    }, {});
  
    const keys = Object.keys(grouped);
  
    let highestSales = 0;
    let mostProfitableDept = "";
    for (let i = 0; i < keys.length; i++) {
      const deptSales = grouped[keys[i]].reduce((a, b) => a + b.sales, 0);
  
      const findMostProfitable = () => {
        if (deptSales > highestSales) {
          highestSales = deptSales;
          mostProfitableDept = keys[i];
        }
      };
      findMostProfitable();
    }
  
    return mostProfitableDept;
  };
  // console.log(mostProfitableDepartment(salesData2));
  