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

function Profile(props){
    let ary = [];
    for(let i in props.list){
        ary.push(<li class="prof-li">{props.list[i]}</li>)
    }

    let sentence = [
        "WEB制作やフロントエンドのコーディング・プログラミングが好き！",
        "JavaScriptのDOM操作にドはまりし、",
        "jQueryをはじめとしたJSのライブラリ・フレームワークなどを勉強中！",
        "将来的にはWEB制作のスキルを高めて、",
        "自身が運営するWEBサービスでも立ち上げようかと考えているよ！"
    ];
    let lines = [];
    for(let i in sentence){
        lines.push(
            <div class="sentence-line">
                {sentence[i]}
            </div>
        );
    }

    return(
        <div id="prof-container">
            <div id="prof-inner">
                <div id="prof-about-me">
                    <img id="prof-me" src="./gallery/my-img.jpg" alt="澤田　政嘉" />
                    <div id="prof-myname"><strong>澤田&nbsp;政嘉</strong></div>
                </div>
                <ul id="prof-list">
                    {ary}
                </ul>
            </div>

            <div id="prof-sentence">
                {lines}
            </div>
        </div>
    );
}

function Skill(props){
    let langList = props.list[0];

    let toolList = props.list[1];
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
                    <div class="skill-sort able-elem"><div class="check-box"><div class="none-check"></div></div>このサイトで使用中</div>
                </div>
                <div class="skill-cloud">
                    {langs}
                </div>

                <div class="skill-title">よく使うツール</div>
                <div class="skill-cloud">
                    {tools}
                </div>

                <div class="disclaimer">
                    2022年4月時点
                </div>
            </div>
        );
    }else{
        return(
            <div id="skill-container">
                <div class="skill-cloud" style={{"margin-top": "3rem"}}>
                    <div class="err-loading">読み込みに失敗しました。</div>
                </div>
            </div>
        );
    }
}

function Work(props){
    let ary = props.list;
    let works = [];
    for(let i in ary){
        let tags = [];
        let genre = ary[i].genre.split("&");
        for(let j in genre){
            tags.push(
                <div class="wi-tag">{genre[j]}</div>
            );
        }
        works.push(
            <li class="work-item">
                <a class="work-link" href={ary[i].link} target="_blank">
                    <div class="wi-inner">
                        <img class="wi-thumb" src={`./gallery/thumb/${ary[i].name}.png`} alt={ary[i].name}/>
                        <div class="wi-content">
                            <h3 class="wi-title"><div class="wi-name">{ary[i].name}<div class="comment">&copy;{ary[i].year}</div></div></h3>
                            <div class="wi-genre">{tags}</div>
                            <div class="wi-guide">{ary[i].guide}</div>
                        </div>
                    </div>
                </a>
            </li>
        );
    }

    return(
        <div id="work-container">
            <div id="work-memo">
                <strong>過去に制作した作品などを掲載しています。<br /></strong>
                （一部、共同開発したものも含まれます。）
            </div>

            <ul id="work-list">
                {works}
            </ul>
            
            <div class="disclaimer">
                一部学校の課題作品を掲載していますが、どれも設計・仕様考案まで開発者自ら行った作品です。
                内容に関する指示がない状態から作っているため、ここでは制作物として紹介しています。
            </div>
        </div>
    );
}

function Detail(props){
    let ary = props.list;
    let items = [];
    for(let i in ary){
        items.push(
            <li class="detail-item">
                <div class="di-key">{ary[i].key}</div>
                <div class="di-value">{ary[i].value}</div>
            </li>
        );
    }

    return(
        <div id="detail-container" class="fade-in">
            <ul id="detail-list">
                {items}
            </ul>
        </div>
    );
}

class Container extends React.Component{
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
                        <Work list={this.props.list}/>
                    </div>
                );

            case "detail":
                return(
                    <div class="info-container">
                        <h1 class="info-title">{this.props.title}</h1>
                        <Detail list={this.props.list}/>
                    </div>
                );
        }
    };
}

function circlesRender(){
    let circles = [];
    for(let i=0; i<100; i++){
        circles.push(
            {
                posit: {top: `${randomNum(90)}%`, left: `${randomNum(90)+5}%`},
                size: `${randomNum(5)}vw`,
                bg: "#ffd6b0",
                "class": "circles",
                delay: `${randomNum(500)}ms`
            }
        );
    };
    
    ReactDOM.render(
        <Circles
            circles={circles}
        />,
        $("#circles-container")[0]
    );
    
}
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
                    background: e.bg,
                    "border\-radius": e.size,
                    "transition\-duration": "200ms",
                    "transition\-delay": e.delay

                }}
              />  
            );
        });
        return(
            <div>
                {circleEles}
            </div>
        )
    }
}
{/* <div id="thumb-wrapper">
    <div id="circle-container">
        <div id="main-circle">
            <div id="mc-text" class="able-elem">
                {{value}}
            </div>
        </div>
        <div id="circles-container"></div>
        <div id="under-text" class="comment">一部酔いやすい表現・アニメーションを使用しています。<br>苦手な方はご注意ください。</div>
    </div>
</div> */}