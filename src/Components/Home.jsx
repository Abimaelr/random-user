import React, {useContext, useState} from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api';
import Context from '../Context/Context';
import  ListItem  from './ListItem';
function Home() {
    const { users, setUsers } = useContext(Context);

    const [gender, setGender] = useState('');
    const [nacionality, setNacionality] = useState('');
    const [amount, setAmount] = useState('');

    const gerar = (e) => {
        e.preventDefault();
        api.get(`/?nat=${nacionality}&gender=${gender}&results=${amount}`)
        .then(({data}) => {
            console.log(data.results)
            setUsers(data.results);
        }).catch(() => alert('Algo deu errado :('));
    }

    return (
        <div>
            <Container>
                <form>
                    <label htmlFor="qnt">Quantas Pessoas?</label>
                    <input min="1" defaultValue={1} type="number" name="qnt" id="qnt"  onChange={({ target }) => setAmount(target.value)}/>
                    
                    <label htmlFor="gender">Gênero</label>
                    <select name="gender" id="gender" onChange={({ target }) => setGender(target.value)}>
                        <option value="">Todos</option>
                        <option value="male">Homem</option>
                        <option value="mulher">Mulher</option>
                    </select>
                    <label htmlFor="nacionality">Nacionalidade</label>
                    <select name="nacionality" id="nacionality" onChange={ ({ target }) => setNacionality(target.value)}>
                        <option value="">Todas</option>
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
                    <button type="submit" onClick={ (e) => gerar(e) }>Gerar</button>
                </form>
                <div className="userContainer">
                    { users.map(({name, dob, nat, picture}, i) => <Link to={`/user/${i}`}>
                        <ListItem
                            name={name} age={dob.age} nacionality={nat} thumb={picture.thumbnail}
                        />
                    </Link>
                         
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Home
