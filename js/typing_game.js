var Fast_Typing = function () {
    const STATE_REGISTER = 'register';
    const STATE_LEVEL_SELECTOR = 'level_selector';
    const STATE_GAME = 'this_game';
    const STATE_GAMEOVER = 'game_end';

    var name;
    var last_state;

    var Register_Logig = function () {

        var view = $('#register');

        this.show = function () {
            view.removeClass('hidden');
        };
        this.hide = function () {
            view.addClass('hidden')
        };
    };

    var register = new Register_Logig();

    function change_State(value) {
        if (last_state)
            last_state.hide();
        switch (value) {
            case STATE_REGISTER:
                last_state = register;
                break;
            case STATE_LEVEL_SELECTOR:
                break;
            case STATE_GAME:
                break;
            case STATE_GAMEOVER:
                break;

        }
        last_state.show();
    }

    //function initialize js

    change_State(STATE_REGISTER);

}