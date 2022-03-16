class BgBox extends React.Component{
    render(){
        const way = this.props.way;
        const size = this.props.size;
        const color = this.props.color;
        const position = this.props.posit;

        return(
            <div class={`bg-box move-${way}`} style={{
                width: size,
                height: size,
                background: color,
                opacity: "0.5",
                position: "absolute",
                top: `${position}vh`
            }}></div>
        )
    }
}

let cont = $("#site-bg-container");

const pattern = [
    {
        size: "6vw",
        color: "#FABC61"
    },
    {
        size: "4.5vw",
        color: "#FAE174"
    },
    {
        size: "3vw",
        color: "#FFFB58"
    }
];

function addBgBox(way, index){
    const size = pattern[index].size;
    const color = pattern[index].color;

    let elem = $(div);
    elem.appendTo(cont);
    ReactDOM.render(
        <BgBox way={way} size={size} color={color} posit={randomNum(80)+10}/>,
        elem[0]
    );
    setTimeout(()=>{
        elem.remove();
    }, 31000);
}

addBgBox("right", randomNum(3)-1);
addBgBox("left", randomNum(3)-1);
setInterval(()=>{
    if(windowsFocus){
        addBgBox("right", randomNum(3)-1);
        addBgBox("left", randomNum(3)-1);
    }
}, 5000);