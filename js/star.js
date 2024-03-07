window.addEventListener("DOMContentLoaded", () =>{
    // bodyを取得
    const stars = document.querySelector("body");
    
    const createStar = () => {
        //spanタグでクラスをstarで作成
        const straEl = document.createElement("span");
        straEl.className = "star";

        //大きさの最大,最小を設定
        const minSize = 1;
        const maxSize = 2;
        const size = Math.random() * (maxSize - minSize) + minSize;

        //max 100% min 0%のランダムの位置
        straEl.style.left = `${Math.random() * 100}%`;
        straEl.style.top = `${Math.random() * 100}%`;

        //ディレイで一括の不自然さを削除
        straEl.style.animationDelay = `${Math.random() * 10}s`;

        //starsクラスに作成したstarを子要素に入れる。
        stars.appendChild(straEl);
        }
    //ループで沢山の星作成
    for(let i = 0; i < 300; i++){
        createStar();
    }
});