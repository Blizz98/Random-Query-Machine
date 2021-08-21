class Buttons extends React.Component{
    constructor(props){
        super(props);
    }

    clickMe = () =>{
        this.props.clickMe();
    }

    render(){
        return(
            <React.Fragment>
                <div id="social-media-button">
                    <SocialMediaBtns tweetText = {this.props.tweet} quoteAuthor = {this.props.author}/>
                </div>
                <div id="change-quote-button">
                    <NewQuoteBtn click = {this.clickMe}/>
                </div>
            </React.Fragment>
        );
    }
}