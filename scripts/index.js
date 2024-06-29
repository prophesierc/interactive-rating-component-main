class Page
{
    constructor()
    {
        this.displayModal();
    }

    displayModal()
    {
        const form = document.querySelector('form');
        const submit = document.querySelector('#submit-button');
        const modal = document.querySelector('.modal');
        const rating = document.querySelectorAll('[name="rating-selector"]');
        const ratingSelectorText = document.querySelector('.amount-selected-text');

        submit.onclick = () =>
        {
            let arr = [];
            let index = '';
            
            for (let x of rating)
            {
                arr.push(x.checked); //array of bools if input is checked  
                index = arr.indexOf(true);    
            }

            if (index >= 0) 
            {
                form.classList.add('hideForm');
                ratingSelectorText.textContent = ` You selected ${index + 1} out of 5`;
                modal.show();
            }
        };        
    }
}
const page = new Page();