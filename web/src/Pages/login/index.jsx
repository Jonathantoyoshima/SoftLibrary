import { Button, Input, Wrapper } from 'Styles';
import { InputGroup } from 'Styles/login';

const Login = () => {
	return (
		<Wrapper>
			<InputGroup>
				<label htmlFor='User'>Usuário: </label>
				<Input type='text' id='User' />
			</InputGroup>
			<InputGroup>
				<label htmlFor='pass'>Senha:</label>
				<Input type='password' id='pass' />
			</InputGroup>
			<Button>Login</Button>
		</Wrapper>
	);
};

export default Login;
