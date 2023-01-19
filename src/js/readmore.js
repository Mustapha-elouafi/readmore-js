export default class Readmore {
    
    constructor(defaultOptions){
        this.selectors = document.querySelectorAll('[data-readmore]'); 
        this.options = {
            buttonClasses:'',
            maxcChar:100, 
            moreLink:"Read more",
            lessLink:"Read less",
            disabledLessLink: false
        };

        if (typeof defaultOptions == 'object') {
            this.default = {
                ...this.options,
                ...defaultOptions
            }
        } else {
            this.default = this.options;
        }
    }

    render() {
 
       
        this.selectors.forEach((element, index) => {
            
            let txtElement = element.querySelector('span:first-child');
            
            let settings = element.dataset.readmore !== '' ? JSON.parse(element.dataset.readmore) : '';

            if (typeof settings == 'object' && Object.keys(settings).length) {
                this.default = {
                    ...this.default,
                    ...settings
                }
            }

            if (this.isEllipsisActive(txtElement)) {

                this.createButtons(element, index);
                this.createInput(element, index);
                
                this.createShortDesc(element, txtElement, index);


            }

        })
    }

    createShortDesc(parentElement, textElement, index) {
        let span = document.createElement("span")
            
        let shortTxt = this.shortDescTxt(textElement.textContent,  this.default.maxcChar);
        
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

        let span = document.createElement('span');

        label.setAttribute('for', 'readmore-'+index);
        label.setAttribute('class', this.default.buttonClasses);

        span.textContent = this.default.moreLink;


        if (!this.default.disabledLessLink) {
            let span = document.createElement('span');
                span.textContent = this.default.lessLink;

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
