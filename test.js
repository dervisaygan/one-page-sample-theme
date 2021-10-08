        var c = document.createElement('div')
            c.classList.add('flx')
            c.innerHTML=`
            

    <div class="flx">
        <div class="item-z">
           
          
           <center><img src="https://i.hizliresim.com/eafccxa.png" style="max-width:400px;height:auto;"/></center>
           <center style="margin-top:20px">
          <iframe style="margin-left:175px;" class="zfc-zz" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2FF%25C4%25B1krac%25C4%25B1-Tv-105872408499688%2F&layout=button_count&size=large&width=88&height=28&appId" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </center>
        </div>
    </div>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto', sans-serif;
        }

        /* 0572e7 */
        body{
            background-color: #000;
        }
.flx{
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    top: 0;
    left: 0;
z-index:999999;
}
        
        .item-z
        {
            color: red;
            background-color: #fff;
            max-width: 600px;
            color: #000;
            opacity: 1 !important;
            padding: 20px;
            border-radius: 10px;
            font-size: 22px;
        }
        .ssv{
            width: 25px;
            height: 25px;
            fill: #0572e7;
margin-right:20px
        }
        .flz{
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            align-items: center;
        }
        .times-z{
            width: 25px;
            height: 25px;
            fill: #0572e7;
         cursor: pointer;
        }
    </style>
            `
            document.body.appendChild(c)
    const message = c.querySelector("iframe");


window.focus()
window.addEventListener("blur", () => {
 
    if (document.activeElement.tagName === "IFRAME") {
      if (document.querySelector('.flx')) {
		    setTimeout(() => {
               document.querySelector('.flx').remove()
     }, 5000);
        
           }
      console.log("clicked");
    }

}, { once: true });
