const input=document.querySelector('#texttodo');
input.addEventListener('keyup',function(e){
    if(e.key=="Enter"){
        const li=document.createElement('li');
        li.innerText=e.target.value;
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
        const hr=document.createElement("hr")

        li.append(chkBox,btn,hr);
        document.querySelector('.ul').append(li);
        e.target.value="";
    }
});