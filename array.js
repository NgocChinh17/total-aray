window.onload = function () {
    function $(id) {
       return document.getElementById(id);
    }
    var form = $("input-form");
    var arrayInput = $("array");
    var inputError = $("invalid-feedback");
 
    function invalid(array) {
       return array.length === 0 ||
          array.some(function (item) {
             return item.length === 0 || isNaN(item);
          })
          ? true
          : false;
    }
 
    function avgValue(array) {
       var size = array.length;
       var sum = array.reduce(function (currentSum, currentItem) {
          return currentSum + currentItem;
       }, 0);
       return (sum / size).toFixed(2);
    }
 
    function convertArray(array) {
       return array.map(function (item) {
          return parseInt(item);
       });
    }

    
    
 
    form.onsubmit = function (event) {
       event.preventDefault();
       arrayInput.classList.remove("error");
       inputError.classList.remove("show");
       var arrayValue = arrayInput.value;
       var arrayValue = arrayValue.split(",");
       if (invalid(arrayValue)) {
          arrayInput.classList.add("error");
          inputError.classList.add("show");
          return;
       }
       var convertedArray = convertArray(arrayValue);
       $("your-array").value = arrayValue.join(", ");
 
       //Fill result
       $("1").value = avgValue(convertedArray);
    };
 };