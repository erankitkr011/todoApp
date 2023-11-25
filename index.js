const input=document.querySelector('#texttodo');
input.addEventListener('keyup',function(e){
    if(e.key=="Enter"){
        const li=document.createElement('li');
        li.innerText=e.target.value;
        li.id="li";
        const chkBox=document.createElement('input');
        chkBox.type="checkbox";
        chkBox.style.width="20px"; 
        chkBox.style.height="20px";
        chkBox.addEventListener('change',function(){
            if(this.checked){
                li.style="text-decoration:line-through";
            }
            else{
                li.style="text-decoration:none";
            }
        });

        const btn=document.createElement("button");
        btn.innerText="X";
        btn.addEventListener('click',function(){
            li.remove();
        });

        li.append(chkBox,btn);
        document.querySelector('.ul').append(li);
        e.target.value="";
    }
});