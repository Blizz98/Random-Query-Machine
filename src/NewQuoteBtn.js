class NewQuoteBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            btnText: "New Quote"
        }
    }

    click = () =>{
        this.props.click();
    }
    
    render(){
        return(
            <button id="new-quote" onClick = {this.click}>{this.state.btnText}</button>
        );
    }
}