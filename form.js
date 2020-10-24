class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("DHOOM MACHALE");
        title.position(700,100);

        var input = createInput('ENTER YOUR NICKNAME BUDDY');
        input.position(720,300);

        var button = createButton('GO BRO !');
        button.position = (720,250);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var Name = input.value;
            playerCount++;

            player.updateName(Name);
            player.updateCount(playerCount);

            var greeting=createElement("h3");
            greeting.html("Hello"+Name);
            greeting.position(190,20);
            
            
         })
    }
}