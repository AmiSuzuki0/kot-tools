# king of time をちょっと便利にするツール
![kot mov](https://user-images.githubusercontent.com/13365342/51651487-6f72da00-1fcf-11e9-8043-1d10280aba82.gif)
## これはどんなツール？  
キングオブタイムで勤怠入力をする際に、業務のベースとなる勤怠の時間をワンクリックもしくはショートカットキー（後記をご覧ください）で入力できるツールです。  

勤怠入力時に、手動で入力すると、1日の打刻をするのにだいたい30秒くらいかかります。  
このツールを使うと1日の打刻を5秒で済ませることができます。  
ショートカットキーを使用すると２秒で済ませることができます。
※タイマーで測りました。主観です。  
  
浮いた時間で毎日腹筋が12回くらいできます。  
  
１ヶ月にすると、約９分間得をします。  
年間にすると約1時間48分得をします。  
あとちまちまselect要素をプルダウンするストレスが少し減ります。  

## 導入方法
### 簡単にインストールする場合
1. #### 拡張機能がDLできるchromeアプリの公式サイトに移動[kot-tools](https://chrome.google.com/webstore/detail/kot-set-habit/ceacjbfhiaghpjihgjmpbanjmkffpmpk?hl=ja)
1. #### "Chrome に追加"ボタンを押す
1. #### "拡張機能を追加"  
<img width="458" alt="2019-01-24 11 40 12" src="https://user-images.githubusercontent.com/13365342/51650777-e5c20d00-1fcc-11e9-9a9e-7a66347d6ba9.png">  

## 使い方
1. #### ウインドウのurlの隣に表示されるアイコンを"右クリック"して”オプション”を選ぶ  <img src="https://user-images.githubusercontent.com/13365342/49416793-8ad71b00-f7be-11e8-9944-2767c713938e.png" width="888">  <img src="https://user-images.githubusercontent.com/13365342/49416794-8ad71b00-f7be-11e8-937f-e6652eaa2624.png" width="888">
1. #### 設定のモーダルで自分の業務時間と休憩時間を入力する。  <img src="https://user-images.githubusercontent.com/13365342/49416796-8ad71b00-f7be-11e8-987e-cf42f2bbc843.png" width="888">
1. #### 保存をクリック。
1. #### キングオブタイムのサイトへログインする。
1. #### キングオブタイムの”打刻編集”ページを開く。 
1. #### chromeの先ほど追加した拡張機能のアイコンをクリックする。  <img src="https://user-images.githubusercontent.com/13365342/49416797-8b6fb180-f7be-11e8-852e-aefcb1055ccf.png" width="888">
1. #### デフォルトで入れたい業務時間の値が自動で挿入される。  <img src="https://user-images.githubusercontent.com/13365342/49416798-8b6fb180-f7be-11e8-9c2a-bda7f3c8b001.png" width="888">  
1. #### 後は簡単！！！！打刻登録をするだけ！（定時ならそのままポチ！）

## 注意
- すでに入力されている項目があるページ（休憩だけ入力した、勤怠の情報をすでに入力した）ではうまく挙動しないので、使用しないでください。
- 改善要望があればslackではなくissuesにお願いします。※個人的にやってるので時間がある時に改修します。
- バグ報告もissuesにお願いします。※個人的にやってるので時間がある時に改修します。

# おまけ（効率化）

拡張機能をキーボードショートカット登録する
[https://yossense.com/extension-shortcut/](https://yossense.com/extension-shortcut/)
これをすると、アイコンをクリックしなくても、より効率的に入力することができるようになります。

## 開発、修正をするために、動作確認でファイルから読み込みたい場合。
1. #### この画面上、緑色のclone or downloadボタンからDownload Zipをする。  
1. #### zipファイルを適当な場所で解凍する。  
1. #### [chrome://extensions/](chrome://extensions/) を開く  
1. #### ディベロッパーモードをオンにする  <img src="https://user-images.githubusercontent.com/13365342/49416789-8a3e8480-f7be-11e8-83ce-9679f64c4a0a.png" width="888">
1. #### プラグインを導入する
1. #### "パッケージ化されていない拡張機能を読み込む"で解凍したフォルダを選択
1. #### ”拡張機能を追加”をする。
1. <img width="458" alt="2019-01-24 11 40 12" src="https://user-images.githubusercontent.com/13365342/51650777-e5c20d00-1fcc-11e9-9a9e-7a66347d6ba9.png">
