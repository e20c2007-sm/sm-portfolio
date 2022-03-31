const circles = [
    {
        posit: {top: "5%", left: "5%"},
        size: "15vw",
        bg: "#ffd6b0",
        "class": "circles"
    }
];
class Circles extends React.Component{
    render(){
        let data = this.props.circles;
        let circleEles = [];
        data.forEach(e => {
            circleEles.push(
              <div
                class={e.class}
                style={{
                    top: e.posit.top,
                    left: e.posit.left,
                    width: e.size,
                    height: e.size,
                    background: e.posit.bg
                }}
              />  
            );
        });
        console.log(data);
        return(
            {data}
        )
    }
}
ReactDOM.render(
    <Circles
        circles={circles}
    />,
    $("#circles-container")[0]
);

console.log("move out")