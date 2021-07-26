import React from 'react';

import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';

import DefaultTemplate from 'templates/DefaultTemplate';

const HomePage = () => (
	<DefaultTemplate>
		<Heading big>Overview page</Heading>
		<Paragraph>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis hic beatae quas voluptatibus provident.
			Repellat consequatur sint delectus beatae velit autem nostrum nobis ex, voluptates distinctio possimus temporibus
			similique.
		</Paragraph>
		<Button>button</Button>
		<Button alt>alt button</Button>
		<Button href="/">button</Button>
		<Button href="/" alt>
			alt button
		</Button>
		<Input placeholder="Text here" name="sampleinput" id="sampleinput" />
	</DefaultTemplate>
);

export default HomePage;
