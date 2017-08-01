var Fast_Typing = function () {
    const STATE_REGISTER = 'register';
    const STATE_LEVEL_SELECTOR = 'level_selector';
    const STATE_GAME = 'this_game';
    const STATE_GAMEOVER = 'game_end';

    var name;
    var last_state;
    var level;
/*--------------Register -----------------------------------------------------------------------------------------------*/
    var Register_Logics = function () {

        var view = $('#register');

        var input = $('#name');
        var go = $('#go');

        this.show = function () {
            view.removeClass('hidden');
            enable();

        };
        this.hide = function () {
            view.addClass('hidden');
            disable();
        };

        function enable() {
            go.attr('disabled', true);
            input.keyup(function () {
                if (input.val().length >= 3) {
                    go.attr('disabled', false)
                } else {
                    go.attr('disabled', true)
                }
            });
            go.click(function () {
               name = input.val();
                change_State(STATE_LEVEL_SELECTOR);

            });
        };

        function disable() {
          input.unbind();
          go.unbind();
          input.val('');
        };

    };

    var register = new Register_Logics();

/*------------------------ Level ---------------------------------------------------------------------------------------*/

    var Level_Select_logic = function () {
        var view = $('#level');
        var play = $('#play');

        this.show = function () {
            view.removeClass('hidden').prepend('<h2>'+ 'Player name:' + name + '</h2>');
            // enable();

        };
        this.hide = function () {
            view.addClass('hidden');
            // disable();
        };

        $(function(){
            play.click(function () {
             level = $('input[name = play]:checked').val();
                change_State(STATE_GAME);
            });
        })

    };

    var level_sector = new Level_Select_logic();

/*--------------------- game -------------------------------------------------------------------------------------------*/
    var Game_Logic = function () {
        var view = $('#game');
        var letters = 'abcdefghjklmnopuytrwqsvxz';
        var timeOut;
        var letterKey;
        var leter_show = $('h1');

        this.show = function () {
            view.removeClass('hidden').prepend('<h2>'+ 'Player name:' + name + '! ' + 'Play level:' + ' ' + level + '</h2>');
            change_letter();

        };
        this.hide = function () {
            view.addClass('hidden');
            // disable();
        };

        function enable() {
          timeOut = setTimeout(change_letter, level * 1000);
        }

        function change_letter() {
          letterKey = Math.round(Math.random() * (letters.length -1))
            leter_show.html(letters[letterKey]);
            enable()
        };

    };

    var game = new Game_Logic();




/*-----------------------   --------------------------------------------------------------------------------------------*/



    function initialize() {

    };
/*------------------- change Status-------------------------------------------------------------------------------------*/

    function change_State(value) {
        if (last_state)
            last_state.hide();
        switch (value) {
            case STATE_REGISTER:
                last_state = register;
                break;
            case STATE_LEVEL_SELECTOR:
                last_state = level_sector;
                break;
            case STATE_GAME:
                last_state = game;
                break;
            case STATE_GAMEOVER:
                break;

        }
        last_state.show();
    }

    //function initialize js

    change_State(STATE_REGISTER);

}