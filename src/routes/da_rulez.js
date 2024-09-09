import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function TheRules() {
    const theRules = `
Bienvenidos a los 30 random de ma0, una fiesta única e irrepetible.

El ingreso de hará desde las 4 pm del 14 de septiembre de 2024, si alguien llega antes lo pongo a ayudarme a organizar cosas.

El espacio estara disponible hasta las 3 pm del día siguiente, si alguien se quiere quedar después, pues obviamente lo pongo a organizar.

El espacio tiene un aforo limitado de 40 personas, y van a ir más :| entonces en lo posible, abstengan de traer más gente que no haya sido invitada previamente.

La fiesta está organizada de tal manera que podamos disfrutar todos de una manera no muy sana pero tranquila, así que cualquier desmadre por favor consultarlo primero con el comité organizador. Osea yo.

Estoy gestionando 80 litros de cerveza artesanal, que haciendo cuentas, debería ser suficiente para que nos entretengamos, pero, como tengo amigos que si no se vuelven mierda no están tranquilos, tengo una mezcla muy al estilo del volvéme mierda de la octava o el mítico long Island iced tea, pero si quieres algo más fuerte, eres bienvenido a traer licor para ti y si quieres para compartir también.

Así como con el trago, la comida está cubierta, pero puedes traer lo que quieras para compartir.
El menú incluye anvorguesas y carne por la noche, huevito y cereales de desayuno y arroz con pollo de almuerzo, pero si tienes necesidades nutricionales particulares, aparte de mis amigos kosher que ya tienen todo cubierto, trae como alimentarte, si eres vegano te ofrezco agua y un calvazo.

Vamos a tener una política de regalos abierta, lo que significa que si recibes un regalo, tienes que abrirlo y usarlo de inmediato.

Vamos a hacer una pequeña inauguración a las 6pm (que todos sabemos que son las 7 pm) pero si es posible, sería genial que llegarán antes.

El espacio tiene lugares para parquear, pero si logramos minimizar los carros, sería más cómodo para todos.

Hay camitas para todos, menos los que ya saben que no se pueden quedar a dormir. Vamos a estar levemente hacinados, así que prepárense un poquito para compartir oxígeno con otros seres humanos.

Tenemos piscina y cancha de baloncesto, si te quieres unir al partido tradicional de baloncesto de cumple, lleva ropa cómoda, y prepárate para ver a un par de casi treintones, sacándose la madre como si todavía fueran adolescentes.

Hay cancha de micro futbol también, pero no confío en mi coordinador de micro, entonces, solucionen.

Vamos a hacer karaoke, en la medida que el internet no lo permita, así que en son de ser precavidos y si quieren cantar como alma herida, lleven las pistas y las letras para tener un momento inolvidable que seguramente publicaré en redes para el apropiado escarnio.

Tenemos un swith, 8 controles, y un judío muy competitivo, así que si te gusta el desmadre digital y pelear sin motivo por unos avatares digitales, prepara tu peor versión.

Cómo una parte de mis amigos boxean y el boxeo se ha vuelto parte fundamental de mi vida, y se que van a pelear por cualquier pendejada, tenemos un referee de boxeo, dos pares de guantes y dos cascos para resolver por problemas a los golpes. Si quieres hacerlo más competitivo, trae tu bucal.

La clausura va a ser a media noche y yo voy a estar más que dormido a las 2 am, pero todos están bienvenidos a disfrutar el espacio y ver el amanecer si lo desean.

El espacio no es exactamente weed friendly, pero vamos a intentar hacer una excepción y hacer que no nos regañen, pero el único responsable de ti mismo vas a ser tu, así que procura no desmadrar te o llevar quien te controle.

Este documento lo voy a dejar abierto para su posterior edición, así que nada queda escrito sobre piedra.

Si llegaste hasta aquí, gracias por leerme, si tienes sugerencias, mándamelas por wp.
`
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Reglamento</h1>
                    <SyntaxHighlighter language="text">
                        {theRules}
                    </SyntaxHighlighter>
                </Col>
            </Row>
        </Container>
    )
}