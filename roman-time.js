var hours = parseInt(process.argv[2], 10);
var minutes = parseInt(process.argv[3], 10);
var second = ['I','II','III','IV','V','VI','VII','VIII','IX'];
var first = ['--','X','XX','XXX','XL','L'];

if (isNaN(hours) || isNaN(minutes) ||hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60)
{
    console.log('Время указано неверно');
}
else
{
    var result = '';
    result += arabToRoman(hours) + ':';
    result += arabToRoman(minutes);
    var image = printASCII(result);
    console.log(result + '\n\n' + image);
}

function arabToRoman(number)
{
    var roman = '';
    var firstNumber = Math.floor(number / 10);
    var secondNumber = number % 10;
    var isZeroFirst = true;
    var isZeroSecond = true;
    if (firstNumber !== 0)
    {
        roman += first[firstNumber];
        isZeroFirst = false;
    }
    if (secondNumber !== 0)
    {
        roman += second[secondNumber-1];
        isZeroSecond = false;
    }
    if (isZeroFirst && isZeroSecond)
    {
        roman += first[0];
    }
    return roman;
}

function printASCII(str)
{
    var list = [['%%%%%','%%%  %%%','%       %','%     ','    ','        '],
                ['  %  ',' %    % ','%       %','%     ','    ','        '],
                ['  %  ','  %  %  ','%       %','%     ',' %% ','        '],
                ['  %  ','   %%   ',' %     % ','%     ',' %% ',' %%%%%% '],
                ['  %  ','  %  %  ','  %   %  ','%     ','    ','        '],
                ['  %  ',' %    % ','   % %   ','%     ',' %% ','        '],
                ['%%%%%','%%%  %%%','    %    ','%%%%%%',' %% ','        ']];
    var letterIndexes = {
        'I': 0,
        'X': 1,
        'V': 2,
        'L': 3,
        ':': 4,
        '-': 5
    };
    var len = str.length;
    var res = '';
    for (var row = 0; row < 7; row++)
    {
        for (i = 0; i < len; i++)
        {
            var index = letterIndexes[str[i]];
            res += list[row][index] + ' ';
        }
        res += '\n';
    }
    return res;
}
