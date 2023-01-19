export default class Readmore {
    
    constructor(){
        this.selectors = document.querySelectorAll('[data-readmore]'); 
        this.buttonClasses = 'btn btn-link border-0 c-btn--nopad u-txt-underline u-font-weight-bold u-txt-body u-mb-0';
    }

    render() {
       
        this.selectors.forEach((element, index) => {
            
            let txtElement = element.querySelector('span:first-child');

            if (this.isEllipsisActive(txtElement)) {

                this.createButtons(element, index);
                this.createInput(element, index);
                
                this.createShortDesc(element, txtElement, index);


            }

        })
    }

    createShortDesc(parentElement, textElement, index) {
        let span = document.createElement("span")
            
        let shortTxt = this.shortDescTxt(textElement.textContent,  JSON.parse(parentElement.dataset.readmore).length);
        
        span.classList.add('short-'+index);
        span.textContent = shortTxt + '...';

        parentElement.insertBefore(span, textElement);
    }

    shortDescTxt(str, maxChar) {
        let content = str.replace(/[\n\r]+|[\s]{2,}/g, '').substring(0,parseInt(maxChar));
        return content;
    }

    isEllipsisActive(el) {
        return (el.offsetWidth < el.scrollWidth);
    }
    
    createButtons(parentElement, index) {
        let label = document.createElement("label");
        let options = JSON.parse(parentElement.dataset.readmore);

        let span = document.createElement('span');

        label.setAttribute('for', 'readmore-'+index);
        label.setAttribute('class', this.buttonClasses);

        if (typeof options.readmoreBtn !== "undefined") {
            span.textContent = options.readmoreBtn;
        }


        if (typeof options.readLessBtn !== "undefined") {
            let span = document.createElement('span');
                span.textContent = options.readLessBtn;

            // Add read less button
            label.appendChild(span);
        }

        // Add Read more Button 
        label.appendChild(span);

        // Add label
        parentElement.appendChild(label);

       
    }

    createInput(parentElement, index) {
        let input = document.createElement("input");

        input.style.display = 'none';
        input.setAttribute('id', 'readmore-'+index);
        input.classList.add('readmore-'+index);
        input.type = 'checkbox';

        parentElement.insertAdjacentElement('beforebegin', input);
    }
    
}
