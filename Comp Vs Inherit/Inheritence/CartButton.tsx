
import ButtonCom from './ButtonCom'

export class CartButton extends ButtonCom {
    constructor(props:object){
        super(props);
    }
    render() {
        const buttonText = this.addBuutonConfig('Cart');
        const text = 'This is a Cart button'
        return super.render(text, buttonText )
    }
}

export default CartButton;