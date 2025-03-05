"use strict";
const employeeList = document.querySelector("ul");
function convertSalaryToNumber(salaryStr) {
    return parseFloat(salaryStr.replace(/[$,]/g, ""));
}
function sortList(list) {
    const listItems = [
        ...list.children
    ];
    listItems.sort((a, b)=>{
        const salaryA = convertSalaryToNumber(a.dataset.salary);
        const salaryB = convertSalaryToNumber(b.dataset.salary);
        return salaryB - salaryA;
    });
    listItems.forEach((item)=>list.appendChild(item));
}
sortList(employeeList);

//# sourceMappingURL=index.f75de5e1.js.map
