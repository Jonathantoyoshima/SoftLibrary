import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Styles';
import Library from './index';

test('Render Build Library Snapshot', () => {
	const component = renderer.create(
		<ThemeProvider theme={theme}>
			<Library />
		</ThemeProvider>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
