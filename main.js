let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll('.box');//select all divs have class 'box'
let drag = null;
let trash = document.querySelectorAll('.trash');
btn.onclick= function(){
    if(inp.value/*بجيب ال value الي هتتكتب في ال input*/ !='' ){
        boxs[0].innerHTML+=`
        <p class="item" draggable="true">${inp.value}</p>`
        inp.value='';
    }
    dragItem();
}
function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart', function(){
            drag = item;
            item.style.opacity = '0.5';
        })
        item.addEventListener('dragend',function(){
            drag = item;
            item.style.opacity = '1';
        })

        boxs.forEach(box=>{
            box.addEventListener('dragover', function(e){
                e.preventDefault();
                this.style.background = '#090';
                this.style.color = '#fff';
            })

            box.addEventListener('dragleave', function(){
                this.style.background = '#fff';
                this.style.color = '#000';
            })

            box.addEventListener('drop', function(){
                box.append(drag);
                this.style.background = '#fff';
                this.style.color = '#000';
            })
        })
        
        
    })
}
// Trash
trash.forEach(t=>{
    t.addEventListener('dragover', function(e){
        e.preventDefault();
        this.style.background = "#900";
        this.style.color = "#fff";
    });

    t.addEventListener('drop', function(){
        drag.remove();
        this.style.background = "#fff";
        this.style.color = "#000";
    });
});
