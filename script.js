
    //Question 1
    public static int getLastIndex(String[] names) {
    
        const names = {Jane, Mary, Carl};
       console.log(getLastIndex(names))
       return names.length - 1;
    }

    //Question 2
    public static int getSecondToLastIndex(String[] names) {
        const names = {Jane, Mary, Carl};   
        return names.length - 2;
    }

    //Question 3
    public static String getFirstElement(String[] names) {
        const names = {Jane, Mary, Carl}; 
        return names[0];
    }

    //Question 4
    public static String getLastElement(String[] names) {
        const names = {Jane, Mary, Carl}; 
        return names[2];

    }

    //Question 5
    public static String getSecondToLastElement(String[] names) {
        const names = {Jane, Mary, Carl};
        return names[2] - 1;
    }

    // Question 6
    public static int getSum(int[] ints) {
        const ints = [1, 2, 3, 4, 5];
        let sum = 0;
        for (let x = 0; x < ints.length; x++){
            sum += ints[x];
        }
        return sum;
    }

   // Question 7
    public static int getAverage(int[] ints) {
        const ints = [1, 2, 3, 4, 5];
        let sum = 0;
        for (let x = 0; x < ints.length; x++){
            sum += ints[x];
        }

        return sum / ints.length;
    }
    // Question 8
    public static String extractAllOddNumbers(int[] numbers) {
      const numbers = [1, 2, 3, 4, 5];
      for (let x = 0; x < ints.length; x++){
           if(ints[x] % 2 !== 0){
            return numbers;

           }
        }
     
    }


   // Question 9
    public static String extractAllEvenNumbers(int[] numbers) {
          const numbers = [1, 2, 3, 4, 5];
      for (let x = 0; x < ints.length; x++){
           if(ints[x] % 2 == 0){
            return numbers;

           }
        }
        
    }

    // Question 10
    public static boolean contains(String[] names, String element) {
      
        return false;
    }

    // Question 11
    public static int getIndexByElement(String[] names, String element) {
     return 0;
    }


    //Question 13  us e=> 20 to 3 for range
    public static void printOddNumbersInRange(int start, int end){
        
    }

    //Question 14
    public static String printGivenStringTimesNumberGiven(String str, int n) {
     return null;
    }


    //Question 15
    public static int wordsInAStringCounter(String str){
        return 0 ;
    }

    //Question 16 - A, E, I, O, U
    public static int vowelsCounter(String str){
       

        return 0;
    }


    //Question 16

    public static String[] swap(String[] stringArray) {
       return null;
    }


    //Question 17
    /**
     * Given the following legend
     *
     * f   >>   7
     * s   >>   $
     * 1   >>   !
     * a   >>   @
     *
     * your method should replace any character represented by a key in the legend, with its corresponding value.
     * Input  = "The Farmer went to the store to get 1 dollar's worth of fertilizer"
     * Output = "The 7@rmer went to the $tore to get ! doll@r'$ worth of 7ertilizer"
     *
     * output = The 7@rmer went to the $tore to get ! doll@r'$ worth o7 7ertilizer
     */

    public static String replaceCharacters(String str) {
       return null;
    }



    //Question 18
    //Method call - replaceWuTangTwoThreeDivisible("The quick brown fox jumps over the lazy dog")
     // Sample Output -  The Wu Tang Wu jumps Wu the Wu Tang
    public static String replaceWuTangTwoThreeDivisible(String stringInput) {
       
        return null;
    }


    //Question 19
    public static String createStringOfFibonnaciUpToMax(int maxnumber) {
       
        return null;
    }



}