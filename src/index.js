module.exports = function toReadable (number) {
    let numbers, dozens, hundereds;

    //  DEFINING WORDS
    const dictNums = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero',
      }
      const dictDozens = {
        1: 'one',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
        0: 'zero',
    }
    const secondDozen = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    }
    
    let dozensFormat;
    
    const divide = number.toString().split('');
    
    // IF GIVEN NUMBER CONSISTS OF HUNDREDS, DOZENS AND NUMBERS
    if (divide[2]) {
        hundereds = divide[0];
        dozens = divide[1];
        numbers = divide[2];
        
    // IF DOZENS IS 0 THEN DON'T PRINT THEM
        if ( dozens != '0' ) {
            dozensFormat = ' '+dictDozens[dozens];
        } else {
            dozensFormat = '';
        }

        if ( numbers != '0' ) {
            if ( dozens == '1' ) {
                return(`${dictNums[hundereds]} hundred ${secondDozen[numbers]}`);
            } else {
                return(`${dictNums[hundereds]} hundred${dozensFormat} ${dictNums[numbers]}`);
            }
        // IF GIVEN NUMBER HAS TEN
        } else if ( numbers == '0' && dozens == '1' ){
            return ( `${dictNums[hundereds]} hundred ${secondDozen[numbers]}` );
        } else {
            return (`${dictNums[hundereds]} hundred${dozensFormat}`);
        }        
    // IF GIVEN NUMBER CONSISTS DOZENS AND NUMBERS
    } else if (divide[1]) {
        dozens = divide[0];
        numbers = divide[1];
    
        if (dozens == '1'){
            return(`${secondDozen[numbers]}`);
        } else {
            if(numbers == '0'){
                return(`${dictDozens[dozens]}`);
            } else {
                return(`${dictDozens[dozens]} ${dictNums[numbers]}`);
            }
        }
    
    // IF GIVEN NUMBER CONSISTS OF NUMBERS ONLY
    } else {
        numbers = divide[0];
        return(`${dictNums[numbers]}`);
    }
}
