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
                <div id="prof-about-me">
                    <img id="prof-me" src="./gallery/my-img.jpg" alt="澤田　政嘉" />
                    <div id="prof-myname"><strong>澤田&nbsp;政嘉</strong></div>
                </div>
                <ul id="prof-list">
                    {ary}
                </ul>
            </div>
        );
    }
}

class Skill extends React.Component{
    render(){
        let langList = this.props.list[0];
        let toolList = this.props.list[1];
        let langs = [];
        let tools = [];
        for(let i in langList){
            let items = langList[i];
            let lang = items.lang;
            let used = items.used;
            langs.push(
                <div class={`skill-item  ${used}`}>
                    <img class="lang-logo" src={`./gallery/icon/lang/${lang}.png`}></img>
                    <div class={`lang-title`}>{lang}</div>
                </div>
            );
        }
        for(let i in toolList){
            tools.push(
                <div class={`skill-item`}>
                    <img class="lang-logo" src={`./gallery/icon/tool/${toolList[i]}.png`}></img>
                    <div class={`lang-title`}>{toolList[i]}</div>
                </div>
            );
        }

        if(langs.length > 0){
            return(
                <div id="skill-container">
                    <div class="skill-title">
                        利用可能な言語・技術
                        <div class="skill-sort able-elem"><div class="check-box"><div class="none-check"></div></div>このページで使用中</div>
                    </div>
                    <div class="skill-cloud">
                        {langs}
                    </div>

                    <div class="skill-title">よく使うツール</div>
                    <div class="skill-cloud">
                        {tools}
                    </div>
                </div>
            )
        }else{
            return(
                <div id="skill-container">
                    <div class="skill-cloud" style={{"margin-top": "3rem"}}>
                        <div class="err-loading">読み込みに失敗しました。</div>
                    </div>
                </div>
            )
        }
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
                        <Profile list={this.props.list}/>
                    </div>
                );
                
                
            case "skill":
                return(
                    <div class="info-container">
                        <h1 class="info-title">{this.props.title}</h1>
                        <Skill list={this.props.list}/>
                    </div>
                );

            case "work":
                return(
                    <div class="info-container">
                        <h1 class="info-title">{this.props.title}</h1>
                        {/* <Work list={this.props.list}/> */}
                    </div>
                );

            case "detail":
                return(
                    <div class="info-container">
                        <h1 class="info-title">{this.props.title}</h1>
                        {/* <Detail list={this.props.list}/> */}
                    </div>
                );
        }
    };
}