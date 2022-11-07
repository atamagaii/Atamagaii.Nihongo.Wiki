import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('key-sentence')
class KeySentenceElement extends LitElement
{
    render(){
        return html `
            <div>I'm custom</div> 
        `;
    }
}