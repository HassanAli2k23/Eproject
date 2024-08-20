$(document).ready(function() {

 // Volume Converter
$("#volumeConvert").click(function() {
  var volumeFrom = $("#volumeFrom").val();
  var volumeTo = $("#volumeTo").val();
  var volumeValue = $("#volumeValue").val();

  if (volumeFrom == volumeTo || volumeValue == "") {
      $("#volumeResult").val("Please select different units and enter a value.");
      return;
  }

  var volumeConversionFactors = {
      "l": 1, // 1 liter
      "ml": 1000, // 1 milliliter = 0.001 liters
      "gal": 0.264172, // 1 gallon = 0.264172 liters
      "oz": 33.814, // 1 fluid ounce = 0.033814 liters
      "pt": 0.568261, // 1 pint = 0.568261 liters
      "qt": 1.13652 // 1 quart = 1.13652 liters
  };

  var volumeResult = volumeValue * (volumeConversionFactors[volumeFrom] / volumeConversionFactors[volumeTo]);
  $("#volumeResult").val(volumeResult.toFixed(3));
});

  // Area Converter
  $("#areaConvert").click(function() {
      var areaFrom = $("#areaFrom").val();
      var areaTo = $("#areaTo").val();
      var areaValue = $("#areaValue").val();

      if (areaFrom == areaTo || areaValue == "") {
          $("#areaResult").val("Please select different units and enter a value.");
          return;
      }

      var areaConversionFactors = {
          "sqm": 1,
          "sqft": 10.7639,
          "sqmi": 2.59e6,
          "acre": 4046.86,
          "hectare": 10000
      };

      var areaResult = areaValue * (areaConversionFactors[areaTo] / areaConversionFactors[areaFrom]);
      $("#areaResult").val(areaResult.toFixed(2));
  });

  // Length Converter
  $("#lengthConvert").click(function() {
      var lengthFrom = $("#lengthFrom").val();
      var lengthTo = $("#lengthTo").val();
      var lengthValue = $("#lengthValue").val();

      if (lengthFrom == lengthTo || lengthValue == "") {
          $("#lengthResult").val("Please select different units and enter a value.");
          return;
      }

      var lengthConversionFactors = {
          "m": 1,
          "cm": 0.01,
          "mm": 0.001,
          "km": 1000,
          "in": 0.0254,
          "ft": 0.3048,
          "yd": 0.9144,
          "mi": 1609.34
      };

      var lengthResult = lengthValue * (lengthConversionFactors[lengthTo] / lengthConversionFactors[lengthFrom]);
      $("#lengthResult").val(lengthResult.toFixed(3));
  });

  // Temperature Converter
  $("#tempConvert").click(function() {
      var tempFrom = $("#tempFrom").val();
      var tempTo = $("#tempTo").val();
      var tempValue = $("#tempValue").val();

      if (tempFrom == tempTo || tempValue == "") {
          $("#tempResult").val("Please select different units and enter a value.");
          return;
      }

      var tempConversionFactors = {
          "c": 1,
          "f": 1.8,
          "k": 1
      };

      var tempResult;
      if (tempFrom == "c") {
          tempResult = (tempValue * tempConversionFactors[tempTo] + 32) * (tempTo == "k" ? 1 / 1.8 : 1);
      } else if (tempFrom == "f") {
          tempResult = (tempValue - 32) / tempConversionFactors[tempTo];
      } else {
          tempResult = tempValue / tempConversionFactors[tempTo];
      }

      $("#tempResult").val(tempResult.toFixed(2));
  });

  //Mass Converter
  $("#massConvert").click(function() {
      var massFrom = $("#massFrom").val();
      var massTo = $("#massTo").val();
      var massValue = $("#massValue").val();

      if (massFrom == massTo || massValue == "") {
          $("#massResult").val("Please select different units and enter a value.");
          return;
      }

      var massConversionFactors = {
          "kg": 1,
          "g": 0.001,
          "mg": 0.000001,
          "lb": 0.453592,
          "oz": 0.0283495
      };

      var massResult = massValue * (massConversionFactors[massTo] / massConversionFactors[massFrom]);
      $("#massResult").val(massResult.toFixed(3));
  });

  // Currency Converter
  $("#currencyConvert").click(function() {
      var currencyFrom = $("#currencyFrom").val();
      var currencyTo = $("#currencyTo").val();
      var currencyValue = $("#currencyValue").val();

      if (currencyFrom == currencyTo || currencyValue == "") {
          $("#currencyResult").val("Please select different currencies and enter a value.");
          return;
      }

      var currencyConversionFactors = {
          "usd": 1,
          "pkr": 278.60
      };

      var currencyResult = currencyValue * (currencyConversionFactors[currencyTo] / currencyConversionFactors[currencyFrom]);
      $("#currencyResult").val(currencyResult.toFixed(2));
  });
});