/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';


async function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}

async function get_individual(num, all_numbers) {
    all_numbers.innerHTML = "";
    let url0 = `http://numbersapi.com/${num - 1}?json`;
    let url1 = `http://numbersapi.com/${num}?json`;
    let url2 = `http://numbersapi.com/${num + 1}?json`;

    let nums = [];

    let num_text0 = await getData(url0);
    let num_text1 = await getData(url1);
    let num_text2 = await getData(url2);

    nums.push({number: num - 1, info: num_text0.text}, {number: num, info: num_text1.text}, {number: num + 1, info: num_text2.text});

    for (let number of nums) {
        let big_box = document.createElement("div");
        big_box.classList = 'container-fluid';

        let num_box = document.createElement('div');
        num_box.classList = "row align-items-center";

        let num_num = document.createElement('div');
        num_num.classList = 'col-3';
        let num_num_text = document.createElement("p");
        num_num_text.classList = "p";

        let num_info = document.createElement('div');
        num_info.classList = 'col-3';
        let num_info_text = document.createElement("p");
        num_info_text.classList = 'p border bg-light';

        num_num_text.innerHTML = number.number;
        num_num.appendChild(num_num_text);

        num_info_text.innerHTML = number.info;
        num_info.appendChild(num_info_text);

        num_box.appendChild(num_num);
        num_box.appendChild(num_info);

        big_box.appendChild(num_box);
        
        all_numbers.appendChild(big_box);
    }
}

async function get_batch(num, all_numbers) {
    all_numbers.innerHTML = "";
    let url = `http://numbersapi.com/${num - 1},${num},${num + 1}`;

    let my_nums = [num - 1, num, num + 1];
    let num_text = await getData(url);

    for (let num of my_nums) {
        let big_box = document.createElement("div");
        big_box.classList = 'container-fluid';

        let num_box = document.createElement('div');
        num_box.classList = "row align-items-center";

        let num_num = document.createElement('div');
        num_num.classList = 'col-3';
        let num_num_text = document.createElement("p");
        num_num_text.classList = "p";

        let num_info = document.createElement('div');
        num_info.classList = 'col-3';
        let num_info_text = document.createElement("p");
        num_info_text.classList = 'p border bg-light';

        num_num_text.innerHTML = num;
        num_num.appendChild(num_num_text);

        num_info_text.innerHTML = num_text[num];
        num_info.appendChild(num_info_text);

        num_box.appendChild(num_num);
        num_box.appendChild(num_info);

        big_box.appendChild(num_box);
        
        all_numbers.appendChild(big_box);
    }

}

async function clickedon() {
    let num = parseInt(document.querySelector('#number').value);
    let all_numbers = document.querySelector('#number_info');
    if (document.querySelector('#batch').checked) {
        get_batch(num, all_numbers);
    } else {
        get_individual(num, all_numbers);
    }
}
