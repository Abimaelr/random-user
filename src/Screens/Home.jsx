import React, {useContext} from 'react'
import { Container } from 'react-bootstrap';
import Context from '../Context/Context';

function Home() {
    const { users, setUsers } = useContext(Context)
    return (
        <div>
            <Container>
                <form>
                    <label htmlFor="qnt">Quantas Pessoas?</label>
                    <input type="number" name="qnt" id="qnt" />
                    
                    <label htmlFor="gender">Gênero</label>
                    <select name="gender" id="gender">
                        <option value="male">Homem</option>
                        <option value="mulher">Mulher</option>
                    </select>

                    <label htmlFor="nacionality">Nacionalidade</label>
                    <select name="nacionality" id="nacionality">
                        <option value="au">Australia</option>
                        <option value="br">Brasil</option>
                        <option value="ca">Canadá</option>
                        <option value="ch">China</option>
                        <option value="de">Alemanha</option>
                        <option value="dk">Dinamarca</option>
                        <option value="es">Espanha</option>
                        <option value="fi">Finlândia</option>
                        <option value="fr">França</option>
                        <option value="gb">Grã Bretanha</option>
                        <option value="ie">Irlanda</option>
                        <option value="ir">Irã</option>
                        <option value="no">Noruega</option>
                        <option value="nl">Holanda</option>
                        <option value="nz">Nova Zelândia</option>
                        <option value="tr">Turquia</option>
                        <option value="us">Estados Unidos</option>
                    </select>
                </form>
            </Container>
        </div>
    )
}

export default Home
