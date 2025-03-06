// 設定画面で保存ボタンを押されたら
function save_options() {
    // 設定値を変数に格納
    var workStart = document.getElementById("workStart").value;
    var workEnd = document.getElementById("workEnd").value;
    var lunchtimeStart = document.getElementById("lunchtimeStart").value;
    var lunchtimeEnd = document.getElementById("lunchtimeEnd").value;

    // chromeアカウントと紐づくストレージに保存
    chrome.storage.sync.set(
        {
            selected_workStart: workStart,
            selected_workEnd: workEnd,
            selected_lunchtimeStart: lunchtimeStart,
            selected_lunchtimeEnd: lunchtimeEnd,
        },
        function () {
            // 保存できたら、画面にメッセージを表示(0.75秒だけ)
            var status = document.getElementById("status");
            status.textContent = "Options saved.";
            setTimeout(function () {
                status.textContent = "";
            }, 750);
            return window.close();
        }
    );
}

// 設定画面で設定を表示する
function restore_options() {
    // デフォルト値設定する
    chrome.storage.sync.get(
        {
            selected_workStart: 0900,
            selected_workEnd: 1800,
            selected_lunchtimeStart: 1200,
            selected_lunchtimeEnd: 1300,
        },
        function (items) {
            document.getElementById("workStart").value = items.selected_workStart;
            document.getElementById("workEnd").value = items.selected_workEnd;
            document.getElementById("lunchtimeStart").value = items.selected_lunchtimeStart;
            document.getElementById("lunchtimeEnd").value = items.selected_lunchtimeEnd;
        }
    );
}

// 画面表示と保存ボタンのイベントを設定
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
