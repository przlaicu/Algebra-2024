import { Button, Form, FormGroup } from 'react-bootstrap';


export default function Bootstrap() {
    return(
        <div>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Unesite Email adresu' name='email'/>
                    <Form.Text className='text-muted'>Vaša privatnost je zajamčena</Form.Text>
                </Form.Group>

                <FormGroup className='mb-3'>
                    <Form.Label>Lozinka</Form.Label>
                    <Form.Control type='password' placeholder='lozinka' name='password'></Form.Control>
                </FormGroup>

                <Button variant='primary'>Prijavi se</Button>

            </Form>
        </div>
    );
}