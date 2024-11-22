app.filter('truncate',function () {
    return function (input, length) {
        input = input + "";
        if (input.length > length) {
            var desc = input.substring(0, length);
            return desc + "...";
        } else {
            return input;
        }
    };
});

app.filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + " (" + city + ") " + number).trim();
    };
});

app.filter('makeRange', function() {
  return function(inp) {
    var range = [+inp[1] && +inp[0] || 0, +inp[1] || +inp[0]];
    var min = Math.min(range[0], range[1]);
    var max = Math.max(range[0], range[1]);
    var result = [];
    for (var i = min; i <= max; i++) result.push(i);
    if (range[0] > range[1]) result.reverse();
    return result;
  };
});

app.filter('keys', function() {
    return function(input) {
      if (!input) {
        return [];
      }
      return Object.keys(input);
    }
});

app.filter('isEmpty', function () {
    var bar;
    return function (obj) {
        for (bar in obj) {
            if (obj.hasOwnProperty(bar)) {
                return false;
            }
        }
        return true;
    };
});

app.filter('inArray', function() {
    return function(array, value) {
        return array.indexOf(value) !== -1;
    };
});