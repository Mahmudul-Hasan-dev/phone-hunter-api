const loadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayPhones(data.data)
    }
    catch (error) {
        console.log(error);
    }
}

const displayPhones = async (phones) => {
    // console.log(phones)
    const PhoneContainer = document.getElementById('phoneContainer');
    PhoneContainer.innerText = ``
    //display partial of array
    phones = phones.slice(0, 6);

    //display no phone
    const nophonemsg = document.getElementById('no-phone-msg')
    if (phones.length === 0) {
        nophonemsg.classList.remove('d-none')
    }
    else {
        nophonemsg.classList.add('d-none')
    }

    //display all phone
    phones.forEach(phone => {
        const newPhoneDiv = document.createElement('div');
        newPhoneDiv.classList.add('col')
        console.log(phone);
        newPhoneDiv.innerHTML = `
                        <div class="card p-4">
                            <img src="${phone.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${phone.phone_name}</h5>
                                <p class="card-text">${phone.slug}</p>
                            </div>
                        </div>`
        PhoneContainer.appendChild(newPhoneDiv);

    });
}
loadPhone();

document.getElementById('btn-search').addEventListener('click', function () {
    // console.log('btn-clicked')
    const searchInput = document.getElementById('search-input');
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    // console.log(searchInputValue)
    loadPhone(searchInputValue);
})