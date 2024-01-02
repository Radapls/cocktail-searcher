import { Container } from 'react-bootstrap';
import Form from './components/Formulario';


function App() {

    return (
            <>
            <header className='py-5'>
                <h1>Drinks</h1>
            </header>

            <Container className='mt-5'>
                <Form/>
            </Container>
            </>
    );
}

export default App;
