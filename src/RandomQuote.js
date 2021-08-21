class RandomQuote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote: "DEFAULT QUOTE",
            author: "DEFAULT AUTHOR",
            randomNum: 0,
            shownNumbers: [],
            allQuotes: false
        }

    }

    changeQuote = () =>{
        const quoteArray = [
            '"Be yourself; everyone else is already taken."', 
            '"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."', 
            '"A room without books is like a body without a soul."',
            '"Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind."',
            '"You know you are in love when you cannot fall asleep because reality is finally better than your dreams."',
            '"You only live once, but if you do it right, once is enough."',
            '"Be the change that you wish to see in the world."',
            '"If you tell the truth, you do not have to remember anything."',
            '"To live is the rarest thing in the world. Most people exist, that is all."',
            '"Without music, life would be a mistake."',
            '"It always seems impossible until it is done."',
            '"Do not watch the clock; do what it does. Keep going."'

        ];
        const authorArray = [
            "Oscar Wilde", 
            "Albert Einstein", 
            "Marcus Tullius Cicero",
            "Bernard M. Baruch",
            "Dr. Seuss",
            "Mae West",
            "Mahatma Gandhi",
            "Mark Twain",
            "Oscar Wilde",
            "Friedrich Nietzsche",
            "Nelson Mandela",
            "Sam Levenson"
        ];

        let arrayLength = quoteArray.length;
        let random = Math.floor(Math.random() * arrayLength);
        while(random == this.state.randomNum){
            random = Math.floor(Math.random() * arrayLength);
        }
        for(let i = 0; i < this.state.shownNumbers.length; i++){
            if(this.state.shownNumbers[i] == random){
                console.log("REPEATING");
                random = Math.floor(Math.random() * arrayLength);
                i = 0;
            }
            if(this.state.shownNumbers.length >= quoteArray.length){
                this.state.allQuotes = true;
                break;
            }
        }
        const quoteBox = document.getElementById("quote-box");
        quoteBox.style.animation = "changeQuoteBox";
        quoteBox.style.animationDuration = "2s";
        if(!this.state.allQuotes){
            this.setState({quote : quoteArray[random]})
            this.setState({author : authorArray[random]})
            this.setState({randomNum : random})
            this.state.shownNumbers.push(random);
        }else{
            this.setState({quote : "Sadly, that's all the quotes! :-("});
            this.setState({author : "Have a nice day!"});
        }
    }

    componentDidMount(){
       this.changeQuote();
    }

    componentDidUpdate(){
        this.hideTweetButton();
    }

    hideTweetButton(){
        if(this.state.allQuotes){
            document.getElementById("tweet-quote").style.display = "none";
        }
    }

    render(){
        return(
            <React.Fragment>
                <div id="text">
                    <p>{this.state.quote}</p>
                </div>
                <div id="author">
                    <p>- {this.state.author}</p>
                </div>
                <div id="buttons">
                    <Buttons clickMe = {this.changeQuote} tweet = {this.state.quote} author = {this.state.author}/>
                </div>
            </React.Fragment>
        );
    }
}