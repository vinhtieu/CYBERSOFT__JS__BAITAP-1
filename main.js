//-----------Tinh lương nhân viên-----------//

/*
 *Input: Số Ngày Làm
 * Calculating: Các Bước Xử Lý (Thuật Toán)
    +Step 1: Gán giá trị (100,000) cho hằng số AMOUNT_PER_HOUR
    +Step 2: Tạo hàm (calcSalary) với tham số (days) của người dùng nhập vào
    +Step 3: Gán phép nhân (days * AMOUNT_PER_HOUR) cho biến (salary)
    +Step 4: In kết quả ra console
 * Output: Lương
*/

const AMOUNT_PER_HOUR = 100000;
function calcSalary(days) {
  var salary = days * AMOUNT_PER_HOUR;
  console.log(`//-----------Tinh lương nhân viên-----------//`);
  console.log(`Days Of Work: ${days} days`);
  console.log(`Salary: ${salary.toLocaleString("vi-VN")} VND`);
  console.log("");
}

var daysOfWork = 30;
calcSalary(daysOfWork);

//-----------Tinh Giá Trị Trung Bình-----------//

/*
 * Input: 5 số thực
 * Calculating: Các Bước Xử Lý (Thuật Toán)
    +Step 1: Tạo hàm (calcAverage) với 5 tham số;
    +Step 2: Gán tổng giá trị của 5 tham số vào biến total;
    +Step 3: Gán kểt quả của phép tính (total / 5) vào biến (average);
    +Step 4: In kết quả ra console
 * Output: Giá trị trung bình
*/
function calcAverage(num1, num2, num3, num4, num5) {
  var total = num1 + num2 + num3 + num4 + num5;
  var average = total / 5;
  console.log("//-----------Tinh Giá Trị Trung Bình-----------//");
  console.log(`Numbers: ${num1},${num2},${num3},${num4},${num5}`);
  console.log(`Average: ${average}`);
  console.log("");
}

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;

calcAverage(a, b, c, d, e);

//-----------Quy Đổi Tiền-----------//

/*
 * Input: Tiền USD
 * Calculating: Các Bước Xử Lý (Thuật Toán)
    +Step 1: Gán giá trị (23500) vào hằng số EXCHANGE_RATE_USD_TO_VND
    +Step 2: Tạo hàm (convertCurrency) với tham số (usd)
    +Step 3: Gán kểt quả của phép tính (usd * EXCHANGE_RATE_USD_TO_VND) vào biến (result);
    +Step 4: In kết quả ra console
 * Output: Tiền VND
*/

const EXCHANGE_RATE_USD_TO_VND = 23500;

function convertCurrency(usd) {
  var vnd = usd * EXCHANGE_RATE_USD_TO_VND;
  console.log(`//-----------Quy Đổi Tiền-----------//`);
  console.log(`USD: ${usd.toLocaleString("vi-VN")}`);
  console.log(`VND: ${vnd.toLocaleString("vi-VN")}`);
  console.log("");
}

var usd = 2;
convertCurrency(usd);

//-----------Tính Chu Vi Và Diện Tích-----------//

/*
 * Input: Chiều Dài và Chiều Rộng
 * Calculating: Các Bước Xử Lý (Thuật Toán)
    +Step 1: Tạo hàm (calcRectangle) với 2 tham số (Width, Length)
    +Step 2: Gán kết quả của phép tính (width * length) vào biến (area)
    +Step 3: Gán kểt quả của phép tính (2(width + length)) vào biến (perimeter);
    +Step 4: In kết quả ra console
 * Output: Diện Tích và Chu Vi
*/

function calcRectangle(width, length) {
  var area = width * length;
  var perimeter = 2 * (width + length);
  console.log(`//-----------Tính Chu Vi Và Diện Tích-----------//`);
  console.log(`Width: ${width}`);
  console.log(`Length: ${length}`);
  console.log(`--> Area: ${area}`);
  console.log(`--> Perimeter: ${perimeter}`);
  console.log("");
}

var width = 10;
var length = 5;

calcRectangle(width, length);

//-----------Tính Tổng Ký Số-----------//

/*
 * Input: 1 số có 2 chữ số
 * Calculating: Các Bước Xử Lý (Thuật Toán)
    +Step 1: Tạo hàm (add) với tham số (num)
    +Step 2: Lấy số hàng đơn vị (num % 10)
    +Step 3: Gán số trên vào biến (x)
    +Step 4: Lấy số hàng đơn chục (num / 10)
    +Step 5: Gán số trên vào biến (y)
    +Step 6: Gán tổng của 2 biến trên (x + y) vào biến (total);
    +Step 7: In kết quả ra console
 * Output: Tổng 2 Ký Số
*/

function add(num) {
  var x = num % 10;
  var y = num / 10;
  var total = x + y;
  console.log(`//-----------Tính Tổng Ký Số-----------//`);
  console.log(`Number: ${num}`);
  console.log(`total: ${Math.floor(total)}`);
  console.log("");
}

var num = 12;
add(num);
