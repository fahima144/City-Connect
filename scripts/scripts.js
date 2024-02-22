let count = 1;
let ticketPrice = 550;
let clickedButton = [];
document.getElementById('seatContainer').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        if (count <= 4 && !clickedButton.includes(e.target.id)) {
            if (count == 4) {
                document.getElementById('couponBtnEnable').removeAttribute('disabled');
                document.getElementById('couponName').removeAttribute('disabled');
            }
            document.getElementById('seatCounter').innerText = count;
            clickedButton.push(e.target.id);
            let seat = document.getElementById('seatCount');
            let seatFloat = parseFloat(seat.innerText);
            seatFloat--;
            seat.innerText = seatFloat;
            document.getElementById(e.target.id).classList.add('bg-busPrimary');
            let tableList = document.getElementById('tableList');
            let newRow = document.createElement('tr');
            let seatName = document.createElement('td');
            seatName.innerText = e.target.id;
            seatName.classList.add('text-[#03071299]');

            let seatClass = document.createElement('td');
            seatClass.classList.add('text-[#03071299]');
            seatClass.innerText = 'Economic'
            let seatPrice = document.createElement('td');
            seatPrice.classList.add('text-right');
            seatPrice.classList.add('text-[#03071299]');
            seatPrice.innerText = '550'
            newRow.appendChild(seatName);
            newRow.appendChild(seatClass);
            newRow.appendChild(seatPrice);
            tableList.append(newRow)
            let totalPrice = document.getElementById('totalPrice');
            let grandPrice = document.getElementById('grandTotal');
            let ticketPrice = count * 550;
            totalPrice.innerText = ticketPrice;
            grandPrice.innerText = ticketPrice;
            count++;
        } 
        else {
            alert("Maximum 4 Seats Can Be Selected! - Selecting the same seat is not possible!")
        }
    }
});
function getDiscount() {
    let couponType = document.getElementById('couponName');
    let discount = 0;
    let grandTotal = 0;
    let totalUpdatePrice = document.getElementById('totalPrice').innerText;
    if (couponType.value == 'NEW15') {
        let grandPrice = document.getElementById('grandTotal');
        discount = parseFloat(totalUpdatePrice) * 0.15;
        grandTotal = parseFloat(totalUpdatePrice) - discount;
        grandPrice.innerText = grandTotal;
        let newElement = document.getElementById('discountPrices');
        newElement.classList.remove('hidden');
        document.getElementById('discountPrice').innerText = discount;
        document.getElementById('couponBtn').classList.add('hidden');
    }
    else if (couponType.value == 'Couple20') {
        let grandPrice = document.getElementById('grandTotal');
        discount = parseFloat(totalUpdatePrice) * 0.20;
        grandTotal = parseFloat(totalUpdatePrice) - discount;
        grandPrice.innerText = grandTotal;
        let newElement = document.getElementById('discountPrices');
        newElement.classList.remove('hidden');
        document.getElementById('discountPrice').innerText = discount;
        document.getElementById('couponBtn').classList.add('hidden');
    } 
    else {
        alert("Wrong Coupon! Please Enter a valid coupon!")
    }
}
document.getElementById('phoneNumber').addEventListener('keyup', function(e){
    if (count > 1 && String(e.target.value).length > 0) {
        document.getElementById('nextBtn').removeAttribute('disabled');
    }
})
