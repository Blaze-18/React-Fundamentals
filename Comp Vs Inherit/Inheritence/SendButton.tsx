import ButtonCom from './ButtonCom'

export class SendButton extends ButtonCom {
    constructor(props:object){
        super(props);
    }
    render() {
        const buttonText = this.addBuutonConfig('Send');
        const text = 'This is a Send button'
        return super.render(text, buttonText )
    }
}

export default SendButton;