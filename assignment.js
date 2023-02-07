/**
 * * তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
 * * এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
 * input : 5, 50, 33
 * output : 7.5, 75, 49.5
 * */

function mindGame(number) {
    if (number < 0) {
        return "Please provide valid number";
    }
    let getValue = (((number * 3) + 10) / 2) - 5;
    return getValue;
}

// console.log(mindGame(5));



/**
 * * তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 
 * *এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।
 * Sample Input:‘Phero’,  ‘Batch7’, ‘chatgpt’
 * Output: odd, even, odd
 * */

function evenOdd(str) {

    if (str.length % 2 === 0) {
        return "even"
    } else if (str.length % 2 !== 0) {
        return "odd"
    }
}


// console.log(evenOdd("chatgpt"));


/**
 * * তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে। 
 * * এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
 * 
 * input : 6, -15, 15
 * output : -1, -22, 30 
 *  */

function isLGSeven(input) {
    let differ = input - 7
    if (differ < 7) {
        return differ;
    } else {
        return (input * 2);
    }
}

// console.log(isLGSeven(15));


/** 
 * * তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
 * 
 * * এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
 * 
 * input: [ 1,2,5 ], [ 2, -5, -7, -13 ], [ -4, -9, -5, -33, -55 ]
 * output: 0, 3, 5
*/

function findingBadData(arr) {
    let getBadData = [];
    for (let i = 0; i < arr.length; i++) {
        const index = arr[i];
        if (index <= 0) {
            getBadData.push(index);
        }
    }
    const totalBadDataCount = getBadData.length;
    return totalBadDataCount;
}
// console.log(findingBadData([ 1,2,5 ]));
/**
 * * তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
 * 
 * ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
 * ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
 * ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
 * 
 * [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
 * * এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
 * 
 * input: 1, 1, 1 or 20, 200, 50 or 100, 5, 1
 * output: 96 or 6970 or 303
*/

function gemsToDiamond(gems1, gems2, gems3) {
    const firstFriendPower = 21;
    const secondFriendPower = 32;
    const thirdFriendPower = 43;

    let firstFrndConvet = firstFriendPower * gems1;
    let secondFrndConvet = secondFriendPower * gems2;
    let thirdFrndConvet = thirdFriendPower * gems3;

    let totalDaimondConvert = firstFrndConvet + secondFrndConvet + thirdFrndConvet;

    if (totalDaimondConvert > (1000 * 2)) {
        return totalDaimondConvert - 2000;
    } else {
        return totalDaimondConvert;
    }
}

// console.log(gemsToDiamond(1, 1, 1));