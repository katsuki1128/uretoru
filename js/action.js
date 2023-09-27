//----------------------------------------
// ▼関数のまとめ
//----------------------------------------

const executeActionsForStatus1 = () => {
    // alert("公開中です");

    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="flex flex-col items-center justify-center px-3 pt-3 pb-3 mx-auto">
            <div class="w-full bg-white rounded-lg shadow sm:max-w-3xl md:w-4/5 xl:p-0">
                <div class="p-3 space-y-4 md:space-y-6 sm:p-8">
                    <div>
                        <img class="w-full h-15 mr-2" src="./img/uretoru_logo.png" alt="logo" />
                        <div class="text-center mt-4 mb-0 mx-0" id="contentDiv">

                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;

    const targetDiv = document.getElementById('contentDiv');
    targetDiv.innerHTML = `
                <div class="text-left mb-1">
                    <p class="text-sm mb-2">
                        ⭐️「Aのマサル」か「Bの伊藤アナ」スタンプで参加しよう！途中変更できないから選択は慎重に！
                    </p>
                </div>

                <div class="text-center text-sm mx-0 my-0">
                    <label for="toggle" class="flex items-center justify-between w-full cursor-pointer">
                        <!-- ラベルテキスト -->
                        <div class="ml-0 text-gray-700 text-sm"">
                            ⭐️ 音声をONにすればボイスも楽しめます
                        </div>
                        <!-- トグルボタン本体 -->
                        <div class="relative">
                            <!-- input要素 -->
                            <input type="checkbox" id="toggle" class="sr-only">
                            <!-- スライダー -->
                            <div class="w-12 h-7 bg-gray-400 rounded-full shadow-inner transition-colors duration-200">
                                <!-- チェックされたときの背景色 -->
                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow left-0.5 top-0.5 transition transform duration-200">
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            `;

    const stampWrapper = document.getElementById('stampWrapper');
    stampWrapper.innerHTML = `
        <div id="stampListContainer" class="stampContainer">
            <div class="image-wrapper"><img class="image" src="./img/a1.png" data-id="a1"></div>
            <div class="image-wrapper"><img class="image" src="./img/a2.png" data-id="a2"></div>
            <div class="image-wrapper"><img class="image" src="./img/b1.png" data-id="b1"></div>
            <div class="image-wrapper"><img class="image" src="./img/b2.png" data-id="b2"></div>
            <div class="image-wrapper"><img class="image" src="./img/a3.png" data-id="a3"></div>
            <div class="image-wrapper"><img class="image" src="./img/a4.png" data-id="a4"></div>
            <div class="image-wrapper"><img class="image" src="./img/b3.png" data-id="b3"></div>
            <div class="image-wrapper"><img class="image" src="./img/b4.png" data-id="b4"></div>
        </div>
        `;

    const stampCountWrapper = document.getElementById('stampCountWrapper');
    stampCountWrapper.innerHTML = `
        <div class="flex flex-col items-center justify-center px-3 pt-3 pb-3 mx-auto">
            <div class="w-full bg-white rounded-lg shadow sm:max-w-3xl md:w-4/5 xl:p-0">
                <div id="slot">
                    <div class="text-lg text-gray-700 font-medium text-center">
                            スタンプは３回送れます
                    </div>
                        <div class="dotted-circles-container">
                        <div class="coin-design image-slot">P</div>
                        <div class="coin-design image-slot">P</div>
                        <div class="coin-design image-slot">P</div>
                    </div>
                
                </div>
                <div class="text-center text-sm ml-1 my-2 mr-2">
                    <div class="text-lg mt-2 text-gray-700 font-medium" id="thanks">
                    ⛑ご参加ありがとうございます😊
                    </div>
                </div>
            </div>
        </div>
        `;

    // 画面サイズの調整関連のロジックを実行
    window.addEventListener('resize', adjustImageWidth);
    adjustImageWidth();

    // ステータスが1の時だけ、画像にクリックイベントを追加
    addClickEventToImages();

    // トグルのイベントリスナを追加
    addToggleEventListener();

    // 古いLocalStorageを削除
    removeDataOlderThan();

    //その日に３つ送ったらスタンプがクリックできなくなる関数
    let currentCount = getCurrentCount();
    console.log(currentCount);
    if (currentCount >= 2) {
        addNeverClickableClass();
    }
};


const executeActionsForStatus2 = () => {
    // alert("次回の開始までおまちください");

    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="flex flex-col items-center justify-center px-3 pt-3 pb-3 mx-auto">
            <div class="w-full bg-white rounded-lg shadow sm:max-w-3xl md:w-4/5 xl:p-0">
                <div class="p-3 space-y-4 md:space-y-6 sm:p-8">
                    <div>
                        <img class="w-full h-15 mr-2" src="./img/uretoru_logo.png" alt="logo" />
                        <div class="text-center mt-4 mb-0 mx-0" id="contentDiv">

                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;

    const targetDiv = document.getElementById('contentDiv');
    targetDiv.innerHTML = '<p class="text-lg">⭐️毎週金曜に開催しています⭐️</p>';

    const stampWrapper = document.getElementById('stampWrapper');
    stampWrapper.innerHTML = `
        <div id="stampListContainer" class="stampContainer">
            <div class="image-wrapper"><img class="image" src="./img/a1.png" data-id="a1"></div>
            <div class="image-wrapper"><img class="image" src="./img/a2.png" data-id="a2"></div>
            <div class="image-wrapper"><img class="image" src="./img/b1.png" data-id="b1"></div>
            <div class="image-wrapper"><img class="image" src="./img/b2.png" data-id="b2"></div>
            <div class="image-wrapper"><img class="image" src="./img/a3.png" data-id="a3"></div>
            <div class="image-wrapper"><img class="image" src="./img/a4.png" data-id="a4"></div>
            <div class="image-wrapper"><img class="image" src="./img/b3.png" data-id="b3"></div>
            <div class="image-wrapper"><img class="image" src="./img/b4.png" data-id="b4"></div>
        </div>
        `;

    const stampCountWrapper = document.getElementById('stampCountWrapper');
    stampCountWrapper.innerHTML = `
        <div class="flex flex-col items-center justify-center px-3 pt-3 pb-3 mx-auto">
            <div class="w-full bg-white rounded-lg shadow sm:max-w-3xl md:w-4/5 xl:p-0">
                <div id="slot">
                    <div class="dotted-circles-container">
                    <div class="coin-design image-slot">1</div>
                    <div class="coin-design image-slot">2</div>
                    <div class="coin-design image-slot">3</div>
                </div>
            
                </div>
                <div class="text-center text-sm ml-1 my-2 mr-2">
                    <div class="text-lg mt-2 text-gray-700 font-medium" id="thanks">
                    ⛑次回の参加をお待ちしています😊
                    </div>
                </div>
            </div>
        </div>
        `;

    // 画面サイズの調整関連のロジックを実行
    window.addEventListener('resize', adjustImageWidth);
    adjustImageWidth();

    let images = document.querySelectorAll('.image');
    images.forEach(image => {
        image.parentElement.classList.add('gray-out');
    });

};

//----------------------------------------
// ▼公開設定に応じてページの出しわけ
//----------------------------------------
// サーバーと通信する関数
// await~data[0].Code;catch((error))を有効に
// window.onload = () => { ~  stickersStatus(jsonData);};を有効に
// const status = {};と  let status = {};を切り替え
//----------------------------------------
//----------------------------------------
window.onload = () => {

    const date = location.search.replace("?", "");
    const checkNow = (Number(date) && date.length == 12) ? date : "";

    // const status = {};
    let status = {};
    status.checkNow = checkNow;
    const jsonString = JSON.stringify(status);
    const jsonData = JSON.parse(jsonString);

    const stickersStatus = async (param) => {

        // const params = { method: "post", body: JSON.stringify(param) };
        // await fetch("https://santaclaus.fbs.co.jp/assets/lib/MentaiStickersStatus.php", params)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         const status = data[0].Code;

        status = 1;

        switch (status) {
            case 1:
                executeActionsForStatus1();
                break;
            case 2:
                executeActionsForStatus2();
                break;
            case 3:
                executeActionsForStatus2();
                break;

            default:
                break;
        }

        //     })
        //     .catch((error) => {
        //     })
    }
    stickersStatus(jsonData);
};

//----------------------------------------
// ▼スタンプの幅を設定
//----------------------------------------

const adjustImageWidth = () => {
    const deviceWidth = window.innerWidth;
    const itemWidth = deviceWidth / 4;

    // アイテムの幅が75px未満の場合に調整を開始
    if (itemWidth < 95) {
        const adjustedWidth = itemWidth * 0.8; // 80%
        const adjustedMargin = itemWidth * 0.1; // 10%
        // console.log("adjustedWidth", adjustedWidth);

        document.querySelectorAll('.image').forEach(img => {
            img.style.width = `${adjustedWidth}px`;
            img.style.marginLeft = `${adjustedMargin}px`;
            img.style.marginRight = `${adjustedMargin}px`;
        });
    } else {
        // 95px以上の場合は初期のスタイルを適用
        document.querySelectorAll('.image').forEach(img => {
            img.style.width = '75px';
            img.style.marginLeft = '10px';
            img.style.marginRight = '10px';
        });
    }
};

//----------------------------------------
// ▼音声ファイルを再生する関数
//----------------------------------------

const playSound = (id) => {
    const audioSet = {
        a1: './sound/a1.mp3',
        a2: './sound/a2.mp3',
        a3: './sound/a3.mp3',
        a4: './sound/a4.mp3',
        a5: './sound/a5.mp3',
        a6: './sound/a6.mp3',
        a7: './sound/a7.mp3',
        a8: './sound/a8.mp3',
        b1: './sound/b1.mp3',
        b2: './sound/b2.mp3',
        b3: './sound/b3.mp3',
        b4: './sound/b4.mp3',
        b5: './sound/b5.mp3',
        b6: './sound/b6.mp3',
        b7: './sound/b7.mp3',
        b8: './sound/b8.mp3',
    };

    const audioPath = audioSet[id] || './img/default.mp3'; // idが存在しない場合のデフォルト音声
    const audio = new Audio(audioPath);
    // console.log(audio)
    audio.play();
};

//----------------------------------------
// ▼スタンプをクリックしたときの関数
//----------------------------------------

let isClickDisabled = false; // クリック無効フラグ
let isSoundOn = false; // 音声のオン/オフを切り替えるための変数

const addToggleEventListener = () => {
    document.getElementById('toggle').addEventListener('change', function (event) {
        isSoundOn = event.target.checked;
    });
};

const handleClickOnImage = (element) => {
    //----------------------------------------
    // ▼クリックされたスタンプのIDを取得する関数
    //----------------------------------------
    // クリックされた画像のデータ属性を取得
    const id = element.dataset.id;
    // 取得データ格納配列を生成
    const data = {};
    data.id = id;

    //----------------------------------------
    // ▼一度クリックされたらクリック不可にする
    //----------------------------------------
    if (isClickDisabled) {
        return;
    }

    //----------------------------------------
    // ▼クリックされたらclassにclicked-imageを付与してCSSでアニメーション
    //----------------------------------------

    let currentCount = getCurrentCount();
    console.log(currentCount);

    if (currentCount >= 2) {
        addNeverClickableClass();
    }

    element.classList.add('clicked-image'); // クリックされたら 'clicked-image' クラスを追加
    isClickDisabled = true; // クリックを無効化

    let targetPrefix;

    if (id.startsWith('a')) {
        targetPrefix = 'b';
    } else if (id.startsWith('b')) {
        targetPrefix = 'a';
    }

    // 配列をJSONデータに変換
    const jsonString = JSON.stringify(data);
    const jsonData = JSON.parse(jsonString);
    stickers(jsonData, element);

    //----------------------------------------
    // ▼サウンドの再生
    //----------------------------------------
    if (isSoundOn) {  // isSoundOnがtrueの場合のみ音声を再生
        playSound(id);
    };

    //----------------------------------------
    // ▼クリックした画像の表示
    //----------------------------------------
    setTimeout(function () {
        displayImageInSlot(id);
    }, 1000);


    //----------------------------------------
    // ▼LocalStorageにカウントを保存
    //----------------------------------------
    updateCount(targetPrefix);
};

//----------------------------------------
// ▼スタンプをクリックできなくする関数
//----------------------------------------

const addNeverClickableClass = () => {
    const targetElements = document.querySelectorAll('.image');
    console.log(targetElements);
    targetElements.forEach((targetElement) => {
        targetElement.classList.add('never-clickable');
    });
};
//----------------------------------------
// ▼LocalStorageでカウントを制御する関数
//----------------------------------------

const getCurrentDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

const getCurrentCount = () => {
    const today = getCurrentDate();
    return parseInt(localStorage.getItem(`imageClickCount_${today}`) || "0");
};

const updateCount = (targetPrefix) => {
    const today = getCurrentDate();
    let currentCount = getCurrentCount();
    currentCount++;
    localStorage.setItem(`imageClickCount_${today}`, currentCount);
    displayMessage(targetPrefix, currentCount);
};

const removeDataOlderThan = (days) => {
    const ONE_DAY = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();

    // days前から始めて、過去のデータが存在しなくなるまで繰り返す
    for (let i = days; i < 1000; i++) {  // 1000は適当な上限値
        const daysAgo = new Date(now - i * ONE_DAY);
        const oldDate = `${daysAgo.getFullYear()}-${daysAgo.getMonth() + 1}-${daysAgo.getDate()}`;

        // データが存在しなければループを抜ける
        if (!localStorage.getItem(`imageClickCount_${oldDate}`)) break;

        localStorage.removeItem(`imageClickCount_${oldDate}`);
    }
};

// 使用例:
removeDataOlderThan(0);  // 3日以上前のデータを削除

//----------------------------------------
// ▼メッセージを出すロジックと関数
//----------------------------------------

const displayMessage = (targetPrefix, currentCount) => {
    // メッセージの配列
    const aMessages = [
        `${currentCount}回も送ってくれて、おいさんうれしか⛑！！`,
        `今ので${currentCount}個目ばい⛑!嬉しか！`,
        `おいさー⛑！いい感じ！${currentCount}個目！`,
        `${currentCount}回送ってくれたばい⛑！`,
        "応援ありがとさん⛑⛑！！"
    ];

    const bMessages = [
        `${currentCount}回も送ってくれて、嬉しいです！！`,
        `まいさー！${currentCount}個🥹ありがとう！`,
        `${currentCount}回送ってくれました❣️`,
        "応援ありがとうございます！！"
    ];

    let messages = targetPrefix === 'b' ? aMessages : bMessages;
    // console.log(targetPrefix);

    // 10%の確率でtrueを返す
    const shouldShowMessage = () => Math.random() < 0.1;

    // カウントがメッセージを表示すべきかどうかを判断
    if (shouldShowMessage()) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('thanks').innerText = randomMessage;
        // console.log(randomMessage);
        // メッセージ表示の回数を保存
        localStorage.setItem('lastMessageShownCount', currentCount);
        // console.log("currentCount (message shown):", currentCount);
    } else {
        const lastMessageShownCount = parseInt(localStorage.getItem('lastMessageShownCount') || "0");

        // メッセージが表示されてから5回以上クリックされた場合、メッセージを削除
        if (currentCount - lastMessageShownCount > 5) {
            document.getElementById('thanks').innerText = "⛑ご参加ありがとうございます😊";
        }
        // console.log("currentCount:", currentCount);
    }
}

//----------------------------------------
// ▼クリックした画像の表示関数
//----------------------------------------

const displayImageInSlot = (id) => {
    // 画像のsrcを組み立てる
    const src = `./img/${id}.png`;

    // 最初の空の.image-slotを選択
    const slot = document.querySelector('.image-slot');

    if (slot) {
        // img要素を作成して、src属性を設定
        const img = document.createElement('img');
        img.src = src;
        img.style.width = "100px";    // 画像のサイズを指定
        img.style.height = "100px";   // 画像のサイズを指定
        img.classList.add('fade-in'); // フェードインアニメーションのクラスを追加

        // 現在の内容 (数字) をクリアして画像を追加
        slot.innerHTML = "";
        slot.appendChild(img);

        // .image-slotクラスを取り除く
        slot.classList.remove("image-slot", "coin-design");
        slot.classList.add("dotted-circle");
    }
};

//----------------------------------------
// ボタンを押した時の関数
//----------------------------------------
const addClickEventToImages = () => {
    const elements = document.querySelectorAll('.image');
    elements.forEach(element => {
        element.addEventListener('click', () => handleClickOnImage(element));
    });
};

//----------------------------------------
// ボタンを押したあとに戻る関数
//----------------------------------------
const removeClickedImageAndEnableClick = (element) => {
    element.classList.remove('clicked-image'); // 一定時間経過後に 'clicked-image' クラスを削除
    element.classList.add('fade-in'); // フェードインアニメーションのクラスを追加
    isClickDisabled = false; // 一定時間後にクリックを再度有効にする
    setTimeout(() => {
        element.classList.remove("fade-in");
    }, 100);
};

//----------------------------------------
// サーバーと通信する関数
// await~data[0].Code;catch((error))を有効に
// window.onload = () => { ~  stickersStatus(jsonData);};を有効に
//----------------------------------------
const stickers = async (param, element) => {
    const params = { method: "post", body: JSON.stringify(param) };
    // await fetch("https://santaclaus.fbs.co.jp/assets/lib/MentaiStickers.php", params)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         // 非同期処理が成功した場合
    //         const code = data[0].Code;

    code = 1;
    switch (code) {
        case 1:
            // console.log('データ登録成功');
            setTimeout(() => {
                removeClickedImageAndEnableClick(element);
            }, 1000);
            break;
        case 2:
            // console.log('データ登録失敗');
            break;
        case 3:
            // console.log('データベース接続失敗');
            break;
        default:
            break;
    }
    // console.log(param)
    // })
    // .catch((error) => {
    //     // 非同期処理が失敗した場合
    // })
};

//----------------------------------------
// ▼ダブルクリックされないようにする関数
//----------------------------------------

document.addEventListener('dblclick', function (e) {
    e.preventDefault();
});
