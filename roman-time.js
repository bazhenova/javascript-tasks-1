var hours = parseInt(process.argv[2]);
var minutes = parseInt(process.argv[3]);
var second = ['I','II','III','IV','V','VI','VII','VIII','IX'];
var first = ['--','X','XX','XXX','XL','L'];
var firstNumber, secondNumber, result, roman;

var list = [['%%%%%','%%%  %%%','%       %','%     ','    ','        '],
            ['  %  ',' %    % ','%       %','%     ','    ','        '],
            ['  %  ','  %  %  ','%       %','%     ',' %% ','        '],
            ['  %  ','   %%   ',' %     % ','%     ',' %% ',' %%%%%% '],
            ['  %  ','  %  %  ','  %   %  ','%     ','    ','        '],
            ['  %  ',' %    % ','   % %   ','%     ',' %% ','        '],
            ['%%%%%','%%%  %%%','    %    ','%%%%%%',' %% ','        ']];

if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60)
    console.log('Время указано неверно');
else
{
    result = '';
    result += arabToRoman(hours) + ':';
    result += arabToRoman(minutes);
    console.log(result);
    console.log('');
    printASCII(result);
}

function arabToRoman(number)
{
    roman = '';
    firstNumber = parseInt(number / 10);
    secondNumber = number % 10;
    if (firstNumber == 0)
    {
        if (secondNumber == 0)
        {
            roman += first[0];
        }
        else
        {
            roman += second[secondNumber-1];
        }
    }
    else
    {
        roman += first[firstNumber];
        if (secondNumber != 0)
        {
            roman += second[secondNumber-1];
        }       
    }
    return roman;
}

function printASCII(str)
{
    var len = str.length;
    for (k = 0; k < 7; k++)
    {
        var res = '';
        for (i = 0; i < len; i++)
        {
            if (str[i] == 'I')
                res += list[k][0] + ' ';
            if (str[i] == 'X')
                res += list[k][1] + ' ';
            if (str[i] == 'V')
                res += list[k][2] + ' ';
            if (str[i] == 'L')
                res += list[k][3] + ' ';
            if (str[i] == ':')
                res += list[k][4] + ' ';
            if (str[i] == '-')
                res += list[k][5] + ' ';
        }
        console.log(res);
    }
}
