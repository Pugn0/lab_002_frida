Java.perform(function() {
    var clazz = Java.use('br.com.mobileexploitation.a002flow.MainActivity');
    clazz.onCreate.implementation = function() {

        // criar variavel
        var b1 = Java.use('java.lang.Boolean').$new("True");

        var redirecionamento = clazz.class.getDeclaredField("redirectActivity");
        redirecionamento.set(this, b1);

        // mostrar instalcia atual
        //console.log(this)
        return clazz.onCreate.apply(this, arguments);
    }
});