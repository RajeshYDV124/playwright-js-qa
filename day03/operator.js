// const passed = 18;
// const total = 20;
// console.log(`Total passed percentage is : ${(passed / total) * 100} % `);

// const report =  `Test Report :
//     Passed : ${passed} 
//     Failed : ${total - passed}`;

// console.log(report);

// // console.log()
// console.log(`test Report :
//      Passed : ${passed}
//      Filed ${total-passed}`);



// let passedCount = 0;
// passedCount = passedCount +1;
// passedCount += 1;
// passedCount ++;
// passedCount -=1;
// console.log(passedCount);

// console.log(5=="5"); // true: == converts types first, then compares
// console.log(5==="5");  // false: === also checks the type (number vs string)

// console.log(0==""); // true  😬
// console.log(0==="");// false ✅

// const statusCode = 200;
// const responseTime = 1.2;
// const isFast = responseTime <2;
// console.log(statusCode === 200 &&  responseTime ===1.2);
// console.log (statusCode === 400 || isFast );
// console.log(!isFast);
// console.log(isFast);

const total = 25;
const passed = 21;
const failed = total - passed;
const passrate = (passed / total) * 100;
console.log(`Total : ${total} | Passe : ${passed} | Failed : ${failed}`);
console.log(`Pass rate is : ${passrate}%`) ;

const expectedStatus = 200;
const actuallStatus = "200";
console.log(`Loose check (==) : ${expectedStatus == actuallStatus} `);
console.log(`Strict check (===) : ${expectedStatus===actuallStatus} `);

const isRealease = passrate <= 90 && failed <=5;
console.log(`Is real ready? : ${isRealease}`);
