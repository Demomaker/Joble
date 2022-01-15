const Jobs = {
    WebDevelopper : 'web_developper',
    Minimum: 'minimum'
  };

  function getQuebecSalaries() {
    var map = new Map();
    map.set(Jobs.WebDevelopper, 200);
    map.set(Jobs.Minimum, 14.25);
    return map;
  }

  function getCanadaSalaries() {
    var map = new Map();
    map.set(Jobs.WebDevelopper, 300);
    map.set(Jobs.Minimum, 11);
    return map;
  }

  var quebecSalaries = getQuebecSalaries();
  var canadaSalaries = getCanadaSalaries();

  function getSalaryFor(job, place) {
    var salaries;
    if(place === "quebec") {
      salaries = quebecSalaries;
    }
    if(place === "canada") {
      salaries = canadaSalaries;
    }
    return salaries.get(job);
  }
  
  function getSalaryCalculationFor(unitOfTime, amount) {
    var salaryText = document.getElementById("salary").innerText;
    if(document.getElementById("hasCustomSalary").checked === true) {
      salaryText = document.getElementById("customSalaryValue").innerText;
    }
    var salary = Number(salaryText);
    if(unitOfTime === "years")
      return salary * 8 * 260 * amount;
    if(unitOfTime === "months") 
      return salary * 8 * 5 * 4 * amount;
    if(unitOfTime === "weeks")
      return salary * 8 * 5 * amount;
    if(unitOfTime === "days")
      return salary * 8 * amount;
    if(unitOfTime === "hours")
      return salary * amount;
  }

  function updateCustomSalary(event) {
    this.value = parseFloat(this.value).toFixed(2);
    var customSalaryValue = document.getElementById("customSalaryAmount").value;
    document.getElementById("customSalaryValue").innerHTML = customSalaryValue;
    updateSalaryCalculation();
  }

  function updateSalary() {
    var countrySelect = document.getElementById("country");
    var country = countrySelect.options[countrySelect.selectedIndex].value;
    var jobSelect = document.getElementById("careerOption");
    var job = jobSelect.options[jobSelect.selectedIndex].value;
    document.getElementById("salary").innerHTML = getSalaryFor(job, country);
  }

  function updateSalaryCalculation() {
    var amount = document.getElementById("salaryTimeAmount").value;
    var unitOfTimeSelect = document.getElementById("salaryCaluclationTimeUnit");
    var unitOfTime = unitOfTimeSelect.options[unitOfTimeSelect.selectedIndex].value;
    document.getElementById("amountOfUnit").innerHTML = amount;
    document.getElementById("unitOfTime").innerHTML = unitOfTime;
    document.getElementById("amountOfSalary").innerHTML = getSalaryCalculationFor(unitOfTime, amount);
  }

  function update() {
    updateSalary();
    updateSalaryCalculation();
  }