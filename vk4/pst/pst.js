function Kuukausi(kk) 
{
  switch (kk) {
    case "1":
     return "Tammikuu"; 
      break;

      case "2":
        return "Helmikuu"; 
         break;

         case "3":
          return "Maaliskuu"; 
           break;

           case "4":
            return "Huhtikuu"; 
             break;

             case "5":
              return "Toukokuu"; 
               break;

               case "6":
                return "Kesäkuu"; 
                 break;

                 case "7":
                  return "Heinäkuu"; 
                   break;

                   case "8":
                    return "Elokuu"; 
                     break;

                     case "9":
                      return "Syyskuu"; 
                       break;

                       case "10":
                        return "Lokakuu"; 
                         break;

                         case "11":
                          return "Marraskuu"; 
                           break;

                           case "12":
                            return "Joulukuu"; 
                             break;
  
    default:
      break;
  }
}
function vastaus()
{
 var boxi = document.getElementById("KK").value;
  document.write(Kuukausi(boxi));
}