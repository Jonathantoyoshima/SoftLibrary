import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Styles';
import Login from './index';

test('Render Build Login Snapshot', () => {
	const component = renderer.create(
		<ThemeProvider theme={theme}>
			<Login />
		</ThemeProvider>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});