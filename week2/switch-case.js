//Struct:
//    switch(variable)
//    {
//      case '':
//         todo statement
//         break;
//      case '':
//         todo statement
//         break;
//     default: 
//         break
//    }

const lang = 'tw';
let DbgMsg = null;
switch (lang)
{
    case 'tw':
        DbgMsg = 'Taiwan';
        break;
    case 'Japan':
        DbgMsg = '愛以洗爹嚕';
        break;
    case 'Korea':
        DbgMsg = '沙拉黑油';
        break;
    default:
        DbgMsg = 'Unknown';
        break;
}

console.log(DbgMsg);