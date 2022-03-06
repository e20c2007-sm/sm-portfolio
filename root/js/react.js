class Arrow extends React.Component{
    render(){
        return(
            <div id="arrow-container" class="able-elem">
                <div id="arrow-btn"></div>
                <div id="arrow-text">
                    PAGE&nbsp;TOP
                </div>
            </div>
        )
    }
}

class Profile extends React.Component{
    render(){
        let ary = [];
        for(let i in this.props.list){
            ary.push(<li class="prof-li">{this.props.list[i]}</li>)
        }
        return(
            <div id="prof-container">
                <div id="prof-me">
                    <div id="prof-myname">澤田&nbsp;政嘉</div>
                </div>
                <ul id="prof-list">
                    {ary}
                </ul>
            </div>
        );
    }
}

class Container extends React.Component{
    /*
        .opt = コンテナの中身を指定
        .title = info-title要素に入れる文字
        .num = 子要素に渡すボックスの数
        .list = プロフィールに記載する各項目の配列
    */

    render(){
        switch(this.props.opt){
            case "prof":
                return(
                    <div class="info-container">
                        <h1 class="info-title">{this.props.title}</h1>
                        <Profile num={this.props.num} list={this.props.list}/>
                    </div>
                );
        }
    };
}

let ary = [
    "dummy1",
    "dummy2",
    "dummy3"
]
// ReactDOM.render(
//     <Container
//         opt="prof"
//         title="プロフィール"
//         num={5}
//         list={ary}
//     />,
//     $("body")[0]
// )