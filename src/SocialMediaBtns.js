class SocialMediaBtns extends React.Component{
    constructor(props){
        super(props);
    }

    translateToUrl = () =>{
        let string = this.props.tweetText + "\r\n" + "- " + this.props.quoteAuthor;
        string = string.split(" ").join("%20");
        let anchor = document.getElementById("tweet-quote");

        anchor.href = "https://twitter.com/intent/tweet/?text=" + string;
    }

    componentDidMount(){
        this.translateToUrl();
    }

    render(){
        return(
            <a href="#" id="tweet-quote" target="_blank" onClick={this.translateToUrl}>Tweet It!</a>
        );
    }
}